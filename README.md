# Jquery - Day 5
Fungsi jQuery untuk memastikan bahwa kode JavaScript di dalamnya hanya dijalankan setelah DOM (Document Object Model) telah sepenuhnya dimuat. 

    $(document).ready(function () {
    
    });
    
## Header
### Rotation Logo
    $('#logoImage').click(function () {
        $(this).addClass('rotate');
          
        var rotationCount = $(this).data('rotationCount') || 0;
        rotationCount++;
      
        var rotationAngle = 360 * rotationCount;
          
        $(this).css('transform', 'rotate(' + rotationAngle + 'deg)').data('rotationCount', rotationCount);
          
        setTimeout(function () {
          $(this).removeClass('rotate');
        }.bind(this), 500);
    });

### Nav toggle
    $('.burger').click(function () {
        if (window.innerWidth <= 768) {
          $('#navLinks').toggle();
        }
    });

    // Resize and Hide menu om display
    $(window).resize(function () {
        $('#navLinks').toggle(window.innerWidth > 768);
    });

## Login
### Username on Login Form
    $('#username').on('input', function () {
        var username = $(this).val();
        var errorElement = $('#usernameError');
      
        errorElement.html(username === "" ? "Field Username!" : ($.trim(username) === "" ? "Username cannot be just spaces!" : ""));
    });

### Password on Login Form
    $('#password').on('input', function () {
        var password = $(this).val();
        var hasUppercase = /[A-Z]/.test(password);
        var hasLowercase = /[a-z]/.test(password);
        var hasNumber = /\d/.test(password);
      
        var passwordError = (!hasUppercase ? " 1 Uppercase," : "") +
                            (!hasLowercase ? " 1 Lowercase," : "") +
                            (!hasNumber ? " 1 Number," : "");
      
        // Menghapus koma terakhir
        passwordError = passwordError.slice(0, -1);
      
        var errorElement = $('#passwordError');
      
        errorElement.html(password === "" ? "Field Password!" : (password.length < 4 || passwordError !== "" ? "Password must be at least 4 characters with:" + passwordError : ""));
    });
      
### Validate Form
    $('#form-login').submit(function (event) {
        event.preventDefault();
      
        // Reset pesan kesalahan sebelum validasi
        $('#usernameError').html("");
        $('#passwordError').html("");
      
        // Validasi username
        var username = $('#username').val();
        if (username === "" || $.trim(username) === "") {
          $('#usernameError').html("Field Username Correctly!");
        }
      
        // Validasi password
        var password = $('#password').val();
        var hasUppercase = /[A-Z]/.test(password);
        var hasLowercase = /[a-z]/.test(password);
        var hasNumber = /\d/.test(password);
        var passwordError = (!hasUppercase ? " 1 Uppercase," : "") +
                            (!hasLowercase ? " 1 Lowercase," : "") +
                            (!hasNumber ? " 1 Number," : "");
        passwordError = (password === "" || password.length < 4) ? "Field Password Correctly!" : (passwordError ? "Password must be at least 4 characters with:" + passwordError.slice(0, -1) : "");
        $('#passwordError').html(passwordError);
      
        // Cek apakah ada pesan kesalahan
        if (!$('#usernameError').html() && !$('#passwordError').html()) {
            // Jika tidak ada kesalahan, arahkan ke halaman about.html
            window.location.href = 'about.html';
        }
    });
      
### Show Password
    $('#showPasswordCheckbox').change(function () {
        var passwordInput = $('#password');
        passwordInput.prop('type', function (_, currentType) {
          return currentType === 'password' ? 'text' : 'password';
        });
    });

## Check CapsLock
    $('#username, #password').on('keydown keyup', function (event) {
        $("#capsLockWarning").css("display", event.originalEvent.getModifierState && event.originalEvent.getModifierState("CapsLock") ? "inline" : "none");
    });
      
## About Me
### Zoom Profile Picture on aboutme 
    $('.profile-picture').click(function () {
        $(this).toggleClass('zoomed');
    });

