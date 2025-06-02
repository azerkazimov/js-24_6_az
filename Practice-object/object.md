

## 🔹 Obyekt nədir?

JavaScript-də obyekt - açar-dəyər cütlərinin toplusudur. Obyektlər məlumatları və funksiyaları (metodları) saxlamaq üçün istifadə olunur.

```js
// Sadə obyekt nümunəsi
const insan = {
  ad: "Əli",
  yaş: 25,
  şəhər: "Bakı"
};
```

### Obyektlərin xüsusiyyətləri:

- **Mutable** (dəyişkən) - dəyərləri dəyişdirilə bilər
- **Reference type** - istinad tipi
- **Dynamic** - runtime zamanı xüsusiyyətlər əlavə/silinə bilər
- **Heterogeneous** - müxtəlif data tipləri saxlaya bilər

---

## 🔹 Obyekt yaratma üsulları

### 1️⃣ Obyekt Literal Sintaksisi (Ən çox istifadə olunan)

```js
const avtomobil = {
  marka: "BMW",
  model: "X5",
  il: 2023,
  rəng: "ağ",
  işə_sal: function() {
    return `${this.marka} ${this.model} işə salındı`;
  }
};
```

### 2️⃣ Object Konstruktoru

```js
const avtomobil = new Object();
avtomobil.marka = "BMW";
avtomobil.model = "X5";
avtomobil.il = 2023;
avtomobil.işə_sal = function() {
  return `${this.marka} ${this.model} işə salındı`;
};
```

### 3️⃣ Object.create() metodu

```js
const avtomobilPrototipi = {
  işə_sal: function() {
    return `${this.marka} işə salındı`;
  }
};

const avtomobil = Object.create(avtomobilPrototipi);
avtomobil.marka = "BMW";
avtomobil.model = "X5";
```

### 4️⃣ Konstruktor Funksiya

```js
function Avtomobil(marka, model, il) {
  this.marka = marka;
  this.model = model;
  this.il = il;
  this.işə_sal = function() {
    return `${this.marka} ${this.model} işə salındı`;
  };
}

const avtomobil = new Avtomobil("BMW", "X5", 2023);
```

### 5️⃣ ES6 Class Sintaksisi

```js
class Avtomobil {
  constructor(marka, model, il) {
    this.marka = marka;
    this.model = model;
    this.il = il;
  }
  
  işə_sal() {
    return `${this.marka} ${this.model} işə salındı`;
  }
}

const avtomobil = new Avtomobil("BMW", "X5", 2023);
```

---

## 🔹 Xüsusiyyətlər və metodlar

### Xüsusiyyətlər (Properties)

```js
const şəxs = {
  ad: "Leyla",
  yaş: 28,
  email: "leyla@example.com",
  ünvan: {
    şəhər: "Bakı",
    rayon: "Nəsimi",
    küçə: "Nizami"
  }
};
```

### Metodlar (Methods)

```js
const hesabat = {
  ad: "İllik Hesabat",
  tarix: "2024",
  
  // Method sintaksisi (ES6)
  məlumat_al() {
    return `${this.ad} - ${this.tarix}`;
  },
  
  // Ənənəvi method sintaksisi
  çap_et: function() {
    console.log(this.məlumat_al());
  },
  
  // Arrow function (this context problemi var!)
  səhv_metod: () => {
    // this burada window/undefined olacaq
    console.log(this.ad); // undefined
  }
};
```

### Getter və Setter metodlar

```js
const istifadəçi = {
  _ad: "",
  _yaş: 0,
  
  // Getter
  get ad() {
    return this._ad.toUpperCase();
  },
  
  // Setter
  set ad(dəyər) {
    if (dəyər.length < 2) {
      throw new Error("Ad ən azı 2 hərf olmalıdır");
    }
    this._ad = dəyər;
  },
  
  get yaş() {
    return this._yaş;
  },
  
  set yaş(dəyər) {
    if (dəyər < 0 || dəyər > 150) {
      throw new Error("Yaş 0-150 arasında olmalıdır");
    }
    this._yaş = dəyər;
  }
};

istifadəçi.ad = "Rəşad";
istifadəçi.yaş = 25;
console.log(istifadəçi.ad); // RƏŞAD
```

---

## 🔹 Obyektlərə giriş üsulları

### 1️⃣ Nöqtə notasiyası (Dot Notation)

```js
const məhsul = {
  ad: "Laptop",
  qiymət: 1500,
  marka: "HP"
};

console.log(məhsul.ad);      // Laptop
console.log(məhsul.qiymət);  // 1500
```

