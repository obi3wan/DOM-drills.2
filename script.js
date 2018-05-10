document.addEventListener("DOMcontentLoaded", function() {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    let containerDiv = document.createElement('div');
    button.appendChild(btnText);
    document.body.appendChild(button);
    document.body.appendChild(containerDiv);

    
});