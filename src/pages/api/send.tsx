import type { NextApiRequest, NextApiResponse } from "next"
import { EmailTemplate } from "../../components/email-template"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = JSON.parse(req.body)
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Hello world",
      text: "Plain text version of your email",
      react: EmailTemplate({ firstName: email })
    })

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
