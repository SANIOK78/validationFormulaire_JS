// Récupérations des éléments
const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const motPass = document.querySelector("#password");
const motPass2 = document.querySelector("#password2");
const bouton = document.querySelector(".btn");

// Evenements
form.addEventListener("submit", event => {
  event.preventDefault();

  formVerify();
})

// fonctions
function formVerify() {
  //1.- Obtenir toutes les valeurs des 'inputs'
  //.trim() =>enlev les espases de debut et fin

  const userValue = userName.value.trim(); 
  const emailValue = email.value.trim(); 
  const pwdValue = motPass.value.trim(); 
  const pwd2Value = motPass2.value.trim(); 

  // 2.- Verification nom_Utilisateur
  if(userValue === ""){
    let msgErreur = "Le champ ne peut pas être vide";
    setError(userName, msgErreur);
  } 
  // on va verifier si l'user ne commence pas le nom par un chiffre
  else if ( !userValue.match(/^[a-zA-Z]/)){
    msgErreur = "Username doit commencer par une lettre";
    setError(userName, msgErreur);
  }
  //verifier si le champs contient au moin 3 caractères. CAS VALID
  else {
    let nombrLettres = userValue.length;
    if(nombrLettres < 3){
      let msgErreur = "Username doit avoir au moins 3 caractères";
      setError(userName, msgErreur);
    } else {  //tous les champs sont valids
      setSuccess(userName);
    } 
  }

  // 3. - verification d'email
  if(emailValue === ""){
    let msgErreur = "Champ email ne doit pas être vide";
    setError(email, msgErreur);
  } else if( !verifEmail(emailValue)) {  //si ça coincide/match pas
    let msgErreur = "Email format non valide" ;
    setError(email, msgErreur);
  }
  // si le format est valid
  else{
    setSuccess(email);

  }

  // Verification des mot de pass
  if(pwdValue === "") {
    let msgErreur = "Rentrez un mot de passe";
    setError(motPass, msgErreur);
  } else if (!verifPassword(pwdValue)) {
    let msgErreur = "Mot de passe faible (8 - 12 caractères)";
    setError(motPass, msgErreur);
  } else {
    setSuccess(motPass);
  }

  // pwd confirm
  if(pwd2Value === "") {
    let msgErreur = "Confirmez le mot de passe";
    setError(motPass2, msgErreur);
  }  else if(pwdValue !== pwd2Value){
    let msgErreur = "Les mot de passes ne correspondent pas";
    setError(motPass2, msgErreur);
  } else {
    setSuccess(motPass2);
  }
};

function setError(elem, message) {
  // on récupére la div parente
  const formControl = elem.parentElement;
   // on récupére 'small' de la div parente
  const small = formControl.querySelector('small');

  // Ajout message d'erreur
  small.innerText = message;

  // Ajoute de la class 'erreur
  formControl.className = "form-control erreur";

};

//function en cas de succes de validation
function setSuccess(elem) {
  // on récupére la div parente
  const formControl = elem.parentElement;
  formControl.className = 'form-control success';
};

// function qui a le rôle de verifier l'@ mail. 
function verifEmail(email) {
  /**
   *ex:  r_rona.22-t@gmail.com
         /^[a-z0-9._-]+@[a-z0-9._-]{2,20}\.[a-z]{2,4}$/
  */

  //elle va comparer avec les valeurs rentre par user (.test(email))
  // et retourner 'true' ou 'false'
  return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
};

// fonction qui va verifier le mot de passe
function verifPassword(password){
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(password);
}