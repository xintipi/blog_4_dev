const { Client } = require('@notionhq/client')

exports.clientLanguage = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_LANGUAGE_API_SECRET,
})

exports.clientProject = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_PROJECT_API_SECRET,
})
