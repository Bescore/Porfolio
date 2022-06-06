
/*galerie*/
$( ".img_anime" ).mouseover( function () {
    var src = this.getAttribute("src")
    $(".displaying_anime").html(`<img src="${src}" alt="manga"><p>Généré en Jquery</p>`)
} )

/*ajax*/

$.ajax( {
    url: '',
    dataType: 'json',
    success: function ( data ) {
    },
    error: function f ( xhr ) {
        console.log( xhr )
    },
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