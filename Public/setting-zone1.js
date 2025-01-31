document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("soilRange").textContent = `${localStorage.getItem("soilMinZone1") || "-"} - ${localStorage.getItem("soilMaxZone1") || "-"}`;
    document.getElementById("airRange").textContent = `${localStorage.getItem("airMinZone1") || "-"} - ${localStorage.getItem("airMaxZone1") || "-"}`;

    if (localStorage.getItem("updateSettingZone1") === "true") {
        localStorage.removeItem("updateSettingZone1");
    }
});

function openSoilSettingZone1() {
    window.location.href = "setting-soil-zone1.html";
}

function openAirSettingZone1() {
    window.location.href = "setting-air-zone1.html";
}

