
---

## 🔹 Giriş və Əsas Anlayışlar

### Sinif (Class) nədir?

Sinif obyektlərin yaradılması üçün şablondur. O, obyektin xüsusiyyətlərini (property) və davranışlarını (method) təyin edir.

### ES6-dan əvvəl vs sonra

**ES5 (Constructor Function):**

```javascript
function Avtomobil(marka, model, il) {
  this.marka = marka;
  this.model = model;
  this.il = il;
}

Avtomobil.prototype.sür = function() {
  console.log(this.marka + " " + this.model + " sürülür");
};

var maşın = new Avtomobil("BMW", "X5", 2020);
```

**ES6 (Class):**

```javascript
class Avtomobil {
  constructor(marka, model, il) {
    this.marka = marka;
    this.model = model;
    this.il = il;
  }
  
  sür() {
    console.log(`${this.marka} ${this.model} sürülür`);
  }
}

const maşın = new Avtomobil("BMW", "X5", 2020);
```

---

## 🔹 ES6 Classes Sintaksisi

### Əsas Struktur

```javascript
class SinifAdı {
  // Constructor - obyekt yaradılarkən çağırılır
  constructor(parametr1, parametr2) {
    this.property1 = parametr1;
    this.property2 = parametr2;
  }
  
  // Instance metodlar
  metodAdı() {
    // metod kodu
  }
  
  // Getter
  get propertyAdı() {
    return this.privateProperty;
  }
  
  // Setter
  set propertyAdı(dəyər) {
    this.privateProperty = dəyər;
  }
  
  // Static metod
  static staticMetodAdı() {
    // static metod kodu
  }
}
```

### Praktik Nümunə - Tələbə Sinfi

```javascript
class Tələbə {
  constructor(ad, soyad, yaş, fakultə) {
    this.ad = ad;
    this.soyad = soyad;
    this.yaş = yaş;
    this.fakultə = fakultə;
    this.qiymətlər = [];
    this.qeydiyyat_tarixi = new Date();
  }
  
  tam_ad() {
    return `${this.ad} ${this.soyad}`;
  }
  
  qiymət_əlavə_et(fən, qiymət) {
    this.qiymətlər.push({ fən, qiymət, tarix: new Date() });
  }
  
  orta_qiymət_hesabla() {
    if (this.qiymətlər.length === 0) return 0;
    
    const cəm = this.qiymətlər.reduce((sum, item) => sum + item.qiymət, 0);
    return Math.round((cəm / this.qiymətlər.length) * 100) / 100;
  }
  
  məlumat_göstər() {
    return {
      tam_ad: this.tam_ad(),
      yaş: this.yaş,
      fakultə: this.fakultə,
      orta_qiymət: this.orta_qiymət_hesabla(),
      qiymət_sayı: this.qiymətlər.length
    };
  }
}

// İstifadə
const tələbə = new Tələbə("Əli", "Məmmədov", 20, "İnformatika");
tələbə.qiymət_əlavə_et("Riyaziyyat", 90);
tələbə.qiymət_əlavə_et("Fizika", 85);
console.log(tələbə.məlumat_göstər());
```

---

## 🔹 Constructor və Instance-lar

### Constructor Metodunun Xüsusiyyətləri

```javascript
class Şirkət {
  constructor(ad, sahə, əməkdaş_sayı = 0) {
    // Məcburi parametrlər yoxlanışı
    if (!ad || !sahə) {
      throw new Error("Şirkət adı və sahəsi mütləqdir");
    }
    
    this.ad = ad;
    this.sahə = sahə;
    this.əməkdaş_sayı = əməkdaş_sayı;
    this.yaradılma_tarixi = new Date();
    this.departmentlər = [];
    
    // Constructor-da dərhal çağırılan metodlar
    this.başlanğıc_konfiqurasiya();
  }
  
  başlanğıc_konfiqurasiya() {
    console.log(`${this.ad} şirkəti yaradıldı`);
    this.departmentlər.push("İnsan Resursları");
    this.departmentlər.push("Maliyyə");
  }
  
  department_əlavə_et(department_adı) {
    if (!this.departmentlər.includes(department_adı)) {
      this.departmentlər.push(department_adı);
      return true;
    }
    return false;
  }
  
  əməkdaş_əlavə_et(miqdar = 1) {
    this.əməkdaş_sayı += miqdar;
  }
  
  şirkət_məlumatı() {
    const yaş = new Date().getFullYear() - this.yaradılma_tarixi.getFullYear();
    return {
      ad: this.ad,
      sahə: this.sahə,
      əməkdaş_sayı: this.əməkdaş_sayı,
      departmentlər: this.departmentlər,
      yaş: yaş
    };
  }
}

const şirkət = new Şirkət("TechAz", "Texnologiya", 50);
şirkət.department_əlavə_et("İnkişaf");
şirkət.əməkdaş_əlavə_et(10);
console.log(şirkət.şirkət_məlumatı());
```

