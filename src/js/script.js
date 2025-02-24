// open&close dropdown menu //
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
        };        
      };
    });
  });
};
dropdownSubmenu();

// close all sub-menus //
function closeMenuComponents(){
  let allArrows = document.querySelectorAll('.fa-caret-down');
  for (i = 0; i < subMenu.length; i++) {
    let rotatedArrow = allArrows[i];
    let openedSubMenu = subMenu[i];
    if (openedSubMenu.classList.contains('open') && rotatedArrow.classList.contains('active')) {
      //console.log('opened')
      openedSubMenu.classList.remove('open');
      rotatedArrow.classList.remove('active');
    };
  };  
  layer.classList.remove('active');
  helpInfo.classList.remove('active');
};

// open&close sidebar //
let layer = document.querySelector('.layer');
let container = document.querySelector(".container");
let closeBtn = document.querySelector('.close-btn');
let menuBtn = document.querySelector('.menu-btn');
let subMenu = document.querySelectorAll('.sub-menu');
let nav = document.querySelector('.nav');

menuBtn.addEventListener("click", () => {
  container.classList.toggle("active");  
  layer.classList.toggle('active');
  nav.scrollTo(0,0);
});

closeBtn.addEventListener("click", () => {
  container.classList.toggle("active");
  closeMenuComponents();
});

window.onclick = function(e){
  if ((!container.contains(e.target) && (!menuBtn.contains(e.target)) && (!helpBtn.contains(e.target)))){    
    container.classList.remove("active");  
    closeMenuComponents();
  };
};

document.addEventListener("keydown", function(event){
  if (event.key === "Escape") {
    container.classList.remove("active");
    closeMenuComponents();
  };
});

// help info window //
let helpBtn = document.querySelector('.help-btn');
let helpInfo = document.querySelector('.help-info');

helpBtn.addEventListener("click", () => {
  layer.classList.toggle('active');
  helpInfo.classList.toggle('active');
});







