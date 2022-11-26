const refs = {
  input: document.querySelector('input[id="name-input"]'),
  span: document.querySelector('span[id="name-output"]'),
};
refs.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  if (refs.input.value !== "") {
    refs.span.textContent = event.currentTarget.value;
    console.log(refs.span.textContent);
  } else {
    refs.span.textContent = "Anonymous";
  }
}
