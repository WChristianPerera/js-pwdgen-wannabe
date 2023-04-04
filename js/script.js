const userName = prompt ('Come ti chiami ?');
document.getElementById('u-name').innerHTML = userName;

const userSurname = prompt (`Qual'è il tuo cognome ?`);
document.getElementById('u-surname').innerHTML = userSurname;

const favouriteColour = prompt (`Qual'è il tuo colore preferito ?`);
document.getElementById('color').innerHTML = favouriteColour;


const generatePassword = userName + userSurname + favouriteColour;
const createPassword = generatePassword;
document.getElementsById('password').innerHTML = createPassword;