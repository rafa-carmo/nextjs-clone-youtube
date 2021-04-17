import connectToDatabase from "src/utils/mongodb"

export async function getVideos(){
  const {db} = await connectToDatabase()
  const data = await db.collection('Youtube').find().toArray()

  return data
}


export default getVideos