---

## 🔹 Metodlar və Property-lər

### Instance Metodları

```javascript
class Hesablayıcı {
  constructor() {
    this.nəticə = 0;
    this.əməliyyatlar_tarixi = [];
  }
  
  // Əsas arifmetik əməliyyatlar
  topla(rəqəm) {
    this.əməliyyat_qeyd_et('topla', rəqəm);
    this.nəticə += rəqəm;
    return this; // Method chaining üçün
  }
  
  çıx(rəqəm) {
    this.əməliyyat_qeyd_et('çıx', rəqəm);
    this.nəticə -= rəqəm;
    return this;
  }
  
  vur(rəqəm) {
    this.əməliyyat_qeyd_et('vur', rəqəm);
    this.nəticə *= rəqəm;
    return this;
  }
  
  böl(rəqəm) {
    if (rəqəm === 0) {
      throw new Error("Sıfıra bölmək olmaz");
    }
    this.əməliyyat_qeyd_et('böl', rəqəm);
    this.nəticə /= rəqəm;
    return this;
  }
  
  // Təkmilləşmiş funksiyalar
  qüvvət(qüvvət) {
    this.əməliyyat_qeyd_et('qüvvət', qüvvət);
    this.nəticə = Math.pow(this.nəticə, qüvvət);
    return this;
  }
  
  kök() {
    if (this.nəticə < 0) {
      throw new Error("Mənfi rəqəmin kökü çıxarıla bilməz");
    }
    this.əməliyyat_qeyd_et('kök', null);
    this.nəticə = Math.sqrt(this.nəticə);
    return this;
  }
  
  // Yardımçı metodlar
  əməliyyat_qeyd_et(əməliyyat, dəyər) {
    this.əməliyyatlar_tarixi.push({
      əməliyyat,
      dəyər,
      nəticə_əvvəl: this.nəticə,
      tarix: new Date()
    });
  }
  
  sıfırla() {
    this.nəticə = 0;
    this.əməliyyatlar_tarixi = [];
    return this;
  }
  
  nəticəni_al() {
    return this.nəticə;
  }
  
  tarix_göstər() {
    return this.əməliyyatlar_tarixi;
  }
  
  son_əməliyyat() {
    return this.əməliyyatlar_tarixi[this.əməliyyatlar_tarixi.length - 1];
  }
}

// Method Chaining nümunəsi
const calc = new Hesablayıcı();
const nəticə = calc
  .topla(10)
  .vur(2)
  .çıx(5)
  .böl(3)
  .nəticəni_al();

console.log(nəticə); // 5
console.log(calc.tarix_göstər());
```

---

## 🔹 Getter və Setter-lər

### Əsas İstifadə

