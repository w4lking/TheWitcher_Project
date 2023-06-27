const video = document.getElementsByClassName("body");
const linkDoVideo = video.src;

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
//Somente Efeito
sr.reveal('.logo',{delay:200, origin:'top'});
sr.reveal('.imagem_titulo',{delay:200, origin:'left'});
sr.reveal('.icons',{delay:200, origin:'rigth'});
sr.reveal('p',{delay:200, origin:'rigth'});





