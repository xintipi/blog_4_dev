const moduleTo = require('./client')

exports.getLanguageList = async () => {
  const res = await moduleTo.client.databases.query({
    database_id: process.env.NEXT_PUBLIC_DATABASE_LANGUAGE_ID,
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'ascending',
      },
    ],
  })

  function _validPageObject(pageObject) {
    return pageObject.properties
  }

  function _transformData(pageObject) {
    const prop = pageObject.properties

    return {
      id: pageObject.id,
      source_target: prop.Source.url,
      title: prop.Title.rich_text[0].plain_text,
      path_img: prop.Image.url,
    }
  }

  return res.results
    .filter((pageObject) => _validPageObject(pageObject))
    .map((pageObject) => _transformData(pageObject))
}
