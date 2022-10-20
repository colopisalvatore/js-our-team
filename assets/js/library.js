//Genera un numero Random
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Ritorna TRUE se è un numero pari, altrimenti FALSE
function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

//Crea un DIV ALERT di notifica errore e stampa un messaggio di errore
function noticationError(msgError){
    const alert = document.createElement('div');
    alert.className = 'alert alert-danger';
    alert.innerHTML = msgError;
    return alert;
}

//Rimuove il primo DIV con la classe Alert
function removeFirstNotification(){
    const alertToRemove = document.querySelector('.alert');
    console.log(alertToRemove);
    if(alertToRemove) alertToRemove.remove();
}