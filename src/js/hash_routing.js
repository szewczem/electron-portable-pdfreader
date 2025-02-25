const pageTitle = "EPP";

const pages = {
  TEST1_A: '<iframe class="pdf" src="./doc/section1/TEST1_A.pdf#page=1&view=fitV"></iframe>',
  TEST1_B: '<iframe class="pdf" src="./doc/section1/TEST1_B.pdf#page=1&view=fitV"></iframe>',
  TEST1_C: '<iframe class="pdf" src="./doc/section1/TEST1_C.pdf#page=1&view=fitV"></iframe>',
  
  TEST2_A: '<iframe class="pdf" src="./doc/section2/TEST2_A.pdf#page=1&view=fitV"></iframe>',
  TEST2_B: '<iframe class="pdf" src="./doc/section2/TEST2_B.pdf#page=1&view=fitV"></iframe>',
  TEST2_C: '<iframe class="pdf" src="./doc/section2/TEST2_C.pdf#page=1&view=fitV"></iframe>',

  TEST3A_A: '<iframe class="pdf" src="./doc/section3/TEST3A_A.pdf#page=1&view=fitV"></iframe>',
  TEST3A_B: '<iframe class="pdf" src="./doc/section3/TEST3A_B.pdf#page=1&view=fitV"></iframe>',
  TEST3A_C: '<iframe class="pdf" src="./doc/section3/TEST3A_C.pdf#page=1&view=fitV"></iframe>',

  TEST3B_A: '<iframe class="pdf" src="./doc/section3/TEST3B_A.pdf#page=1&view=fitV"></iframe>',
  TEST3B_B: '<iframe class="pdf" src="./doc/section3/TEST3B_B.pdf#page=1&view=fitV"></iframe>',

  TEST3C_A: '<iframe class="pdf" src="./doc/section3/TEST3C_A.pdf#page=1&view=fitV"></iframe>',
  TEST3C_B: '<iframe class="pdf" src="./doc/section3/TEST3C_B.pdf#page=1&view=fitV"></iframe>',

  TEST4A_A: '<iframe class="pdf" src="./doc/section4/TEST4A_A.pdf#page=1&view=fitV"></iframe>',
  TEST4A_B: '<iframe class="pdf" src="./doc/section4/TEST4A_B.pdf#page=1&view=fitV"></iframe>',
  TEST4A_C: '<iframe class="pdf" src="./doc/section4/TEST4A_C.pdf#page=1&view=fitV"></iframe>',

  TEST4B_A: '<iframe class="pdf" src="./doc/section4/TEST4B_A.pdf#page=1&view=fitV"></iframe>',
  TEST4B_B: '<iframe class="pdf" src="./doc/section4/TEST4B_B.pdf#page=1&view=fitV"></iframe>',

  TEST4C_A: '<iframe class="pdf" src="./doc/section4/TEST4C_A.pdf#page=1&view=fitV"></iframe>',
  TEST4C_B: '<iframe class="pdf" src="./doc/section4/TEST4C_B.pdf#page=1&view=fitV"></iframe>',

  TEST4D_A: '<iframe class="pdf" src="./doc/section4/TEST4D_A.pdf#page=1&view=fitV"></iframe>',

  TEST4E_A: '<iframe class="pdf" src="./doc/section4/TEST4E_A.pdf#page=1&view=fitV"></iframe>',
  TEST4E_B: '<iframe class="pdf" src="./doc/section4/TEST4E_B.pdf#page=1&view=fitV"></iframe>',
  TEST4E_C: '<iframe class="pdf" src="./doc/section4/TEST4E_C.pdf#page=1&view=fitV"></iframe>',

  TEST5A_A: '<iframe class="pdf" src="./doc/section5/TEST5A_A.pdf#page=1&view=fitV"></iframe>',
  TEST5A_B: '<iframe class="pdf" src="./doc/section5/TEST5A_B.pdf#page=1&view=fitV"></iframe>',
  TEST5A_C: '<iframe class="pdf" src="./doc/section5/TEST5A_C.pdf#page=1&view=fitV"></iframe>',

  TEST5B_A: '<iframe class="pdf" src="./doc/section5/TEST5B_A.pdf#page=1&view=fitV"></iframe>',
  TEST5B_B: '<iframe class="pdf" src="./doc/section5/TEST5B_B.pdf#page=1&view=fitV"></iframe>',

  TEST5C_A: '<iframe class="pdf" src="./doc/section5/TEST5C_A.pdf#page=1&view=fitV"></iframe>',
  TEST5C_B: '<iframe class="pdf" src="./doc/section5/TEST5C_B.pdf#page=1&view=fitV"></iframe>',

  TEST5D_A:  '<iframe class="pdf" src="./doc/section5/TEST5D_A.pdf#page=1&view=fitV"></iframe>',

  TEST5E_A: '<iframe class="pdf" src="./doc/section5/TEST5E_A.pdf#page=1&view=fitV"></iframe>',
  TEST5E_B: '<iframe class="pdf" src="./doc/section5/TEST5E_B.pdf#page=1&view=fitV"></iframe>',
  TEST5E_C: '<iframe class="pdf" src="./doc/section5/TEST5E_C.pdf#page=1&view=fitV"></iframe>',

  TEST5F_A: '<iframe class="pdf" src="./doc/section5/TEST5F_A.pdf#page=1&view=fitV"></iframe>',
  TEST5F_B: '<iframe class="pdf" src="./doc/section5/TEST5F_B.pdf#page=1&view=fitV"></iframe>',
  TEST5F_C: '<iframe class="pdf" src="./doc/section5/TEST5F_C.pdf#page=1&view=fitV"></iframe>',

  TEST6A_A: '<iframe class="pdf" src="./doc/section6/TEST6A_A.pdf#page=1&view=fitV"></iframe>',
  TEST6A_B: '<iframe class="pdf" src="./doc/section6/TEST6A_B.pdf#page=1&view=fitV"></iframe>',
  TEST6A_C: '<iframe class="pdf" src="./doc/section6/TEST6A_C.pdf#page=1&view=fitV"></iframe>',

  TEST6B_A: '<iframe class="pdf" src="./doc/section6/TEST6B_A.pdf#page=1&view=fitV"></iframe>',
  TEST6B_B: '<iframe class="pdf" src="./doc/section6/TEST6B_B.pdf#page=1&view=fitV"></iframe>',
  TEST6B_C: '<iframe class="pdf" src="./doc/section6/TEST6B_C.pdf#page=1&view=fitV"></iframe>',

  TEST6C_A: '<iframe class="pdf" src="./doc/section6/TEST6C_A.pdf#page=1&view=fitV"></iframe>',
  TEST6C_B: '<iframe class="pdf" src="./doc/section6/TEST6C_B.pdf#page=1&view=fitV"></iframe>',

  TEST6D_A: '<iframe class="pdf" src="./doc/section6/TEST6D_A.pdf#page=1&view=fitV"></iframe>',

  TEST7A_A: '<iframe class="pdf" src="./doc/section7/TEST7A_A.pdf#page=1&view=fitV"></iframe>',
  TEST7A_B: '<iframe class="pdf" src="./doc/section7/TEST7A_B.pdf#page=1&view=fitV"></iframe>',
  TEST7A_C: '<iframe class="pdf" src="./doc/section7/TEST7A_C.pdf#page=1&view=fitV"></iframe>',

  TEST7B_A: '<iframe class="pdf" src="./doc/section7/TEST7B_A.pdf#page=1&view=fitV"></iframe>',
  TEST7B_B: '<iframe class="pdf" src="./doc/section7/TEST7B_B.pdf#page=1&view=fitV"></iframe>',
  TEST7B_C: '<iframe class="pdf" src="./doc/section7/TEST7B_C.pdf#page=1&view=fitV"></iframe>',

  TEST7C_A: '<iframe class="pdf" src="./doc/section7/TEST7C_A.pdf#page=1&view=fitV"></iframe>',
  TEST7C_B: '<iframe class="pdf" src="./doc/section7/TEST7C_B.pdf#page=1&view=fitV"></iframe>',

  TEST7D_A: '<iframe class="pdf" src="./doc/section7/TEST7D_A.pdf#page=1&view=fitV"></iframe>',

  TEST7E_A: '<iframe class="pdf" src="./doc/section7/TEST7E_A.pdf#page=1&view=fitV"></iframe>',
  TEST7E_B: '<iframe class="pdf" src="./doc/section7/TEST7E_B.pdf#page=1&view=fitV"></iframe>',
  TEST7E_C: '<iframe class="pdf" src="./doc/section7/TEST7E_C.pdf#page=1&view=fitV"></iframe>',
  TEST7E_D: '<iframe class="pdf" src="./doc/section7/TEST7E_D.pdf#page=1&view=fitV"></iframe>',

  TEST7F_A: '<iframe class="pdf" src="./doc/section7/TEST7F_A.pdf#page=1&view=fitV"></iframe>',
  TEST7F_B: '<iframe class="pdf" src="./doc/section7/TEST7F_B.pdf#page=1&view=fitV"></iframe>',
  TEST7F_C: '<iframe class="pdf" src="./doc/section7/TEST7F_C.pdf#page=1&view=fitV"></iframe>',
  TEST7F_D: '<iframe class="pdf" src="./doc/section7/TEST7F_D.pdf#page=1&view=fitV"></iframe>',
  TEST7F_E: '<iframe class="pdf" src="./doc/section7/TEST7F_E.pdf#page=1&view=fitV"></iframe>',

  TEST7G_A: '<iframe class="pdf" src="./doc/section7/TEST7G_A.pdf#page=1&view=fitV"></iframe>',
  TEST7G_B: '<iframe class="pdf" src="./doc/section7/TEST7G_B.pdf#page=1&view=fitV"></iframe>',

  TEST7H_A: '<iframe class="pdf" src="./doc/section7/TEST7H_A.pdf#page=1&view=fitV"></iframe>',
  TEST7H_B: '<iframe class="pdf" src="./doc/section7/TEST7H_B.pdf#page=1&view=fitV"></iframe>',
};
let notFound = '<div class="non-pdf-container"><h1>Page not found 404</h1></div>';

// update header title //
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

// update page content, check if the page is in different html file //
function loadPage(page) {
  const content = document.getElementById("pdf-container");
  let cover = document.querySelector('.pdf-layer');
  let hash = window.location.hash.substring(1) || '#main';
  let found = false;

  // for pages in different html file //
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
  // for pages with pdf //
  } else {
    for (let key in pages) {
      if (key === hash) {
        content.innerHTML = pages[key];
        found = true;
        break;
      };
    };

    // change app title (newWindow) //
    let dropTitle = document.querySelector(`a[href="#${hash}"]`).parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].textContent;
    //console.log(dropTitle);    
    let subTitle = document.querySelector(`a[href="#${hash}"]`).parentElement.parentElement.parentElement.childNodes[0].textContent;
    //console.log(subTitle);

    subTitle = " || " + capital_letter(subTitle);
    if (dropTitle.trim().length === 0) {
      dropTitle = "";
    } else {
      dropTitle = " || " + capital_letter(dropTitle);
    }
    document.title = pageTitle + dropTitle + subTitle;
  }

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

// uppercase the first letter in each word in sentence //
function capital_letter(str) {
  str = str.split(" ");
  for (let i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  };
  return str.join(" ");
};

