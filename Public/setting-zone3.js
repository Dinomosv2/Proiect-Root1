document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("soilRange").textContent = `${localStorage.getItem("soilMinZone3") || "-"} - ${localStorage.getItem("soilMaxZone3") || "-"}`;
    document.getElementById("airRange").textContent = `${localStorage.getItem("airMinZone3") || "-"} - ${localStorage.getItem("airMaxZone3") || "-"}`;

    if (localStorage.getItem("updateSettingZone3") === "true") {
        localStorage.removeItem("updateSettingZone3");
    }
});

function openSoilSettingZone3() {
    window.location.href = "setting-soil-zone3.html";
}

function openAirSettingZone3() {
    window.location.href = "setting-air-zone3.html";
}

