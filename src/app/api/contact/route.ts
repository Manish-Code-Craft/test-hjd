import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { phone, name, email, message, subject } = await req.json();

    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `${name} <${email}>`,
      to: 'amikhinda11@gmail.com',
      subject: `${name} - Enquiry - ${subject}`,
      text: message,
      html: `Hello Aagas Saloon Team,<br><br>
      Enquiry From: <b>${name}</b><br><br>
      Contact Number: <b>${phone}</b><br><br>
      Email: <b>${email}</b><br><br>
      Subject: <b>${subject}</b><br><br>
      Message:<br><b>${message}</b><br><br><br><br>
      <b style="color:green">Best Regards</b><br>${name}<br><br>
      Page Link: <b>${req.headers.get('referer')}</b>`
    });

    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ status: 'error', message: 'Failed to send email' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}