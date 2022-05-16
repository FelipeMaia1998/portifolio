$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// Configurando botões
function b1() {
    window.location.href = "https://www.youtube.com/watch?v=8NO5lbdCO6Q";
}

function b2() {
    alert("Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.\n" + "Data de lançamento: 23 de novembro de 2001\n" + "Diretor: Chris Columbus\n" + "Roteiro: Steve Kloves\n" + "Duração: 152 min");
}

