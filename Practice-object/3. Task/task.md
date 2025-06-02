### 🎯 Tapşırıq 3: Bank Hesabı Simulyatoru

Bank hesabı obyekti yaradın:

*** Tələblər: ***

hesab_nömrəsi, sahib_ad, balans xüsusiyyətləri
əmanət(məbləğ) metodu - balansa əlavə edir
çıxarış(məbləğ) metodu - balansdan çıxır (kifayət qədər pul varsa)
transfer(digər_hesab, məbləğ) metodu - başqa hesaba pul köçürür
əməliyyat_tarixi məlumatlarını saxlayın
Getter metodla hesab_məlumatı qaytarın


const hesab1 = {
  // Sizin kodunuz
};

const hesab2 = {
  // Sizin kodunuz
};

hesab1.əmanət(1000);
hesab1.çıxarış(200);
hesab1.transfer(hesab2, 300);
console.log(hesab1.hesab_məlumatı);