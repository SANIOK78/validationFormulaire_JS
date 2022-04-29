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

  // 2.- Verification nomUtilisateur
  if(userValue === ""){
    let msgErreur = "Le champ ne peut pas être vide";
    setError(userName, msgErreur);
  } 
  // on va verifier si l'user ne commence pas le nom par un chiffre
  else if ( !userValue.match(/^[a-zA-Z]/)){
    msgErreur = "Username doit commencer par une lettre";
    setError(userName, msgErreur);
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