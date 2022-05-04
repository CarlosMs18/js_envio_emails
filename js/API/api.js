const url = 'http://localhost:4000/contactos'

export const nuevoContacto = async(contacto) =>{
    try {
        await fetch(url,{
            method : 'POST',
            body : JSON.stringify(contacto),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        
    } catch (error) {
        console.log(error)
    }
}