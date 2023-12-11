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
// function validateForm(event) {
//     event.preventDefault(); // Add this line to prevent the default form submission behavior
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     var isValid = true;  // Variabel untuk menyimpan status validasi

//     // Validasi Username
//     if (username === "") {
//         document.getElementById('usernameError').innerHTML = "Field Username!";
//         isValid = false;
//     } else if (username.trim() == "") {
//         document.getElementById('usernameError').innerHTML = "Username cannot be just spaces!";
//         isValid = false;
//     } else {
//         document.getElementById('usernameError').innerHTML = "";
//     }

//     // Validasi tambahan untuk password berdasarkan karakter
//     var hasUppercase = /[A-Z]/.test(password);
//     var hasLowercase = /[a-z]/.test(password);
//     var hasNumber = /\d/.test(password);
//     var hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

//     var passwordError = "";

//     if (!hasUppercase) passwordError += " 1 Uppercase,";
//     if (!hasLowercase) passwordError += " 1 Lowercase,";
//     if (!hasNumber) passwordError += " 1 Number,";
//     if (!hasSpecialChar) passwordError += " 1 Special Character,";

//     // Menghapus koma terakhir
//     passwordError = passwordError.slice(0, -1);

//     if (password === "") {
//         document.getElementById('passwordError').innerHTML = "Field Password!";
//         isValid = false;
//     } else if (password.length < 4 || passwordError !== "") {
//         document.getElementById('passwordError').innerHTML = "Password must be at least 4 characters with: " + passwordError;
//         isValid = false;
//     } else {
//         document.getElementById('passwordError').innerHTML = "";
//     }

//     return isValid;


//     // Formulir valid
//     // alert("Berhasil Login!");
//     // return true;
//     // Menampilkan pesan kesalahan umum jika formulir tidak valid
//     // if (!isValid) {
//     //     alert("Tolong periksa kembali formulir Anda.");
//     // } else {
//     //     // Formulir valid, submit formulir secara manual
//     //     alert("Berhasil Login!");
//     //     document.forms[0].submit(); // Menyubmit formulir secara manual
//     //     return false; // Kembalikan false agar formulir tidak di-submit secara otomatis
//     // }
    
//     // Menampilkan pesan kesalahan umum jika formulir tidak valid
//     // if (!isValid) {
//     //     alert("Tolong periksa kembali formulir Anda.");
//     //     return false;
//     // } else {
//     //     // Formulir valid, submit formulir secara manual
//     //     alert("Berhasil Login!");
//     //     return true;
//     // }
// }

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
}

function showPassword() {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

function checkCapsLock(event) {
    var capsLockWarning = document.getElementById("capsLockWarning");
    // Mendapatkan status Caps Lock dari event
    var isCapsLockOn = event.getModifierState && event.getModifierState("CapsLock");
    // Menampilkan atau menyembunyikan pesan peringatan
    capsLockWarning.style.display = isCapsLockOn ? "inline" : "none";
}

// function redirects() {
//     // Pemanggilan fungsi untuk mengarahkan ke halaman "about.html"
//     window.location.href = "about.html";
//     // Mengembalikan false agar formulir tidak di-submit secara otomatis
//     return false;
// }

let rotationDegree = 0;

function rotateLogo() {
    rotationDegree += 360; // Ganti nilai ini sesuai dengan derajat rotasi yang diinginkan
    const logo = document.getElementById('logo').getElementsByTagName('img')[0];
    logo.style.transform = `rotate(${rotationDegree}deg)`;
}