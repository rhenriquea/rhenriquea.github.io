'use strict';

function goBack() {
  window.history.back();
}

function createList() {
  const links = [
    { label: "Week 1 - Notes", url: "week1/index.html" }
  ];
  
  const contentList = document.getElementById('contentList');
  
  links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const label = document.createTextNode(link.label);
    
    a.appendChild(label);
    a.setAttribute('href', link.url);
    li.appendChild(a);

    if(contentList) {
      contentList.appendChild(li);
    }
  });
}

function init() {
  createList();
}

init();