import Email from '../../configs/smtp';
import { clientStore } from '../store';
import { toast } from 'react-toastify';

export const sendContact = (dataContact, resetStateContact) => {
  clientStore.dispatch({
    type: 'FETCHING',
    payload: { waiting: true, type: ['sendContact'] },
  });
  Email.send({
    Host: process.env.NEXT_PUBLIC_SMTP_HOST,
    Username: process.env.NEXT_PUBLIC_SMTP_AUTH_USER,
    Password: process.env.NEXT_PUBLIC_SMTP_AUTH_PASS,
    To: process.env.NEXT_PUBLIC_EMAIL_CONTACT,
    From: dataContact.email,
    Subject: dataContact.subject,
    Body: `<p>Name : ${dataContact.name}</p><p>Message: ${dataContact.message}</p>`,
  })
    .then((e) => {
      clientStore.dispatch({
        type: 'FETCHING',
        payload: { waiting: false, type: [] },
      });
      toast.success('Successfully sent message.');
      resetStateContact();
    })
    .catch((error) => {
      toast.warn('Failed to send message.');
      console.log(error);
    });
};
