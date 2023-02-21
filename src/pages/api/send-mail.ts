const { OAuth2Client } = require('google-auth-library')
const nodemailer = require('nodemailer')

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const handler = async (req: any, res: any) => {
  const GOOGLE_MAILER_CLIENT_ID =
    '910554315803-2nancbcpjvpv4g52erboq3c5hl1mu9dm.apps.googleusercontent.com'
  const GOOGLE_MAILER_CLIENT_SECRET = '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'
  const GOOGLE_MAILER_REFRESH_TOKEN =
    '1//048kKC2DuULYUCgYIARAAGAQSNwF-L9IrczX5NAW0Pn_vCMxkAr6jhVLgRnMJK2WpANMkmrNd6VGuUR31LE-hmXriK0L5Y9VFRrE'
  const ADMIN_EMAIL_ADDRESS = 'huutrung.mmt@gmail.com'
  const myOAuth2Client = new OAuth2Client(GOOGLE_MAILER_CLIENT_ID, GOOGLE_MAILER_CLIENT_SECRET)

  myOAuth2Client.setCredentials({
    refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
  })

  try {
    const { mail, name, question } = JSON.parse(req.body)

    if (!mail || !name || !question) return res.status(400).json({ message: 'Invalid request' })

    const myAccessTokenObject = await myOAuth2Client.getAccessToken()
    const myAccessToken = myAccessTokenObject?.token
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: ADMIN_EMAIL_ADDRESS,
        clientId: GOOGLE_MAILER_CLIENT_ID,
        clientSecret: GOOGLE_MAILER_CLIENT_SECRET,
        refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
        accessToken: myAccessToken,
      },
    })
    const mailOptions = {
      from: {
        name: `${capitalizeFirstLetter(name)} <${mail}>`,
        address: mail,
      },
      to: 'trungnh957@gmail.com',
      subject: 'GETTING IN TOUCH',
      text: question,
    }
    await transport.sendMail(mailOptions)
    res.status(200).json({ message: 'Email sent successfully.' })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
}

export default handler
