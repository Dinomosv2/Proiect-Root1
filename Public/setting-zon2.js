document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("soilRange").textContent = `${localStorage.getItem("soilMinZone2") || "-"} - ${localStorage.getItem("soilMaxZone2") || "-"}`;
    document.getElementById("airRange").textContent = `${localStorage.getItem("airMinZone2") || "-"} - ${localStorage.getItem("airMaxZone2") || "-"}`;

    if (localStorage.getItem("updateSettingZone2") === "true") {
        localStorage.removeItem("updateSettingZone2");
    }
});

function openSoilSettingZone2() {
    window.location.href = "setting-soil-zone2.html";
}

function openAirSettingZone2() {
    window.location.href = "setting-air-zone2.html";
}
