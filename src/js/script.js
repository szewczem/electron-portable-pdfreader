///// Open & close dropdown menu /////
function dropdownSubmenu(){
  let dropdown = document.querySelectorAll('.dropdown');
  document.querySelectorAll('.arrow-title').forEach(arrow => {
    arrow.addEventListener('click', (e) => {
      let dropdownList = e.currentTarget.nextElementSibling;
      //console.log(dropdownList);
      let arrow = e.currentTarget.childNodes[1];  
      //console.log(arrow);
      if (dropdownList.classList.contains('open')){
        dropdownList.classList.remove('open');    
        arrow.classList.remove('active');                     
      } else {
        dropdownList.classList.toggle('open');
        arrow.classList.toggle('active');
        for (i = 0; i < dropdown.length; i++){
          let submenuList = dropdownList.children[i].children[1];
          let submenuArrow = dropdownList.children[i].children[0].childNodes[1];
          submenuList.classList.remove('open');          
          submenuArrow.classList.remove('active');
        }      
      }
    });
  });
}

const layer = document.querySelector('.layer');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('.close-btn');
const menuBtn = document.querySelector('.menu-btn');
const subMenu = document.querySelectorAll('.sub-menu');
const nav = document.querySelector('.nav');
const helpBtn = document.querySelector('.help-btn');
const helpInfo = document.querySelector('.help-info');

///// Close all sub-menus in menu /////
function closeMenuComponents(){
  let allArrows = document.querySelectorAll('.fa-caret-down');
  for (i = 0; i < subMenu.length; i++) {
    let rotatedArrow = allArrows[i];
    let openedSubMenu = subMenu[i];
    if (
      openedSubMenu.classList.contains('open') && 
      rotatedArrow.classList.contains('active')
    ) {
      //console.log('opened')
      openedSubMenu.classList.remove('open');
      rotatedArrow.classList.remove('active');
    }
  }
}

///// Open & close sidebar via menu button /////
function toggleMenu() {
  container.classList.toggle('active');
  layer.classList.toggle('active');
  nav.scrollTo(0, 0);
}

///// Close menu via close button / escape key /////
function hideMenu() {
  container.classList.remove('active');
  layer.classList.remove('active');
  closeMenuComponents();
}

function hideMenuIfEscapeKey(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    hideMenu()
  }
}

///// Show help window / close help window /////
function showHelpInfo() {
  layer.classList.add('active');
  helpInfo.classList.add('active');
}

function hideHelpInfo() {
  layer.classList.remove('active');
  helpInfo.classList.remove('active');
}

///// Hide menu / help window when clicked outside /////
function hideIfClickOutside(event) {
  if (
    !container.contains(event.target) &&
    !menuBtn.contains(event.target) &&
    !helpBtn.contains(event.target)
  ) {
    hideMenu()
    hideHelpInfo()
  }
}

///// Event listeners /////
window.addEventListener('DOMContentLoaded', dropdownSubmenu);
menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', hideMenu);
document.addEventListener('keydown', hideMenuIfEscapeKey);
helpBtn.addEventListener('click', showHelpInfo);
window.addEventListener('click', hideIfClickOutside);