### 2️⃣ Kvadrat mötərizə notasiyası (Bracket Notation)

```js
const açar = "marka";
console.log(məhsul[açar]);     // HP
console.log(məhsul["ad"]);     // Laptop

// Dinamik açar adları
const sahə = "qiymət";
console.log(məhsul[sahə]);     // 1500

// Açar adında boşluq varsa
const obyekt = {
  "tam ad": "Əli Məmmədov",
  "doğum tarixi": "1995-05-15"
};
console.log(obyekt["tam ad"]);
```

### 3️⃣ Xüsusiyyət əlavə etmə və dəyişdirmə

```js
const şirkət = {
  ad: "TechCorp"
};

// Yeni xüsusiyyət əlavə etmə
şirkət.əməkdaş_sayı = 150;
şirkət["qurulma_ili"] = 2010;

// Mövcud xüsusiyyəti dəyişdirmə
şirkət.ad = "TechCorp Azerbaijan";

console.log(şirkət);
```

### 4️⃣ Xüsusiyyət silmə

```js
const obyekt = {
  a: 1,
  b: 2,
  c: 3
};

delete obyekt.b;
console.log(obyekt); // {a: 1, c: 3}
```

---

## 🔹 Obyektlərin keçilməsi

### 1️⃣ for...in döngüsü

```js
const şəxs = {
  ad: "Nigar",
  yaş: 30,
  peşə: "Müəllim"
};

for (let açar in şəxs) {
  console.log(`${açar}: ${şəxs[açar]}`);
}
// Çıxış:
// ad: Nigar
// yaş: 30
// peşə: Müəllim
```

### 2️⃣ Object.keys() ilə

```js
const açarlar = Object.keys(şəxs);
console.log(açarlar); // ["ad", "yaş", "peşə"]

açarlar.forEach(açar => {
  console.log(`${açar}: ${şəxs[açar]}`);
});
```

### 3️⃣ Object.values() ilə

```js
const dəyərlər = Object.values(şəxs);
console.log(dəyərlər); // ["Nigar", 30, "Müəllim"]

dəyərlər.forEach(dəyər => {
  console.log(dəyər);
});
```

### 4️⃣ Object.entries() ilə

```js
const giriş_ləri = Object.entries(şəxs);
console.log(giriş_ləri); 
// [["ad", "Nigar"], ["yaş", 30], ["peşə", "Müəllim"]]

giriş_ləri.forEach(([açar, dəyər]) => {
  console.log(`${açar}: ${dəyər}`);
});
```

---

## 🔹 Obyektlərlə işləmək metodları

### Object.keys(), Object.values(), Object.entries()

```js
const tələbə = {
  ad: "Əmrah",
  yaş: 20,
  ixtisas: "Kompüter Elmləri",
  qiymətlər: [85, 92, 78]
};

console.log(Object.keys(tələbə));     // Açarlar
console.log(Object.values(tələbə));   // Dəyərlər  
console.log(Object.entries(tələbə));  // [açar, dəyər] cütləri
```

### Object.assign() - Obyekt birləşdirmə

```js
const obyekt1 = { a: 1, b: 2 };
const obyekt2 = { b: 3, c: 4 };
const obyekt3 = { c: 5, d: 6 };

const birləşmiş = Object.assign({}, obyekt1, obyekt2, obyekt3);
console.log(birləşmiş); // { a: 1, b: 3, c: 5, d: 6 }
```

### Object.freeze() - Obyekti dondurma

```js
const sabit_obyekt = Object.freeze({
  ad: "JavaScript",
  tip: "Proqramlaşdırma dili"
});

sabit_obyekt.ad = "Python"; // İşləməyəcək
console.log(sabit_obyekt.ad); // JavaScript
```

### Object.seal() - Obyekti möhürləmə

```js
const möhürlənmiş = Object.seal({
  ad: "React",
  versiya: "18.0"
});

möhürlənmiş.ad = "Vue"; // İşləyəcək
möhürlənmiş.yeni_sahə = "test"; // İşləməyəcək
delete möhürlənmiş.versiya; // İşləməyəcək
```

### hasOwnProperty() və in operatoru

```js
const obyekt = {
  öz_xüsusiyyət: "dəyər"
};

console.log(obyekt.hasOwnProperty("öz_xüsusiyyət")); // true
console.log("öz_xüsusiyyət" in obyekt); // true
console.log("toString" in obyekt); // true (prototipindən)
console.log(obyekt.hasOwnProperty("toString")); // false
```

---

## 🔹 Obyektlərin kopyalanması

### Shallow Copy (Səth kopyası)

