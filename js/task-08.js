const formEl = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');
const formbtnEl = document.querySelector('button');
formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(events) {
	events.preventDefault();
	inputs.forEach((input) => {
		if (input.value.trim() === '') {
			alert('Заповніть всі поля');
		} else {
			const formData = new FormData(events.currentTarget);
			formData.forEach((value, name) => {
				console.log(`${name} - ${value}`);
			});
		}
		formEl.reset();
	});
}
