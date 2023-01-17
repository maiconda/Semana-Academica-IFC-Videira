function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });
  }

  const titulo = document.querySelector('.efeito');
  
  typeWriter(titulo);

//

  function typeWriter2(elemento2) {
    const textoArray = elemento2.innerHTML.split('');
    elemento2.innerHTML = '';
    textoArray.forEach((letra2, i) => {
      setTimeout(() => elemento2.innerHTML += letra2, 100 * i);
    });[]
  }
 
  const titulo2 = document.querySelector('.efeito2');
  
  typeWriter2(titulo2);

 
 //

  function typeWriter3(elemento3) {
    const textoArray = elemento3.innerHTML.split('');
    elemento3.innerHTML = '';
    textoArray.forEach((letra3, i) => {
      setTimeout(() => elemento3.innerHTML += letra3, 70 * i);
    });
  }

  const titulo3 = document.querySelector('.efeito3');
  
  typeWriter3(titulo3);

  //

  function typeWriter4(elemento4) {
    const textoArray = elemento4.innerHTML.split('');
    elemento4.innerHTML = '';
    textoArray.forEach((letra4, i) => {
      setTimeout(() => elemento4.innerHTML += letra4, 60 * i);
    });
  }

  const titulo4 = document.querySelector('.efeito4');
  
  typeWriter4(titulo4);

  const menu = document.querySelector('.cabecalho')

  function activeScroll(){
    menu.classList.toggle('ativo', scrollY > 150)
  }

  window.addEventListener('scroll', activeScroll)


//////

var button = document.getElementById('botao-segunda')

button.addEventListener('click', function(){

  var container = document.getElementById('segunda-conteudo');

  if(container.style.display === "none"){
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
})

//////



var button = document.getElementById('botao-terca')

button.addEventListener('click', function(){

  var container = document.getElementById('conteudo-terca');

  if(container.style.display === "none"){
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
})


//////


var button = document.getElementById('botao-quarta')

button.addEventListener('click', function(){

  var container = document.getElementById('conteudo-quarta');

  if(container.style.display === "none"){
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
})