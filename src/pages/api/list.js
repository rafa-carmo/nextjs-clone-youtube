import connectToDatabase from 'src/utils/mongodb'

const list= async (req, res) => {
  const { db }  = await connectToDatabase()
  const collection = db.collection('Youtube')
  console.log(collection)
  data = collection.find({})
  return res.status(200).json({data})
}

export default list