```javascript
class İstifadəçi {
  constructor(ad, email, doğum_tarixi) {
    this._ad = ad;
    this._email = email;
    this._doğum_tarixi = new Date(doğum_tarixi);
    this._profil_şəkli = null;
    this._statusu = "aktiv";
  }
  
  // Ad üçün getter/setter
  get ad() {
    return this._ad;
  }
  
  set ad(yeni_ad) {
    if (typeof yeni_ad !== 'string' || yeni_ad.length < 2) {
      throw new Error("Ad ən azı 2 hərf olmalıdır");
    }
    this._ad = yeni_ad.trim();
  }
  
  // Email üçün getter/setter
  get email() {
    return this._email;
  }
  
  set email(yeni_email) {
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email_regex.test(yeni_email)) {
      throw new Error("Düzgün email formatı daxil edin");
    }
    this._email = yeni_email.toLowerCase();
  }
  
  // Yaş hesablanır (yalnız getter)
  get yaş() {
    const bu_gün = new Date();
    const yaş = bu_gün.getFullYear() - this._doğum_tarixi.getFullYear();
    const ay_fərqi = bu_gün.getMonth() - this._doğum_tarixi.getMonth();
    
    if (ay_fərqi < 0 || (ay_fərqi === 0 && bu_gün.getDate() < this._doğum_tarixi.getDate())) {
      return yaş - 1;
    }
    return yaş;
  }
  
  // Status üçün getter/setter
  get statusu() {
    return this._statusu;
  }
  
  set statusu(yeni_status) {
    const icazə_verilən_statuslar = ["aktiv", "qeyri-aktiv", "gözləmədə", "bloklanmış"];
    if (!icazə_verilən_statuslar.includes(yeni_status)) {
      throw new Error(`Status ${icazə_verilən_statuslar.join(", ")} dəyərlərindən biri olmalıdır`);
    }
    this._statusu = yeni_status;
  }
  
  // Tam məlumat (yalnız getter)
  get tam_məlumat() {
    return {
      ad: this._ad,
      email: this._email,
      yaş: this.yaş,
      statusu: this._statusu,
      profil_şəkli_var: this._profil_şəkli !== null
    };
  }
  
  // Profil şəkli üçün setter
  set profil_şəkli(şəkil_url) {
    if (şəkil_url && typeof şəkil_url === 'string') {
      // URL formatını yoxla
      try {
        new URL(şəkil_url);
        this._profil_şəkli = şəkil_url;
      } catch {
        throw new Error("Düzgün URL formatı daxil edin");
      }
    } else {
      this._profil_şəkli = null;
    }
  }
  
  get profil_şəkli() {
    return this._profil_şəkli || "https://via.placeholder.com/150";
  }
}

// İstifadə nümunəsi
const istifadəçi = new İstifadəçi("Əli Məmmədov", "ali@example.com", "1990-05-15");

console.log(istifadəçi.yaş); // Yaş hesablanır
console.log(istifadəçi.tam_məlumat);

// Setter-lərin işi
istifadəçi.ad = "Vəli Həsənov";
istifadəçi.statusu = "qeyri-aktiv";
istifadəçi.profil_şəkli = "https://example.com/profil.jpg";
```

---

## 🔹 Static Metodlar və Property-lər

### Static Metodlar

