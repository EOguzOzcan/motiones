import type { NextApiRequest, NextApiResponse } from "next"
import { EmailTemplate } from "../../components/email-template"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data: contactInfo } = JSON.parse(req.body)
    const data = await resend.emails.send({
      from: "sales@arcglobalchain.com",
      to: contactInfo.to,
      subject: "Hello world",
      text: "Plain text version of your email",
      react: EmailTemplate({ firstName: contactInfo.name })
    })

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
