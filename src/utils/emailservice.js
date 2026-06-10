import emailjs from '@emailjs/browser';

const sendEmail = async () => {
  await emailjs.send(
    'SERVICE_ID',
    'TEMPLATE_ID',
    {
      from_name: name,
      from_email: email,
      subject,
      message,
    },
    'PUBLIC_KEY'
  );

  alert('Message sent successfully!');
};