const counter = {
  value: 0,
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('span[id="value"]');
incrementBtn.addEventListener("click", function () {
  console.log("click");
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.value;
});
decrementBtn.addEventListener("click", function () {
  console.log("click");
  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.value;
});
