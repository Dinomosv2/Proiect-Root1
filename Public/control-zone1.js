const zoneId = window.location.pathname.split('/').pop().replace('.html', '');

const statusButton = document.getElementById('statusButton');
const statusText = document.getElementById('statusText');

let isOn = localStorage.getItem(zoneId) === 'true';

function updateUI() {
    if (isOn) {
        statusButton.style.backgroundColor = 'green';
        statusButton.textContent = 'กดปิด';
        statusText.textContent = 'สถานะเปิดการทำงาน';
        statusText.style.color = 'green';
    } else {
        statusButton.style.backgroundColor = 'red';
        statusButton.textContent = 'กดเปิด';
        statusText.textContent = 'สถานะปิดการทำงาน';
        statusText.style.color = 'red';
    }

    localStorage.setItem(zoneId, isOn);
}

statusButton.addEventListener('click', () => {
    isOn = !isOn; 
    updateUI();

    localStorage.setItem('updateMain', Date.now()); 
});

updateUI();

function openModeSelection1() {
    window.location.href = "mode-selection1.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const modeButton = document.getElementById("modeButton");

    let selectedMode = localStorage.getItem("selectedModeZone1") || "คลิกเลือกโหมด";
    modeButton.textContent = selectedMode;

    function openModeSelection1() {
        window.location.href = "mode-selection1.html";
    }

    function updateModeDisplay(mode) {
        localStorage.setItem("selectedModeZone1", mode);
        modeButton.textContent = mode;
    }

    window.updateModeDisplay = updateModeDisplay;
});