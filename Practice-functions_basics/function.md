
---

## 📘 JavaScript-də funksiya nədir?

### 🧠 **Təyin olunma**

**Funksiya** — müstəqil kod blokudur, hansı ki **adla çağırıla bilər**, **məlumatları (parametrləri) qəbul edə bilər** və **nəticə qaytara bilər**.  
Funksiyalar **kodu təkrar istifadə etməyə**, **proqramı məntiqi hissələrə bölməyə** və **sazlama və dəstəyi asanlaşdırmağa** imkan verir.

---

### 📦 Funksiya nümunəsi

```javascript
function sayHello() {
  console.log("Salam, dünya!");
}

sayHello(); // Funksiyanın çağırılması — "Salam, dünya!" çap edəcək
```

---

### 🔍 Funksiyalar nə üçün lazımdır?

- 📚 **Kodun təkrarlanmasından qaçmaq** (DRY prinsipi — Don't Repeat Yourself)
    
- ⚙️ **Tapşırıqları alt-tapşırıqlara bölmək** — hər funksiya sadəcə bir şey edir
    
- ♻️ **Məntiqi müxtəlif yerlərdə təkrar istifadə etmək**
    
- 🔧 **Kodun dəstəklənməsini və sazlanmasını asanlaşdırmaq**
    

---

### 💡 Həyatdan analogiya

Təsəvvür et ki, funksiya — bir **reseptdir**. Hər dəfə funksiyanı çağıranda, sanki bu reseptə görə yenidən yemək hazırlayırsan.

```javascript
function makeCoffee() {
  console.log("Suyu qaynadırıq...");
  console.log("Qəhvə əlavə edirik...");
  console.log("Hazırdır!");
}

makeCoffee();
```

---

### 📥 Məlumatları qəbul edir → 📤 Nəticə qaytarır

Funksiyalar **giriş məlumatlarını (arqumentləri)** qəbul edə və **nəticə qaytara bilər**:

```javascript
function add(a, b) {
  return a + b;
}

let result = add(3, 5); // 8
```

---

### 🧪 Mini-tapşırıq

Konsolda adınızı göstərən funksiya yaradın. Onu `sayMyName` adlandırın.

---

---

## 🧾 Funksiyanın elan edilməsi (Function Declaration)

### 📌 Bu nədir?

**Function Declaration** — JavaScript-də funksiyanı yaratmağın bir üsuludur. Bu klassik və ən geniş yayılmış elan etmə üsuludur.

---

### ✅ Sintaksis:

```javascript
function ad(parametrlər) {
  // funksiyanın gövdəsi
}
```

- **`function`** — açar söz
    
- **`ad`** — funksiyanın adı, hansı ki bununla onu çağıra bilərsiniz
    
- **`parametrlər`** — funksiyanın qəbul etdiyi dəyişənlər
    
- **funksiyanın gövdəsi** — çağırıldıqda yerinə yetirilən təlimatlar
    

---

### 📦 Nümunə:

```javascript
function greet(name) {
  console.log("Salam, " + name + "!");
}

greet("Anna"); // Salam, Anna!
```

---

### 📌 Xüsusiyyət: **qaldırma (hoisting)**

**Function Declaration** vasitəsilə elan edilmiş funksiyalar görünmə sahəsinin yuxarısına qaldırılır. Yəni onları elan etməzdən **əvvəl** çağırmaq mümkündür.

```javascript
sayHi(); // İşləyir!

function sayHi() {
  console.log("Salam!");
}
```

> 🔍 Buna **qaldırma (hoisting)** deyilir: JavaScript mühərriki kodu yerinə yetirməzdən əvvəl belə bir funksiyanı "görür".

---

### ❌ Yanlış sintaksis zamanı səhv:

```javascript
function 123wrong() {
  // ❌ Ad rəqəmlə başlaya bilməz
}
```

---

### ✅ Yaxşı təcrübə:

- Funksiyanın adı feil olmalıdır: `printMessage`, `getData`, `sendEmail`
    
- Adlar üçün **camelCase** istifadə etmək
    

---

### 🧪 Tapşırıqlar:

1. İki ədəd qəbul edən və onların hasilini qaytaran `multiply` funksiyasını yaradın.
    
2. Yaşı qəbul edən və onu "Mənim ___ yaşım var" mətni ilə konsola çıxaran `showAge` funksiyasını yazın.
    

---

---

## 🚀 Funksiyanın çağırılması (Function Call)

### 📌 "Funksiyanı çağırmaq" nə deməkdir?

**Funksiyanın çağırılması** — onun **icrasını başlatmaq**, ona arqumentlər ötürmək (lazım gələrsə) və ondan nəticə almaq (əgər o, nəticə qaytarırsa) deməkdir.

---

### ✅ Çağırma sintaksisi:

```javascript
funksiyaAdı(arqumentlər);
```

---

### 📦 Nümunələr:

#### 1. Arqumentsiz funksiya:

```javascript
function greet() {
  console.log("Salam!");
}

greet(); // Funksiyanın çağırılması → Salam!
```

#### 2. Arqumentli funksiya:

```javascript
function greetUser(name) {
  console.log("Salam, " + name + "!");
}

greetUser("Anna"); // Salam, Anna!
greetUser("İvan"); // Salam, İvan!
```

---

### 💬 Funksiya çağırıldıqda nə baş verir:

1. JavaScript funksiyanın elanını adla tapır.
    
2. Ötürülən arqumentləri parametrlərin yerinə qoyur.
    
3. Funksiyanın gövdəsindəki kodu icra edir.
    
4. Əgər `return` varsa — nəticəni qaytarır.
    

---

### 🔁 Çoxsaylı çağırışlar:

Funksiyaları lazım olduğu qədər çağırmaq olar — hər çağırış yenidən icra olunur:

```javascript
function square(n) {
  return n * n;
}

console.log(square(2)); // 4
console.log(square(5)); // 25
console.log(square(10)); // 100
```

---

### ❗Vacib:

Çağırışda tələb olunan arqumentlər ötürülməzsə — onlar `undefined` olacaq:

```javascript
function showName(name) {
  console.log("Ad:", name);
}

showName(); // Ad: undefined
```

---

### 🧪 Təcrübə:

1. `sayHelloTo(name)` funksiyasını elan et, hansı ki çap edir: `Salam, [ad]!`
    
2. Onu 3 dəfə müxtəlif adlarla çağır.
    
3. `sum(a, b)` funksiyasını elan et və onun çağırışının nəticəsini konsola çıxar.
    

---

---

## 🧩 Funksiyaların arqumentləri və parametrləri

### 📌 Bunlar nədir?

- **Parametrlər** (parameters) — **funksiyanın elanında** göstərilən **dəyişənlərdir**.
    
- **Arqumentlər** (arguments) — funksiya **çağırılarkən ötürülən** **dəyərlərdir**.
    

🧠 Sadə dildə:

> **Parametrlər — qəbuledicidir, arqumentlər isə — ötürülən şeylərdir.**

---

### ✅ Nümunə:

```javascript
function greet(name) {  // name — parametrdir
  console.log("Salam, " + name + "!");
}

greet("Anna"); // "Anna" — arqumentdir
greet("İvan");
```

---

### 📦 Bir neçə parametr:

```javascript
function add(a, b) {
  console.log("Cəm:", a + b);
}

add(3, 4);   // Cəm: 7
add(10, 20); // Cəm: 30
```

---

### ❗Əgər arqumentlər daha azdırsa?

Əgər parametrlərdən **daha az arqument** ötürülürsə — qalanlar `undefined` olacaq:

```javascript
function showInfo(name, age) {
  console.log(name, age);
}

showInfo("Anna"); // Anna undefined


function SayHi(first_name, second_name = "Cate") {

	let greet = "Hello";Ï
	
	if (first_name && second_name) {
		return console.log(`${greet} ${first_name} and ${second_name}`);
	}
	
	if (first_name) {
		return console.log(`${greet} ${first_name}`);
	}
	console.log("no one to greeting :(");

}
SayHi("Anna");
```

---

### ✅ Susmaya görə dəyərlər (default values):

Parametrlər üçün susmaya görə dəyər təyin etmək olar:

```javascript
function greet(name = "qonaq") {
  console.log("Salam, " + name + "!");
}

greet();        // Salam, qonaq!
greet("Oleq");  // Salam, Oleq!
```

---

### 📚 Terminlər cədvəldə:

|Elan zamanı|Çağırış zamanı|
|---|---|
|Parametrlər (parameters)|Arqumentlər (arguments)|

---

### 🔁 Arqumentlərin dəyər üzrə ötürülməsi

JavaScript-də **primitiv tiplər** (ədədlər, sətirlər, bullar) **dəyər üzrə** ötürülür — funksiya arqumentin surətini alır.  
**Obyektlər və massivlər** isə — referans üzrə.

```javascript
function change(x) {
  x = 10;
}

let num = 5;
change(num);
console.log(num); // 5 — dəyişmədi
```

---

### 🧪 Tapşırıqlar:

1. Tam adı çap edən `fullName(firstName, lastName)` funksiyasını yarat.
    
2. Qüvvətə yüksəldilmiş dəyəri qaytaran (susmaya görə kvadratı) `power(base, exponent = 2)` funksiyasını yaz.
    
3. Funksiyanı parametrlərdən daha az arqumentlə çağırmağa çalış. Nə baş verəcək?
    

---

---

## 🔁 `return` vasitəsilə dəyərin qaytarılması

### 📌 `return` nə edir?

`return` açar sözü funksiyada istifadə olunur ki:

- **Dəyəri xaricə qaytarsın**
    
- **Funksiyanın icrasını tamamlasın**
    

> `return`-dən sonra funksiyanın icrası dayanır — `return`-dən aşağıdakı kod icra olunmur.

---

### ✅ Sintaksis:

```javascript
function ad(parametrlər) {
  // ...
  return dəyər;
}
```

---

### 📦 Nümunə:

```javascript
function sum(a, b) {
  return a + b;
}

let result = sum(3, 4);
console.log(result); // 7
```

Burada:

- `sum(3, 4)` `7` qaytarır
    
- `result` dəyişəni bu dəyəri əldə edir
    
- Biz onu konsola çıxarırıq
    

---

### 🛑 Qaytarma icranı dayandırır:

```javascript
function test() {
  return "Hazırdır";
  console.log("Bu sətir icra olunmayacaq");
}
```

---

### ❌ `return` olmadan nəticə `undefined` olur

```javascript
function sayHi() {
  console.log("Salam!");
}

let result = sayHi(); // Konsolda: Salam!
console.log(result);  // undefined
```

---

### 🎯 Qaytarmanı birbaşa ifadələrdə istifadə etmək olar:

```javascript
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 5)); // 10
console.log(multiply(3, 7)); // 21
```

---

### 🧪 Tapşırıqlar:

1. Ədədin kvadratını qaytaran `square(n)` funksiyasını yarat.
    
2. `Salam, [ad]!` sətirini qaytaran `getGreeting(name)` funksiyasını yaz və nəticəni konsola çıxar.
    
3. Əgər `return` dəyər olmadan yazılarsa nə baş verər? Yoxla!
    

---

---

## 🧾 Function Expression (Funksional ifadə)

### 📌 Bu nədir?

**Funksional ifadə** — funksiyanı yaratmaq və onu **dəyişəndə saxlamaq** üsuludur.  
Belə funksiya Function Declaration kimi **qaldırılmır**.

---

### ✅ Sintaksis:

```javascript
const ad = function(parametrlər) {
  // funksiyanın gövdəsi
};
```

- Funksiya **anonim** (adsız) yaradılır
    
- Dəyişənə mənimsədilir
    
- Dəyişən vasitəsilə çağırılır
    

---

### 📦 Nümunə:

```javascript
const greet = function(name) {
  console.log("Salam, " + name + "!");
};

greet("Anna"); // Salam, Anna!
```

---

### 🔍 Function Declaration-dan fərqlər:

|Xüsusiyyət|Function Declaration|Function Expression|
|---|---|---|
|Qaldırma (hoisting)|✅ Bəli|❌ Xeyr|
|Funksiya adı|Mütləqdir|Anonim ola bilər|
|Nə vaxt əlçatandır|Elanından əvvəl|Yalnız elanından sonra|

---

### ❌ Elanından əvvəl çağırıldıqda səhv:

```javascript
sayHi(); // ❌ Səhv

const sayHi = function() {
  console.log("Salam!");
};
```

---

### 🧠 Niyə istifadə etməli?

- Çeviklik: funksiyanı arqument kimi ötürmək olar
    
- Obyektlərdə, kolbeklərdə, bağlamalarda istifadə etmək olar
    
- Anonim funksiyalar üçün uyğundur
    

---

### 🎯 Adlı Function Expressions:

İfadə daxilində ad vermək olar — rekursiya və ya sazlama üçün istifadə olunur:

```javascript
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // daxildə adı istifadə edirik
};

console.log(factorial(5)); // 120
```

---

### 🧪 Təcrübə:

1. Function Expression vasitəsilə iki ədədi toplayan `sum` funksiyasını elan et.
    
2. Ədədin cüt olub-olmamasını yoxlayan və `true` qaytaran `isEven` funksiyasını elan et.
    
3. Belə bir funksiyanı elanından əvvəl çağırmağa çalış. Nə baş verəcək?
    

---

---

## 🎯 Ox funksiyaları (Arrow Functions)

### 📌 Bu nədir?

**Arrow function** — ES6-da (2015) əlavə edilmiş funksional ifadələrin (Function Expression) qısaldılmış yazılış formasıdır.  
Çox vaxt **qısa funksiyaların** və **kolbeklərin** yazılması üçün istifadə olunur.

---

### ✅ Sintaksis:

```javascript
const ad = (parametrlər) => {
  // funksiyanın gövdəsi
};
```

---

### 📦 Nümunələr:

#### 1. Standart yazılış:

```javascript
const greet = (name) => {
  console.log("Salam, " + name + "!");
};

greet("Anna"); // Salam, Anna!
```

#### 2. Əgər bir parametr varsa — mötərizələri buraxmaq olar:

```javascript
const greet = name => {
  console.log("Salam, " + name + "!");
};
```

#### 3. Əgər funksiya bir ifadə qaytarırsa — `return` və `{}` yazmamaq olar:

```javascript
const square = n => n * n;

console.log(square(4)); // 16
```

---

### 🔁 Bir neçə parametr:

```javascript
const sum = (a, b) => a + b;
console.log(sum(3, 5)); // 8
```

---

### 🔙 Obyektin qaytarılması (mötərizələrə bükülməlidir!):

```javascript
const getUser = () => ({ name: "İvan", age: 30 });

console.log(getUser()); // { name: "İvan", age: 30 }
```

---

### ⚠ Ox funksiyalarının xüsusiyyətləri:

1. **Özlərinə məxsus `this`-ləri yoxdur** — dəyər xarici kontekstdən götürülür.
    
2. **Konstruktor kimi istifadə edilə bilməz** (`new` ilə).
    
3. **`arguments` obyekti yoxdur** — rest-parametri (`...args`) istifadə olunur.
    

---

### 📌 `this` ilə nümunə:

```javascript
const user = {
  name: "Anna",
  sayHi: function() {
    setTimeout(() => {
      console.log("Salam, " + this.name); // this gözlənildiyi kimi işləyir
    }, 1000);
  }
};

user.sayHi();
```

Əgər `setTimeout` daxilində adi funksiya istifadə etsəydik, `this` düzgün işləməzdi.

### `this` açar sözü və funksiya konteksti

JavaScript-də `this` açar sözü funksiyanın çağırılma kontekstinə istinad edir. Onun dəyəri funksiyanın necə çağırıldığından asılıdır, funksiyanın harada təyin olunduğundan yox.

javascript

```javascript
const user = {
  name: "Anna",
  sayHi: function() {
    setTimeout(() => {
      console.log("Salam, " + this.name); // this gözlənildiyi kimi işləyir
    }, 1000);
  }
};
user.sayHi();
```

### Nümunəni addım-addım izah edək:

1. `user` obyekti yaradılır və onun içərisində `name` xüsusiyyəti və `sayHi` metodu var.
2. `sayHi` metodunu çağırdıqda (`user.sayHi()`), bu metodun daxilindəki `this` user obyektinə işarə edir, çünki metod `user` obyektinin kontekstində çağırılıb. Yəni bu halda `this === user` olur.
3. `sayHi` metodu daxilində `setTimeout` funksiyası çağırılır. `setTimeout` daxilində arrow funksiyası (`() => { ... }`) istifadə olunur.
4. **Burada əsas məqam**: Arrow funksiyalar öz `this` kontekstlərinə sahib deyillər. Onlar yaradıldıqları xarici funksiyanın `this` dəyərini "irs alırlar".
5. Beləliklə, arrow funksiya `sayHi` metodunun kontekstini "irsən aldığı" üçün, arrow funksiyadakı `this` də `user` obyektinə işarə edir və `this.name` ifadəsi "Anna" qiymətini qaytarır.
6. Nəticədə, 1 saniyə sonra konsola "Salam, Anna" yazılır.

### Arrow funksiya əvəzinə adi funksiya ifadəsi istifadə etsəydik nə baş verərdi?

javascript

```javascript
const user = {
  name: "Anna",
  sayHi: function() {
    setTimeout(function() {
      console.log("Salam, " + this.name); // this burada window obyektinə (və ya strict mode-da undefined) işarə edər
    }, 1000);
  }
};
user.sayHi(); // "Salam, undefined" çap edər
```

Adi funksiya ifadələrində (`function() { ... }`) `this` çağırılma anında təyin olunur. `setTimeout` funksiyası bu daxili funksiyanı qlobal kontekstdə çağırır. Nəticədə `this` qlobal obyektə (`window` brauzerdə və ya `global` Node.js-də) işarə edir. Strict mode (`"use strict"`) aktivdirsə, `this` `undefined` olur.

Bu halda `this.name` undefined olacaq və "Salam, undefined" çap olunacaq.

### Adi funksiya ilə həll yolları:

1. **`bind()` metodu ilə:**

javascript

```javascript
setTimeout(function() {
  console.log("Salam, " + this.name);
}.bind(this), 1000);
```

2. **Konteksti saxlayaraq:**

javascript

```javascript
const self = this;
setTimeout(function() {
  console.log("Salam, " + self.name);
}, 1000);
```

### Nəticə:

Arrow funksiyalar (`=>`) xüsusiyyəti onların `this` kontekstini yaradıldıqları xarici mühitdən götürməsidir. Bu xüsusiyyət callback funksiyalarda, `setTimeout`, `setInterval` və hadisə işləyicilərində istifadə edildikdə çox faydalıdır və kodu daha oxunaqlı və proqnozlaşdırıla bilən edir.

Bu səbəbdən, əgər callback funksiya içərisində xarici mühitin `this` kontekstinə ehtiyacınız varsa, arrow funksiyalar ideal seçimdir.

---

### 🧪 Təcrübə:

1. İki ədədin hasilini qaytaran `multiply(a, b)` ox funksiyasını yaz.
    
2. Ədədin müsbət olub-olmadığını yoxlayan və müsbət olduqda `true` qaytaran `isPositive(n)` funksiyasını yarat.
    
3. `Salam, [ad]!` qaytaran tək sətirli `getMessage(name)` funksiyasını yaz.
    

---

---

## ⚔️ `function`, `arrow function` və `method` arasında fərq

JavaScript-də funksiyanı elan etməyin 3 əsas üsulu var:

|Elan növü|Nümunə|
|---|---|
|Function Declaration|`function greet() {}`|
|Arrow Function|`const greet = () => {}`|
|Method (obyektdə)|`const obj = { greet() {} }`|

---

### 🔍 Əsas fərqlər:

|Xüsusiyyət|`function`|`arrow function`|`method`|
|---|---|---|---|
|Öz `this`-i var|✅ Bəli|❌ Xeyr (xarici `this`-i götürür)|✅ Bəli|
|`new` ilə istifadə oluna bilər|✅ Bəli|❌ Xeyr|❌ Xeyr|
|`arguments` obyekti var|✅ Bəli|❌ Xeyr|✅ Bəli|
|Qaldırmanı (hoisting) dəstəkləyir|✅ Bəli (declaration)|❌ Xeyr|❌ Xeyr|
|Qısa sintaksis|Xeyr|✅ Bəli|✅ Bəli|

---

### 📌 Nümunələr və izah

#### 1. **Adi funksiya (Function Declaration)**:

```javascript
function sayHi() {
  console.log("Salam!");
}
sayHi();
```

- `this`, `arguments` var
    
- Elanından əvvəl çağırıla bilər
    

---

#### 2. **Ox funksiyası (Arrow Function)**:

```javascript
const sayHi = () => {
  console.log("Salam!");
};
sayHi();
```

- Öz `this`-i yoxdur — onu xarici sahədən götürür
    
- Kolbeklər üçün, xüsusən də `setTimeout`, `map` və s. daxilində idealdır
    

---

#### 3. **Obyektin metodu**:

```javascript
const user = {
  name: "Anna",
  sayHi() {
    console.log("Salam, " + this.name);
  }
};
user.sayHi(); // Salam, Anna
```

- Metod obyektə bağlıdır
    
- `this` obyektin özünə istinad edir
    

---

### ⚠️ Vacib: ox funksiyasında `this`

```javascript
const user = {
  name: "İvan",
  sayHi: () => {
    console.log("Salam, " + this.name);
  }
};

user.sayHi(); // Salam, undefined
```

- Ox funksiyasının **öz `this`-i yoxdur**
    
- Bu halda `this` brauzerdə `window`-a və ya ciddi rejimdə `undefined`-a istinad edir
    

---

### 🧪 Təcrübə:

1. Cəmi qaytaran adi `add(a, b)` funksiyasını yaz.
    
2. Eyni şeyi ox funksiyası ilə et.
    
3. `this` ilə adı çıxaran `sayHi` metoduna malik `user` obyekti yarat.
    
4. Metodu ox funksiyası ilə əvəz etməyə çalış — nəticənin necə dəyişəcəyinə bax.
    

---

---

## 🔄 Kolbeklər (Callbacks)

### Bu nədir?

**Kolbek** — başqa bir funksiyaya **arqument kimi ötürdüyümüz** funksiyasıdır ki, onu sonra çağıraq.

📦 Nümunə:

```javascript
function greet(name, callback) {
  console.log("Salam, " + name);
  callback(); // ötürülmüş funksiyanı çağırırıq
}

function sayBye() {
  console.log("Sağ ol!");
}

greet("Anna", sayBye);
// Salam, Anna
// Sağ ol!
```

💡 Bunun üçün istifadə olunur:

- hadisələrin emalı
    
- asinxron əməliyyatlar (məsələn, `setTimeout`)
    
- çağırış zəncirləri
    

---

## 🔒 Bağlamalar (Closures)

### Bu nədir?

**Bağlama** — öz **leksik mühitini "xatırlayan"** funksiyasıdır, hətta onun xaricində çağırıldıqda belə.

📦 Nümunə:

```javascript
function makeCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

💡 Bunun üçün istifadə olunur:

- məlumatların inkapsulyasiyası
    
- şəxsi dəyişənlərin yaradılması
    
- "yaddaşı" olan funksiyaların yaradılması
    

---

## 🔁 Rekursiya (Recursion)

### Bu nədir?

**Rekursiya** — funksiyanın alt-tapşırığı həll etmək üçün **özünü çağırmasıdır**.

📦 Nümunə:

```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

💡 Bunun üçün istifadə olunur:

- daxili qovluq strukturlarının emalı
    
- riyazi hesablamalar (faktorial, fibonaci)
    
- ağacların dolaşılması
    

---