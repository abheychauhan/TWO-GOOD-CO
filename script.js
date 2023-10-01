function Locoscroll(){
    gsap.registerPlugin(ScrollTrigger);
  
    ScrollTrigger.defaults({
      scroller: '#main',
      markers: false
    });
    
    var scroll = new LocomotiveScroll( {
        el: document.querySelector( '#main' ),
        smooth: true,
        multiplier: .8,
        getDirection: true,
    });
    
    // Update scroll position
    scroll.on( 'scroll', ( instance ) => {
        ScrollTrigger.update();
        document.documentElement.setAttribute( 'data-scrolling', instance.direction );
    });
    
    // Scroll position for ScrollTrigger
    ScrollTrigger.scrollerProxy( '#main', {
        scrollTop( value ) {
            return arguments.length ? scroll.scrollTo( value, 0, 0 ) : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector( '#main' ).style.transform ? "transform" : "fixed"
    } );
    
    
    ScrollTrigger.addEventListener( 'refresh', () => scroll.update() );
    ScrollTrigger.refresh();
    
}
Locoscroll();




function frontPageAnimation(){
    gsap.from(".anim h1",{
        y:200,
        duration:.6,
        stagger:.3
    })
    gsap.from("nav",{
        y:-50,
        duration:1,
        opacity:0,
    })
    gsap.to("nav .part1 svg , .part2 .links",{
        transform:"translateY(-130%)",
        scrollTrigger:{
            trigger:".page1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub:.1
           
    
        }
    })
    gsap.to(" .part2 .links",{
        transform:"translateY(-150%)",
        scrollTrigger:{
            trigger:".page1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub:.1
           
    
        }
    })
}
frontPageAnimation();


document.addEventListener("mousemove",function(dets){
   
        gsap.to("#cursor",{
            top:dets.y,
            left:dets.x,
        })
    
})
document.querySelectorAll(".items").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform:'translate(-50%,-50%)  scale(1)'
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform:'translate(-50%,-50%)  scale(0)'
        })
    })
  
})
