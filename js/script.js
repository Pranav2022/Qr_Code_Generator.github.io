function openNav(){
    document.getElementById('myNav').style.width = '100%';
}
function closeNav(){
    document.getElementById('myNav').style.width = '0';
}
var dataURL = document.getElementById('qr-code').toDataURL();
var qr;
(function() {
        qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 200,
        value: 'By-default'
    });
})();

function generateQRCode() {
    var qrtext = document.getElementById("text").value;
    document.getElementById("qr-result").innerHTML = "QR code for " + qrtext +":";
    alert(qrtext);
    qr.set({
        foreground: 'black',
        size: 200,
        value: qrtext
    });
}