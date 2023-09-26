// Dapatkan semua elemen dengan class "tahun"
var tahunElements = document.querySelectorAll(".tahun");

// Dapatkan tahun saat ini
var tahunSekarang = new Date().getFullYear();

// Tampilkan tahun saat ini di semua elemen dengan class "tahun"
tahunElements.forEach(function(element) {
    element.textContent = tahunSekarang;
});
