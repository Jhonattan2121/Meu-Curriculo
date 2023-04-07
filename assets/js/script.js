// Habilidades  */
const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');

const dataInicio = [
                    (new Date(2023, 3, 5)).getTime(), 
                    (new Date(2023, 3, 5)).getTime(), 
                    (new Date(2023, 3, 5)).getTime(), 
                    (new Date(2023, 3, 5)).getTime(), 
                    (new Date(2023, 3, 5)).getTime(), 
                    (new Date(2023, 3, 5)).getTime(), 
                    (new Date(2023, 3, 5)).getTime(), 
                    (new Date(2023, 3, 5)).getTime(), 
                    ]
const dataHoje = (new Date()).getTime();
// Habilidades  */
// maquina_escrever  */
let meuNome = document.querySelector('.meu-nome');
const fName = meuNome.innerHTML;
const botaoVerMais = document.querySelector('button');
const habilidades = document.querySelectorAll('.escondido');
const node = document.querySelector('#fundo')
meuNome.innerHTML='';

function cliqueVer (e) {
    habilidades.forEach( (elemento) => {
        if (elemento.classList.contains('escondido')) {
            elemento.classList.remove('escondido');
            elemento.classList.add('visivel');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('escondido');
            elemento.classList.remove('visivel');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    } )
}

function maisHabilidades (elemento) {
    elemento.addEventListener('click', cliqueVer)
}

function typeWriter (nome) {
    setTimeout( () => {
    const meuNomeF = nome.split('');
    meuNome.innerHTML='';
    meuNomeF.forEach( (letra, index) => {
        setTimeout(function (){
            meuNome.innerHTML += letra;
        }, 150 * index)
    })}, 1500)
    
}

maisHabilidades(botaoVerMais);

// maquina_escrever  */
// project.js  */
const miniaturas = document.querySelectorAll('.miniaturas img');
          const miniaturas_secundaria = document.querySelectorAll('.miniaturas-secundaria img');
          const imagemPrincipal = document.querySelector('.imagem-principal img');
          const imagemSecundaria = document.querySelector('.imagem-secundaria img');
          


          for (let i = 0; i < miniaturas.length; i++) {
          miniaturas[i].addEventListener('click', function() {
    
          imagemPrincipal.src = this.src;
          });
          }
          for (let i = 0; i < miniaturas_secundaria.length; i++) {
            miniaturas_secundaria[i].addEventListener('click', function() {
            imagemSecundaria.src = this.src;
          });
          }


          function toggleImage(img) {
            img.classList.toggle("big");
          }
          
          // Close image when clicking outside of it
          window.addEventListener("click", function(event) {
            var images = document.querySelectorAll(".projetos-itens img.big");
            for (var i = 0; i < images.length; i++) {
              if (!images[i].contains(event.target)) {
                images[i].classList.remove("big");
              }
            }
          });
// project.js  */  
// scroll */ 
window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '15px' });
sr.reveal('.desenho', {duration : 3000, origin: 'right'})
sr.reveal('.descricao', {duration : 3000, origin: 'left'})
sr.reveal('.linkedin', {duration : 3000,  origin: 'left'})
sr.reveal('.desenho-bg', {duration : 3000,  origin: 'left'})
sr.reveal('.sobre-mim', {duration : 3000, origin:'right'})
sr.reveal('.projetos-itens', {duration : 3000, origin:'bottom'})
sr.reveal('.project', {duration : 3000, origin:'bottom'})
sr.reveal('.github-link', {duration : 3000, origin:'bottom'})
sr.reveal('.conteiner-skills', {duration : 3000, origin:'left'})
sr.reveal('.conteiner-descricao', {duration : 3000, origin:'right'})
// scroll */ 

// carousel */

const carousel = document.querySelector('.carousel');
const cells = carousel.querySelectorAll('div');
const cellCount = cells.length;
let selectedIndex = 0;
let cellWidth = carousel.offsetWidth;
let prevButton = document.createElement('button');
let nextButton = document.createElement('button');

function handleResize() {
  cellWidth = carousel.offsetWidth;
}

function handleClickPrev() {
  selectedIndex = selectedIndex === 0 ? cellCount - 1 : selectedIndex - 1;
  updateCarousel();
}

function handleClickNext() {
  selectedIndex = selectedIndex === cellCount - 1 ? 0 : selectedIndex + 1;
  updateCarousel();
}

function updateCarousel() {
  carousel.style.transform = `translateX(${-1 * selectedIndex * cellWidth}px)`;
}

function initCarousel() {
  carousel.style.display = 'block';
  carousel.style.overflow = 'hidden';
  carousel.style.width = '500%';
  carousel.style.height = 'auto';
  carousel.style.margin = '0 auto';
  carousel.style.whiteSpace = 'nowrap';

  cells.forEach(cell => {
    cell.style.display = 'inline-block';
    cell.style.width = '50%';
    cell.style.height = 'auto';
    cell.style.verticalAlign = 'top';
  });

  carousel.parentNode.insertBefore(prevButton, carousel);
  prevButton.textContent = '<';
  prevButton.addEventListener('click', handleClickPrev);

  carousel.parentNode.insertBefore(nextButton, carousel.nextSibling);
  nextButton.textContent = '>';
  nextButton.addEventListener('click', handleClickNext);

  window.addEventListener('resize', handleResize);
  handleResize();
  updateCarousel();
}

initCarousel();

// carousel */
