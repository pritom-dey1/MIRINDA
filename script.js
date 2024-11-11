gsap.to(".top",{
    y:"0%",
    duration:1,

})
gsap.to(".page1>h5",{
    y:"0%",
    duration:1,

})
gsap.to(".top",{
    y:"100%",
    duration:0,
    scale:0.6,

})
gsap.to(".page1>h5",{
    y:"100%",
    duration:0,
    scale:0.5,

})
gsap.to(".top",{
rotate:360,
scale:1,
delay:1.5,

})
gsap.to(".page1>h5",{
   
    rotate:360,
    scale:1,
    delay:1.5,
})
const scroll = new LocomotiveScroll({
    el: document.querySelector('.mian'),
    smooth: true
});