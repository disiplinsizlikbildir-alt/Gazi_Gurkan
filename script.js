function girisYap() {
    let okulNo = document.getElementById("okulno").value;
    let sifre = document.getElementById("sifre").value;

    let dogruNo = "1234";
    let dogruSifre = "1234";

    if (okulNo === dogruNo && sifre === dogruSifre) {

        // Giriş yapıldığını kaydet
        localStorage.setItem("giris", "ok");

        window.location.href = "profil.html";
    } else {
        document.getElementById("hata").style.display = "block";
    }
}