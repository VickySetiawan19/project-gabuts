function cekKhodam() {
    const name = document.getElementById('nameInput').value.trim();
    const khodams = ["Khodam Macan Putih", "Khodam Singa", "Khodam Sapi", "Khodam Kodok", "Khodam Semut", "Khodam Lebah", "Khodam Bebek", "Khodam Ayam", "Tidak Ada Khodamnya"];
    
    if (name === "") {
        document.getElementById('result').textContent = "Silakan masukkan nama Anda!";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * khodams.length);
    const khodam = khodams[randomIndex];
    
    document.getElementById('result').innerHTML = `<strong>${name}</strong>, khodam Anda adalah: <strong>${khodam}</strong>`;
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        cekKhodam();
    }
}
