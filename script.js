function page1Animation(){
    var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button", {
        y:-40,
        opacity:0,
        delay:0.3,
        duration:0.7,
        stagger:0.15
    })
    tl.from(".center-part1 h1", {
        x:-200,
        opacity:0,
        duration:0.4,
    }, "-=0.5")
    tl.from(".center-part1 p", {
        x:-100,
        opacity:0,
        duration:0.3,
    })
    tl.from(".center-part1 button", {
        opacity:0,
        duration:0.4,
    })
    tl.from(".center-part2 img", {
        opacity:0,
        duration:0.5,
        x:200,
    }, "-=1.2")
    tl.from(".section1bottom img", {
        opacity:0,
        y:30,
        stagger:0.15,
        duration:0.6
    })
}

page1Animation()

// page2
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger:".section2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:2,
    }
})

tl2.from(".services", {
    y:30,
    opacity:0,
    duration:0.5
})
tl2.from(".elem.line1.left", {
    x:-300,
    opacity:0,
    duration:1
},"animal")
tl2.from(".elem.line1.right", {
    x:300,
    opacity:0,
    duration:1
}, "animal")
tl2.from(".elem.line2.left", {
    x:-300,
    opacity:0,
    duration:1
},"animal1")
tl2.from(".elem.line2.right", {
    x:300,
    opacity:0,
    duration:1
}, "animal1")


gsap.from(".section3", {
    opacity:0,
    scrollTrigger:{
        trigger:".section3",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0%",
        scrub:1,
    }
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger:".section4",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})

tl3.from(".casestudy", {
    y:30,
    opacity:0,
    duration:0.5
})


gsap.to(".container3", {
    x: "5vw", // Move the container from left to right across the viewport width
    duration: 1, // Duration of one complete animation
    repeat: -1, // Infinite loop
    ease: "none", // Smooth linear motion (constant speed)
    yoyo: true // Moves back to the original position after reaching 100vw
});

