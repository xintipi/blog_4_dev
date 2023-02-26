const controller = require('../../controlers/tagController.js')

const handler = async (req: any, res: any) => {
  try {
    const tags = await controller.getTagList()
    res.status(200).json(tags)
  } catch (error) {
    res.status(500).json({ errors: error })
  }
}

export default handler
