var clicker = {};
clicker.base = document.querySelector('.clicker');
clicker.halo = document.querySelector('.clicker-halo');
clicker.message = document.querySelector('.message-ee');
clicker.number = document.querySelector('.counter-number');
clicker.elem_message = document.querySelector('.message-ee .message-text');
var number_clicker = 0;

clicker.base.addEventListener('click', function(){
	clicker.halo.classList.add('clicker-halo-on');
	window.setTimeout(function(){
		clicker.halo.classList.add('display-none');
		clicker.halo.classList.remove('clicker-halo-on');
		window.setTimeout(function(){
			if (clicker.halo.classList.contains('display-none') == true){
				clicker.halo.classList.remove('display-none');
			}
		}, 10);
	}, 500);
	number_clicker += 1;
	clicker.number.innerText = number_clicker;
	if (number_clicker == 10) {
		clicker.elem_message.innerText = "Keep Plantin !";
		clicker.message.classList.add('message-ee-active');
		window.setTimeout(function(){
			clicker.message.classList.remove('message-ee-active');
		}, 1000);
	}
	if (number_clicker == 20) {
		clicker.elem_message.innerText = "Unstoppable !";
		clicker.message.classList.add('message-ee-active');
		window.setTimeout(function(){
			clicker.message.classList.remove('message-ee-active');
		}, 1000);
	}
	if (number_clicker == 30) {
		clicker.elem_message.innerText = "Keep Goin !";
		clicker.message.classList.add('message-ee-active');
		window.setTimeout(function(){
			clicker.message.classList.remove('message-ee-active');
		}, 1000);
	}
});
