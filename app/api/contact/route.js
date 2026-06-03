import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request) {
  try {
    const { name, email, eventType, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "SinghLens Photography <onboarding@resend.dev>",
      to: ["sidkaint30@gmail.com"],
      subject: `New ${eventType} Inquiry from ${name}`,
      html: `
  <div style="font-family: Arial, sans-serif; background-color: #0f0f0f; padding: 40px; color: #ffffff;">
    
    <div style="max-width: 600px; margin: auto; background-color: #18181b; border-radius: 16px; overflow: hidden; border: 1px solid #27272a;">
      
      <div style="background-color: #f59e0b; padding: 24px; text-align: center;">
        <h1 style="margin: 0; color: #000000; font-size: 28px;">
          New Photography Inquiry
        </h1>
      </div>

      <div style="padding: 32px;">

        <p style="font-size: 16px; color: #d4d4d8; margin-bottom: 24px;">
          You received a new contact form submission from your website.
        </p>

        <div style="margin-bottom: 20px;">
          <p style="margin: 0; color: #a1a1aa; font-size: 14px;">Name</p>
          <p style="margin-top: 6px; font-size: 18px; color: #ffffff;">
            ${name}
          </p>
        </div>

        <div style="margin-bottom: 20px;">
          <p style="margin: 0; color: #a1a1aa; font-size: 14px;">Email</p>
          <p style="margin-top: 6px; font-size: 18px; color: #ffffff;">
            ${email}
          </p>
        </div>

        <div style="margin-bottom: 20px;">
          <p style="margin: 0; color: #a1a1aa; font-size: 14px;">Event Type</p>
          <p style="margin-top: 6px; font-size: 18px; color: #ffffff;">
            ${eventType}
          </p>
        </div>

        <div style="margin-top: 30px;">
          <p style="margin: 0 0 12px 0; color: #a1a1aa; font-size: 14px;">
            Message
          </p>

          <div style="background-color: #27272a; padding: 20px; border-radius: 12px; color: #e4e4e7; line-height: 1.7;">
            ${message}
          </div>
        </div>

      </div>

      <div style="padding: 20px; text-align: center; border-top: 1px solid #27272a; color: #71717a; font-size: 13px;">
        SinghLens Photography • Winnipeg
      </div>

    </div>
  </div>
`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

