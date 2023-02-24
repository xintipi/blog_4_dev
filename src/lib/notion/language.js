const moduleTo = require('./client')

exports.getLanguageList = async () => {
  return await moduleTo.clientLanguage.databases.query({
    database_id: process.env.NEXT_PUBLIC_DATABASE_LANGUAGE_ID,
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'ascending',
      },
    ],
  })
}
