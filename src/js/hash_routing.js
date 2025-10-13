import { pages } from './pages.js';


const pageTitle = "EPP";
const headerTitle = document.querySelector('.header-title');

///// Update header title /////
function updateHeaderTitle() {  
  let hash = window.location.hash;
  let link = document.querySelector(`a[href="${hash}"]`);
  if (!hash){
    link = document.querySelector('a[href="#main"]');
  };
  headerTitle.textContent = link.textContent;    
}

///// Animate header title /////
function animateHeaderTitle() {
  headerTitle.classList.toggle('active');
}

///// Update page content, check if the page is in different html file, capitalize letters /////
function loadPage() {
  const content = document.getElementById("pdf-container");

  let hash = window.location.hash;
  let page = hash.substring(1);
  
  if (!hash) {     // for first run
    hash = "#main"
    page = "main"
  }  

  let link = document.querySelector(`a[href="${hash}"]`)  

  ///// For pages in different html file /////
  if (!hash.includes('_')){
    fetch(`./pages/${page}.html`).then(response => {
      if (!response.ok) {
        throw new Error(`Page not found: ${page}`);        
      }
      return response.text();
    })
    .then(html => {
      content.innerHTML = html;
      if (page.includes('main')){
        document.title = pageTitle + " || Main Page";
      } else if (page.includes('contact')){
        document.title = pageTitle + " || Contact";
      }
    })
    .catch(error => {
      content.innerHTML = `<p>Error loading page: ${error.message}</p>`;
    });    
  ///// For pages with pdf /////
  } else {
    for (let key in pages) {
      if (key === hash.substring(1)) {
        content.innerHTML = pages[key];
        break;
      };
    };
    
    changeAppTitle(link)  
  }
  capitalizeWords(".page-title")
  capitalizeWords(".header-title")
};

///// Uppercase the first letter in each word in sentence /////
// function capitalLetter(str) {
//   str = str.split(" ");
//   for (let i = 0, x = str.length; i < x; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//   };
//   return str.join(" ");
// };

///// Uppercase the first letter in each word in sentence /////
function capitalLetter(str) {
  let chars = str.split('');  
  for (let i = 0; i < chars.length; i++) {
    if (i === 0 || chars[i - 1] === ' ') {
      chars[i] = chars[i].toUpperCase();
    }
  }  
  return chars.join('');
}

///// Capitalize letters in displayed text (menu, header) /////
function capitalizeWords(selector) {
  document.querySelectorAll(selector).forEach(element => {
    element.textContent = capitalLetter(element.textContent)
  });
}

///// Get text from parentElement (menu text with arrow) for indicated hash /////
function getArrowMenuText(link, nestingLevel) {
  let arrowMenu = link;
  for (let i = 0; i < nestingLevel; i++) {
    if (arrowMenu.parentElement) {
      arrowMenu = arrowMenu.parentElement;
    }
  }  
  if (arrowMenu.childNodes[0].textContent) {
    const arrowMenuText = arrowMenu.childNodes[0].textContent
    return arrowMenuText;  
  } 
}

///// Add spearator to app title /////
function addSeparator(...title) {  
  let treeTitle = ""
  title.forEach((str) => {
    if (typeof str !== "string") return;    // skip non-strings

    str = str.trim();
    if (str.length === 0) {
      return;    // skip empty strings
    } else {
      treeTitle += " || " + capitalLetter(str);
    }
  });
  return treeTitle;
}

///// Change app title (on current location - link[hash]), only for pdf pages /////
function changeAppTitle(link) {
  let dropTitleText = getArrowMenuText(link, 5);
  let subTitleText = getArrowMenuText(link, 3);
  let headerTitleText = headerTitle.textContent;
  document.title = pageTitle + addSeparator(dropTitleText, subTitleText, headerTitleText);
}

///// Event listeners /////
window.addEventListener('DOMContentLoaded', updateHeaderTitle)
window.addEventListener("hashchange", updateHeaderTitle);
window.addEventListener('popstate', updateHeaderTitle);

window.addEventListener('DOMContentLoaded', animateHeaderTitle);
window.addEventListener('hashchange', animateHeaderTitle);
window.addEventListener('popstate', animateHeaderTitle);

window.addEventListener('hashchange', loadPage);
window.addEventListener('DOMContentLoaded', loadPage);

window.addEventListener('popstate', hideMenu);
