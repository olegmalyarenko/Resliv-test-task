const firstData = 'https://swapi.dev/api/people/';
const secondData = 'https://swapi.dev/api/starships/';

const getXhrData = (data) => {    
    new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', data, true);
        xhr.onload = () => {
          if (xhr.status == 200) {
            resolve(console.log(xhr.responseText));
            
          } else {
            reject(xhr.status);
          }
        }
      
        xhr.send();
      })
}

getXhrData(firstData);
getXhrData(secondData);