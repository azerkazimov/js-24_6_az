### 🎯 Tapşırıq 5: Səbət Hesablayıcısı

*** E-commerce səbəti üçün hesablama sistemi: ***

jsconst alış_səbəti = {
  məhsullar: [
    { ad: "Apple iPhone", qiymət: 1000, miqdar: 1, vergi_faizi: 18 },
    { ad: "Samsung TV", qiymət: 800, miqdar: 2, vergi_faizi: 18 },
    { ad: "Kitab", qiymət: 20, miqdar: 3, vergi_faizi: 0 }
  ],
  
  // Bu metodları yazın:
  cəm_qiymət_hesabla() {
    // Vergisiz ümumi qiymət
  },
  
  vergi_hesabla() {
    // Ümumi vergi məbləği
  },
  
  ümumi_qiymət() {
    // Vergi daxil ümumi qiymət
  },
  
  məhsul_əlavə_et(məhsul) {
    // Yeni məhsul əlavə et və ya mövcudun miqdarını artır
  },
  
  məhsul_sil(məhsul_adı) {
    // Məhsulu səbətdən çıxar
  },
  
  səbət_təmizlə() {
    // Bütün məhsulları sil
  }
};