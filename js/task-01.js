// const itemsByClass = document.querySelectorAll(".item");

// const quantityItemsByClass = itemsByClass.length;
// console.log(Number of categories: ${quantityItemsByClass});

// itemsByClass.forEach((element) => {
//   console.log(Category: ${element.firstElementChild.textContent});
//   const itemsiInCategory = element.querySelectorAll("li");
//   console.log(Elements: ${itemsiInCategory.length});
// });
const itemsEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemsEl.length);
itemsEl.forEach(myFunction);
function myFunction(category) {
	const categoryTitleEl = category.firstElementChild;
	console.log('Category:', categoryTitleEl.textContent);
	const categoryListEl = categoryTitleEl.nextElementSibling;
	console.log('Elements:', categoryListEl.childElementCount);
}
