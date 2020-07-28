const firstData = 'https://swapi.dev/api/people/';
const secondData = 'https://swapi.dev/api/starships/';

const getXhrData = (data) => {    
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', data);
        xhr.onload = () => {
          if (xhr.status == 200) {
            resolve(xhr.response);
            
          } else {
            reject(xhr.status);
          }
        }
      
        xhr.send();
      })
}

getXhrData(firstData).then(data1 => {
    getXhrData(secondData).then(data2 => {
        console.log(data1, data2);
        console.log('Все данные получены');
        document.getElementById('spinner').style.display = 'none'; 
        document.getElementById('complited-text').style.display = 'block'; 

     })
  }).catch(err => console.log(err.message));