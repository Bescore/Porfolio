//caché
$( ".grow_img_sql" ).hide();

/*Une fonction qui agrandi l'image au clique 
de celle ci, en paramètre l'attribut "src" de l'image à afficher*/

function Growing_img ( img_src ) {

    $( img_src ).click( function grow() {
        var src = $( img_src ).attr( 'src' )
        $( ".grow_img_sql" ).fadeIn(500)
        $( ".grow_img_sql" ).attr( 'src', src );
    
        $( ".cont" ).css( 'opacity', "0.8" )
    })
    
    $( ".grow_img_sql").click( function  () {
        //$( ".grow_img_sql" ).attr( 'src', "" );
        $( ".grow_img_sql" ).fadeOut(500)
        $( ".cont" ).css( 'opacity', "1" )
    })
    
}

Growing_img( "#sql_1" );
Growing_img( "#sql_2" );

