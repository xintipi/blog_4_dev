const { Client: NotionLanguages } = require('@notionhq/client')

exports.client = new NotionLanguages({
  auth: process.env.NEXT_PUBLIC_NOTION_LANGUAGE_API_SECRET,
})
