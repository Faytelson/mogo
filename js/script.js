// themes
let body = document.querySelector('.main_page');
let button = document.querySelector('.btn');

button.onclick = function () {
	body.classList.toggle('light-theme');
	body.classList.toggle('dark-theme');
}
// form_submit
let message = document.querySelector('.subscription_message');
let form = document.querySelector('.subscribe_form');
let input = document.querySelector('input');


form.onsubmit = function (evt) {
	message.textContent = 'Адрес ' + input.value + ' добавлен!';
	evt.preventDefault();
}
// likes
let hearts = document.querySelectorAll('.heart');

for (const heart of hearts) {
	heart.addEventListener('click', function () {
		let span = this.querySelector('.stat_item');
		if (heart.classList.contains('added')) {
			span.innerHTML--;
		} else {
			span.innerHTML++;
		}
		heart.classList.toggle('added');
	})
}

// heart.onclick = function () {
// 	if (heart.classList.contains('added')) {
// 		likes.textContent--;
// 	} else {
// 		likes.textContent++;
// 	}
// 	heart.classList.toggle('added');
// }


// accordion
let items = document.querySelectorAll('.accordion_item_header');

for (let item of items) {
	item.addEventListener('click', function () {
		item.parentNode.classList.toggle('active');
	})
}