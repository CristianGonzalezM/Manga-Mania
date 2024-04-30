function mostrarVentana() {
    if(document.getElementById("ventanaOnePiece")){
        /* Seccion de One Piece */
        document.getElementById("ventanaOnePiece").style.display = "block";
    } else if (document.getElementById("ventanaNaruto")) {
        /* Seccion de Naruto */
        document.getElementById("ventanaNaruto").style.display = "block";
    }
}

function cerrarVentana() {
    /* Seccion de One Piece */
    if(document.getElementById("ventanaOnePiece")) {
        /* Seccion de Naruto */
        document.getElementById("ventanaOnePiece").style.display = "none";
    } else if (document.getElementById("Naruto")){
        document.getElementById("ventanaNaruto").style.display = "none";
    }
}