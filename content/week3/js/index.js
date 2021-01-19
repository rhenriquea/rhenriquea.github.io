function showAlert() {
    alert('Button clicked!');
}

const showId = function (event) {
    alert(`The id attribute from this button is ${event.srcElement.id}`);
}

function eventListenerExample() {
    const btn = document.getElementById('btn2');
    btn.addEventListener('click', showId, false);
}

function removeEvent() {
    const btn = document.getElementById('btn2');
    btn.removeEventListener('click', showId, false);
    alert('Event removed. Click on the "AddEventListener Example" again')
}

function attachListeners() {
    this.eventListenerExample();
}

function createEditors() {
    
    const editorJSConfig = {
        theme: 'ace/theme/monokai',
        mode: 'ace/mode/javascript',
        selectionStyle: 'text',
        fontSize: '14px',
        tabSize: 1,
        showPrintMargin: false,
        readOnly: true,
        highlightActiveLine: false,
        showGutter: false,
    }

    const editorHTMLConfig = {
        theme: "ace/theme/tomorrow_night_eighties",
        mode: "ace/mode/html",
        wrap: true,
        readOnly: true,
        autoScrollEditorIntoView: true
    };

    const editor1HTML = ace.edit('editor1HTML', { ...editorHTMLConfig, maxLines: 2, minLines: 2 });
    editor1HTML.setValue(`<button id="btn1" onclick="showAlert()">Click this button</button>`,-1);
    const editor1JS = ace.edit('editor1JS', editorJSConfig);
    editor1JS.setValue(showAlert.toString(), -1);


    const editor2HTML = ace.edit('editor2HTML', { ...editorHTMLConfig, maxLines: 2, minLines: 2 });
    editor2HTML.setValue(`<button id="btn2">AddEventListener Example</button>`,-1);
    const editor2JS = ace.edit('editor2JS', editorJSConfig);
    editor2JS.setValue(`const showId = ${showId.toString()}
    
${eventListenerExample.toString()}`, -1);

    const editor3JS = ace.edit('editor3JS', editorJSConfig);
    const editor4JS = ace.edit('editor4JS', editorJSConfig);
    
    
}

createEditors();
attachListeners();