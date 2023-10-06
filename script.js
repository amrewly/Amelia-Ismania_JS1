// Contoh If
function cekUsia() {
    let usia = parseInt(document.getElementById("usia").value);
    let pesanIf = usia >= 18 ? "Anda sudah dewasa." : "Anda masih di bawah usia dewasa.";
    document.getElementById("hasilIf").innerHTML = pesanIf;
}

// Contoh If-Else
function cekNilai() {
    let nilai = parseInt(document.getElementById("nilai").value);
    let pesanIfElse = "";

    if (nilai >= 70) {
        pesanIfElse = "Anda lulus ujian.";
    } else {
        pesanIfElse = "Anda tidak lulus ujian.";
    }

    document.getElementById("hasilIfElse").innerHTML = pesanIfElse;
}

// Contoh Nested If
function cekUmur() {
    let umur = parseInt(document.getElementById("umur").value);
    let izinOrangTua = document.getElementById("izinOrangTua").value.toLowerCase();
    let pesanNestedIf = "";

    if (umur >= 18) {
        if (izinOrangTua === "ya") {
            pesanNestedIf = "Anda boleh masuk ke wahana ini.";
        } else {
            pesanNestedIf = "Maaf, Anda memerlukan izin orang tua.";
        }
    } else {
        pesanNestedIf = "Anda belum cukup usia untuk masuk ke wahana ini.";
    }

    document.getElementById("hasilNestedIf").innerHTML = pesanNestedIf;
}

// Contoh Switch Case
function namaBulan() {
    let angkaBulan = parseInt(document.getElementById("bulan").value);
    let namaBulan = "";

    switch (angkaBulan) {
        case 1:
            namaBulan = "Januari";
            break;
        case 2:
            namaBulan = "Februari";
            break;
        case 3:
            namaBulan = "Maret";
            break;
        case 4:
            namaBulan = "April";
            break;
        case 5:
            namaBulan = "Mei";
            break;
        case 6:
            namaBulan = "Juni";
            break;
        case 7:
            namaBulan = "Juli";
            break;
        case 8:
            namaBulan = "Agustus";
            break;
        case 9:
            namaBulan = "September";
            break;
        case 10:
            namaBulan = "Oktober";
            break;
        case 11:
            namaBulan = "November";
            break;
        case 12:
            namaBulan = "Desember";
            break;
        default:
            namaBulan = "Bulan tidak valid.";
    }

    document.getElementById("hasilSwitchCase").innerHTML = "Bulan: " + namaBulan;
}

// Contoh For Statement
function loopFor() {
    let iterasi = parseInt(document.getElementById("iterasi").value);
    let hasilFor = "";

    for (let i = 1; i <= iterasi; i++) {
        hasilFor += "Iterasi ke-" + i + "<br>";
    }

    document.getElementById("hasilFor").innerHTML = hasilFor;
}

// Contoh While Loop
function loopWhile() {
    let angkaWhile = parseInt(document.getElementById("angkaWhile").value);
    let hasilWhile = "";
    let i = 1;

    while (i <= angkaWhile) {
        hasilWhile += `Iterasi ke-${i}<br>`;
        i++;
    }

    document.getElementById("hasilWhile").innerHTML = hasilWhile;
}


// Contoh Do While Loop
function loopDoWhile() {
    let angkaDoWhile = parseInt(document.getElementById("angkaDoWhile").value);
    let hasilDoWhile = "";

    do {
        hasilDoWhile += "Angka: " + angkaDoWhile + "<br>";
        angkaDoWhile--;
    } while (angkaDoWhile >= 1);

    document.getElementById("hasilDoWhile").innerHTML = hasilDoWhile;
}

// Contoh Function
function sapa() {
    let nama = document.getElementById("namaFunction").value;
    let pesanFunction = "Halo, " + nama + "!";
    document.getElementById("hasilFunction").innerHTML = pesanFunction;
}
