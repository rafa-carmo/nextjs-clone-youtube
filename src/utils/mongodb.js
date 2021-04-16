import { MongoClient } from 'mongodb'
const uri = "mongodb://127.0.0.1:27017/" //process.env.MONGODB_URI
const dbName = "config"//process.env.MONGODB_DB

let cachedClient
let cachedDb
if(!uri) {
  throw new Error(
    "Please define the MongoDb_uri environment variable inside .env.local"
  )
}

if(!dbName) {
  throw new Error(
    "Please define the MongoDb_db environment variable inside .env.local"
  )
}

export async function connectToDatabase(){
  if(cachedClient && cachedClient){
    return {client: cachedClient, db: cachedDb}
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  const db = await client.db(dbName)

  cachedClient = client
  cachedDb = db

  return {client,db }
}

export default connectToDatabase