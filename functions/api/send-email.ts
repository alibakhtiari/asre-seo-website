import { Resend } from 'resend';

interface EmailEnv { RESEND_API_KEY: string }
export const onRequestPost = async (context: { request: Request; env: EmailEnv }) => {
    const { request, env } = context;

    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const service = formData.get('service') as string;
        const message = formData.get('message') as string;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'لطفاً تمام فیلدهای اجباری را پر کنید.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const resend = new Resend(env.RESEND_API_KEY);

        const data = await resend.emails.send({
            from: 'Asre SEO Contact Form <onboarding@resend.dev>',
            to: ['info@asreseo.com'],
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
            return new Response(JSON.stringify({ error: data.error.message }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: (error instanceof Error ? error.message : String(error)) || 'Something went wrong' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