```js
const orijinal = {
  ad: "Kənan",
  yaş: 35,
  hobbilar: ["oxumaq", "idman"]
};

// Object.assign() ilə
const kopya1 = Object.assign({}, orijinal);

// Spread operator ilə
const kopya2 = { ...orijinal };

// Problem: nested obyektlər hələ də referans paylaşır
kopya1.hobbilar.push("musiqi");
console.log(orijinal.hobbilar); // ["oxumaq", "idman", "musiqi"]
```

### Deep Copy (Dərin kopyası)

```js
// JSON metodları ilə (limitli)
const dərin_kopya1 = JSON.parse(JSON.stringify(orijinal));

// Recursive funksiya ilə
function dərinKopya(obyekt) {
  if (obyekt === null || typeof obyekt !== "object") {
    return obyekt;
  }
  
  if (obyekt instanceof Date) {
    return new Date(obyekt.getTime());
  }
  
  if (obyekt instanceof Array) {
    return obyekt.map(element => dərinKopya(element));
  }
  
  const kopya = {};
  for (let açar in obyekt) {
    if (obyekt.hasOwnProperty(açar)) {
      kopya[açar] = dərinKopya(obyekt[açar]);
    }
  }
  
  return kopya;
}

const dərin_kopya2 = dərinKopya(orijinal);
```

---

## 🔹 Destrukturizasiya

### Sadə destrukturizasiya

```js
const istifadəçi = {
  ad: "Səbinə",
  yaş: 28,
  email: "sebine@gmail.com",
  şəhər: "Gəncə"
};

const { ad, yaş, email } = istifadəçi;
console.log(ad);    // Səbinə
console.log(yaş);   // 28
console.log(email); // sebine@gmail.com
```

### Yenidən adlandırma

```js
const { ad: istifadəçi_adı, yaş: istifadəçi_yaşı } = istifadəçi;
console.log(istifadəçi_adı); // Səbinə
console.log(istifadəçi_yaşı); // 28
```

### Default dəyərlər

```js
const { ad, yaş, ölkə = "Azərbaycan" } = istifadəçi;
console.log(ölkə); // Azərbaycan
```

### Nested destrukturizasiya

```js
const şirkət = {
  ad: "TechAZ",
  ünvan: {
    şəhər: "Bakı",
    rayon: "Yasamal",
    poçt_kodu: "AZ1000"
  },
  əməkdaşlar: 250
};

const { 
  ad: şirkət_adı,
  ünvan: { şəhər, rayon },
  əməkdaşlar 
} = şirkət;

console.log(şirkət_adı); // TechAZ
console.log(şəhər);      // Bakı
console.log(rayon);      // Yasamal
```

### Funksiya parametrlərinin destrukturizasiyası

```js
function istifadəçi_məlumatı({ ad, yaş, email }) {
  return `${ad} (${yaş}) - ${email}`;
}

const məlumat = istifadəçi_məlumatı(istifadəçi);
console.log(məlumat); // Səbinə (28) - sebine@gmail.com

// Default parametrlərlə
function profil_yarat({ 
  ad, 
  yaş, 
  şəhər = "Bakı", 
  peşə = "Təyin edilməyib" 
} = {}) {
  return { ad, yaş, şəhər, peşə };
}
```

---

## 🔹 Prototip və miras

### Prototip zənciri

```js
const heyvan = {
  növ: "Məməli",
  səs_çıxar() {
    console.log("Heyvan səs çıxarır");
  }
};

const it = Object.create(heyvan);
it.cins = "Golden Retriever";
it.səs_çıxar = function() {
  console.log("Hav hav!");
};

console.log(it.növ);     // Məməli (prototipindən)
it.səs_çıxar();          // Hav hav!
```

### Prototype property

```js
function Heyvan(ad) {
  this.ad = ad;
}

Heyvan.prototype.səs_çıxar = function() {
  console.log(`${this.ad} səs çıxarır`);
};

Heyvan.prototype.info = function() {
  return `Bu ${this.ad} adlı heyvandır`;
};

const pişik = new Heyvan("Mırnav");
pişik.səs_çıxar(); // Mırnav səs çıxarır
```

### Prototip miras

```js
function It(ad, cins) {
  Heyvan.call(this, ad);
  this.cins = cins;
}

// Miras qurmaq
It.prototype = Object.create(Heyvan.prototype);
It.prototype.constructor = It;

// Override metod
It.prototype.səs_çıxar = function() {
  console.log(`${this.ad}: Hav hav!`);
};

// Yeni metod
It.prototype.gətir = function() {
  console.log(`${this.ad} topu gətirir`);
};

const it = new It("Rex", "Çoban iti");
it.səs_çıxar(); // Rex: Hav hav!
it.gətir();     // Rex topu gətirir
```

