//Criação de uma timeline com GSAP com animações sincronizadas com o scroll
var tl =gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start:'0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //DEPURAÇÃO
    },
});

tl.to(
    '#fanta',
    {
        top: '120%', //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        left: '2%',
    },
    'orange'
); //NOMEANDO ESSE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO

tl.to(
    '#laranja-fatiada',
    {
        top: '160%', //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        left: '21%',
    },
    'orange'
); //NOMEANDO ESSE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO

tl.to(
    '#laranja',
    {
        width:'25%',
        top: '160%', //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        left: '73%',
    },
    'orange'
); //NOMEANDO ESSE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO

tl.to(
    '#folha',
    {
        top: '110%', //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        rotate: '530deg',
        left: '70%',
    },
    'orange'
); //NOMEANDO ESSE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO

tl.to(
    '#folha2',
    {
        top: '110%', //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        rotate: '530deg',
        left: '0%',
    },
    'orange'
); //NOMEANDO ESSE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO

// CRIANDO OUTRA TIMELINE
var tl2 =gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start:'0% 95%',
        end: '20% 50%', //Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da sessão .three)
        scrub: true,
        markers: true, //DEPURAÇÃO
    },
});

// Definindo a animação dos elementos com a timeline tl2
tl2.from(
    'lemon1',
    {
        rotate: '-90deg',
        left:  '-100%', 
        top:'110%',
    }    
)
// NOMEANDO ESTE TRECHO  DE ANIMAÇÃO COMO 'CA' PARA SINCRONIZAÇÃO
tl2.from(
    '#cocacola',
    {
        rotate: '-90deg', //Inicia o elemento com id 'cocacola' rotacionado em -90 graus
        top: '110$', // Inicia o elemento ligeiramente abaixo da tela (100% do topo)
        left: '-100%', // Inicia o elemento fora da tela, a esquerda (-100%)

    },
    'ca'
)

tl2.from(
    '#lemon2',
    {
        rotate: '90deg', //Inicia o elemento com id 'cocacola' rotacionado em -90 graus
        top: '110$', // Inicia o elemento ligeiramente abaixo da tela (100% do topo)
        left: '100%', // Inicia o elemento fora da tela, a esquerda (-100%)

    },
    'ca'
)

tl2.from(
    '#pepsi',
    {
        rotate: '90deg', //Inicia o elemento com id 'cocacola' rotacionado em -90 graus
        top: '110$', // Inicia o elemento ligeiramente abaixo da tela (100% do topo)
        left: '100%', // Inicia o elemento fora da tela, a esquerda (-100%)

    },
    'ca'
)

tl2.to(
    '#laranja-fatiada',
    {
        width: '18%',
        left: '41%',
        top: '197%',
    },
    'ca'
);


tl2.to(
    '#fanta',
    {
        width: '26%',
        left: '37%',
        top: '208%',
    },
    'ca'
);


