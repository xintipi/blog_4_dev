import {
  NEXT_PUBLIC_DATABASE_LANGUAGE_ID,
  NEXT_PUBLIC_NOTION_LANGUAGE_API_SECRET,
} from '@/lib/constants'
import { Languages } from '@/lib/notion/interface'

import * as responses from './response'

const { Client } = require('@notionhq/client')

const client = new Client({
  auth: NEXT_PUBLIC_NOTION_LANGUAGE_API_SECRET,
})

export async function getMyLanguages(): Promise<Languages[]> {
  const res = await client.databases.query({
    database_id: NEXT_PUBLIC_DATABASE_LANGUAGE_ID,
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'ascending',
      },
    ],
  })
  return res.results
    .filter((pageObject: responses.PageObject) => _validPageObject(pageObject))
    .map((pageObject: responses.PageObject) => _transformData(pageObject))
}

function _validPageObject(pageObject: responses.PageObject) {
  return pageObject.properties
}

function _transformData(pageObject: responses.PageObject): Languages {
  const prop = pageObject.properties

  return {
    id: pageObject.id,
    source_target: prop.Source.url as string,
    title: (prop.Title.rich_text as any)[0].plain_text,
    path_img: prop.Image.url as string,
  }
}
