const abilities = document.querySelectorAll('.skill-box');
const description = document.querySelector('.text-description');
const aboutSkill = [
                    '<p>HTML</p> <br>  <p>The HyperText Markup Language  is the standard markup language for documents designed to be displayed in a web browser.</p> <br>',
                    '<p>CSS</p> <br> <p>Cascading Style Sheets is a mechanism for adding style (colors, fonts, spacing, etc.) to a web document.</p> <br>',
                    '<p>JavaScript</p> <br> <p>JavaScript is a programming language that is one of the core Web technologies, alongside HTML and CSS.</p> <br>',
                    '<p>SQL</p> <br> <p>Structured Query Language is a standard declarative query language for programming and designing relational database.</p> <br>',
                    '<p>Git</p> <br> <p>Git is free and open source software for distributed version control, usually used during software development.</p> <br>',
                    '<p>Github</p> <br> <p>GitHub is an Internet hosting service for software development and version control using Git. </p> <br>'
]

const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

abilities.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        description.innerHTML = `<p>${aboutSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        description.innerHTML = '/* Place the mouse over the abilities to read a short description */';
    } )
} );
