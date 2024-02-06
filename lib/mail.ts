import { Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail (email: string, token: string){
  const confirmLink = `http://fshou.my:3000/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm Your Email",
    html: `<p> Click <a href="${confirmLink}"> Here </a> to verify your email </p>` 
  });

}
