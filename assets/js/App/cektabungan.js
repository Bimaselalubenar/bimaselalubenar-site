function updateRemaining() {
        var totalPercentage = 0;

        totalPercentage += parseFloat(document.getElementById("tabungan").value) || 0;
        totalPercentage += parseFloat(document.getElementById("pengeluaran").value) || 0;
        totalPercentage += parseFloat(document.getElementById("danaDarurat").value) || 0;
        totalPercentage += parseFloat(document.getElementById("investasi").value) || 0;
        totalPercentage += parseFloat(document.getElementById("asuransi").value) || 0;
        totalPercentage += parseFloat(document.getElementById("pribadi").value) || 0;
        totalPercentage += parseFloat(document.getElementById("zakat").value) || 0;

        var remainingPercentage = 100 - totalPercentage;
        document.getElementById("remaining").innerText = "Sisa: " + remainingPercentage.toFixed(2) + "%";

        if (remainingPercentage < 0) {
            document.getElementById("remaining").style.color = "red";
        } else {
            document.getElementById("remaining").style.color = "green";
        }
    }

    function proses() {
        var totalPercentage = 0;

        totalPercentage += parseFloat(document.getElementById("tabungan").value) || 0;
        totalPercentage += parseFloat(document.getElementById("pengeluaran").value) || 0;
        totalPercentage += parseFloat(document.getElementById("danaDarurat").value) || 0;
        totalPercentage += parseFloat(document.getElementById("investasi").value) || 0;
        totalPercentage += parseFloat(document.getElementById("asuransi").value) || 0;
        totalPercentage += parseFloat(document.getElementById("pribadi").value) || 0;
        totalPercentage += parseFloat(document.getElementById("zakat").value) || 0;

        if (totalPercentage > 100) {
            document.getElementById("error").style.display = "block";
            document.getElementById("output").style.display = "none";
            document.getElementById("loading").style.display = "none";
        } else {
            // Menyembunyikan inputan dan menampilkan loading
            document.querySelector(".inputan").style.display = "none";
            document.getElementById("loading").style.display = "block";
            document.getElementById("error").style.display = "none";

            setTimeout(function() {
                hitungTotal();
                document.getElementById("loading").style.display = "none";
                document.getElementById("output").style.display = "block";
            }, 3000); // Loading 3 detik
        }
    }

    function hitungTotal() {
        var gaji = parseFloat(document.getElementById("gaji").value) || 0;

        var tabungan = (parseFloat(document.getElementById("tabungan").value) || 0) / 100;
        var pengeluaran = (parseFloat(document.getElementById("pengeluaran").value) || 0) / 100;
        var danaDarurat = (parseFloat(document.getElementById("danaDarurat").value) || 0) / 100;
        var investasi = (parseFloat(document.getElementById("investasi").value) || 0) / 100;
        var asuransi = (parseFloat(document.getElementById("asuransi").value) || 0) / 100;
        var pribadi = (parseFloat(document.getElementById("pribadi").value) || 0) / 100;
        var zakat = (parseFloat(document.getElementById("zakat").value) || 0) / 100;

        // Menghitung dan menampilkan hasil dengan format angka
        document.getElementById("totalTabungan").innerText = formatCurrency(gaji * tabungan);
        document.getElementById("totalPengeluaran").innerText = formatCurrency(gaji * pengeluaran);
        document.getElementById("totalDanaDarurat").innerText = formatCurrency(gaji * danaDarurat);
        document.getElementById("totalInvestasi").innerText = formatCurrency(gaji * investasi);
        document.getElementById("totalAsuransi").innerText = formatCurrency(gaji * asuransi);
        document.getElementById("totalPribadi").innerText = formatCurrency(gaji * pribadi);
        document.getElementById("totalZakat").innerText = formatCurrency(gaji * zakat);
    }

    function formatCurrency(amount) {
        return amount.toLocaleString('id-ID');
    }

    function resetForm() {
        document.getElementById("gaji").value = "";
        document.getElementById("tabungan").value = "";
        document.getElementById("pengeluaran").value = "";
        document.getElementById("danaDarurat").value = "";
        document.getElementById("investasi").value = "";
        document.getElementById("asuransi").value = "";
        document.getElementById("pribadi").value = "";
        document.getElementById("zakat").value = "";
        document.getElementById("remaining").innerText = "Sisa: 100%";
        document.getElementById("remaining").style.color = "green";
        document.getElementById("error").style.display = "none";
        document.getElementById("loading").style.display = "none";
        document.getElementById("output").style.display = "none";
        document.querySelector(".inputan").style.display = "block";
    }

    function simpanGambar() {
        html2canvas(document.getElementById("output")).then(function(canvas) {
            var link = document.getElementById("downloadLink");
            link.href = canvas.toDataURL("image/png");
            link.style.display = "block";
        });
    }