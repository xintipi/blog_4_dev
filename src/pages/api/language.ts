const controller = require('../../controlers/languageController.js')

const handler = async (req: any, res: any) => {
  try {
    const languages = await controller.getLanguageList()
    res.status(200).json(languages)
  } catch (error) {
    res.status(500).json({ errors: error })
  }
}

export default handler
