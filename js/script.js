// console.log(localStorage);

(function populateLinks() {
  let unorderedList = document.createElement('ul');

  Object.keys(bookmarks).map((link, index) => {
    let newList = document.createElement('li');
    let newlink = document.createElement('a');

    if (bookmarks[index].icon) {
      let newIcon = document.createElement('i');
      newIcon.setAttribute('class', bookmarks[index].icon);
      newlink.appendChild(newIcon);
    }

    newlink.setAttribute('href', bookmarks[index].url);    
    newlink.setAttribute('target', '_blank');

    let newSpan = document.createElement('span');
    newSpan.innerHTML = "&nbsp;&nbsp;&nbsp;" + bookmarks[index].name;
    
    newlink.appendChild(newSpan);
    newList.appendChild(newlink);
    unorderedList.appendChild(newList);
  })

  document.getElementById('links').appendChild(unorderedList);
})(); 

let menuState = true;
let links = document.getElementById('links');
let menu = document.getElementById('menu');
let menuIcon = menu.getElementsByTagName('i')[0];
let minHeight = menu.clientHeight;
let maxHeight = links.offsetHeight;
let minWidth = '80';
let maxWidth = menu.offsetWidth;
let minusIcon = 'fa-minus';
let barsIcon = 'fa-bars';

function menuMouseOverHandler() {
  let {classList} = menuIcon;
  
  if (menuState && classList.contains(barsIcon)) {
    classList.remove(barsIcon);
    classList.add(minusIcon);
  } 

  if (!menuState && classList.contains(minusIcon)) {
    classList.remove(minusIcon);
    classList.add(barsIcon); 
  }
}

function menuMouseLeaveHandler() {
  let {classList} = menuIcon;

  if (menuState && classList.contains(minusIcon)) {
    classList.remove(minusIcon);
    classList.add(barsIcon);
  }   

  if (!menuState && classList.contains(barsIcon)) {
    classList.remove(barsIcon);
    classList.add(minusIcon);
  }  
}

function toggleMenu() {
  if (menuState) {
    links.style['overflow'] = 'hidden';
    links.style.height = `${minHeight}px`;      
    links.style.width = `${minWidth}px`;
  } else {
    links.style['overflow'] = 'visible';
    links.style.height = `${maxHeight}px`;
    links.style.width = `${maxWidth}px`;
  }

  menuState = !menuState;  
  let {classList} = menuIcon;

  if (!menuState && classList.contains(minusIcon)) {
    classList.remove(minusIcon);
    classList.add(barsIcon);
  }

  if (!menuState && classList.contains(barsIcon)) {
    classList.remove(barsIcon);
    classList.add(minusIcon);
  }
}

menu.addEventListener("mouseover", menuMouseOverHandler);
menu.addEventListener("mouseleave", menuMouseLeaveHandler);
menu.addEventListener("click", toggleMenu);
