/* =========================================
   EL GRAN POZO AZUFRADO
   JAVASCRIPT PREMIUM
========================================= */


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(6,44,48,0.95)";
        navbar.style.padding = "14px 8%";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    }else{

        navbar.style.background = "rgba(255,255,255,.08)";
        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow = "none";

    }

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const reveals = document.querySelectorAll('.card, .service-card, .gallery-grid img');

function revealOnScroll(){

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add('active-reveal');

        }

    });

}

window.addEventListener('scroll', revealOnScroll);


/* =========================================
   GALLERY LIGHTBOX
========================================= */

const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach((img) => {

    img.addEventListener('click', () => {

        const lightbox = document.createElement('div');

        lightbox.id = 'lightbox';

        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0,0,0,.92)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.zIndex = '99999';
        lightbox.style.cursor = 'zoom-out';
        lightbox.style.padding = '20px';

        const image = document.createElement('img');

        image.src = img.src;

        image.style.maxWidth = '90%';
        image.style.maxHeight = '90%';
        image.style.borderRadius = '20px';
        image.style.boxShadow = '0 20px 60px rgba(0,0,0,.5)';
        image.style.animation = 'zoom .4s ease';

        lightbox.appendChild(image);

        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });

    });

});


/* =========================================
   SMOOTH ACTIVE MENU
========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((a) => {

        a.classList.remove("active-link");

        if(a.getAttribute("href").includes(current)){

            a.classList.add("active-link");

        }

    });

});


/* =========================================
   FLOATING BUTTON EFFECT
========================================= */

const floatingButtons = document.querySelectorAll('.floating-buttons a');

floatingButtons.forEach((btn) => {

    btn.addEventListener('mouseenter', () => {

        btn.style.transform = 'translateY(-8px) scale(1.1)';

    });

    btn.addEventListener('mouseleave', () => {

        btn.style.transform = 'translateY(0) scale(1)';

    });

});


/* =========================================
   HERO PARALLAX EFFECT
========================================= */

window.addEventListener('scroll', () => {

    const hero = document.querySelector('.hero');

    let scrollPosition = window.pageYOffset;

    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';

});


/* =========================================
   LOADER ANIMATION
========================================= */

window.addEventListener("load", () => {

    const loader = document.createElement("div");

    loader.id = "page-loader";

    loader.innerHTML = `
    
    <div class="loader-content">
        <div class="loader-circle"></div>
        <h2>El Gran Pozo Azufrado</h2>
    </div>

    `;

    document.body.appendChild(loader);

    loader.style.position = "fixed";
    loader.style.top = "0";
    loader.style.left = "0";
    loader.style.width = "100%";
    loader.style.height = "100vh";
    loader.style.background = "#062c30";
    loader.style.display = "flex";
    loader.style.justifyContent = "center";
    loader.style.alignItems = "center";
    loader.style.zIndex = "999999";
    loader.style.transition = "opacity .8s ease";

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 800);

    }, 1500);

});


/* =========================================
   TYPEWRITER EFFECT
========================================= */

const heroTitle = document.querySelector('.hero h1');

const originalText = heroTitle.innerHTML;

heroTitle.innerHTML = '';

let i = 0;

function typingEffect(){

    if(i < originalText.length){

        heroTitle.innerHTML += originalText.charAt(i);

        i++;

        setTimeout(typingEffect, 40);

    }

}

window.addEventListener('load', typingEffect);


/* =========================================
   ADDITIONAL DYNAMIC CSS
========================================= */

const style = document.createElement('style');

style.innerHTML = `

.active-reveal{

    animation:fadeReveal 1s ease forwards;

}

@keyframes fadeReveal{

    from{
        opacity:0;
        transform:translateY(40px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }

}

#lightbox img{

    animation:zoom .4s ease;

}

@keyframes zoom{

    from{
        transform:scale(.7);
        opacity:0;
    }

    to{
        transform:scale(1);
        opacity:1;
    }

}

.active-link{

    color:#d4a373 !important;

}

.loader-content{

    text-align:center;
    color:white;

}

.loader-circle{

    width:90px;
    height:90px;
    border:5px solid rgba(255,255,255,.2);
    border-top:5px solid #14b8a6;
    border-radius:50%;
    margin:auto;
    margin-bottom:25px;

    animation:spin 1s linear infinite;

}

@keyframes spin{

    100%{
        transform:rotate(360deg);
    }

}

.loader-content h2{

    font-size:2rem;
    letter-spacing:2px;

}

`;

document.head.appendChild(style);


/* =========================================
   CONSOLE BRANDING
========================================= */

console.log(`
🌿 EL GRAN POZO AZUFRADO
Sitio Premium Turístico
Desarrollado con experiencia profesional
`);
const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".menu-card, .cold-card");

buttons.forEach(btn => {

btn.addEventListener("click", () => {

buttons.forEach(b => b.classList.remove("active"));
btn.classList.add("active");

const filter = btn.dataset.filter;

items.forEach(item => {

if(filter === "all"){
item.style.display = "block";
} else {
item.style.display = item.classList.contains(filter) ? "block" : "none";
}

});

});

});
let count = 0;

const buttonsCart = document.querySelectorAll(".btn-order");

buttonsCart.forEach(btn => {

btn.addEventListener("click", () => {
count++;
document.getElementById("cart-count").innerText = count;
});

});
/* ============================
   ESTADO RESERVAS
============================ */

let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

/* ============================
   ELEMENTOS
============================ */

const form = document.getElementById("booking-form");
const list = document.getElementById("reservations-list");

/* ============================
   GUARDAR RESERVA
============================ */

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const reservation = {
    id: Date.now(),
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    date: document.getElementById("date").value,
    people: document.getElementById("people").value,
  };

  reservations.push(reservation);

  localStorage.setItem("reservations", JSON.stringify(reservations));

  form.reset();

  renderReservations();

  alert("✅ Reserva creada correctamente");
});

/* ============================
   MOSTRAR RESERVAS
============================ */

function renderReservations() {
  list.innerHTML = "";

  reservations.forEach((r) => {
    const div = document.createElement("div");
    div.classList.add("reservation-card");

    div.innerHTML = `
      <strong>${r.service}</strong><br>
      👤 ${r.name}<br>
      📞 ${r.phone}<br>
      📅 ${r.date}<br>
      👥 ${r.people} personas
    `;

    list.appendChild(div);
  });
}

renderReservations();

/* ============================
   ELIMINAR RESERVA (CLICK)
============================ */

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("reservation-card")) {
    const index = Array.from(list.children).indexOf(e.target);

    reservations.splice(index, 1);

    localStorage.setItem("reservations", JSON.stringify(reservations));

    renderReservations();
  }
   
});
const platos = document.querySelectorAll(".plato");

document.getElementById("btn-todo").addEventListener("click", () => {
    platos.forEach(plato => {
        plato.style.display = "block";
    });
});

document.getElementById("btn-comidas").addEventListener("click", () => {
    platos.forEach(plato => {
        plato.style.display =
            plato.dataset.categoria === "comidas" ? "block" : "none";
    });
});

document.getElementById("btn-bebidas").addEventListener("click", () => {
    platos.forEach(plato => {
        plato.style.display =
            plato.dataset.categoria === "bebidas" ? "block" : "none";
    });
});
