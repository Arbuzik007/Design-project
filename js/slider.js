$(document).ready(function(){
	$('.slider').slick({
		arrow:true,//кнопки для перелистывания
		slidesToShow:1,//сколько слайдов мы видим
		slidesToScroll:1,//перелистывается за раз
		speed:1000,//скорость
		easing:'linear',//тип анимации
		infinite:true,//бесконечность слайдов
		initialSlide:0,//с какого слайда начать
		draggable:true,//движение с помощью мышки, когда false на телефоне можно
		swipe: true,//движение с помощью мышки, когда false на телефоне нельзя
		waitForAnimate:true,//если false переключает на каждый клик
	})
});