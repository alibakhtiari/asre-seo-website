'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return {
            error: 'لطفاً تمام فیلدهای اجباری را پر کنید.'
        };
    }

    try {
        const data = await resend.emails.send({
            from: 'Asre SEO Contact Form <onboarding@resend.dev>',
            to: ['info@asreseo.com'], // Replace with your actual email or use environment variable
            subject: `New Contact Form Submission from ${name}`,
            replyTo: email,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
            html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        });

        if (data.error) {
            return { error: data.error.message };
        }

        return { success: true };
    } catch (error: any) {
        return { error: error.message || 'Something went wrong' };
    }
}
