// Animasi saat halaman dimuat
window.onload = function() {
    document.body.classList.add('loaded');
};

// Validasi form kontak
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Pesan Anda telah terkirim!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Harap isi semua field!');
    }
});
