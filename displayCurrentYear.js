  // Dapatkan elemen dengan ID "tahun"
  var tahunElement = document.getElementById("tahun");

  // Dapatkan tahun saat ini
  var tahunSekarang = new Date().getFullYear();

  // Tampilkan tahun di elemen "tahun"
  tahunElement.textContent = tahunSekarang;
