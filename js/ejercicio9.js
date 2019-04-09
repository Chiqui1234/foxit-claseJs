/*1- Se deberá realizar un programa en la cual pide al usuario nombre, apellido y edad, luego deberá evaluar si el usuario es mayor de edad.

2- Realizar un programa el cual deberá simular el logueo de pagina, deberá pedir usuario y contraseña, mandar un mensaje en el caso que alguno de los dos sea incorrecto

3- Realizar un programa que permita ingresar un importe en dólares , el valor del tipo de cambio y luego que se muestre por pantalla el importe especificado en pesos.

4- Escriba un programa que convierta una medida dada en pies y lo transforme en : a) Yardas , b) Pulgadas , c) Centímetros , d) Metros 


5- Se desea conocer el estado del clima de una ciudad , para ellos se ingresa en un cuadro de texto la temperatura , si la misma es mayor a 25 se debe mostrar una etiqueta que diga “Cálido” , si la temperatura esta entre 25 y 10 , se deberá mostrar una etiqueta que diga “Templado” , si la temperatura es menor a 10 , informar “ Frio” con una etiqueta

7- Realizar un programa que permita ingresar datos de edad  y sueldo de 10 empleados. Además de ingresar los datos el programa debe permitir al usuario consultar los datos y mostrarlos en pantalla*/
function comparator(a, b) // Punto 1
{
    if(a > b)
    {
        return true;
    }
    return false;
}

function submitForm() // Función auxiliar del punto 2
{
    var usernameField = document.getElementById('username');
    var passwordField = document.getElementById('password');
    console.log(usernameField.value + ':' + passwordField.value);
    login(usernameField.value, passwordField.value);
}

function login(username, password) // Punto 2
{
    let usernameDb = 'chiqui1234';
    let passwordDb = 'Test';
    if( username === usernameDb )
    {
        document.getElementById('d1').innerHTML = '<p>El usuario es correcto.</p>';
    } else { // Sino de username === usernameDb
        document.getElementById('d1').innerHTML = '<p>El usuario es incorrecto.</p>';
        }

    if( password === passwordDb )
    {
        document.getElementById('d2').innerHTML = '<p>La contrasena es correcta.</p>';
    } else {
        document.getElementById('d2').innerHTML = '<p>La contrasena es incorrecta.</p>';
        }
}

function multiplier() // Punto 3
{
    var value = parseFloat(prompt('Ingresá el importe: '));
    var multiply = parseFloat(prompt('U$D 1 es igual a: '));
    alert('Tus U$D ' + value + ' equivalen a AR$ ' + value*multiply);
}