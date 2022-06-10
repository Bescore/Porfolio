/*galerie*/
$( ".img_anime" ).mouseover( function () {
    var src = this.getAttribute("src")
    $(".displaying_anime").html(`<img src="${src}" alt="manga"><p>Généré en Jquery</p>`)
} )