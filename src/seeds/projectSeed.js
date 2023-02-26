const ProjectModel = require('../models/projectModel')
const TagModel = require('../models/tagModel')
const ObjectId = require('mongodb').ObjectId

exports.seeder = async () => {
  await ProjectModel.deleteMany()
  await ProjectModel.insertMany([
    {
      tagId: '5f9f1b0b0b1b1b1b1b1b1b1b',
      projectName: 'PG Game',
      tagName: 'applications',
      description: `I'm going to work with the HTML5 canvas and Javascript to create a dynamic run car game. 
    Player use the mouse or finger to drag the directions which you want. 
    The result a car will follow directions that you drawed.`,
      thumbnail: 'https://i.ibb.co/HgG99mg/portfolio-1.png',
      altThumbnail: 'PG Game',
      preview: '',
    },
    {
      tagId: '5f9f1b0b0b1b1b1b1b1b1b1b',
      projectName: 'Math Game',
      tagName: 'applications',
      description: `I'm going to work with the HTML5 canvas and Javascript (EaselJS) to create a dynamic clock game. 
    Player use the mouse or finger to drag the clockwise to the correct position. 
    The result a clock will show off correct time.`,
      thumbnail: 'https://i.ibb.co/41jdw4R/math-content.png',
      altThumbnail: 'Math Game',
      preview: '',
    },
    {
      tagId: '5f9f1b0b0b1b1b1b1b1b1b1b',
      projectName: 'Rainy mood',
      tagName: 'applications',
      description: `I'm going to work with the HTML5 canvas and Javascript to create a animated rain. Enter my website, you can see the rain is falling down.`,
      thumbnail: 'https://i.ibb.co/1qJtqFg/rainy.png',
      altThumbnail: 'Rainy mood',
      preview: 'https://rainymood.xyz/',
    },
    {
      tagId: '5f9f1b0b0b1b1b1b1b1b1b1b',
      projectName: 'Personal Website',
      tagName: 'frameworks',
      description: `This is still a work in progress, I'm working with Next and SEO friendly. This is a portfolio's website. 
    Once you enter it, you will see a simple website with a few pages, including descriptionribe my skills.`,
      thumbnail: 'https://i.ibb.co/gb11TQh/personal.png',
      altThumbnail: 'Personal Website',
      preview: 'https://xintipi.xyz',
    },
  ])

  const applications = await TagModel.findOne({ name: 'applications' })
  const frameworks = await TagModel.findOne({ name: 'frameworks' })
  await ProjectModel.findOneAndUpdate(
    { projectName: 'PG Game' },
    { tagId: new ObjectId(applications.tagId) },
    {
      new: true,
      upsert: true, // Make this update into an upsert
    }
  )
  await ProjectModel.findOneAndUpdate(
    { projectName: 'Math Game' },
    { tagId: new ObjectId(applications.tagId) },
    {
      new: true,
      upsert: true, // Make this update into an upsert
    }
  )
  await ProjectModel.findOneAndUpdate(
    { projectName: 'Rainy mood' },
    { tagId: new ObjectId(applications.tagId) },
    {
      new: true,
      upsert: true, // Make this update into an upsert
    }
  )
  await ProjectModel.findOneAndUpdate(
    { projectName: 'Personal Website' },
    { tagId: new ObjectId(frameworks.tagId) },
    {
      new: true,
      upsert: true, // Make this update into an upsert
    }
  )
  console.log('All projects are added.')
}
