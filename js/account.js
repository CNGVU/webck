function KT() {
    var a = document.forms["account"]["ho"].value;
    var b = document.forms["account"]["ten"].value;
    var c = document.forms["account"]["ngsinh"].value;
    var d = document.forms["account"]["sdt"].value;
    var e = document.forms["account"]["email"].value;
    var f = document.forms["account"]["password"].value;
    if (((a == "") || (a == " ")) || ((b == "") || (b == " "))
        || ((c == "") || (c == " ")) || ((d == "") || (d == " "))
        || ((e == "") || (e == " ")) || ((f == "") || (f == " "))) {
        alert("Vui lòng nhập đầy đủ thông tin")
        return false;
    }
    else {
        alert("Đăng ký thành công");
        return false;
    }
}