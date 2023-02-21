const moduleToFetch = require('@/lib/notion/language.js')

const getLanguageList = moduleToFetch.getLanguageList

const handler = async (req: any, res: any) => {
  try {
    const response = await getLanguageList()
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ errors: error })
  }
}

export default handler
