
/*galerie*/
$( ".img_anime" ).mouseover( function () {
    var src = this.getAttribute("src")
    $(".displaying_anime").html(`<img src="${src}" alt="manga"><p>Généré en Jquery</p>`)
} )






//scroll magic controller
var controller = new ScrollMagic.Controller();
//scroll magic scene

var scene = new ScrollMagic.Scene( {
    triggerElement: ".sect-1",
    offset:-40,
} )
    .setClassToggle('sect-1',"fade-in")
    .addTo( controller )
    scene.addIndicators( { name: "anim", colorTrigger: "red", indent: 20 } )