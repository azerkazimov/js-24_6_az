const form = document.querySelector(".login-form")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const submitButton = document.querySelector(".submit-button")
const emailError = document.querySelector(".error-text_email")
const passwordError = document.querySelector(".error-text_password")

const validate = {
    email: false,
    password: false
}

function validateEmail(email, showError = false) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email) && email.length > 1;

    validate.email = isValid

    if (showError) {
        if (!isValid) {
            showFieldError(emailInput, emailError, "Duzgun email daxil edin")
        } else {
            showFieldSuccess(emailInput, emailError)
        }
    }
    return isValid

}

function validatePassword(password, showError = false) {
    const isValid = password.length >= 6

    validate.password = isValid

    if (showError) {
        if (!isValid) {
            showFieldError(passwordInput, passwordError, "Sifre en azi 6 simvoldan ibaret olmalidir")
        } else {
            showFieldSuccess(passwordInput, passwordError)
        }
    }
    return isValid
}

function showFieldError(input, error, message) {
    if (input && error) {
        input.classList.remove("success")
        input.classList.add("error")
        error.textContent = message
        error.classList.add("show")

    }
}

function showFieldSuccess(input, error) {
    if (input && error) {
        input.classList.remove("error")
        input.classList.add("success")
        error.classList.remove("show")
    }
}

emailInput?.addEventListener("input", (e) => {
    validateEmail(e.target.value)
})

passwordInput?.addEventListener("input", (e) => {
    validatePassword(e.target.value)
})

async function loginUser() {
    if (!submitButton) {
        return
    }

    submitButton.classList.add('loading')
    submitButton.disabled = true

    // servere sorgunun imitasiyasi
    try {
        await new Promise(resolve => setTimeout(resolve, 2000))

        const formData = {
            email: emailInput?.value || "",
            password: passwordInput?.value || ""
        }

        if (formData.email === "admin@example.com" && formData.password === "123456") {
            sessionStorage.setItem("user", JSON.stringify({
                email: formData.email,
                loginTime: new Date().toISOString()
            }))

        } else {
            throw new Error("Yalnis email ve parol");
        }
    } catch (error) {
        // Handle error - e.g., show notification
        console.error(error);
        showNotification(error.message);
      } finally {
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
      }
}

function showNotification(message = "Please check your input") {
    alert(message); 
  }

form.addEventListener("submit", (e) => {
    e.preventDefault()
    e.stopPropagation()

    const emailValid = validateEmail(emailInput.value, true)
    const passwordValid = validatePassword(passwordInput.value, true)

    if (emailValid && passwordValid) {
        loginUser()
    } else {
        showNotification()
    }

    return false
})