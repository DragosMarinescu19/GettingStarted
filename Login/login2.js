let attempt = 3;

function CheckUser() {
  let username = document.getElementById("username").value;
  let userElement = document.getElementById("username");
  let userLabel = document.getElementById("user-label");

  if (username == "QubizIntern") {
    userElement.style.color = "green";
    userLabel.style.color = "green";
    userElement.style.border = "1px solid green";

    document.getElementById("user-checkmark").style.opacity = "1";
    document.getElementById("user-xmark").style.opacity = "0";
  } else {
    usernameElement.style.color = "red";
    userLabel.style.color = "red";
    userElement.style.border = "1px solid red";

    document.getElementById("user-checkmark").style.opacity = "0";
    document.getElementById("user-xmark").style.opacity = "1";
  }
}

function CheckPassword() {
  let password = document.getElementById("password").value;
  let passwordElement = document.getElementById("password");
  let passwordLabel = document.getElementById("password-label");

  if (password == "Qubiz2024") {
    passwordElement.style.color = "green";
    passwordLabel.style.color = "green";
    passwordElement.style.border = "1px solid green";

    document.getElementById("password-checkmark").style.opacity = "1";  
    document.getElementById("password-xmark").style.opacity = "0";
  } else {
    passwordElement.style.color = "red";
    passwordLabel.style.color = "red";
    passwordElement.style.border = "1px solid red";

    document.getElementById("password-checkmark").style.opacity = "0";
    document.getElementById("password-xmark").style.opacity = "1";
  }
}

function CheckForm() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let loginButton = document.getElementById("submit");

  if (username == "QubizIntern" && password == "Qubiz2024") {
    loginButton.style.backgroundColor = "green";
  } else {
    loginButton.style.backgroundColor = "red";
  }
}

function Validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "QubizIntern" && password == "Qubiz2024") {
    attempt = 3;
    login();
    //return false; //pt a nu se reincarca pagina
  } else {
    attempt--;
    alert("You have " + attempt + " left!");
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      //return false;
    }
  }
}

function login() {
  window.location =
    "file:///C:/Users/marin/OneDrive/Desktop/PracticaQubiz/EX1/Interfata/Interfata.html";
}
