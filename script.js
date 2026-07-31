let qr;

function generateQR() {
    const qrBox = document.getElementById("qrBox");
    const text = document.getElementById("qrText").value;

    qrBox.innerHTML = "";

    if (text.trim() === "") {
        alert("Please enter text or URL");
        return;
    }

    qr = new QRCode(qrBox, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#ffffff",
        colorLight: "transparent",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function downloadQR() {
    const img = document.querySelector("#qrBox img");
    if (!img) {
        alert("Generate QR first");
        return;
    }

    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qr-code.png";
    link.click();
}