import emailjs from 'emailjs-com';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_q2de3vt',
    'template_s4w70g2',
    e.target,
    'user_xxxxxxxx'
  ).then(
    (result) => {
      console.log('Email sent:', result.text);
    },
    (error) => {
      console.log('Error:', error.text);
    }
  );
};
