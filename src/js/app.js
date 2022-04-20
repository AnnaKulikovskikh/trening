const subscribeWidget = document.querySelector('[data-widget=suscribe]');
const subscribeForm = subscribeWidget.querySelector('[data-id=suscribe-form]');

subscribeForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const params = new URLSearchParams();
  Array.from(subscribeForm.elements)
    .filter(({ name }) => name)
    .forEach(({ name, value }) => params.append(name, value));
  const url = `http://localhost:7070/?${params}`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  });

  xhr.send();
});
