import { pages } from './pages.js';


const pageTitle = "EPP";
let notFound = '<div class="non-pdf-container"><h1>Page not found 404</h1></div>';

///// Update header title /////
document.addEventListener('DOMContentLoaded', () => {
  let headerTitle = document.querySelector('.header-title');  
  let updateTitle = () => {
    let hash = window.location.hash;
    let link = document.querySelector(`a[href="${hash}"]`);
    if (!hash){
      link = document.querySelector('a[href="#main"]');
    } else {
      link = document.querySelector(`a[href="${hash}"]`);
    };
    //console.log(hash);
    headerTitle.textContent = link.textContent;
  };

  window.addEventListener("hashchange", updateTitle);
  window.addEventListener('popstate', updateTitle);
  updateTitle();
});

let animateTitle = () => {
  let headerTitle = document.querySelector('.header-title');
  headerTitle.classList.toggle('active');
}

window.addEventListener('hashchange', animateTitle);
window.addEventListener('DOMContentLoaded', animateTitle);
window.addEventListener('popstate', animateTitle);

///// Update page content, check if the page is in different html file, capitalize letters /////
function loadPage(page) {
  const content = document.getElementById("pdf-container");
  let cover = document.querySelector('.pdf-layer');
  let hash = window.location.hash.substring(1) || '#main';
  let found = false;

  ///// For pages in different html file /////
  if (!hash.includes('_')){    
    //cover.classList.remove('active');
    fetch(`./pages/${page}.html`).then(response => {
      if (!response.ok) {
        throw new Error(`Page not found: ${page}`);        
      }
      return response.text();
    })
    .then(html => {
      content.innerHTML = html;
      //console.log(hash);
      if (page.includes('main')){
        document.title = pageTitle + " || Main Page";
      } else if (page.includes('contact')){
        document.title = pageTitle + " || Contact";
      }
      found = true;
    })
    .catch(error => {
      content.innerHTML = `<p>Error loading page: ${error.message}</p>`;      
      found = true;
    });    
  ///// For pages with pdf /////
  } else {
    for (let key in pages) {
      if (key === hash) {
        content.innerHTML = pages[key];
        found = true;
        break;
      };
    };

    ///// Change app title (newWindow) /////
    let dropTitle = document.querySelector(`a[href="#${hash}"]`).parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].textContent;
    //console.log(dropTitle);    
    let subTitle = document.querySelector(`a[href="#${hash}"]`).parentElement.parentElement.parentElement.childNodes[0].textContent;
    //console.log(subTitle);
    let headerTitle = document.querySelector('.header-title').textContent;

    document.title = pageTitle + addSeparator(dropTitle, subTitle, headerTitle);   
  }

  capitalizeWords(".page-title")
  capitalizeWords(".header-title")

  closeMenuComponents();
  container.classList.remove('active');  
  layer.classList.remove('active');
  if (!found) {
    cover.classList.remove('active');
    content.innerHTML = notFound;
    document.title = "404";
  }
}

function handleHashChange() {
  let hash = window.location.hash.substring(1);
  //console.log(hash);
  const page = hash || 'main';
  loadPage(page)
}

window.addEventListener('hashchange', handleHashChange);
window.addEventListener('DOMContentLoaded', handleHashChange);

///// Uppercase the first letter in each word in sentence /////
function capital_letter(str) {
  str = str.split(" ");
  for (let i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  };
  return str.join(" ");
};

///// Capitalize letters in displayed text (menu, header) /////
function capitalizeWords(selector) {
  document.querySelectorAll(selector).forEach(element => {
    element.textContent = capital_letter(element.textContent)
  });
}

///// Add spearator to app title /////
function addSeparator(...title) {  
  let treeTitle = ""
  title.forEach((str) => {
    if (typeof str !== "string") return; // skip non-strings

    str = str.trim();
    if (str.length === 0) {
      return; // skip empty strings
    } else {
      treeTitle += " || " + capital_letter(str);
    }
  });
  return treeTitle;
}

