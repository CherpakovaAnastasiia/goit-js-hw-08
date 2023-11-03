import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
  const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}, 500);

window.addEventListener('load', () => {
  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const feedbackFormState = JSON.parse(storedState);
    emailInput.value = feedbackFormState.email;
    messageInput.value = feedbackFormState.message;
  }
});

emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (emailValue && messageValue) {
    const feedbackFormState = {
      email: emailValue,
      message: messageValue,
    };

    console.log(feedbackFormState);

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  } else {
    alert('Please fill in both email and message fields.');
  }
});
