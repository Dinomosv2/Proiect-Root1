document.addEventListener("DOMContentLoaded", function () {
    const airForm = document.getElementById("airForm");
    const cancelBtn = document.getElementById("cancelBtn");

    document.getElementById("airMin").value = localStorage.getItem("airMinZone1") || "";
    document.getElementById("airMax").value = localStorage.getItem("airMaxZone1") || "";

    airForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const airMin = document.getElementById("airMin").value;
        const airMax = document.getElementById("airMax").value;

        if (airMin && airMax) {
            localStorage.setItem("airMinZone1", airMin);
            localStorage.setItem("airMaxZone1", airMax);
            alert("บันทึกค่าความชื้นในอากาศสำเร็จ! (โซน 1)");
            localStorage.setItem("updateSettingZone1", "true");
            window.location.href = "setting-zone1.html";
        } else {
            alert("กรุณากรอกค่าความชื้นให้ครบ!");
        }
    });

    cancelBtn.addEventListener("click", function () {
        window.location.href = "setting-zone1.html";
    });
});