---

## 🔹 Konstruktor funksiyalar

### Sadə konstruktor

```js
function Şəxs(ad, yaş, peşə) {
  this.ad = ad;
  this.yaş = yaş;
  this.peşə = peşə;
  
  // Metod (hər instance üçün yeni yaradılır - səmərəsiz)
  this.məlumat_ver = function() {
    return `${this.ad}, ${this.yaş} yaşında, ${this.peşə}`;
  };
}

const şəxs1 = new Şəxs("Elnur", 32, "Müهendis");
```

### Prototype ilə optimallaşdırma

```js
function Şəxs(ad, yaş, peşə) {
  this.ad = ad;
  this.yaş = yaş;
  this.peşə = peşə;
}

// Metodları prototype-ə əlavə et (bütün instance-lar paylaşır)
Şəxs.prototype.məlumat_ver = function() {
  return `${this.ad}, ${this.yaş} yaşında, ${this.peşə}`;
};

Şəxs.prototype.yaş_artır = function() {
  this.yaş++;
  return this.yaş;
};

Şəxs.prototype.toString = function() {
  return this.məlumat_ver();
};
```

### new operatorunun işləməsi

```js
function Avtomobil(marka, model) {
  // 1. Yeni obyekt yaradılır: {}
  // 2. this yeni obyektə işarə edir
  // 3. this.__proto__ = Avtomobil.prototype
  
  this.marka = marka;
  this.model = model;
  
  // 4. this qaytarılır (implicit return)
}

// new-suz çağırma yoxlaması
function TəhlükəsizAvtomobil(marka, model) {
  if (!(this instanceof TəhlükəsizAvtomobil)) {
    return new TəhlükəsizAvtomobil(marka, model);
  }
  
  this.marka = marka;
  this.model = model;
}
```

---

## 🔹 Obyekt yönümlü proqramlaşdırma

### ES6 Classes

```js
class Heyvan {
  constructor(ad, yaş) {
    this.ad = ad;
    this.yaş = yaş;
  }
  
  // Instance metod
  səs_çıxar() {
    console.log(`${this.ad} səs çıxarır`);
  }
  
  // Getter
  get məlumat() {
    return `${this.ad} (${this.yaş} yaş)`;
  }
  
  // Setter
  set ad_dəyiş(yeni_ad) {
    if (yeni_ad.length < 2) {
      throw new Error("Ad çox qısadır");
    }
    this.ad = yeni_ad;
  }
  
  // Static metod
  static növ_müqayisə(heyvan1, heyvan2) {
    return heyvan1.constructor === heyvan2.constructor;
  }
}

// Miras
class It extends Heyvan {
  constructor(ad, yaş, cins) {
    super(ad, yaş); // Parent constructor çağırışı
    this.cins = cins;
  }
  
  // Method override
  səs_çıxar() {
    console.log(`${this.ad}: Hav hav!`);
  }
  
  // Yeni metod
  oyna() {
    console.log(`${this.ad} oyun oynayır`);
  }
}

const it = new It("Buddy", 3, "Labrador");
it.səs_çıxar(); // Buddy: Hav hav!
it.oyna();      // Buddy oyun oynayır
```

### Private sahələr (ES2022)

```js
class BankHesabı {
  #balans = 0;  // Private field
  #hesab_nömrəsi; // Private field
  
  constructor(hesab_nömrəsi, ilkin_balans = 0) {
    this.#hesab_nömrəsi = hesab_nömrəsi;
    this.#balans = ilkin_balans;
  }
  
  // Private metod
  #balans_yoxla(məbləğ) {
    return this.#balans >= məbləğ;
  }
  
  // Public metodlar
  əmanət(məbləğ) {
    if (məbləğ > 0) {
      this.#balans += məbləğ;
      return true;
    }
    return false;
  }
  
  çıxarış(məbləğ) {
    if (this.#balans_yoxla(məbləğ)) {
      this.#balans -= məbləğ;
      return true;
    }
    return false;
  }
  
  get balans() {
    return this.#balans;
  }
}

const hesab = new BankHesabı("AZ123456", 1000);
hesab.əmanət(500);
console.log(hesab.balans); // 1500
// console.log(hesab.#balans); // SyntaxError
```

---

## 🔹 Praktik nümunələr

### 1️⃣ To-Do List Tətbiqi

