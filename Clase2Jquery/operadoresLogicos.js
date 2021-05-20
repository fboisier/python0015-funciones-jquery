
// Y = &&
// O = ||

// la unica manera de que de true un Y es que todo sea TRUE.
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// la unica manera de que de false un O es que todo sea false.
// true || true = true
// true || false = true
// false || true = true
// false || false = false


if(color == "AZUL" && color != "ROJO" && color != "NEGRITA"){
    // aca se ejecuta el IF solo si todo lo anterior es verdadero
}

if(color == "AZUL" || color != "ROJO" || color != "NEGRITA"){
    // si cualquier de los valores anteriores dan TRUE entra a este if. 
}
