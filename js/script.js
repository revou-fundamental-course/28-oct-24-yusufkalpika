function calculateBMI() { 
    const weight = document.getElementById("your-weight").value;
    const height = document.getElementById("your-height").value;
    const age = document.getElementById("your-age").value;
    const ageInput = document.getElementById("your-age");

    // validasi usia
    if (age < 18 || age > 65) {
        alert("Mohon maaf, usia harus antara 18 dan 65 tahun.");
        ageInput.style.backgroundColor = "red"; // mengubah border menjadi merah
        return; // menghentikan proses jika usia tidak valid
    } else {
        ageInput.style.backgroundColor = ""; // valid
    }

    if (weight && height) {
        // konversi cm ke m
        const heightInMeters = height / 100;

        // perhitungan BMI
        const bmi = weight / (heightInMeters * heightInMeters);
        document.getElementById("number-resultbmi").textContent = bmi.toFixed(2);

        // kategori BMI
        let kategori;
        if (bmi < 18.5) {
            kategori = "KURANG";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            kategori = "IDEAL";
        } else {
            kategori = "LEBIH";
        }

        document.getElementById("text-resultbmi").textContent = `Berat badan ${kategori}`;
    } else {
        alert("Mohon ulangi! Masukkan berat dan tinggi badan");
    }
}

function resetBMI() {
    document.getElementById("your-weight").value = "";
    document.getElementById("your-height").value = "";

    document.getElementById("number-resultbmi").textContent = "00.00";
}

