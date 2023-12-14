// -------- Header --------
$(document).ready(function () {
    // Rotation Logo
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

    // Nav toggle
    $('.burger').click(function () {
        if (window.innerWidth <= 768) {
          $('#navLinks').toggle();
        }
    });

    // Resize and Hide menu om display
    $(window).resize(function () {
        $('#navLinks').toggle(window.innerWidth > 768);
    });

// -------- Login --------
    // Username on Login Form
    $('#username').on('input', function () {
        var username = $(this).val();
        var errorElement = $('#usernameError');
      
        errorElement.html(username === "" ? "Field Username!" : ($.trim(username) === "" ? "Username cannot be just spaces!" : ""));
    });

    // Password on Login Form
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
      
    // Validate Form
    $('#form-login').submit(function (event) {
        event.preventDefault();
      
        // Reset pesan kesalahan sebelum validasi
        $('#usernameError').html("");
        $('#passwordError').html("");
      
        // Validasi username
        
        var username = $('#username').val();
        if (username === "" || $.trim(username) === "") {
          $('#usernameError').html("Field Username Correctly!" );
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
      
        // Fetch API berdasarkan validasi username dan password
        if (!$('#usernameError').html() && !$('#passwordError').html()) {
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })
            .then(res => {
                console.log("Response status:", res.status);
                // Pastikan untuk mengembalikan res.json() agar dapat digunakan pada then selanjutnya
                return res.json();
            })
            .then(data => {
                console.log("Data from API:", data);
                // Check if the response status is 200
                if (data && data.token) {
                    // Tampilkan data di console
                    console.log("Login successful. Redirecting...");

                    // Redirect to the about page
                    window.location.href = 'about.html';
                } else {
                    // Handle unsuccessful login
                    alert("Login failed. Please try again.");
                }
            })
            .catch(error => {
                // Handle Fetch API error
                console.error("Error connecting to the authentication API:", error);
                alert("Error connecting to the authentication API. Please try again later.");
            });

        }
    });
      
    // Show Password
    $('#showPasswordCheckbox').change(function () {
        var passwordInput = $('#password');
        passwordInput.prop('type', function (_, currentType) {
          return currentType === 'password' ? 'text' : 'password';
        });
    });

    // Check CapsLock
    $('#username, #password').on('keydown keyup', function (event) {
        $("#capsLockWarning").css("display", event.originalEvent.getModifierState && event.originalEvent.getModifierState("CapsLock") ? "inline" : "none");
    });
      
// -------- About Me --------
    // Zoom Profile Picture on aboutme 
    $('.profile-picture').click(function () {
        $(this).toggleClass('zoomed');
    });
});
