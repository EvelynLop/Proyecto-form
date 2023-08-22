document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#formulario')
const inputNombre = document.querySelector('#nombre');
const inputEdad = document.querySelector('#edge');
const inputNacimiento = document.querySelector('#date');
const inputEmail = document.querySelector('#email');
const inputCel = document.querySelector('#cel');
const selectCarrera = document.querySelector('#carrera');
const selectHorario = document.querySelector('#horario');
const list = document.querySelector('#list');

const array = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = inputNombre.value;
    const age = inputEdad.value;
    const date = inputNacimiento.value;
    const email = inputEmail.value;
    const cel = inputCel.value;
    const career = selectCarrera.value;
    const time = selectHorario.value;

    if(name && age && date && email && cel){
        array.push({nombre:name, edad:age, fecha:date, mail:email, celular: cel, carrera: career, horario:time});

        inputNombre.value = "";
        inputEdad.value = "";
        inputNacimiento.value = "";
        inputEmail.value = "";
        inputCel.value = "";
       
        console.log(array);

        changes();
    }
        
});
});


function changes(){
    list.innerHTML = "";

    array.forEach((user, index) =>{
        const usersList = document.createElement('li');
        usersList.textContent = `Nombre: ${user.name}, Edad: ${user.age}, Nacimiento: ${user.date}, Email:${user.email}, celular:${user.cel}, Carrera:${user.career}, Horario:${user.time}`;

        list.appendChild(usersList);
    });
};




