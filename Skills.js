function introduce_skills(){


    const tl = gsap.timeline({defaults:{duration:0, ease:"linear"}})
    tl.to("#card1-id",{x:-400,duration:2,ease:'power4.out'})
    tl.to("#card1-id",{duration:2, rotation:'-180deg',ease:"expo.in"},0.15)
    tl.to("#card1-id",{x:500,duration:0.3,ease:'linear'},2.15,)
    tl.to("#card1-id",{rotation:'0deg'},2.5)
    tl.to("#card1-id",{y:500},2.5)
    tl.to("#card1-id",{x:'50%',duration:2.65,ease:"elastic(0.5,0.5)"},2.5)
   
    

    tl.to("#card2-id",{x:-400,duration:2,ease:'power4.out'},0.2)
    tl.to("#card2-id",{duration:2, rotation:'-180deg',ease:"expo.in"},0.15+0.2)
    tl.to("#card2-id",{x:500,duration:0.3,ease:'linear'},2.15+0.2,)
    tl.to("#card2-id",{rotation:'0deg'},2.5+0.2)
    tl.to("#card2-id",{y:500},2.5+0.2)
    tl.to("#card2-id",{x:-800,duration:2.65,ease:"elastic(0.5,0.5)"},2.5+0.2)

    tl.to("#card3-id",{x:-400,duration:2,ease:'power4.out'},0.4)
    tl.to("#card3-id",{duration:2, rotation:'-180deg',ease:"expo.in"},0.15+0.4)
    tl.to("#card3-id",{x:500,duration:0.3,ease:'linear'},2.15+0.4,)
    tl.to("#card3-id",{rotation:'0deg'},2.5+0.4)
    tl.to("#card3-id",{y:500},2.5+0.2)
    tl.to("#card3-id",{x:-600,duration:2.65,ease:"elastic(0.5,0.5)"},2.5+0.4)

    tl.to("#card4-id",{x:-400,duration:2,ease:'power4.out'},0.6)
    tl.to("#card4-id",{duration:2, rotation:'-180deg',ease:"expo.in"},0.15+0.6)
    tl.to("#card4-id",{x:500,duration:0.3,ease:'linear'},2.15+0.6,)
    tl.to("#card4-id",{rotation:'0deg'},2.5+0.6)
    tl.to("#card4-id",{y:500},2.5+0.6)
    tl.to("#card4-id",{x:-400,duration:2.65,ease:"elastic(0.5,0.5)"},2.5+0.6)

    tl.to("#card5-id",{x:-400,duration:2,ease:'power4.out'},0.8)
    tl.to("#card5-id",{duration:2, rotation:'-180deg',ease:"expo.in"},0.15+0.8)
    tl.to("#card5-id",{x:500,duration:0.3,ease:'linear'},2.15+0.8,)
    tl.to("#card5-id",{rotation:'0deg'},2.5+0.8)
    tl.to("#card5-id",{y:500},2.5+0.8)
    tl.to("#card5-id",{x:-200,duration:2.65,ease:"elastic(0.5,0.5)"},2.5+0.8)

    

    

    

}