### 🎯 Tapşırıq 4: Kitab Kitabxanası

Kitabxana idarəetmə sistemi yaradın:

jsconst kitabxana = {
  kitablar: [],
  
  // Bu metodları tamamlayın:
  kitab_əlavə_et(başlıq, müəllif, il, isbn) {
    // Kitab obyekti yaradıb kitablar massivə əlavə et
  },
  
  kitab_axtar(sorğu) {
    // Başlıq və ya müəllif adına görə axtarış
  },
  
  müəllif_üzrə_filter(müəllif) {
    // Müəyyən müəllifin kitablarını tap
  },
  
  il_aralığı_filter(min_il, max_il) {
    // Müəyyən il aralığındakı kitablar
  },
  
  statistika() {
    // Ümumi kitab sayı, ən köhnə və ən yeni kitab ili
  }
};

***Test məlumatları:***

1. "1984", "George Orwell", 1949
2. "Koroğlu", "Xalq yaradıcılığı", 1800
3. "Arşın Mal Alan", "Üzeyir Hacıbəyli", 1913