// console.log(`comenzando script`)

// if(8 > 3) {

//     console.log(`el if se cumple`)
// }


// console.log(`script finalizado`)

        // const edad = +prompt(`ingresa edad`)
        // const edadrequerida = 15

        // if(edad > edadrequerida) {
        //     console.log(`el cliente puede ingresar`)
        // } else {
        //     console.error(`el cliente no puede ingresar`)

        // }


// vamos a pedirle a nuestro usuario que ingrese un numero cualquiera y vamos a evaluar si ese numero es par o impar, en caso de par mostraremos un alert diciendo que es par y si es impar mostrando que es par

function obtenerNumeroYValidar() {

    let numerodado = prompt(`Ingresar un numero`);

    
    if(numerodado === null) 
        {
        alert(`No ingresaste ningun numero`)
        return;
    }
        
    if(numerodado === "") {
        alert(`No ingresaste ningun numero`)
        return;
    }

    checkearNumeroParoImpar(numerodado)
}


function checkearNumeroParoImpar(value) {



        
    value = parseInt(value)

    if(value % 2 === 0) {

        alert(`el numero es par`)
    }
    else if (value % 2 === 1) {
        alert(`el numero es impar`)
    } else {
        alert(`no ingresaste un numero valido`)
    }

}






