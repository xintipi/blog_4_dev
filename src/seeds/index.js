const mongooseDb = require('../lib/mongoose')
const languageSeeder = require('./languageSeed')
const tagSeeder = require('./tagSeed')
const projectSeeder = require('./projectSeed')

const load = async () => {
  const client = await mongooseDb
  await client.connect()
  try {
    await languageSeeder.seeder()
    await tagSeeder.seeder()
    await projectSeeder.seeder()

    process.exit()
  } catch (error) {
    console.log(error)
    process.exit()
  } finally {
    await client.close()
  }
}

load().then((r) => r)
