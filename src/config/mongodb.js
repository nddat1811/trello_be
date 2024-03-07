const { MongoClient, ServerApiVersion } = require('mongodb')
const MONGO_URI = 'mongodb+srv://admin:admin@datnddev.rsuqadv.mongodb.net/?retryWrites=true&w=majority&appName=DatndDEV'

let trelloDatabaseInstance = null

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClientInstance = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()
  trelloDatabaseInstance = mongoClientInstance.db('trello')
}
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first')
  return trelloDatabaseInstance
}
export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}