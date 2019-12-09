// Elementos del formulario

const form = {
    nombre: document.querySelector('#nombre'),
    pass: document.querySelector('#pass'),
    ingresar: document.querySelector('#btn-submit')

};

// Creando Objeto to post


form.ingresar.addEventListener('click', () => {

    let objetoToSend = createObject(form.nombre.value, form.pass.value);

    console.log(objetoToSend);

    console.log(`Hola ${objetoToSend.nombre}, Tu pasword es: ${objetoToSend.pass}`);

//--------------- AJAX ---------------------

    const xhm = new XMLHttpRequest();//Definimos consulta AJAX

    
    xhm.onload = () => {//Respuesta del AJAX
        let respuesta = null;
        try {
            respuesta = JSON.parse(xhm.responseText);

            console.log(respuesta);
        } catch (e) {
            console.error('No se completo la recepción del JSON');
        }
        // console.log(xhm.responseText);
        // if (respuesta) {
        //     capturaResponse(respuesta);
        // }
    };

    let url = 'https://interview.vortexits.com/public/api/auth/login';//aquí se carga la URL del servicio

    xhm.open('post', 'url', true);

    xhm.setRequestHeader("Content-type", "application/json");

    xhm.responseType = 'json';

    xhm.send(objetoToSend);

});

// function capturaResponse(resp) {
//     if (respuesta) {//ingresar la condición de respuesta positiva
//         location.href = 'algún_archivo.html';//procesar hacia otra vista
//     }else{
//         console.log('error en el ultimo check point');
//     }

// }



// form.ingresar.addEventListener('click', ()=>{

//     const xhm = new XMLHttpRequest();//Definimos consulta AJAX


//     const Datos_obj = `nombre=${form.nombre.value}`;//Datos a enviar


//     let url = '';//aquí se carga la URL del servicio


//     xhm.open('post', 'url', true);

//     xhm.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xhm.responseType = 'json';
//     xhm.send(Datos_obj);

//     //---------------------------------------

//     xhm.onload = () =>{//Respuesta del AJAX
//         let Respuesta = null;
//         try{
//             respuesta = JSON.parse(xhm.responseText);
//         }catch(e){
//             console.error('No se completo la recepción del JSON');
//         }
//         // console.log(xhm.responseText);
//         if (respuesta){
//             handleResponse(respuesta);
//         }
//     };

//     function handleResponse (resp){
//         if(serverSAY_true){//ingresar la condición de respuesta positiva
//             location.href = 'algún_archivo.html';//procesar hacia otra vista
//         }

//     }
// });
