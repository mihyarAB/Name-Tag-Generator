let input_name = document.querySelector('#name');

let gen = document.querySelector('#gen');

let delAll = document.querySelector('#delAll');

let container = document.querySelector('.cards-container');
let r,g,b;
let warn = document.querySelector('.warn');
function getValue(name) {
    let value = name.value;

    return value;
}
function randomColor() {
    r = ( Math.random() * 255 ) + 1;
    g = ( Math.random() * 255 ) + 1;
    b = ( Math.random() * 255 ) + 1;
}
gen.onclick = () => {
    let name = getValue(input_name);
    if (name != "") {
        randomColor();
        input_name.value = "";
        warn.classList.remove('appear');
        let card = document.createElement('div');
        card.classList.add('card');

        let title = document.createElement('div');
        title.classList.add('title');

        let ur_name = document.createElement('div');
        ur_name.classList.add('name');

        let btn_container = document.createElement('div');
        btn_container.classList.add('btn-container');

        let btn = document.createElement('div');
        btn.classList.add('btn');

        

        title.textContent = "Hello My name is";

        container.append(card);
        card.append(title);
        card.append(ur_name);
        card.append(btn_container);
        btn_container.append(btn);

        ur_name.textContent = name;
        btn.textContent = "Delete";

        btn_container.style.backgroundColor = `rgb(${r},${g},${b})`;
        title.style.backgroundColor  = `rgb(${r},${g},${b})`;

        let del = btn_container.querySelectorAll('.btn');
        del.forEach(element => {
            element.onclick = () => {
                let btn_container = element.parentNode;
                let card = btn_container.parentNode;
                card.remove();
            }
        });
    } else {
        warn.classList.add('appear');
    }

}

delAll.onclick = () => {
    let allElement = document.querySelectorAll('.card');
    allElement.forEach(element => {
        element.remove();
    });
}

