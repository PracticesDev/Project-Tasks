
export const SaveLocalStorage = (key,e) => {

    //Elemento de LocalStorage

    let element = JSON.parse(localStorage.getItem(key));

    //console.log(element)
    
    //Verificar si es Array
    
    if(Array.isArray(element)){
        element.push(e)
    }else{
        element = [e]
    }

    //Guarda en el LocalStorage

    localStorage.setItem(key, JSON.stringify(element));

    return e

}
