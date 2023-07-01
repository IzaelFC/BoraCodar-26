function add() {
    var quantidades = document.querySelectorAll('.quantidade');
    var plurais = document.querySelectorAll('.plural');
    
    quantidades.forEach((quantidade, index) => {
      var valor = parseInt(quantidade.textContent);
      
      if (valor >= 0 && valor < 9) {
        quantidade.innerText = index === 0 ? `0${valor + 1}` : `${valor + 1}`;
      } else {
        quantidade.innerText = `${valor + 1}`;
      }
      
      if (valor + 1 > 1) {
        plurais[index].innerText = index === 0 ? 'espigas' : 'colheres';
      } else {
        plurais[index].innerText = index === 0 ? 'espiga' : 'colher';
      }
    });
  }
  
  
  function decrease() {
    var quantidades = document.querySelectorAll('.quantidade');
    var plurais = document.querySelectorAll('.plural');
    
    quantidades.forEach((quantidade, index) => {
      var valor = parseInt(quantidade.textContent);
      
      if (valor >= 2 && valor <= 10 && valor !== 0) {
        quantidade.innerText = index === 0 ? `0${valor - 1}` : `${valor - 1}`;
      }
      if (valor > 10) {
        quantidade.innerText = `${valor - 1}`;
      }
      
      if (valor - 1 > 1) {
        plurais[index].innerText = index === 0 ? 'espigas' : 'colheres';
      } else {
        plurais[index].innerText = index === 0 ? 'espiga' : 'colher';
      }
    });
  }