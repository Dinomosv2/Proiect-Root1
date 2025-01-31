document.addEventListener("DOMContentLoaded", function () {
    const soilForm = document.getElementById("soilForm");
    const cancelBtn = document.getElementById("cancelBtn");

    document.getElementById("soilMin").value = localStorage.getItem("soilMinZone2") || "";
    document.getElementById("soilMax").value = localStorage.getItem("soilMaxZone2") || "";

    soilForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const soilMin = document.getElementById("soilMin").value;
        const soilMax = document.getElementById("soilMax").value;

        if (soilMin && soilMax) {
            localStorage.setItem("soilMinZone2", soilMin);
            localStorage.setItem("soilMaxZone2", soilMax);
            alert("บันทึกค่าความชื้นในดินสำเร็จ! (โซน 2)");
            localStorage.setItem("updateSettingZone2", "true");
            window.location.href = "setting-zone2.html";
        } else {
            alert("กรุณากรอกค่าความชื้นให้ครบ!");
        }
    });

    cancelBtn.addEventListener("click", function () {
        window.location.href = "setting-zone2.html";
    });
});
