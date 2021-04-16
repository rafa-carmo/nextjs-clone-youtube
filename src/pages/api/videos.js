import { ObjectId } from 'mongodb'
import nc from 'next-connect'
import connectToDatabase from 'src/utils/mongodb'
import upload from 'src/utils/upload'

const handler = nc()
.use(upload.single('file'))
.post(async(req,res) => {
   

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