```js
class TodoList {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }
  
  taskƏlavəEt(başlıq, təsvir = '') {
    const task = {
      id: this.nextId++,
      başlıq,
      təsvir,
      tamamlandı: false,
      yaradılma_tarixi: new Date()
    };
    
    this.tasks.push(task);
    return task;
  }
  
  taskTamamla(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.tamamlandı = true;
      task.tamamlanma_tarixi = new Date();
      return true;
    }
    return false;
  }
  
  taskSil(id) {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }
  
  taskAxtarış(sorğu) {
    return this.tasks.filter(task => 
      task.başlıq.toLowerCase().includes(sorğu.toLowerCase()) ||
      task.təsvir.toLowerCase().includes(sorğu.toLowerCase())
    );
  }
  
  get tamamlanmış_tasklar() {
    return this.tasks.filter(task => task.tamamlandı);
  }
  
  get gözləyən_tasklar() {
    return this.tasks.filter(task => !task.tamamlandı);
  }
  
  statistika() {
    const ümumi = this.tasks.length;
    const tamamlanmış = this.tamamlanmış_tasklar.length;
    const gözləyən = this.gözləyən_tasklar.length;
    
    return {
      ümumi_tasklar: ümumi,
      tamamlanmış_tasklar: tamamlanmış,
      gözləyən_tasklar: gözləyən,
      tamamlanma_faizi: ümumi > 0 ? Math.round((tamamlanmış / ümumi) * 100) : 0
    };
  }
}

// İstifadə nümunəsi
const todoList = new TodoList();
todoList.taskƏlavəEt("JavaScript öyrən", "Obyektlər mövzusunu bitir");
todoList.taskƏlavəEt("Alış-veriş et", "Süd, çörək, yumurta");
todoList.taskTamamla(1);

console.log(todoList.statistika());
```

### 2️⃣ E-commerce Məhsul Kataloqu

```js
class Məhsul {
  constructor(id, ad, qiymət, kateqoriya, stok = 0) {
    this.id = id;
    this.ad = ad;
    this.qiymət = qiymət;
    this.kateqoriya = kateqoriya;
    this.stok = stok;
    this.reytinq = 0;
    this.rəylər = [];
    this.yaradılma_tarixi = new Date();
  }
  
  rəy_əlavə_et(istifadəçi, qiymət, şərh) {
    const rəy = {
      istifadəçi,
      qiymət: Math.max(1, Math.min(5, qiymət)),
      şərh,
      tarix: new Date()
    };
    
    this.rəylər.push(rəy);
    this.reytinq_hesabla();
    return rəy;
  }
  
  reytinq_hesabla() {
    if (this.rəylər.length === 0) {
      this.reytinq = 0;
      return;
    }
    
    const cəm = this.rəylər.reduce((sum, rəy) => sum + rəy.qiymət, 0);
    this.reytinq = Math.round((cəm / this.rəylər.length) * 10) / 10;
  }
  
  stok_əlavə_et(miqdar) {
    this.stok += miqdar;
  }
  
  stok_azalt(miqdar) {
    if (this.stok >= miqdar) {
      this.stok -= miqdar;
      return true;
    }
    return false;
  }
  
  get mövcuddur() {
    return this.stok > 0;
  }
  
  get endirimli_qiymət() {
    // Əgər stok çoxdursa endirim ver
    if (this.stok > 50) {
      return this.qiymət * 0.9; // 10% endirim
    }
    return this.qiymət;
  }
}

class MəhsulKataloqu {
  constructor() {
    this.məhsullar = [];
    this.kateqoriyalar = new Set();
  }

  məhsul_əlavə_et(məhsul) {
    this.məhsullar.push(məhsul);
    this.kateqoriyalar.add(məhsul.kateqoriya);
    return məhsul;
  }

  məhsul_tapışdır(id) {
    return this.məhsullar.find(m => m.id === id);
  }

  kateqoriya_üzrə_filter(kateqoriya) {
    return this.məhsullar.filter(m => m.kateqoriya === kateqoriya);
  }

  yüksək_reytinqli_məhsullar(minReytinq = 4) {
    return this.məhsullar.filter(m => m.reytinq >= minReytinq);
  }

  axtarış(anahtar) {
    const lower = anahtar.toLowerCase();
    return this.məhsullar.filter(m =>
      m.ad.toLowerCase().includes(lower) ||
      m.kateqoriya.toLowerCase().includes(lower)
    );
  }

  endirimdə_olanlar() {
    return this.məhsullar.filter(m => m.endirimli_qiymət < m.qiymət);
  }

  stokda_olanlar() {
    return this.məhsullar.filter(m => m.mövcuddur);
  }

  bütün_kateqoriyalar() {
    return Array.from(this.kateqoriyalar);
  }
}

```