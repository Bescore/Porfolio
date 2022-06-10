//scroll magic controller
var controller = new ScrollMagic.Controller();
//scroll magic scene

var scene = new ScrollMagic.Scene( {
    triggerElement: ".sect-1",
    offset:100,
} )
    .setClassToggle('.sect-2',"fade-in")
    .addTo( controller )
//scene.addIndicators( { name: "anim", colorTrigger: "red", indent: 20 } )
    