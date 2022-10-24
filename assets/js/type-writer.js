const myName = document.querySelector('.my-name');
const fName = myName.innerHTML;
const seeMore = document.querySelector('button');
const skills = document.querySelectorAll('.hidden');
myName.innerHTML='';

function clickSee (e) {
    skills.forEach( (element) => {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            element.classList.add('visible');
            seeMore.innerHTML = 'See Less';
        } else {
            element.classList.add('hidden');
            element.classList.remove('visible');
            seeMore.innerHTML = 'See More';
        }
    } )
}

function moreskills (element) {
    element.addEventListener('click', clickSee)
}

function typeWriter (nome) {
    setTimeout( () => {
    const myNameF = nome.split('');
    myName.innerHTML='';
    myNameF.forEach( (letra, index) => {
        setTimeout(function (){
            myName.innerHTML += letra;
        }, 100 * index)
    })})
    
}

moreskills(seeMore);

