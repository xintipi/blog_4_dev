const mongoose = require('mongoose')

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI

module.exports = {
  connect: async (options = {}) => {
    const uri =
      'mongodb+srv://dblog_db:r7VNqYNHV3RnPHQ3@cluster0.l2habxs.mongodb.net/dblog?retryWrites=true&w=majority'
    const globalAny = global
    let clientPromise

    if (!uri) {
      throw new Error('Please add your Mongo URI to env')
    }

    if (process.env.NODE_ENV === 'development') {
      // In development mode, use a global variable so that the value
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
      if (!globalAny._mongoClientPromise) {
        globalAny._mongoClientPromise = await mongoose.connect(uri, options)
      }
      clientPromise = globalAny._mongoClientPromise
    } else {
      // In production mode, it's best to not use a global variable.
      clientPromise = await mongoose.connect(uri, options)
    }

    return clientPromise
  },
  close: () => mongoose.connection.close(),
}