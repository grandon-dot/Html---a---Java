// =====================================================
// EVALUACIÓN 2 - Clonar el blog con JavaScript Vanilla
// =====================================================
//
// OBJETIVO:
// Recrear, usando SOLO JavaScript, la misma estructura
// que aparece en "blog-original.html".
//
// REGLAS:
// - No puedes escribir HTML directamente en index.html.
// - Debes usar métodos del DOM: createElement, appendChild,
//   textContent, setAttribute, classList, etc.
// - Puedes apoyarte en innerHTML solo si el profesor lo permite.
//
// PISTAS DE COMANDOS QUE NECESITARÁS:
//   document.getElementById("app")
//   document.createElement("tag")
//   elemento.textContent = "..."
//   elemento.classList.add("clase")
//   elemento.setAttribute("href", "#")
//   padre.appendChild(hijo)
//   elemento.addEventListener("click", funcion)
// =====================================================

// Crear HEADER
const header = document.createElement("header");
header.className = "blog-header";
// Creación del elemento y asignación de la clase

const h1 = document.createElement("h1");
h1.textContent = "Mi Blog de Tecnología";
//Genera el titulo principal

const lema = document.createElement("p");
lema.className = "lema";
lema.textContent = "Aprendiendo JavaScript paso a paso";
// Añadir párrafo

const nav = document.createElement("nav");
const ulNav = document.createElement("ul");
["Inicio", "Artículos", "Sobre mí", "Contacto"].forEach(text => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = text;
    li.appendChild(a);
    ulNav.appendChild(li);
});
nav.appendChild(ulNav);
// Crear barra de navegación


header.appendChild(h1);
header.appendChild(lema);
header.appendChild(nav);

// Crear MAIN
const main = document.createElement("main");
main.className = "contenido";
// Crear contenedor principal para artículos y sidebar

const section = document.createElement("section");
section.className = "articulos";
// Crear sección para los artículos


// Función para crear artículos
function crearArticulo(titulo, fecha, contenido) {
    const article = document.createElement("article");
    article.className = "post";

    const h2 = document.createElement("h2");
    h2.textContent = titulo;

    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = fecha;

    const p = document.createElement("p");
    p.textContent = contenido;

    const btn = document.createElement("button");
    btn.className = "btn-leer";
    btn.textContent = "Leer más";

    article.appendChild(h2);
    article.appendChild(meta);
    article.appendChild(p);
    article.appendChild(btn);

    return article;
}
// Función para crear un artículo con su estructura y contenido completo


// Agregar artículos
section.appendChild(crearArticulo(
    "Introducción a JavaScript",
    "Publicado el 01/05/2026 por Profesor",
    "JavaScript es el lenguaje más usado en la web. Permite agregar interactividad a las páginas y modificar el HTML en tiempo real."
));

section.appendChild(crearArticulo(
    "Manipulación del DOM",
    "Publicado el 03/05/2026 por Profesor",
    "El DOM (Document Object Model) es la representación del HTML que JavaScript puede modificar usando métodos como getElementById o querySelector."
));

section.appendChild(crearArticulo(
    "Eventos en JavaScript",
    "Publicado el 05/05/2026 por Profesor",
    "Los eventos permiten responder a acciones del usuario, como clics, teclas o envíos de formularios. Se usan con addEventListener."
));

// Crear SIDEBAR
const aside = document.createElement("aside");
aside.className = "sidebar";

const h3 = document.createElement("h3");
h3.textContent = "Categorías";

const ulAside = document.createElement("ul");
["HTML", "CSS", "JavaScript", "Frameworks"].forEach(cat => {
    const li = document.createElement("li");
    li.textContent = cat;
    ulAside.appendChild(li);
});

aside.appendChild(h3);
aside.appendChild(ulAside);
// Crear el sidebar con categorías y agregarlo al main


// Agregar sección y sidebar al main
main.appendChild(section);
main.appendChild(aside);

// Crear FOOTER
const footer = document.createElement("footer");
footer.className = "blog-footer";

const pFooter = document.createElement("p");
pFooter.innerHTML = "&copy; 2026 Mi Blog - Evaluación 2";
// Crear el footer con el texto de copyright

footer.appendChild(pFooter);

// Agregar todo al body
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild

// 1) Obtener el contenedor principal donde se montará el blog
const app = document.getElementById("app");
// TODO: verifica con console.log(app) que lo encontraste