```javascript
class MathUtils {
  // Static constant-lar
  static PI = 3.14159265359;
  static E = 2.71828182846;
  
  // Sadə arifmetik əməliyyatlar
  static topla(a, b) {
    return a + b;
  }
  
  static çıx(a, b) {
    return a - b;
  }
  
  static vur(a, b) {
    return a * b;
  }
  
  static böl(a, b) {
    if (b === 0) throw new Error("Sıfıra bölmək olmaz");
    return a / b;
  }
  
  // Təkmilləşmiş riyazi funksiyalar
  static qüvvət(ədəd, qüvvət) {
    return Math.pow(ədəd, qüvvət);
  }
  
  static kök(ədəd, kök_dərəcəsi = 2) {
    if (ədəd < 0 && kök_dərəcəsi % 2 === 0) {
      throw new Error("Cüt kök dərəcəsi üçün mənfi ədəd olmaz");
    }
    return Math.pow(ədəd, 1 / kök_dərəcəsi);
  }
  
  static faktorial(n) {
    if (n < 0) throw new Error("Faktorial mənfi ədədlər üçün təyin olunmur");
    if (n === 0 || n === 1) return 1;
    
    let nəticə = 1;
    for (let i = 2; i <= n; i++) {
      nəticə *= i;
    }
    return nəticə;
  }
  
  static fibonacci(n) {
    if (n < 0) throw new Error("Fibonacci ardıcıllığı mənfi indeks üçün təyin olunmur");
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  }
  
  static cüt_yoxsa_tək(ədəd) {
    return ədəd % 2 === 0 ? "cüt" : "tək";
  }
  
  static rəqəmlər_cəmi(ədəd) {
    return Math.abs(ədəd)
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  
  static sadə_ədəd_yoxla(ədəd) {
    if (ədəd < 2) return false;
    if (ədəd === 2) return true;
    if (ədəd % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(ədəd); i += 2) {
      if (ədəd % i === 0) return false;
    }
    return true;
  }
  
  // Geometrik hesablamalar
  static dairə_sahəsi(radius) {
    return this.PI * radius * radius;
  }
  
  static dairə_perimetri(radius) {
    return 2 * this.PI * radius;
  }
  
  static üçbucaq_sahəsi(tərəf1, tərəf2, tərəf3) {
    const s = (tərəf1 + tərəf2 + tərəf3) / 2; // Yarı perimetr
    return Math.sqrt(s * (s - tərəf1) * (s - tərəf2) * (s - tərəf3));
  }
  
  // Array statistikası
  static orta_hesab(rəqəmlər) {
    if (!Array.isArray(rəqəmlər) || rəqəmlər.length === 0) {
      throw new Error("Boş olmayan array göndərin");
    }
    const cəm = rəqəmlər.reduce((sum, num) => sum + num, 0);
    return cəm / rəqəmlər.length;
  }
  
  static median(rəqəmlər) {
    if (!Array.isArray(rəqəmlər) || rəqəmlər.length === 0) {
      throw new Error("Boş olmayan array göndərin");
    }
    
    const sıralanmış = [...rəqəmlər].sort((a, b) => a - b);
    const orta_indeks = Math.floor(sıralanmış.length / 2);
    
    if (sıralanmış.length % 2 === 0) {
      return (sıralanmış[orta_indeks - 1] + sıralanmış[orta_indeks]) / 2;
    }
    return sıralanmış[orta_indeks];
  }
  
  static min_max(rəqəmlər) {
    if (!Array.isArray(rəqəmlər) || rəqəmlər.length === 0) {
      throw new Error("Boş olmayan array göndərin");
    }
    
    return {
      min: Math.min(...rəqəmlər),
      max: Math.max(...rəqəmlər)
    };
  }
}

// İstifadə nümunələri
console.log(MathUtils.faktorial(5)); // 120
console.log(MathUtils.fibonacci(10)); // 55
console.log(MathUtils.sadə_ədəd_yoxla(17)); // true
console.log(MathUtils.dairə_sahəsi(5)); // 78.54
console.log(MathUtils.orta_hesab([1, 2, 3, 4, 5])); // 3
console.log(MathUtils.median([1, 2, 3, 4, 5])); // 3
```

### Static Factory Pattern

```javascript
class Avtomobil {
  constructor(marka, model, il, mühərrik_növü) {
    this.marka = marka;
    this.model = model;
    this.il = il;
    this.mühərrik_növü = mühərrik_növü;
    this.yaradılma_tarixi = new Date();
  }
  
  // Static factory metodları
  static bmw_yarat(model, il) {
    return new Avtomobil("BMW", model, il, "benzin");
  }
  
  static tesla_yarat(model, il) {
    return new Avtomobil("Tesla", model, il, "elektrik");
  }
  
  static toyota_yarat(model, il) {
    return new Avtomobil("Toyota", model, il, "hibrid");
  }
  
  static məlumatdan_yarat(məlumat_obyekti) {
    return new Avtomobil(
      məlumat_obyekti.marka,
      məlumat_obyekti.model,
      məlumat_obyekti.il,
      məlumat_obyekti.mühərrik_növü
    );
  }
  
  məlumat() {
    return `${this.marka} ${this.model} (${this.il}) - ${this.mühərrik_növü}`;
  }
}

// Factory metodlarının istifadəsi
const bmw = Avtomobil.bmw_yarat("X5", 2023);
const tesla = Avtomobil.tesla_yarat("Model 3", 2023);
const toyota = Avtomobil.toyota_yarat("Prius", 2023);

console.log(bmw.məlumat());
console.log(tesla.məlumat());
console.log(toyota.məlumat());
```

---

## 🔹 Miras (Inheritance)

### Əsas Miras Nümunəsi

