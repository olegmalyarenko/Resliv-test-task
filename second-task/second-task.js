const sizeButtons = document.querySelectorAll('.size-button');
const colorCheckbox = document.querySelectorAll('.color-checkbox');
const selectOptions = document.querySelectorAll('.select-option');
//const saleCheckbox = document.getElementById('sale');


const domain = location.href;
const url = new URL(`${domain}/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd`);
console.log('Первоначальная ссылка:', url);


const search = new URLSearchParams(url.search);
const size = search.get('size');
const colors = search.getAll('color');
const manufacturers = search.getAll('manufacturer');


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
     //let saleVal = [];
     
    sizeButtons.forEach((el) => {
        if(el.checked){
            sizeVal.push(`size=${el.value}`);
        }
    });
        
    colorCheckbox.forEach((el) => {
        if(el.checked){
            colorArr.push(`&color=${el.value}`);
        }
    });
    
    selectOptions.forEach((el) => {
        if(el.selected){
            selectArr.push(`&manufacturer=${el.value}`);
        }
    });

    /*if(saleCheckbox.checked) {
        saleVal.push(`&sale=${saleCheckbox.value}`);
    }*/

    let newUrl = new URL(`${baseUrl}${sizeVal}${colorArr}${selectArr}`);

    console.log('Cсылка обновилась:',newUrl);

    };
   
    document.getElementById('form').addEventListener('change', updateUrl);

    
    //HASH URL Version
    /*window.onhashchange = () => {console.log('hash changed', window.location.hash)};
    const hash = window.location.hash;

    const hashUrl = new URL(`${domain}${hash}`);
    console.log('Хэш ссылка:', hashUrl);
    
    
    const searchH = new URLSearchParams(url.hashUrl);
    const sizeH = searchH.get('size');
    console.log(sizeH);*/