## Fetch API 
    if (!$('#usernameError').html() && !$('#passwordError').html()) {
        $.ajax({
            url: 'https://dummyjson.com/auth/login',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                username: username,
                password: password,
            }),
            success: function (data, xhr) {
                console.log("Response status:", xhr.status);
                console.log("Data from API:", data);
                    
                if (data && data.token) {
                    console.log("Login successful. Redirecting...");
                    window.location.href = 'about.html';
                } else {
                    alert("Login failed. Please try again.");
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.error("Error connecting to the authentication API:", errorThrown);
                alert("Error connecting to the authentication API. Please check your username and password.");
            }
        });
    }

`if (!$('#usernameError').html() && !$('#passwordError').html()) {`
This tests whether there is no text (empty) within the elements with the IDs `usernameError` and `passwordError`. If this condition is true, then the code block inside it will be executed

`$.ajax({ ... });`
Declaration of an AJAX call, subsequently filled with configurations that will send an HTTP POST request to the URL 'https://dummyjson.com/auth/login'

success: function (data, xhr) { ... }`
- A function that will be executed if the request is successful (HTTP status 200)
- Contains the parameter `data`, which is the response data from the server, and `xhr`, which contains the XMLHttpRequest object providing additional information about the response status (`xhr.status`)

`console.log("Response status:", xhr.status);`
Prints the response status to the console

`console.log("Data from API:", data);`
Prints the response data from the server to the console

`if (data && data.token) { ... } else { ... }`
If the server response has a `token` property, then the login is considered successful, and the user will be redirected to 'about.html'. If not, an error message is displayed

`error: function (xhr, textStatus, errorThrown) { ... }`
If the request encounters an error. The parameter `xhr` contains the XMLHttpRequest object providing information about the error, such as the error status (`xhr.status`), `textStatus` contains the error status in text form, and `errorThrown` contains a text description of the error

`console.error("Error connecting to the authentication API:", errorThrown);`
Prints the error message to the console if there is an error in the AJAX request

`alert("Error connecting to the authentication API. Please try again later.");`
Displays an error message through an alert dialog if there is an error in the AJAX request

# --------------------------------------------------
# Java Script - Day 4
#### Note : For readme day 1, 2, 3 please check on branch day 3

## When the logo next to the welcome message is clicked, it will have a 360-degree rotation effect.
Add HTML 'onclick="rotateLogo()"' on div logo and 'id="logoImage"' on img for logo :

    <div id="logo" class="logo" onclick="rotateLogo()">
        <img id="logoImage" src="src/6333043.jpg" alt="logo" ><span>Welcome</span>
    </div>
    
Add CSS :

    .rotate {
        transition: transform 0.5s ease;
    }
    
Add Script :

    var rotationCount = 0;
    
    function rotateLogo() {
        // Get the image element
        var logoImage = document.getElementById('logoImage');
    
        // Add the "rotate" class to trigger the rotation animation
        logoImage.classList.add('rotate');
    
        // Save the current rotation count
        rotationCount++;
    
        // Calculate the rotation angle based on the click count
        var rotationAngle = 360 * rotationCount;
    
        // Set the rotation transformation based on the rotation angle
        logoImage.style.transform = 'rotate(' + rotationAngle + 'deg)';
    
        // Remove the "rotate" class after the animation is complete
        setTimeout(function() {
            logoImage.classList.remove('rotate');
        }, 500); // Adjust according to the CSS transition duration
    }

**var rotationCount = 0;** is used to keep track of how many times the logo has been rotated. This is useful so that every time the logo is clicked, the rotation angle is updated by multiplying the click count by 360 degrees. 

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

Add `id="capsLockWarning"` to the showPasswordLabel label to create the warning display 

    <span id="capsLockWarning" class="warning-message"><i class='bx bxs-error'></i> Caps Lock is ON</span> 

## Add zoom animation image profile on aboutme.html
Add `onclick="zoomImage()"` on HTML figure about-me-section

    <figure class="profile-picture" onclick="zoomImage()">
        <img src="src/foto__1___1_-removebg-preview.png" alt="Profile Image">

Add CSS to setting transition and zoom scale

    .profile-picture img {
        transition: transform 0.5s ease;
    }
    
    .profile-picture.zoomed img {
        transform: scale(1.5); /* Sesuaikan faktor zoom sesuai kebutuhan */
    }

Add JavaScript

    function zoomImage() {
        var profilePicture = document.querySelector('.profile-picture');
        profilePicture.classList.toggle('zoomed');
    }
