const controller = require('../../controlers/projectController.js')

const handler = async (req: any, res: any) => {
  const { tag } = req.query
  try {
    const projects = await controller.getProjectList(tag)
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ errors: error })
  }
}

export default handler
