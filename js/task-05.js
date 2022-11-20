const refs = {
  input: document.querySelector('input[id="name-input"]'),
  span: document.querySelector('span[id="name-output"]'),
};
refs.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  refs.span.textContent = event.currentTarget.value;
}
