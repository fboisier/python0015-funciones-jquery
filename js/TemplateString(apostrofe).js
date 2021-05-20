let nombre = "FRANCISCO";
let apellido = "BOISIER"
let ciudad = "TEMUCO"
let edad = 36;

let resultado = "El nombre es: '" + nombre + " " + apellido + "' de la ciudad de " + ciudad + " con \"" + edad + "\" años de edad.";
resultado = 'El nombre es: "' + nombre + ' ' + apellido + '" de la ciudad de ' + ciudad + ' con \'' + edad + '\' años de edad.';
console.log(resultado);


let url = "https://google.com";
let nombreLink = "GOOGLE LINK";
let id = 1;

console.log("<a data='"+id+"' href='"+ url +"'>" + nombreLink + "</a>");
console.log(`<a data="${id}" href="${url}">${nombreLink}</a>`);

//<a href="https://google.com">GOOGLE LINK</a>