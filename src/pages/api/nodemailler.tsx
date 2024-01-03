import nodemailer from "nodemailer"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const companyEmail = "testbordro@outlook.com" // Change this to your company's email address

  // Get the raw string from the request body
  const { data: body } = JSON.parse(req.body)

  // Extract values from the parsed JSON
  const from = body.to
  const name = body.name
  const message = body.message

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // Outlook SMTP server
    port: 587, // Outlook SMTP port (587 for STARTTLS or 465 for SSL/TLS)
    secure: false, // true for 465, false for other ports
    requireTLS: true, // Force TLS
    auth: {
      user: companyEmail, // Your Outlook email address
      pass: "Meyhane8112" // Your Outlook password
    }
  })

  try {
    const mail = await transporter.sendMail({
      from: companyEmail,
      to: companyEmail, // Send the email to your company's email address
      subject: `Message from ${name}`,
      html: `
      <p>Email: ${from} </p>
        <p>Name: ${name} </p>
        <p>Message: ${message} </p>
      `
    })

    res.status(200).json(mail)
  } catch (error) {
    console.log("error", error)
    res.status(400).json(error)
  }
}
