document.addEventListener("DOMContentLoaded", function () {
    const soilForm = document.getElementById("soilForm");
    const cancelBtn = document.getElementById("cancelBtn");

    document.getElementById("soilMin").value = localStorage.getItem("soilMinZone3") || "";
    document.getElementById("soilMax").value = localStorage.getItem("soilMaxZone3") || "";

    soilForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const soilMin = document.getElementById("soilMin").value;
        const soilMax = document.getElementById("soilMax").value;

        if (soilMin && soilMax) {
            localStorage.setItem("soilMinZone3", soilMin);
            localStorage.setItem("soilMaxZone3", soilMax);
            alert("บันทึกค่าความชื้นในดินสำเร็จ! (โซน 3)");
            localStorage.setItem("updateSettingZone1", "true");
            window.location.href = "setting-zone3.html";
        } else {
            alert("กรุณากรอกค่าความชื้นให้ครบ!");
        }
    });

    cancelBtn.addEventListener("click", function () {
        window.location.href = "setting-zone3.html";
    });
});
