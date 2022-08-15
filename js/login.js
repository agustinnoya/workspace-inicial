const email = document.getElementById("email")
const contraseña = document.getElementById("contraseña")
const button = document.getElementById("button")

button.addEventListener("click", (e) => {
    const data = {
        email: username.value,
        password: password.value
    }
    console.log(data)
})