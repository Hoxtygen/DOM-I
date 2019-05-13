const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//navigation
const pageNav = document.querySelectorAll('a');
//pageNav.style.color = "green";
pageNavArray = [...pageNav].forEach((e, i) => e.textContent = Object.values(siteContent.nav)[i])
const appTag = document.createElement("a");

appTag.setAttribute("href", "#blog");
appTag.textContent = "Blog";
const anchorTag = document.createElement("a");
anchorTag.textContent = "Testimonies";
const nav = document.querySelector("nav");
nav.appendChild(appTag);
nav.prepend(anchorTag);


//call to action
const cta = document.querySelector('.cta');
const arrayHeading = (siteContent["cta"]["h1"]).split(" ");
const h1 = cta.children[0].children[0]
const br = document.createElement("br")
const abr = document.createElement("br")
h1.appendChild(document.createTextNode(arrayHeading[0]));
h1.appendChild(br)
h1.appendChild(document.createTextNode(arrayHeading[1]));
h1.appendChild(abr);
h1.appendChild(document.createTextNode(arrayHeading[2]));



cta.children[0].children[1].textContent = siteContent["cta"]["button"]
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


//top content
const topContent = document.querySelector(".top-content");
topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"];
topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"];


//middle content
const middleImg = document.getElementById("middle-img")
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//middle content
const bottomContent = document.querySelector(".bottom-content")
bottomContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"];
bottomContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottomContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"];
bottomContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottomContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"];

//contact

const contact = document.querySelector(".contact")
const cbr = document.createElement('br')
contact.children[0].textContent = siteContent["contact"]["contact-h4"];
contact.children[1].textContent = siteContent["contact"]["address"].substring(0, 19);
contact.children[2].textContent = siteContent["contact"]["phone"];
contact.children[3].textContent = siteContent["contact"]["email"];
contact.children[1].appendChild(cbr);
contact.children[1].appendChild(document.createTextNode(siteContent["contact"]["address"].substring(19)))

//footer
const footer = document.querySelector("footer");
footer.children[0].textContent = siteContent["footer"]["copyright"]


//add color to nav links
Array.from(document.querySelector('nav').children).forEach(e => e.style.color = "green")

//Style all h4
const h4= document.querySelectorAll("h4");
h4.forEach(element => {
  element.style.color = "green"
});
console.log(h4)

//add eventListener to the button
const button = cta.children[0].children[1]
button.addEventListener('click', () => alert('Are you sure?'))
console.log(button)