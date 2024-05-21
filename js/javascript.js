document.addEventListener("DOMContentLoaded", function(){

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

// tabs experiencia

// Función para mostrar el contenido de una pestaña y activarla
function openTab(tabName) {
	var i, tabcontent, tablinks;
  
	// Ocultar todo el contenido de las pestañas
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Desactivar todas las pestañas
	tablinks = document.getElementsByClassName("tabs-tablink__tablink");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Mostrar el contenido de la pestaña seleccionada y activarla
	document.getElementById(tabName).style.display = "block";
	document.getElementById(tabName + "Btn").className += " active";
  }
  
  // Asignar eventos de clic a los botones de los tabs
  document.getElementById("tab1Btn").addEventListener("click", function() {
	openTab("tab1");
  });
  document.getElementById("tab2Btn").addEventListener("click", function() {
	openTab("tab2");
  });
  
  // Por defecto, mostrar la primera pestaña al cargar la página
  openTab("tab1");




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




 const acordeonItems = document.querySelectorAll(".acordeon-item");

 acordeonItems.forEach(item => {
	const header = item.querySelector(".acordeon-header");
	const content = item.querySelector(".acordeon-content");

	header.addEventListener("click", () => {
		const isOpen = item.classList.contains("active");

		acordeonItems.forEach(item => {
			item.classList.remove("active");
			item.querySelector(".acordeon-content").style.display = "none";
			console.log("se cerro");
		});

		if (!isOpen){
			item.classList.add("active");
			content.style.display = "block";
		}
	});
 });

//owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
	margin: 10,
	autoWidth:true,
	nav: true, // Desactiva los controles de navegación predeterminados
//   // Agrega tus propias clases de navegación personalizadas
//   navContainer: '.custom-nav',
  navText: ["<img src='img/left-arrow.svg' alt=''>", "<img src='img/right-arrow.svg' alt=''>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
});


lightGallery(document.getElementById('lightgallery'), {
	selector: '.card-group-card__img a',
	thumbnail:true,
	controls: true,
	download: true,
});

lightGallery(document.getElementById('lightgallery2'), {
	selector: '.card-group-card__img a',
	thumbnail:true,
	controls: true,
	download: true,
});

lightGallery(document.getElementById('lightgallery3'), {
	selector: '.card-group-card__img a',
	thumbnail:true,
	controls: true,
	download: true,
});
lightGallery(document.getElementById('lightgallery4'), {
	selector: '.card-group-card__img a',
	thumbnail:true,
	controls: true,
	download: true,
});

});