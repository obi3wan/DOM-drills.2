document.addEventListener("DOMcontentLoaded", function() {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    let containerDiv = document.createElement('div');
    button.appendChild(btnText);
    document.body.appendChild(button);
    document.body.appendChild(containerDiv);

    let id = '0';
    button.addEventListener('click', function () {
        console.log('here');
        let div = document.createElement('div');
        containerDiv.appendChild(div);
        div.style.backgroundColor = 'black';
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.cssFloat = 'left';
        div.className = 'boxDivs';
        div.setAttribute('id', id);
        id++;

        div.addEventListener('mouseover', function () {
            console.log(this.id);
            let divText = document.createTextNode(this.id);
            div.appendChild(divText);

        })

        div.addEventListener('mouseout', function () {
            div.innerText = '';

        });

        div.addEventListener('click', function () {
            let randomColor = getRandomColor();
            div.style.backgroundColor = randomColor;
        })

        div.addEventListener('dblclick', remove);


    });

    let color = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'white', 'black'];

    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random() * color.length)];
        return randomColor;
    }


    function remove() {

        if (this.id % 2 === 0) {
            if (this.nextSibling) {
                this.nextSibling.remove();
            } else {
                alert('The next sibling does not exist');
            }
        } else {
            if (this.previousSibling) {
                this.previousSibling.remove();
            } else {
                alert('The next sibling does not exist');
            }

        }
    }

//});
});