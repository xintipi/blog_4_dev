const moduleToFetch = require('@/lib/notion/project.js')

const getProjectByTag = moduleToFetch.getProjectByTag

const handler = async (req: any, res: any) => {
  const { tag } = req.query
  try {
    let response
    if (!tag) response = await getProjectByTag()
    if (tag) response = await getProjectByTag(tag)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ errors: error })
  }
}

export default handler
