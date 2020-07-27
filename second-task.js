const sizeButtons = document.querySelectorAll('.size-button');
const colorCheckbox = document.querySelectorAll('.color-checkbox');
const selectOptions = document.querySelectorAll('.select-option');


const domain = location.href;
let url = new URL(`${domain}/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd`);
console.log('Первоначальная ссылка:',url);


let search = new URLSearchParams(url.search);
let size = search.get('size');
let colors = search.getAll('color');
let manufacturers = search.getAll('manufacturer');


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



 const updateUrl = () => {
     let baseUrl = new URL(`${domain}/filter?`);
     let colorArr = [];
     let selectArr = [];
     let sizeVal = [];
     
     sizeButtons.forEach((el) => {
        if(el.checked){
            sizeVal.push(`size=${el.value}`)
        }
    });
    console.log(sizeVal);

    colorCheckbox.forEach((el) => {
        if(el.checked){
            colorArr.push(`&color=${el.value}`)
        }
    });
    
    console.log(colorArr);

    selectOptions.forEach((el) => {
        if(el.selected){
            selectArr.push(`&manufacturer=${el.value}`)
        }
    });

    console.log(selectArr);
    let newUrl = `${baseUrl}${sizeVal}${colorArr}${selectArr}`;

    console.log('Cсылка обновилась:',newUrl);

    };
   
    document.getElementById('form').addEventListener('change', updateUrl);
