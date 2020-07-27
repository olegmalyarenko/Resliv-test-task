const sizeButtons = document.querySelectorAll('.size-button');
const colorCheckbox = document.querySelectorAll('.color-checkbox');


const selectOptions = document.querySelectorAll('.select-option');


const domain = location.href;
let url = new URL(`${domain}/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd`);
console.log('fff',url);


let search = new URLSearchParams(url.search);
console.log(search);

let size = search.get('size');
console.log(size);

let colors = search.getAll('color');
console.log(colors);

let manufacturers = search.getAll('manufacturer');
console.log(manufacturers);

window.addEventListener("load",  () => {
    sizeButtons.forEach((el) => {
        if(el.value === size){
            el.checked=true;
        }
    });

    colorCheckbox.forEach((el) => {
        if(colors.includes(el.value)){
            el.checked=true;
        }
    });

    selectOptions.forEach((el) => {
        if(manufacturers.includes(el.value)){
            el.selected=true;
        }
    });

    
  });

 sizeButtons.forEach((el) => {
    el.addEventListener('click', (event) => {
        el.checked=true;
        search.set(size, event.target.value);
        console.log( 'Cсылка обновилась', url);
        url = new URL(`${domain}/filter?size=${event.target.value}&color=1&color=2&manufacturer=aaa&manufacturer=ddd`);
        console.log(url);

    })
});
 
 




