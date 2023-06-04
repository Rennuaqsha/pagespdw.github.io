function updateDateTime() {
    var now = new Date();
    var dateTime = now.toLocaleString();
    document.getElementById("currentDateTime").textContent = dateTime;
}

setInterval(updateDateTime, 1000);