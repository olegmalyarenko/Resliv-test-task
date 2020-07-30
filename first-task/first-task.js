document.getElementById('name_input').addEventListener('change', () => {
    if (event.target.value !== "Xxxx") {
        document.getElementById('name_input').classList.add('red');
      
    } else {
      event.target.classList.remove('red');
    }
   
  });