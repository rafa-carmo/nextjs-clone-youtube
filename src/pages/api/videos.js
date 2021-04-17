import { ObjectId } from 'mongodb'
import nc from 'next-connect'
import connectToDatabase from 'src/utils/mongodb'
import upload from 'src/utils/upload'
import jwt from 'next-auth/jwt'

const secret = process.env.JWT_SECRET

const handler = nc()
.use(upload.single('file'))
.post(async(req,res) => {
   
  const token = await jwt.getToken({req, secret})


  if (token) {
    const { title, authorId, authorAvatar, authorName, videoUrl} = req.body
    const { db }  = await connectToDatabase()
    const collection = db.collection('Youtube')
    await collection.insertOne({
      title,
      authorId: ObjectId(authorId),
      authorName,
      authorAvatar,
      views: 0 ,
      thumb: req.file.location,
      videoUrl,
      updateAt: new Date()
  
    })
  
    return res.status(200).json({msg: "Registro adicionado com sucesso"})
    
  }else {
    return res.status(401).end()
  }


})
.patch(async(req, res) => {
  throw new Error("Error")
})

export const config= {
  api:{
    bodyParser: false,
  }
}
export default handler
