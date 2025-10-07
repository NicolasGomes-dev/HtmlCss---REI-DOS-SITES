//Criação de uma timeline com GSAP com animações sincronizadas com o scroll
var tl =gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start:'0% 95%',
        end: '70% 50%',
        scrub:true,
        markers: true, //DEPURAÇÃO
    },
})