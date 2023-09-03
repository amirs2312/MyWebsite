
const sbt4 = document.getElementById("sbt4-id")
const sbt1 = document.getElementById("sbt1-id")
const sbt2 = document.getElementById("sbt2-id")
const sbt3 = document.getElementById("sbt3-id")
const sbt5 = document.getElementById("sbt5-id")

var state_skill = 0;
var state_about_me = 0;
var state_contact = 0;
var state_education = 0;
var state_home = 1;


    sbt4.addEventListener('mouseover',()=>{
      
        gsap.to("#sbti4-img-id",{rotation: '+=130',duration:0.75, ease:'power4.out'})

 }
)


sbt1.addEventListener('mouseover',()=>{
    const tl = gsap.timeline({defaults:{duration:0, ease:"linear"}})

    tl.to("#sbti1-img-id",{x:'+=2',duration:0.15, ease:'power4.out'})
    tl.to("#sbti1-img-id",{x:0,duration:0.15, ease:'power4.out'})

}
)



sbt3.addEventListener('mouseover',()=>{
    const tl = gsap.timeline({defaults:{duration:0, ease:"linear"}})

    tl.to("#sbti3-img-id",{y:'+=-2',duration:0.15, ease:'power4.out'})
    tl.to("#sbti3-img-id",{y:0,duration:0.4, ease:'bounce'})

}
)

sbt5.addEventListener('mouseover',()=>{
    const tl = gsap.timeline({defaults:{duration:0, ease:"linear"}})

    tl.to("#sbti5-img-id",{rotation:7,duration:0.15, ease:'power4.out'})
    tl.to("#sbti5-img-id",{rotation:-15,duration:0.15, ease:'power4.out'})
    tl.to("#sbti5-img-id",{rotation:0,duration:0.4, ease:'power4.out'})

}
)

sbt2.addEventListener('mouseover',()=>{
    const tl = gsap.timeline({defaults:{duration:0, ease:"linear"}})

    tl.to("#sbti2-img-id",{scale:1.2,duration:0.3, ease:'power4.out'})
    tl.to("#sbti2-img-id",{scale:1,duration:0.4, ease:'bounce'})

}
)

//click code starts here

sbt4.addEventListener('click',()=>{

    if(state_home == 1){
        removehome();
        state_home = 0;
    }
    if(state_skill==0){
    introduce_skills();
    state_skill = 1;
    }

}
)


function removehome(){
    const tl = gsap.timeline({defaults:{duration:0, ease:"linear"}})

    tl.to(".intro",{opacity: 0,duration:1, ease:'power4.in'})
    tl.to(".intro",{y:"+=-100",duration:1, ease:'power4.in'},0)
    tl.to(".bg-balance",{opacity: 0.1,duration:1, ease:'power4.in'},0)
}
