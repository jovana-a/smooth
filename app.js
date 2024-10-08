document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('printForm').addEventListener('submit', function(event) {
        event.preventDefault();
        sendToPrint();
    });
});

function sendToPrint() {
    const template = document.getElementById('template').value;
    const papersize = document.getElementById('papersize').value;
    const text1Object = document.getElementById('text1Object').value;
    const barcodeObject = document.getElementById('barcodeObject').value;
    const orientation = document.getElementById('orientation').value;
    const copies = document.getElementById('copies').value;

    const urlScheme = `brotherwebprint://print?filename=${encodeURIComponent(template)}&papersize=${encodeURIComponent(papersize)}&orientation=${encodeURIComponent(orientation)}&text_text=${encodeURIComponent(text1Object)}&barcode_barcode=${encodeURIComponent(barcodeObject)}&copies=${encodeURIComponent(copies)}`;

    window.open(urlScheme, '_blank');
}
