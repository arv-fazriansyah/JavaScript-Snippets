    // Dapatkan semua elemen dengan class "tahun"
    var tahunElements = document.querySelectorAll(".tahun");

    // Dapatkan tahun saat ini
    var tahunSekarang = new Date().getFullYear();

    // Tampilkan tahun saat ini di semua elemen dengan class "tahun"
    tahunElements.forEach(function(element) {
        element.textContent = tahunSekarang;
    });

    // URL API JSON
    var apiUrl = "https://api.fazriansyah.eu.org/?year=" + tahunSekarang;

    // Ambil data dari API JSON
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Ambil tahun dari data pertama (asumsi semua data dalam satu tahun)
            var tahun = new Date(data[0].Tanggal).getFullYear();
            document.querySelectorAll(".tahun").forEach(function(element) {
                element.textContent = tahun;
            });

            // Fungsi untuk memformat tanggal menjadi "Nama Hari, Tanggal Bulan Tahun"
            function formatDate(dateString) {
                var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(dateString).toLocaleDateString('id-ID', options);
            }

            // Loop melalui data dan tambahkan ke daftar
            var daftarLibur = document.getElementById("daftarLibur");
            data.forEach(function(item, index) {
                var keterangan = item.Keterangan;
                var tanggal = item.Tanggal;

                // Buat elemen <div> untuk setiap item
                var div = document.createElement("div");
                div.classList.add("daftar-item"); // Tambahkan class untuk menambahkan jarak

                // Tambahkan teks nomor urutan (dalam format bold) dan deskripsi hari libur
                div.innerHTML = `<strong>${index + 1}. ${keterangan}</strong><br>${formatDate(tanggal)}<br><br>`;

                daftarLibur.appendChild(div);
            });
        })
        .catch(error => {
            console.log("Error: " + error);
        });
