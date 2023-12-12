// -------- Header --------
// Rotation Logo
var rotationCount = 0;

function rotateLogo() {
    var logoImage = document.getElementById('logoImage');

    logoImage.classList.add('rotate');

    rotationCount++;

    var rotationAngle = 360 * rotationCount;

    logoImage.style.transform = 'rotate(' + rotationAngle + 'deg)';

    setTimeout(function() {
        logoImage.classList.remove('rotate');
    }, 500); 
}

// -------- Navbar --------
function toggleNav() {
    var navLinks = document.getElementById("navLinks");

    if (window.innerWidth <= 768) {
        // Jika layar <= 768px, atur display sesuai dengan keadaan saat ini
        navLinks.style.display = (navLinks.style.display === "flex" || navLinks.style.display === "") ? "none" : "flex";
    }
}
// Menangani perubahan lebar layar untuk menyembunyikan menu saat lebar layar diperbesar
window.addEventListener('resize', function () {
    var navLinks = document.getElementById("navLinks");
    if (window.innerWidth > 768) {
        navLinks.style.display = "flex";
    } else {
        // Jika layar <= 768px, pastikan menu ditutup
        navLinks.style.display = "none";
    }
});

// -------- Login --------
// Validate Form
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

// Show Password
function showPassword() {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

// CapsLock
function checkCapsLock(event) {
    var capsLockWarning = document.getElementById("capsLockWarning");
    // Mendapatkan status Caps Lock dari event
    var isCapsLockOn = event.getModifierState && event.getModifierState("CapsLock");
    // Menampilkan atau menyembunyikan pesan peringatan
    capsLockWarning.style.display = isCapsLockOn ? "inline" : "none";
}