```javascript
class Heyvan {
  constructor(ad, yaş, növ) {
    this.ad = ad;
    this.yaş = yaş;
    this.növ = növ;
    this.sağlıq = 100;
    this.enerji = 100;
  }
  
  səs_çıxar() {
    console.log(`${this.ad} səs çıxarır`);
    this.enerji -= 5;
  }
  
  yemək_ye() {
    console.log(`${this.ad} yemək yeyir`);
    this.enerji += 20;
    this.sağlıq += 5;
    
    if (this.enerji > 100) this.enerji = 100;
    if (this.sağlıq > 100) this.sağlıq = 100;
  }
  
  yat() {
    console.log(`${this.ad} yatır`);
    this.enerji += 50;
    if (this.enerji > 100) this.enerji = 100;
  }
  
  status() {
    return {
      ad: this.ad,
      yaş: this.yaş,
      növ: this.növ,
      sağlıq: this.sağlıq,
      enerji: this.enerji
    };
  }
}

class İt extends Heyvan {
  constructor(ad, yaş, cins, sahibin_adı) {
    super(ad, yaş, "İt"); // Parent constructor-u çağır
    this.cins = cins;
    this.sahibin_adı = sahibin_adı;
    this.sadiqlik = 100;
    this.məşq_səviyyəsi = 0;
  }
  
  // Method override
  səs_çıxar() {
    console.log(`${this.ad}: Hav hav!`);
    this.enerji -= 5;
  }
  
  // Yeni metodlar
  oyna() {
    console.log(`${this.ad} top ilə oynayır`);
    this.enerji -= 15;
    this.sadiqlik += 5;
    
    if (this.enerji < 0) this.enerji = 0;
    if (this.sadiqlik > 100) this.sadiqlik = 100;
  }
  
  məşq_et() {
    if (this.enerji < 20) {
      console.log(`${this.ad} çox yorğundur, məşq edə bilməz`);
      return false;
    }
    
    console.log(`${this.ad} məşq edir`);
    this.məşq_səviyyəsi += 10;
    this.enerji -= 20;
    this.sağlıq += 10;
    
    if (this.məşq_səviyyəsi > 100) this.məşq_səviyyəsi = 100;
    if (this.sağlıq > 100) this.sağlıq = 100;
    
    return true;
  }
  
  sahib_tani() {
    console.log(`${this.ad} ${this.sahibin_adı}-ni tanıyır və sevinir`);
    this.sadiqlik += 10;
    if (this.sadiqlik > 100) this.sadiqlik = 100;
  }
  
  // Override parent method
  status() {
    const parent_status = super.status(); // Parent metodunu çağır
    return {
      ...parent_status,
      cins: this.cins,
      sahibin_adı: this.sahibin_adı,
      sadiqlik: this.sadiqlik,
      məşq_səviyyəsi: this.məşq_səviyyəsi
    };
  }
}

class Pişik extends Heyvan {
  constructor(ad, yaş, cins) {
    super(ad, yaş, "Pişik");
    this.cins = cins;
    this.müstəqillik = 80;
    this.oynaqlıq = 90;
  }
  
  // Method override
  səs_çıxar() {
    console.log(`${this.ad}: Miyav miyav!`);
    this.enerji -= 3; // Pişiklər daha az enerji sərf edir
  }
  
  mırnaqla() {
    console.log(`${this.ad} mırnaqları itiləyir`);
    this.enerji -= 5;
    this.müstəqillik += 5;
    if (this.müstəqillik > 100) this.müstəqillik = 100;
  }
  
  mırıldanır() {
    console.log(`${this.ad} mırıldanır (xoşbəxtdir)`);
    this.sağlıq += 5;
    this.enerji += 10;
    
    if (this.sağlıq > 100) this.sağlıq = 100;
    if (this.enerji > 100) this.enerji = 100;
  }
  
  ov_et() {
    if (this.enerji < 30) {
      console.log(`${this.ad} ov etmək üçün çox yorğundur`);
      return false;
    }
    
    console.log(`${this.ad} siçan ovlayır`);
    this.enerji -= 30;
    this.oynaqlıq += 10;
    this.müstəqillik += 5;
    
    if (this.oynaqlıq > 100) this.oynaqlıq = 100;
    if (this.müstəqillik > 100) this.müstəqillik = 100;
    
    return true;
  }
  
  status() {
    const parent_status = super.status();
    return {
      ...parent_status,
      cins: this.cins,
      müstəqillik: this.müstəqillik,
      oynaqlıq: this.oynaqlıq
    };
  }
}

// İstifadə nümunəsi
const it = new İt("Rex", 3, "German Çoban", "Əli");
const pişik = new Pişik("Mestan", 2, "Persian");

it.səs_çıxar();
it.oyna();
it.məşq_et();
it.sahib_tani();

pişik.səs_çıxar();
pişik.mırnaqla();
pişik.ov_et();
pişik.mırıldanır();

console.log("İt statusu:", it.status());
console.log("Pişik statusu:", pişik.status());
```

