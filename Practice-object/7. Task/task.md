### 🎯 Tapşırıq 7: Konfiqurasiya İdarəçisi

*** Tətbiq konfiqurasiyası üçün obyekt yaradın: ***

jsconst konfiqurasiya = {
  // Default qiymətlər
  default_settings: {
    dil: "az",
    mövzu: "açıq",
    bildirişlər: true,
    avtomatik_saxlama: 10, // dəqiqə
    font_ölçüsü: 14
  },
  
  user_settings: {},
  
  // Bu metodları tamamlayın:
  ayar_dəyiş(açar, dəyər) {
    // İstifadəçi ayarını dəyiş
  },
  
  ayar_əldə_et(açar) {
    // İstifadəçi ayarı varsa onu, yoxsa default-u qaytar
  },
  
  ayarları_sıfırla() {
    // İstifadəçi ayarlarını təmizlə
  },
  
  bütün_ayarlar() {
    // Default və user ayarlarını birləşdir
  },
  
  ayar_eksport_et() {
    // JSON string şəklində ayarları qaytar
  },
  
  ayar_import_et(json_string) {
    // JSON-dan ayarları yüklə
  }
};