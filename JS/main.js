// Элементы на странице
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
let imgCount = document.querySelector('#imgCount');

// Для каждого "предмета" слайдера выполнить функцию
sliderItems.forEach(function (slide, index) {
	// Скрываем все слайды, кроме первого
	if(index !== 0) slide.classList.add('hidden');

	// Добавляем индексы
	slide.dataset.index = index;

	// Добавляем data атрибут active для первого / активного слайда
	sliderItems[0].setAttribute('data-active', '');
	imgCount.innerHTML = `Изображение ${+sliderItems[0].dataset.index + 1} из ${sliderItems.length}`;

	// Клик по слайдам
	slide.addEventListener('click', function(){
		showNextSlide('next');
	});
});

// Клик по кнопке "Вперёд"
btnNext.onclick = function () {
	showNextSlide('next');
}

// Клик по кнопке "Назад"
btnPrev.onclick = function () {
	showNextSlide('prev');
}

// Функция для перелистывания слайдов
function showNextSlide(direction){
	
	// Скрываем текущий слайд
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	// Рассчитываем следующий индекс в зависимости от направления движения
	let nextSlideIndex;
	if(direction === 'next'){
		nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
	}else if(direction === 'prev'){
		nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
	}

	// Показываем следующий слайд
	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
	imgCount.innerHTML = `Изображение ${nextSlideIndex+1} из ${sliderItems.length}`;
}