// =====================================================
// 2) CREAR EL HEADER DEL BLOG
// =====================================================
// Estructura esperada:
// <header class="blog-header">
//   <h1>Mi Blog de Tecnología</h1>
//   <p class="lema">Aprendiendo JavaScript paso a paso</p>
//   <nav>
//     <ul>
//       <li><a href="#">Inicio</a></li>
//       ... (Artículos, Sobre mí, Contacto)
//     </ul>
//   </nav>
// </header>

function crearHeader() {
    // TODO: crear el elemento <header> y agregarle la clase "blog-header"
    // const header = ...

    // TODO: crear el <h1> con el texto "Mi Blog de Tecnología"

    // TODO: crear el <p class="lema"> con el texto "Aprendiendo JavaScript paso a paso"

    // TODO: crear <nav> con un <ul> y un <li><a> por cada item del menú
    // Tip: usa un array y un for / forEach
    // const items = ["Inicio", "Artículos", "Sobre mí", "Contacto"];

    // TODO: agregar header al contenedor app
    // app.appendChild(header);
}


// =====================================================
// 3) CREAR LA SECCIÓN DE ARTÍCULOS
// =====================================================
// Cada artículo (post) tiene:
//   <article class="post">
//     <h2>Título</h2>
//     <p class="meta">Publicado el FECHA por AUTOR</p>
//     <p>Contenido...</p>
//     <button class="btn-leer">Leer más</button>
//   </article>

// Datos de los posts (úsalos tal cual)
const posts = [
    {
        titulo: "Introducción a JavaScript",
        fecha: "01/05/2026",
        autor: "Profesor",
        contenido: "JavaScript es el lenguaje más usado en la web. Permite agregar interactividad a las páginas y modificar el HTML en tiempo real."
    },
    {
        titulo: "Manipulación del DOM",
        fecha: "03/05/2026",
        autor: "Profesor",
        contenido: "El DOM (Document Object Model) es la representación del HTML que JavaScript puede modificar usando métodos como getElementById o querySelector."
    },
    {
        titulo: "Eventos en JavaScript",
        fecha: "05/05/2026",
        autor: "Profesor",
        contenido: "Los eventos permiten responder a acciones del usuario, como clics, teclas o envíos de formularios. Se usan con addEventListener."
    }
];

function crearArticulos() {
    // TODO: crear el <main class="contenido">

    // TODO: crear la <section class="articulos">

    // TODO: recorrer el array "posts" y por cada uno crear un <article>
    //       con su <h2>, <p class="meta">, <p> de contenido y <button>.

    // TODO: agregar al botón un evento click que muestre un alert
    //       con el título del post (usa addEventListener).

    // TODO: NO olvides también crear el sidebar (ver función siguiente)
    //       y agregarlo al <main>.

    // TODO: agregar el <main> al contenedor app
}


// =====================================================
// 4) CREAR EL SIDEBAR (ASIDE) DE CATEGORÍAS
// =====================================================
// <aside class="sidebar">
//   <h3>Categorías</h3>
//   <ul>
//     <li>HTML</li>
//     <li>CSS</li>
//     <li>JavaScript</li>
//     <li>Frameworks</li>
//   </ul>
// </aside>

function crearSidebar() {
    // TODO: crear el <aside class="sidebar">
    // TODO: agregar el <h3> "Categorías"
    // TODO: crear el <ul> y un <li> por cada categoría
    // const categorias = ["HTML", "CSS", "JavaScript", "Frameworks"];

    // TODO: devolver el aside (return aside) para insertarlo
    //       dentro del <main> en crearArticulos()
}


// =====================================================
// 5) CREAR EL FOOTER
// =====================================================
// <footer class="blog-footer">
//   <p>&copy; 2026 Mi Blog - Evaluación 2</p>
// </footer>

function crearFooter() {
    // TODO: crear el <footer class="blog-footer">
    // TODO: agregar un <p> con el texto del copyright
    // TODO: agregar el footer al contenedor app
}


// =====================================================
// 6) EJECUTAR TODAS LAS FUNCIONES EN ORDEN
// =====================================================
// Llama aquí a las funciones para construir el blog completo.

crearHeader();
crearArticulos();
crearFooter();

console.log("Blog generado con JavaScript ✔");
