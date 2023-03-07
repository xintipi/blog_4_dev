const mongoose = require('mongoose')

module.exports = {
  connect: async (options = {}) => {
    const uri =
      process.env.NODE_ENV !== 'development'
        ? 'mongodb+srv://vercel-admin-user:yylcld8DkJD9ZSa5@cluster0.l2habxs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        : 'mongodb+srv://dblog_db:r7VNqYNHV3RnPHQ3@cluster0.l2habxs.mongodb.net/dblog?retryWrites=true&w=majority'
    const globalAny = global
    let clientPromise

    if (!uri) throw new Error('Please add your Mongo URI to env')

    if (process.env.NODE_ENV === 'development') {
      // In development mode, use a global variable so that the value
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
      if (!globalAny.mongoose) {
        globalAny.mongoose = await mongoose.connect(uri, options)
      }
      clientPromise = await globalAny.mongoose
    } else {
      // In production mode, it's best to not use a global variable.
      clientPromise = await mongoose.connect(uri, options)
    }

    return clientPromise
  },
  close: () => mongoose.connection.close(),
}