---
## 🔹 Çoxsəviyyəli Miras (Multilevel Inheritance)

JavaScript-də miras dərinləşdirilərək bir neçə səviyyə yaradıla bilər.

```javascript
class Canlı {
  constructor(ad) {
    this.ad = ad;
    this.canlıdır = true;
  }

  nəfəs_al() {
    console.log(`${this.ad} nəfəs alır`);
  }
}

// Birinci səviyyə - Heyvan
class Heyvan extends Canlı {
  constructor(ad, yaş) {
    super(ad);
    this.yaş = yaş;
    this.növ = "Bilinmir";
  }

  hərəkət_et() {
    console.log(`${this.ad} hərəkət edir`);
  }
}

// İkinci səviyyə - Quş
class Quş extends Heyvan {
  constructor(ad, yaş, qanad_uzunluğu) {
    super(ad, yaş);
    this.növ = "Quş";
    this.qanad_uzunluğu = qanad_uzunluğu;
  }

  uç() {
    console.log(`${this.ad} uçur!`);
  }
}

// Üçüncü səviyyə - Papuqay
class Papuqay extends Quş {
  constructor(ad, yaş, qanad_uzunluğu, rəng) {
    super(ad, yaş, qanad_uzunluğu);
    this.rəng = rəng;
  }

  danış(söz) {
    console.log(`${this.ad} deyir: ${söz}`);
  }
}

// İstifadə nümunəsi
const lora = new Papuqay("Lora", 2, 30, "yaşıl");
lora.nəfəs_al();       // Canlı
lora.hərəkət_et();     // Heyvan
lora.uç();             // Quş
lora.danış("Salam!");  // Papuqay
```

---

## 🔹 Abstrakt Siniflər (Abstract Classes) və "new.target"

JavaScript-də rəsmi abstrakt sinif anlayışı yoxdur, lakin bəzi nümunələrdə klasslar yaradılır ki, birbaşa instance yaratmaq olmaz, yalnız miras almaq üçün istifadə olunur. Bunu yoxlamaq üçün `new.target` istifadə olunur.

```javascript
class Transport {
  constructor() {
    if (new.target === Transport) {
      throw new Error("Transport sinifindən birbaşa obyekt yaratmaq olmaz");
    }
    this.tür = "Nəqliyyat";
  }

  hərəkət() {
    throw new Error("Bu metod alt sinifdə implementasiya olunmalıdır");
  }
}

class Avtobus extends Transport {
  constructor(marka) {
    super();
    this.marka = marka;
  }

  hərəkət() {
    console.log(`${this.marka} avtobusu yoluna davam edir`);
  }
}

const avtobus = new Avtobus("Mercedes");
avtobus.hərəkət(); // Mercedes avtobusu yoluna davam edir
// const t = new Transport(); // Xəta!
```

---

## 🔹 Class Expression

Sinifləri dəyişkən kimi təyin etmək də olar, bu zaman onları "class expression" adlandırırlar.

```javascript
const İnsaat = class {
  constructor(növ, yer) {
    this.növ = növ;
    this.yer = yer;
  }
  tikintiEt() {
    console.log(`${this.yer}-də ${this.növ} tikilir`);
  }
};

const bina = new İnsaat("bina", "Bakı");
bina.tikintiEt(); // Bakı-də bina tikilir
```

---

## 🔹 Prototip Chain və super()

- **super()** əsas sinifin constructor və metodlarını çağırmaq üçün istifadə olunur.
    
