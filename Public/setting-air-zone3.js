document.addEventListener("DOMContentLoaded", function () {
    const airForm = document.getElementById("airForm");
    const cancelBtn = document.getElementById("cancelBtn");

    document.getElementById("airMin").value = localStorage.getItem("airMinZone3") || "";
    document.getElementById("airMax").value = localStorage.getItem("airMaxZone3") || "";

    airForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const airMin = document.getElementById("airMin").value;
        const airMax = document.getElementById("airMax").value;

        if (airMin && airMax) {
            localStorage.setItem("airMinZone3", airMin);
            localStorage.setItem("airMaxZone3", airMax);
            alert("บันทึกค่าความชื้นในอากาศสำเร็จ! (โซน 3)");
            localStorage.setItem("updateSettingZone3", "true");
            window.location.href = "setting-zone1.html";
        } else {
            alert("กรุณากรอกค่าความชื้นให้ครบ!");
        }
    });

    cancelBtn.addEventListener("click", function () {
        window.location.href = "setting-zone3.html";
    });
});
