import nodemailer from 'nodemailer';

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Premium HTML Email Template for Admin (You)
    const adminMailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact Message from ${name}`,
      html: `
        <div style="font-family: 'Inter', Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
          <div style="background: linear-gradient(135deg, #8b5cf6, #06b6d4); padding: 30px; text-align: center;">
            <h2 style="color: white; margin: 0; font-weight: 700; font-size: 24px;">New Message</h2>
          </div>
          <div style="padding: 30px; background-color: white;">
            <div style="margin-bottom: 24px;">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; font-weight: 600;">Sender Details</p>
              <p style="margin: 0 0 4px 0; color: #111827; font-size: 16px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0; color: #111827; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
            </div>
            <div>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; font-weight: 600;">Message</p>
              <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; color: #374151; font-size: 15px; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #9ca3af; font-size: 12px;">Received on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Auto Reply Template for Sender (User)
    const userMailOptions = {
      from: `"Abirajh Amarasingam" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out!`,
      html: `
        <div style="font-family: 'Inter', Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 30px;">
          <h2 style="color: #111827; margin-top: 0;">Hi ${name},</h2>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
            Thank you for reaching out through my portfolio! I've received your message and will get back to you as soon as possible.
          </p>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
            Here is a copy of your message:
          </p>
          <blockquote style="border-left: 4px solid #8b5cf6; margin: 0; padding-left: 16px; color: #6b7280; font-style: italic;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-top: 24px;">
            Best regards,<br>
            <strong>Abirajh Amarasingam</strong>
          </p>
        </div>
      `,
    };

    // Send emails concurrently
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
};
