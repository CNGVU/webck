function KT() {
    var a = document.forms["login"]["name"].value;
    var b = document.forms["login"]["password"].value;
    if ((a == "") != (a == " ")) {
        alert("Vui lòng nhập tên");
        document.login.name.focus();
        return false;
    }
    if ((b == "") != (b == " ")) {
        alert("Vui lòng nhập mật khẩu");
        return false;
    }
    if ((a != "")) {
        alert("Đăng nhập thành công");
        return false;
    }
    if ((b != "")) {
        alert("Đăng nhập thành công");
        return false;
    }
    if ((a == "Cao Nguyen Vu") && (b == "123456789")) {
        alert("Đăng nhập thành công");
        return false;
    }
}