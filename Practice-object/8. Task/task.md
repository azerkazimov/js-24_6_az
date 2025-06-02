### 🎯 Tapşırıq 8: Mətn Analizi

*** Mətn analiz obyekti yaradın: ***

jsconst mətn_analizçi = {
  mətn: "",
  
  mətn_dəyiş(yeni_mətn) {
    this.mətn = yeni_mətn;
    return this;
  },
  
  // Bu metodları yazın:
  hərf_sayı() {
    // Boşluqsuz hərf sayı
  },
  
  söz_sayı() {
    // Sözlərin sayı
  },
  
  cümlə_sayı() {
    // Cümlələrin sayı (. ! ? ilə bitən)
  },
  
  ən_uzun_söz() {
    // Ən uzun sözü tap
  },
  
  söz_tezliyi() {
    // Hər sözün neçə dəfə təkrarlandığını obyekt şəklində qaytar
  },
  
  ən_çox_istifadə_olunan() {
    // Ən çox istifadə olunan sözü tap
  },
  
  orta_söz_uzunluğu() {
    // Sözlərin orta uzunluğu
  },
  
  statistika() {
    // Bütün nəticələri bir obyektdə təqdim et
  }
};

*** // Test: ***
mətn_analizçi.mətn_dəyiş("Bu mətn analiz ediləcək. Çox maraqlı bir mətndir!")
  .statistika();