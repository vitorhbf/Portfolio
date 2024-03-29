

function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}
escrevendoLetra();

function MenuMobol() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');

    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });

    const navLinks = document.querySelectorAll('.navegacao-primaria li a');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            ativaMenu.classList.remove('fa-x');
            navMenu.classList.remove('ativado');
        });
    });
}

MenuMobol();


function sobreMin() {

    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');
    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');

    divExperiencia[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    divEducation[0].classList.add('ativo');
    liEducation[0].classList.add('ativo');

    function slideShow(index) {
        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShow2(index) {
        divEducation.forEach((div) => {
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }

    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow(index)
        });
    });

    liEducation.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow2(index)
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const bolinhas = document.querySelectorAll('.education_content ul li');

        bolinhas.forEach(function (bolinha, index) {
            bolinha.addEventListener('click', function () {

                bolinhas.forEach(function (item) {
                    item.classList.remove('ativo');
                });

                this.classList.add('ativo');
            });
        });
    });
}
sobreMin();

function listaProjetos() {
    const listaAll = document.querySelectorAll('.projects_armazenamento ul li');
    const buttonGeral = document.querySelectorAll('.projects_models ul li');
    const buttonAll = document.querySelectorAll('.projects_models .all');

    function removeClick(index) {
        buttonGeral.forEach((item) => {
            item.classList.remove('ativo');
        })
        buttonGeral[index].classList.add('ativo');
    }
    buttonGeral.forEach((item, index) => {
        item.addEventListener('click', () => {
            removeClick(index);
        })
    })
    document.addEventListener('DOMContentLoaded', function () {

        buttonGeral[0].classList.add('ativo');
        showLista(listaAll, 'all');
    });

    function showLista(Lista, buttom = "all") {
        Lista.forEach((item) => {
            item.classList.remove('ativo');
        });
        if (buttom == 'design') {
            Lista[0].classList.add('ativo');
            Lista[1].classList.add('ativo');
            Lista[9].classList.add('ativo');
        }
        if (buttom == 'graphic') {
            Lista[2].classList.add('ativo');
            Lista[3].classList.add('ativo');
            
        }
        if (buttom == 'website') {
            Lista[4].classList.add('ativo');
            Lista[5].classList.add('ativo');
            Lista[6].classList.add('ativo');
            Lista[7].classList.add('ativo');
            Lista[8].classList.add('ativo');
        }
        if (buttom == 'all') {
            Lista[0].classList.add('ativo');
            Lista[1].classList.add('ativo');
            Lista[2].classList.add('ativo');
            Lista[3].classList.add('ativo');
            Lista[4].classList.add('ativo');
            Lista[5].classList.add('ativo');
            Lista[6].classList.add('ativo');
            Lista[7].classList.add('ativo');
            Lista[8].classList.add('ativo');
            Lista[9].classList.add('ativo');
        }
    }
    buttonGeral.forEach((item) => {
        item.addEventListener('click', (e) => {
            let currentButton = e.target;
            if (currentButton.classList.contains('all')) {
                showLista(listaAll);
            }
            if (currentButton.classList.contains('design')) {
                showLista(listaAll, "design");
            }
            if (currentButton.classList.contains('graphic')) {
                showLista(listaAll, "graphic");
            }
            if (currentButton.classList.contains('website')) {
                showLista(listaAll, "website");
            }
        });
    });
}
listaProjetos();

function ClickImagem(element) {
  const imageUrl = element.getAttribute('src'); 
  window.open(imageUrl, '_blank'); 
}

ClickImagem();


