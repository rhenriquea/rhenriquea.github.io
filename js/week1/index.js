'use strict';

function clearFields(textTitle, storyDisplay, storyEditor) {
  textTitle.textContent = '';
  storyDisplay.innerHTML = '';
  storyEditor.value = '';
}

function showError(errorEl, errorMessage) {
  errorEl.classList.add('show');
  errorEl.textContent = `❗ ${errorMessage}`;
}

function execute(action) {
  const nameInput = document.getElementById('name_input');
  const storyEditor = document.getElementById('story_editor');
  const textTitle = document.getElementById('story_title');
  const storyDisplay = document.getElementById('story_display');
  const errorEl = document.getElementById('error_message');

  const storyName = nameInput.value;
  let storyHTML = storyEditor.value;
  
  if(action === 'save') {

    if(!storyName) {
      showError(errorEl, 'Story name is required.');
      clearFields(textTitle, storyDisplay, storyEditor);
      return;
    }
    
    if(!storyHTML) {
      showError(errorEl, 'Story content is required.');
      clearFields(textTitle, storyDisplay, storyEditor)
      return;
    }

    localStorage.setItem(storyName, storyHTML)
  }
  
  if (action === 'load') {
    storyHTML = localStorage.getItem(storyName)

    if(!storyName) {
      showError(errorEl, 'Story name is required.');
      clearFields(textTitle, storyDisplay, storyEditor)
      return;
    }
    
    if(!storyHTML) {
      showError(errorEl, `There is no story named "${storyName}"`);
      clearFields(textTitle, storyDisplay, storyEditor)
      return;
    }

    storyEditor.value = storyHTML 
  }
  
  textTitle.textContent = storyHTML ? storyName : '';
  storyDisplay.innerHTML = storyHTML ? storyHTML : '';
  errorEl.classList.remove('show');
  errorEl.textContent = '';
}
