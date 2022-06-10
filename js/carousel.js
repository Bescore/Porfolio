//section 2 carousel


var btn_right = document.querySelector( "#btn_right" );
var btn_left = document.querySelector( "#btn_left" );
var init = document.querySelector( ".init" )
var all_img = document.querySelectorAll( ".img_gif" )



//variable  qui permet de changer dynamiquement la propriété translate en css
var val = 0
// variable qui contrôle la position de l'action
var count = 0

//évènement sur le bouton de droite,val prend la "width" de l'image à chaque clique, count s'incrémente de 1 , si count est égale au nombre total d'image au clique effectue un slide en sens inverse qui est égale à la taille de l'image fois le nombre d'image.

$( btn_right ).click( function () {
    val -= 200
    init.style.transform = "translate(" + val + "px)"
    count += 1
    if ( count == all_img.length ) {
        val += 200 * all_img.length
        init.style.transform = "translate(" + val + "px)"
        count = 0
    }
} )

//voir précédent commentaire, même principe
$( btn_left ).click( function () {
    val += 200
    init.style.transform = "translate(" + val + "px)"
    count -= 1
    if ( count == -1 ) {
        val -= 200 * all_img.length
        init.style.transform = "translate(" + val + "px)"
        count = all_img.length - 1
    }
} )
//translate automatique
setInterval(() => {
    val -= 200
        init.style.transform = "translate(" + val + "px)"
        count += 1
        if ( count == all_img.length ) {
            val += 200 * all_img.length
            init.style.transform = "translate(" + val + "px)"
            count = 0
        }
}, 8000);