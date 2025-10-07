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
        left: '0%',
    },
    'orange'
); //NOMEANDO ESSE TRECHO DE ANIMAÇÃO COMO 'orange' PARA SINCRONIZAÇÃO