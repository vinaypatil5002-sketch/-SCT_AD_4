// QR Scanner
const resultText = document.getElementById("result-text");

function onScanSuccess(decodedText, decodedResult) {
  // Show result and stop scanning
  resultText.innerText = decodedText;
  html5QrcodeScanner.clear();
}

const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  {
    fps: 10,
    qrbox: 250
  },
  /* verbose= */ false
);
html5QrcodeScanner.render(onScanSuccess);

// QR Generator
document.getElementById("generate-btn").addEventListener("click", () => {
  const input = document.getElementById("qr-input").value;
  const qrcodeContainer = document.getElementById("qrcode");

  if (!input) {
    alert("Please enter text to generate QR code.");
    return;
  }

  // Clear previous QR code
  qrcodeContainer.innerHTML = "";

  // Generate new QR code
  new QRCode(qrcodeContainer, {
    text: input,
    width: 200,
    height: 200,
  });
});
