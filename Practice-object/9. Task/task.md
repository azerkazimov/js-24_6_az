### 🎯 Tapşırıq 9: Qiymət Hesablayıcısı

Müxtəlif məhsul növləri üçün qiymət hesablama sistemi:
jsconst qiymət_hesablayıcı = {
  vergi_dərəcələri: {
    əsas: 18,
    qida: 0,
    lüks: 25
  },
  
  endirim_kodları: {
    "STUDENT": 10,
    "VIP": 15,
    "FIRST": 20
  },
  
  çatdırılma_qiymətləri: {
    "Bakı": 5,
    "digər_şəhər": 10,
    "kənd": 15
  },
  
  // Bu metodları yazın:
  məhsul_qiyməti_hesabla(əsas_qiymət, kateqoriya) {
    // Vergi daxil qiymət
  },
  
  endirim_tətbiq_et(qiymət, endirim_kodu) {
    // Endirim kodunu tətbiq et
  },
  
  çatdırılma_hesabla(məkan, sifarişin_dəyəri) {
    // 100 AZN-dən çox sifarişdə çatdırılma pulsuz
  },
  
  ümumi_hesablama(məhsullar_siyahısı, endirim_kodu, çatdırılma_ünvanı) {
    // Tam hesablama: məhsullar + vergi + endirim + çatdırılma
  },
  
  fatura_yarat(müştəri_məlumatı, sifarişin_təfərrüatı) {
    // Ətraflı fatura obyekti yarat
  }
};

*** // Test məlumatları: ***
const sifarişin_məhsulları = [
  { ad: "Laptop", əsas_qiymət: 1000, kateqoriya: "əsas" },
  { ad: "Çörək", əsas_qiymət: 2, kateqoriya: "qida" },
  { ad: "Qızıl saat", əsas_qiymət: 5000, kateqoriya: "lüks" }
];