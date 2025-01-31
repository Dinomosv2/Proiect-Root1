document.addEventListener("DOMContentLoaded", function () {
    const airForm = document.getElementById("airForm");
    const cancelBtn = document.getElementById("cancelBtn");

    document.getElementById("airMin").value = localStorage.getItem("airMinZone2") || "";
    document.getElementById("airMax").value = localStorage.getItem("airMaxZone2") || "";

    airForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const airMin = document.getElementById("airMin").value;
        const airMax = document.getElementById("airMax").value;

        if (airMin && airMax) {
            localStorage.setItem("airMinZone2", airMin);
            localStorage.setItem("airMaxZone2", airMax);
            alert("บันทึกค่าความชื้นในอากาศสำเร็จ! (โซน 2)");
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
