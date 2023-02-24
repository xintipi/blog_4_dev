const moduleTo = require('./client')

exports.getProjectByTag = async (tag) => {
  if (tag === 'all' || tag === undefined) return await getAllProject()
  return await moduleTo.clientProject.databases.query({
    database_id: process.env.NEXT_PUBLIC_DATABASE_PROJECT_ID,
    filter: {
      property: 'Tag',
      rich_text: {
        equals: tag,
      },
    },
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'ascending',
      },
    ],
  })
}

async function getAllProject() {
  return await moduleTo.clientProject.databases.query({
    database_id: process.env.NEXT_PUBLIC_DATABASE_PROJECT_ID,
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'ascending',
      },
    ],
  })
}
