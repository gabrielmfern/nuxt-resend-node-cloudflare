import { Resend } from 'resend';

export default defineEventHandler(async () => {
  const resend = new Resend('re_5xwb3n45_BFsuQHuJM8ZqBDR1iu695dxW');
  return await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: ['delivered@resend.dev'],
    subject: 'Hello from Resend!',
    html: '<strong>It works!</strong>',
  });
})

