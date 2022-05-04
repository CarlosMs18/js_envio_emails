import {formularioEmail} from '../helpers/selector.js'	
class UI{
    constructor(){}

    mostrarErrores(mensaje, estado){
       const error = document.querySelector('.error')
       if(!error){
           const p = document.createElement('p')
           p.textContent = mensaje
           p.classList.add('border','border-error-500','background-color-100','text-red-500','p-3','mt-5','text-center','error')
           formularioEmail.appendChild(p)

       }
    }
}

const ui = new UI();

export default ui;