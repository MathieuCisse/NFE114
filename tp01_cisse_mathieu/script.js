function handleSubmitForm() {
    event.preventDefault();

    if( !(document.getElementById('password').value == document.getElementById('confirm-password').value) ) {
        alert("Erreur au niveau de la confirmation de mot de passe !");
    }
    else {
        alert("Succès de la validation du formulaire !")
    }

    return false;
}