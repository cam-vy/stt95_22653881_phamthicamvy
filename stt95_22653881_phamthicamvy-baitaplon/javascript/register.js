
function validateForm() {
    clearErrors();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirm = document.getElementById('confirm').value.trim();

    var nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    if (name && !nameRegex.test(name)) {
        alert('Tên không hợp lệ! Tên phải có ít nhất 2 từ, bắt đầu bằng chữ in hoa và không chứa ký tự đặc biệt.');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        alert('Địa chỉ email không hợp lệ');
        return false;
    }

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (password && !passwordRegex.test(password)) {
        alert('Mật khẩu không hợp lệ. Mật khẩu phải dài ít nhất 8 ký tự và chứa ít nhất một chữ hoa, một chữ thường và một chữ số.');
        return false;
    }

    if (password !== confirm) {
        alert('Mật khẩu không phù hợp');
        return false;
    }

    // Check if email already exists in localStorage
    var registeredEmails = JSON.parse(localStorage.getItem('registeredEmails')) || [];
    if (registeredEmails.includes(email)) {
        alert('Email này đã được đăng ký. Vui lòng sử dụng một email khác.');
        return false;
    } else {
        // Add new email to registeredEmails array and save to localStorage
        registeredEmails.push(email);
        localStorage.setItem('registeredEmails', JSON.stringify(registeredEmails));
    }

    // Save user information to localStorage
    var userInfo = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    alert('Đăng ký thành công!');

    // Reset form
    //document.getElementById('registrationForm').reset();
    window.location.href = "login.html";
    return false; 
}

function clearErrors() {
    var errorMessages = document.getElementsByClassName('error-message');
    for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].textContent = '';
    }
}