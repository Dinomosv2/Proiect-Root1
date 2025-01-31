document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    showRegister.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    });

    showLogin.addEventListener("click", function (e) {
        e.preventDefault();
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
       
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        if (username === "admin" && password === "1234") { 
            alert("เข้าสู่ระบบสำเร็จ! กำลังเปลี่ยนเส้นทาง...");
            window.location.href = "/main-control"; 
        } else {
            alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!");
        }
    });
});
