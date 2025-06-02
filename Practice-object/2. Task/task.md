### Tapşırıq 2: Məhsul Kataloqu Filteri

Məhsullar massivi verilmişdir. Müxtəlif filtrlər tətbiq edin:

jsconst məhsullar = [
  { ad: "Laptop", qiymət: 1200, kateqoriya: "elektronika", mövcuddur: true },
  { ad: "Telefon", qiymət: 800, kateqoriya: "elektronika", mövcuddur: false },
  { ad: "Masa", qiymət: 300, kateqoriya: "mebel", mövcuddur: true },
  { ad: "Kitab", qiymət: 25, kateqoriya: "təhsil", mövcuddur: true },
  { ad: "Kompüter", qiymət: 1500, kateqoriya: "elektronika", mövcuddur: true }
];

*** Tapşırıqlar: ***

1. Yalnız mövcud məhsulları göstər
2. Qiyməti 500-dən az olan məhsulları tap
3. "elektronika" kateqoriyasındakı məhsulları tap
4. Ən bahalı məhsulu tap
5. Kateqoriya üzrə məhsul sayını hesabla (obyekt şəklində)