- **Prototip chain** ilə bir obyektin miras alındığı parent-lərin bütün metod və property-lərinə çıxış mümkündür.
    

```javascript
class Valideyn {
  salamla() {
    console.log("Salam, mən valideynəm!");
  }
}

class Usaq extends Valideyn {
  salamla() {
    super.salamla(); // Parent metodunu çağırırıq
    console.log("Salam, mən uşaqam!");
  }
}

const u = new Usaq();
u.salamla();
// Salam, mən valideynəm!
// Salam, mən uşaqam!
```

---

## 🔹 instanceof Operatoru

Bir obyektin hansı sinifdən yaradıldığını yoxlamaq üçün istifadə olunur.

```javascript
class Heyvan {}
class İt extends Heyvan {}
const rex = new İt();

console.log(rex instanceof İt);      // true
console.log(rex instanceof Heyvan);  // true
console.log(rex instanceof Object);  // true
```

---

## 🔹 Public və Private Sahələr (#privateFields)

ES2022-dən etibarən JavaScript-də private property-lər üçün `#` işarəsi istifadə olunur.

```javascript
class BankHesabi {
  #balans; // Private property

  constructor(ad, balans) {
    this.ad = ad;
    this.#balans = balans;
  }

  #balansGoster() {
    return this.#balans;
  }

  balansSor() {
    return this.#balansGoster();
  }

  pulCixar(miqdar) {
    if (miqdar <= this.#balans) {
      this.#balans -= miqdar;
      return true;
    }
    return false;
  }
}

const hes = new BankHesabi("Azer", 1000);
console.log(hes.balansSor()); // 1000
// console.log(hes.#balans); // Xəta!
```

---

## 🔹 Mixins (Bir neçə davranışın sinfə əlavə edilməsi)

Mixin — bir və ya bir neçə obyektin metod və property-lərini başqa bir obyektə və ya sinfə əlavə etmək üçün istifadə olunur.

```javascript
let Flyer = {
  uç() {
    console.log(`${this.ad} uça bilir`);
  }
};

let Runner = {
  qaç() {
    console.log(`${this.ad} qaça bilir`);
  }
};

class Qahraman {
  constructor(ad) {
    this.ad = ad;
  }
}

// Davranış əlavə edirik
Object.assign(Qahraman.prototype, Flyer, Runner);

const superman = new Qahraman("Superman");
superman.uç();  // Superman uça bilir
superman.qaç(); // Superman qaça bilir
```

---

## 🔹 Klassların Əlavə İmkanları və Qısa Qeydlər

- **Arrow function metodları:** Klass daxilində istifadə etmək tövsiyə olunmur, çünki arrow funksiyalarda öz `this` yoxdur.
    
- **Computed Method Names:** Klassda metodun adını dinamik olaraq təyin etmək olar.
    
- **Static bloklar:** ES2022-də əlavə olunub, bir dəfə class üçün işə düşən kod blokudur.
    

```javascript
class Demo {
  static {
    console.log("Demo klassı yaradıldı!");
  }
}
```

---

## 🔹 Klassların Faydaları və Müqayisə Cədvəli

|Xüsusiyyət|ES5 Constructor Function|ES6 Class|
|---|---|---|
|Sintaksis|function|class|
|Inheritance|prototype|extends, super|
|Static Methods|function.staticMethod|static|
|Getter/Setter|Object.defineProperty|get/set|
|Private Fields|_field (yox)|#field (var)|

---

## 🔹 Tez-tez verilən suallar (FAQ)

**1. JavaScript-də siniflər niyə istifadə olunur?**  
Kodun təkrar istifadəsini, strukturlu və oxunaqlı olmasını təmin edir.

**2. Bir klassın yalnız bir parent-i ola bilər?**  
Bəli, amma mixin-lərlə əlavə funksionallıq verilə bilər.

**3. Private sahələr niyə vacibdir?**  
Məlumatların təhlükəsizliyi və səhvlərdən qorunması üçün.

**4. Siniflər performance baxımından ES5 function-dan fərqlənirmi?**  
Yox, ES6 class sadəcə sintaktik şəkildir, nəticədə eyni prototip mexanizmi işləyir.
