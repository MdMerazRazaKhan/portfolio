import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Trust reverse proxy (e.g. Render, Vercel, Nginx) for accurate IP rate limiting
app.set("trust proxy", 1);

app.use(cors());
app.use(express.json());

// Rate limiting: max 5 requests per 15 minutes per IP address
const messageLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: "Too many messages sent from this IP. Please try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

app.post("/api/send-message", messageLimiter, async (req, res) => {
  const { name, email, subject, message, website } = req.body;

  // Spam protection: honeypot check
  // Screen readers/human users won't fill this field. If it is filled, it's a bot.
  if (website) {
    console.warn("Spam contact attempt blocked (honeypot triggered).");
    // Return 200 to make the bot think it succeeded, preventing it from trying other routes/methods
    return res.status(200).json({ success: true, message: "Spam filtered silently." });
  }

  // Basic presence validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Trim whitespace
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedSubject = subject.trim();
  const trimmedMessage = message.trim();

  // Validate lengths
  if (trimmedName.length < 2 || trimmedName.length > 100) {
    return res.status(400).json({ error: "Name must be between 2 and 100 characters." });
  }
  if (trimmedSubject.length < 3 || trimmedSubject.length > 150) {
    return res.status(400).json({ error: "Subject must be between 3 and 150 characters." });
  }
  if (trimmedMessage.length < 10 || trimmedMessage.length > 5000) {
    return res.status(400).json({ error: "Message must be between 10 and 5000 characters." });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  // HTML sanitization to prevent script injection (e.g. XSS in the email notification client)
  const sanitize = (text) => text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const cleanName = sanitize(trimmedName);
  const cleanEmail = sanitize(trimmedEmail);
  const cleanSubject = sanitize(trimmedSubject);
  const cleanMessage = sanitize(trimmedMessage);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${cleanName}" <${process.env.SMTP_USER}>`, // Send via verified SMTP user
      replyTo: cleanEmail, // User's email goes in replyTo
      to: process.env.EMAIL_TO || "merazrazakhan8240@gmail.com",
      subject: `[Portfolio Contact] ${cleanSubject}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Subject:</strong> ${cleanSubject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f3f4f6; padding: 10px; border-radius: 5px;">${cleanMessage}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
