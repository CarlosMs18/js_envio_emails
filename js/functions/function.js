import {formularioEmail,asunto,mensaje,email ,btnEnviar} from '../helpers/selector.js'	
import ui from '../classes/UI.js'
import { nuevoContacto } from '../API/api.js'


const verificacionEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function eventListener(){
    document.addEventListener('DOMContentLoaded',iniciarApp)
    formularioEmail.addEventListener('submit',enviarEmail)
    asunto.addEventListener('blur',validarCampo)
    mensaje.addEventListener('blur',validarCampo)
    email.addEventListener('blur',validarCampo)
}


function validarCampo(e){
    if(e.target.value === ''){
        ui.mostrarErrores('Los campos no pueden estar vacios', 'error')
        e.target.classList.remove('border', 'border-green-500')
        e.target.classList.add('border', 'border-red-500')
    }else{
        e.target.classList.remove('border', 'border-red-500')
        e.target.classList.add('border', 'border-green-500')
    }


    if(e.target.type === 'email'){
        if(verificacionEmail.test(e.target.value)){
            e.target.classList.remove('border', 'border-red-500')
            e.target.classList.add('border', 'border-green-500')
        }else{
            e.target.classList.remove('border', 'border-green-500')
            e.target.classList.add('border', 'border-red-500')
        }
    }

    if(verificacionEmail.test(email.value) != '' && asunto.value != '' &&  mensaje.value !=''){
        btnEnviar.disabled = false
    }else{
        btnEnviar.disabled = true
    }
}

function enviarEmail(e){
    e.preventDefault()

    const objEmail = {
        id: Date,
        email : email.value,
        asunto : asunto.value,
        mensaje :mensaje.value
    }


    nuevoContacto(objEmail)
 

}

function iniciarApp(){
    btnEnviar.disabled = true
}