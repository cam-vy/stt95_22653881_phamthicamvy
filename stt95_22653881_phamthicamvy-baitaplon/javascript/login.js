function login() {
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
        var email = document.getElementById('inputEmail').value.trim();
        var password = document.getElementById('inputPassword').value.trim();
        if (email === userInfo.email && password === userInfo.password) {
            alert('Đăng nhập thành công!');
            window.location.href = 'index.html';
            return false;
        } else {
            alert('Email hoặc mật khẩu không chính xác!');
            resetForm();
            return false;
        }
    } else {
        alert('Chưa có người dùng nào đăng ký!');
        return false;
    }
}