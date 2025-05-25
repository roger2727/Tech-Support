import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message, phone, preferredContact } = await request.json();
  
  // Validate input
  if (!name || !email || !message) {
    return NextResponse.json({ 
      success: false, 
      error: 'All fields are required' 
    }, { status: 400 });
  }

  try {
    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    // Email options
    const mailOptions = {
      from: `"Lake Mac Tech Support Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nPreferred Contact Method: ${preferredContact}\n\nMessage: ${message}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to send message. Please try again later.' 
    }, { status: 500 });
  }
}