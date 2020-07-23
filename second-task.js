const sizeButtons = document.querySelectorAll('.size-button');
console.log(sizeButtons);
const radios = document.querySelectorAll('[name="color"]');
const radio = document.querySelectorAll('.color-checkbox');
console.log(radios);
console.log(radio);

const options = document.querySelectorAll('.select-option');
const op = document.querySelectorAll('[name="option"]');
console.log(options);
console.log(op);

const domain = location.href;
let url = new URL(`${domain}/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd`);
console.log('fff',url);


const search = new URLSearchParams(url.search);
console.log(search);

let size = search.get('size');
console.log(size);
sizeButtons.forEach((el) => {
    if(el.value === size){
        el.checked=true;
    }
})


let colors = search.getAll('color');
console.log(colors);

let manufacturers = search.getAll('manufacturer');
console.log(manufacturers);

