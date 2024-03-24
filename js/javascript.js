let menu = document.querySelector('.nav .menu-icon');
let navbar = document.querySelector('.nav .navbar');

menu.onclick = () => {
	navbar.classList.toggle('open-menu')
	menu.classList.toggle('move')
};

window.onscroll = () => {
	navbar.classList.remove('open-menu')
	menu.classList.remove('move')
}

var swiper = new Swiper(".reviews-content", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});


/*email js*/
function validate() {
	let name = document.querySelector('.name');
	let email = document.querySelector('.email');
	let msg = document.querySelector('.message');
	let sendBtn = document.querySelector('.send-btn');

	sendBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (name.value == "" || email.value == "" || msg.value == "" ){
			emptyerror();
		}else{
			sendmail(name.value, email.value, msg.value);
			success();
		}
	} );
}

validate();

function sendmail(name, email, msg){
	emailjs.send("service_4s62kpv","template_yd7g9gq",{
		to_name: email,
		from_name: name,
		message: msg,
		});
}

function emptyerror(){
	swal({
		title: "oh noo...",
		text: "fields can not be empty",
		icon: "error",
	  });
}

function success(){
	swal({
		title: "tha´s great",
		text: "all ok",
		icon: "success",
	  });
}

// header background change on scroll

let header = document.querySelector('header');


window.addEventListener('scroll', () => {
	header.classList.toggle('header-active', window.scrollY > 0);
});

//scroll top

let ScrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
	ScrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
});





// tabs portfolio

const pestanas = document.querySelectorAll('.pestanas ul li');
const bloques = document.querySelectorAll('.contenido-pestanas .bloque');


pestanas.forEach(function(tab, tab_index){
	tab.addEventListener('click', function(){
		pestanas.forEach(function(tab){
			tab.classList.remove('btn-activo');
		});

		tab.classList.add('btn-activo');

		bloques.forEach(function(content, content_index){
			if(content_index == tab_index) {
				content.style.display = "block"; 
			} else {
				content.style.display = "none";
			}
		});
	});
});
