function handleSubmitForm() {

    if( $('#password').val() !== $('#confirm-password').val() ) {
        alert("Erreur au niveau de la confirmation de mot de passe !");
    }
    else {
        alert("Succès de la validation du formulaire !")
    }

    return false;
}