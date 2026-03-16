import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, ...data } = body;

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("Email environment variables not set. Form submission received but email not sent. Check your .env setup.");
      // In development or if not configured, simulate success
      return NextResponse.json({ 
        success: true, 
        message: "Form received (Email sending disabled due to missing config)" 
      }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.hostinger.com", // Fallback to hostinger/common custom domain SMTP
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions;

    switch (formType) {
      case "contact":
        mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `New Contact Form Submission: ${data.subject || "General Inquiry"}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          `,
        };
        break;
      case "career":
        mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `New Career Application: ${data.position} - ${data.name}`,
          html: `
            <h2>New Career Application</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Address:</strong> ${data.address}</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>Postcode:</strong> ${data.postcode}</p>
            <p><strong>Position:</strong> ${data.position}</p>
            <p><strong>Subject:</strong> ${data.subject || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
            <p><i>Note: Resumes/Files attached via form submission will need a more complex setup to attach here. Please check the corresponding storage (if implemented) or request the candidate to email it directly.</i></p>
          `,
        };
        break;
      case "newsletter":
        mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `New Newsletter Subscription`,
          html: `
            <h2>New Newsletter Subscription</h2>
            <p><strong>Email:</strong> ${data.email}</p>
          `,
        };
        break;
      default:
        return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
