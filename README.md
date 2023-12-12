# Java Script - Day 4
#### Note : For readme day 1, 2, 3 please check on branch day 3

## //When the logo next to the welcome message is clicked, it will have a 360-degree rotation effect.

## Add show password feature, where checking the checkbox will display the text in the password field.
Script:

    function showPassword() {
        var passwordInput = document.getElementById('password');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    }
    
Add label on HTML

    <label id="showPasswordLabel">
        <input type="checkbox" onclick="showPassword()">Show Password</label>

## Add Form Validation and Error Text for Form Submission with Empty Username or Incorrect Password Criteria
For error-message add :
HTML Input Username:

    <span id="usernameError" class="error-message"></span>
    
HTML Input Password:

    <span id="passwordError" class="error-message"></span>

### Username Script
    function validateUsername() {
        var username = document.getElementById('username').value;
    
        if (username === "") {
            document.getElementById('usernameError').innerHTML = "Field Username!";
        } else if (username.trim() == "") {
            document.getElementById('usernameError').innerHTML = "Username cannot be just spaces!";
        } else {
            document.getElementById('usernameError').innerHTML = "";
        }
    }

// With this code, we validate the username using the 'username' element by id. With a few conditions:

1. If the username is empty, it will display the error message "Field Username!"
2. If the username contains only spaces, it will display the error message "Username cannot be just spaces!"
3. If neither of the above conditions is met, it means the username is valid.

### Password Script
#### Note: Script for Password Criteria - Minimum 1 uppercase letter, 1 lowercase letter, 1 number, 1 symbol)
    function validatePassword() {
    var password = document.getElementById('password').value;
    var hasUppercase = /[A-Z]/.test(password);
    var hasLowercase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    var passwordError = "";

    if (!hasUppercase) passwordError += " 1 Uppercase,";
    if (!hasLowercase) passwordError += " 1 Lowercase,";
    if (!hasNumber) passwordError += " 1 Number,";
    if (!hasSpecialChar) passwordError += " 1 Special Character,";

    // Menghapus koma terakhir
    passwordError = passwordError.slice(0, -1);

    if (password === "") {
        document.getElementById('passwordError').innerHTML = "Field Password!";
    } else if (password.length < 4 || passwordError !== "") {
        document.getElementById('passwordError').innerHTML = "Password must be at least 4 characters with: " + passwordError;
    } else {
        document.getElementById('passwordError').innerHTML = "";
    }
}

// With this code, we validate the password using the 'password' element by id. 
Explanations of the code components:
Before entering the conditions, we declare variables:

1. **`var password = document.getElementById('password').value;`:** Reads the input value from the HTML element with ID 'password' and stores it in the variable `password`.

2. **`var hasUppercase = /[A-Z]/.test(password);`, `var hasLowercase = /[a-z]/.test(password);`, `var hasNumber = /\d/.test(password);`, `var hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);`:** Checks if the password meets certain criteria.

3. **`var passwordError = "";`:** Creates the `passwordError` variable, which will be used to store password-related error messages.

With conditions:
1. If the password is empty, it will display the error message "Field Password!"
2. If the password length is less than 4 characters or there is an error in the criteria (for example, no uppercase letter, lowercase letter, number, or special character), the corresponding error message will be displayed.

Then, `passwordError = passwordError.slice(0, -1);`: Removes the last comma from `passwordError` to ensure correct grammar in the error message.

### Function Form Validation
    function validateForm(event) {
        event.preventDefault(); // Untuk menjalankan validasi sebelum formulir benar-benar di-submit 
        validateUsername();
        validatePassword();
    }
    
This validateForm function serves as a comprehensive validation manager for the form and will be executed when the form is submitted. It calls the validateUsername and validatePassword functions created earlier

## Form validation for password criteria is also performed while typing/inputting the password
### Username
Add `oninput="validateUsername()"` to the HTML input for the username.
### Password
Add `oninput="validatePassword()"` to the HTML input for the password.

## If both username and password are filled, upon submission, the page will be redirected to the about page.
    function validateForm(event) {
        event.preventDefault();
        validateUsername();
        validatePassword();
    
        // Ambil pesan kesalahan dari kedua validasi
        var usernameErrorMessage = document.getElementById('usernameError').innerHTML;
        var passwordErrorMessage = document.getElementById('passwordError').innerHTML;
    
        // Cek apakah tidak ada pesan kesalahan
        if (usernameErrorMessage === "" && passwordErrorMessage === "") {
            // Jika tidak ada kesalahan, arahkan ke halaman about.html
            window.location.href = 'about.html';
        }
    }

In the validateForm function, after performing validations in the validateUsername() and validatePassword() functions, a check is made. If there are no error messages (both validations are successful), then `window.location.href = 'about.html';` is used to redirect the user to the **about.html** page.
## Add a warning if capslock on the keyboard is ON. The warning disappears if caps lock is OFF.
    function checkCapsLock(event) {
        var capsLockWarning = document.getElementById("capsLockWarning");
        // Mendapatkan status Caps Lock dari event
        var isCapsLockOn = event.getModifierState && event.getModifierState("CapsLock");
        // Menampilkan atau menyembunyikan pesan peringatan
        capsLockWarning.style.display = isCapsLockOn ? "inline" : "none";
    }
Add to HTML input for username and password

    onkeydown="checkCapsLock(event)"

Add id="capsLockWarning" to the showPasswordLabel label to create the warning display 

    <span id="capsLockWarning" class="warning-message"><i class='bx bxs-error'></i> Caps Lock is ON</span> 

    
