
---

## 📌 JavaScript-də dəyişənlərin elan edilməsi

### 1. Dəyişən nədir?

Dəyişən — proqramın işlədiyi dəyəri saxlayan, adlandırılmış yaddaş sahəsidir.

---

### 2. Elan etmək üçün açar sözlər:

#### ✅ `var` — köhnə üsul

- Funksiya daxilində elan olunur (`function scoped`)
    
- Təkrar elan edilməyə icazə verir
    
- Qaldırılır (hoisting), lakin inisializasiya olmadan
    
- Müasir kodda istifadə edilməsi tövsiyə edilmir
    

```js
var x = 10;
var x = 20; // mümkündür
```

#### ✅ `let` — müasir üsul

- Blok sahəsi (`block scoped`)
    
- Eyni sahədə təkrar elan edilməsinə icazə vermir
    
- Qaldırılır, lakin inisializasiya olunmur (elan edilməzdən əvvəl istifadə edilərsə xəta yaranacaq)
    

```js
let y = 5;
// let y = 6; // ❌ xəta
```

#### ✅ `const` — sabitlər üçün

- Blok sahəsi
    
- Elan edilərkən inisializasiya vacibdir
    
- Dəyişəni yenidən təyin etmək olmaz (lakin obyektlərin/massivlərin daxili elementlərini dəyişmək olar)
    

```js
const PI = 3.14;
// PI = 3.1415; // ❌ xəta

const user = { name: 'Alice' };
user.name = 'Bob'; // ✅ mümkündür
```

---

### 3. `var`, `let`, `const` müqayisəsi

| Xüsusiyyət        | `var`         | `let`         | `const`       |
| ----------------- | ------------- | ------------- | ------------- |
| Görünüş sahəsi    | Funksiya      | Blok          | Blok          |
| Təkrar elan etmə  | ✅ İcazəlidir  | ❌ Xəta        | ❌ Xəta        |
| Yenidən təyinetmə | ✅ İcazəlidir  | ✅ İcazəlidir  | ❌ Xəta        |
| Hoisting          | Hə (init-siz) | Hə (init-siz) | Hə (init-siz) |

---

### 4. Tövsiyələr 👨‍🏫

- Dəyər dəyişəcəksə `let` istifadə edin
    
- Dəyər sabitdirsə `const` istifadə edin
    
- Yeni layihələrdə `var` istifadə etməyin
    

---

---

## 📌 JavaScript-də dəyişən adları

### 1. Adlandırma qaydaları

JavaScript-də dəyişənlər aşağıdakı qaydalara əməl etməlidir:

✅ Ad **başlamalıdır**:

- **hərf** ilə (latın: `a-z`, `A-Z`)
    
- və ya **alt xətt** `_` və ya **dollar işarəsi** `$` ilə
    

✅ Qalan simvollar ola bilər:

- hərflər
    
- rəqəmlər (`0–9`)
    
- alt xətt `_`
    
- dollar `$`
    

❌ Ad **rəqəm ilə başlaya bilməz**!

```js
let name;      // ✅
let _temp;     // ✅
let $value;    // ✅
let user123;   // ✅
let 123user;   // ❌ Xəta
```

---

### 2. Rezerv edilmiş sözlər ❌

**Dilin açar sözlərini** dəyişən adları kimi istifadə etmək olmaz:

```js
let let;       // ❌ Xəta
let class;     // ❌ Xəta
let function;  // ❌ Xəta
```

Rezerv edilmiş sözlərin tam siyahısına bunlar daxildir: `if`, `else`, `return`, `for`, `while`, `class`, `const`, `function` və s.

https://www.w3schools.com/js/js_reserved.asp

---

### 3. Registr əhəmiyyətlidir

Dəyişənlər registrə həssasdır:

```js
let user = 'Alice';
let User = 'Bob';

console.log(user); // Alice
console.log(User); // Bob
```

---

### 4. Stil üzrə tövsiyələr 👨‍🏫

- Dəyişənlər üçün **camelCase** istifadə edin: `firstName`, `totalPrice`
    
- İsmi `_` ilə başlamayın, yalnız "özəl" kimi istifadə etdiyiniz hallar istisna ola bilər
    
- `$` adətən kitabxanalarda istifadə olunur (məsələn jQuery-də `$`), amma adi dəyişənlərdə istifadəsindən çəkinmək məsləhətdir
---

## ⚠️ JavaScript-də registrə həssaslıq (case sensitivity)

### 🔹 JavaScript — **registrə həssas dildir**

Bu o deməkdir ki, **fərqli registrdəki** dəyişənlər, xüsusiyyətlər və funksiyalar — **fərqli obyektlərdir**.

```js
let userName = "Aysel";
let username = "Elçin";

console.log(userName); // "Aysel"
console.log(username); // "Elçin"
```

---

## 🔐 Registr harada problem yarada bilər:

### 1. **Obyektlər / API-məlumatları ilə işləyərkən**

```js
let user = {
  name: "Aysel"
};

console.log(user.Name); // undefined ❗
```

- Registrdə səhv — lazımi xüsusiyyətə giriş yoxdur.

---

### 2. **Sətirlərin müqayisəsi**

```js
const input = "Admin";

if (input === "admin") {
  // İcra olunmayacaq ❗
}
```

🟢 **Həll**: `.toLowerCase()` / `.toUpperCase()` istifadə edin

```js
if (input.toLowerCase() === "admin") {
  // indi işləyəcək ✅
}
```

---

### 3. **HTML-atributlar və JS**

```html
<input id="MyInput">
```

```js
document.getElementById("myinput"); // ❌ null
document.getElementById("MyInput"); // ✅
```

---

## ✅ Tövsiyələr

-  **JavaScript böyük və kiçik hərfləri fərqləndirir**
    
- Dəyişən adları: `camelCase`, `CamelCase` 
    
- Forma məlumatlarını müqayisə edərkən — registri normallaşdırın

    

---
# JS types
---

JavaScript-də **bütün dəyərlər tipə malikdir**. Tiplər **primitiv** və **obyekt** tiplərinə ayrılır.

---

### 🔹 1. Primitiv tiplər (7 ədəd)

Primitivlər — obyekt olmayan dəyərlərdir. Onlar **dəyərə görə** saxlanılır.

|Tip|Nümunə|Təsvir|
|---|---|---|
|`string`|`"Salam"`|Mətn sətirləri|
|`number`|`42`, `3.14`|Ədədlər (tam və kəsr)|
|`boolean`|`true`, `false`|Məntiqi tip|
|`null`|`null`|Qəsdən dəyərin olmaması|
|`undefined`|`undefined`|Dəyişənin dəyəri təyin edilməyib|
|`symbol`|`Symbol('id')`|Unikal identifikatorlar|
|`bigint`|`123n`|Böyük tam ədədlər|

#### Nümunələr:

```js
let name = "Aygün";       // string
let age = 25;             // number
let isOnline = true;      // boolean
let empty = null;         // null
let notSet;               // undefined
let id = Symbol("id");    // symbol
let big = 123456789123456789n; // bigint
```

---

### 🔹 2. Obyekt tipləri (istinad tipləri)

Obyektlər — daha mürəkkəb strukturlardır və **istinad ilə** saxlanılır.

|Tip|Nümunə|
|---|---|
|`Object`|`{ name: "Bob" }`|
|`Array`|`[1, 2, 3]`|
|`Function`|`function() {}`|
|`Date`, `RegExp`, `Map`, `Set` və b. — xüsusi tiplər||

#### Nümunə:

```js
let user = { name: "Elçin", age: 30 }; // Object
let numbers = [1, 2, 3];               // Array
function greet() { console.log("Salam"); } // Function
```

---

### ✅ Tipin yoxlanması: `typeof` operatoru

```js
typeof "Salam"       // "string"
typeof 123           // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object" (❗ dildə bir səhv, tarixi səbəblərdən)
typeof Symbol("id")  // "symbol"
typeof {}            // "object"
typeof []            // "object"
typeof function(){}  // "function"
```

---

### 👨‍🏫 Tövsiyələr:

- Primitivlər sadə və dəyişilməzdir
    
- Obyektlər bir neçə dəyər ehtiva edə bilər
    
- `typeof null === "object"` — bu JavaScript-in məlum xüsusiyyətidir
    
- Dəyərlərin ilkin diaqnostikası üçün `typeof` istifadə edin
    

---

## 📌 Məlumat tipləri: massivlər və funksiyalar = obyektlərdir

### 🔹 1. Massiv (`Array`)

- Massiv — **nizamlı məlumat kolleksiyalarını saxlamaq** üçün nəzərdə tutulmuş **obyektdir**.
    
- `typeof` ilə yoxlama:
    

```js
const arr = [1, 2, 3];
console.log(typeof arr);       // "object" ❗
console.log(Array.isArray(arr)); // true ✅
```

- **Massiv olub-olmadığını yoxlamaq** üçün `Array.isArray(...)` istifadə edirik

---

### 🔹 2. Funksiya (`Function`)

- Funksiya — **çağırıla (icra oluna) bilən obyektdir**.
    
- Funksiyanın xüsusi tipi var:
    

```js
function salamDe() {
  console.log("Salam!");
}

console.log(typeof salamDe); // "function" ✅
```

- `typeof` `"function"` qaytarır — bu **obyektin xüsusi bir alt tipidir**.

---

### ✅ Nəticə:

| Dəyər           | typeof       |
| --------------- | ------------ |
| `[]`            | `"object"`   |
| `{}`            | `"object"`   |
| `function() {}` | `"function"` |

---

👨‍🏫 **Tələbələrin nəzərinə:

- **Primitiv olmayan** hər şey — obyektdir
    
- Massivlər — ədədi indeksləri olan obyektlərin xüsusi halıdır
    
- Funksiyalar — çağırıla bilən obyektlərdir
    

---

---

## 📌 JavaScript-də `typeof` operatoru

`typeof` operatoru dəyişənin **dəyərinin tipini** müəyyən etmək üçün istifadə olunur.

---

### 🔹 Sintaksis

```js
typeof dəyər
typeof(dəyər) // mötərizələr istəyə bağlıdır
```

---

### 🔹 `typeof` nəticələri

|Dəyər|`typeof` nəticəsi|
|---|---|
|`"Salam"`|`"string"`|
|`123`, `3.14`, `NaN`|`"number"`|
|`true`, `false`|`"boolean"`|
|`undefined`|`"undefined"`|
|`null`|`"object"` ❗ (dilin səhvi)|
|`Symbol("id")`|`"symbol"`|
|`123n`|`"bigint"`|
|`{}`|`"object"`|
|`[]`|`"object"`|
|`function() {}`|`"function"` ✅|

---

### ⚠️ Xüsusiyyətlər:

1. `typeof null` `"object"` qaytarır — bu **dildə tarixi bir səhvdir** və uyğunluq üçün saxlanılır.
    
2. Massivlər üçün `typeof` dəqiq nəticə vermir — `Array.isArray()` istifadə edirik:
    
    ```js
    Array.isArray([]); // true
    ```
    

---

### 👨‍🏫 Sazlama üçün faydalıdır:

```js
let x = 5;
console.log(typeof x); // "number"

let user = { name: "Aysel" };
console.log(typeof user); // "object"

let check = Array.isArray(user); // false
```

---

---

## 📌 `null` və `undefined` arasında fərq

| Xüsusiyyət     | `null`                         | `undefined`                     |
| -------------- | ------------------------------ | ------------------------------- |
| Tip (`typeof`) | `"object"` ❗ (dilin səhvi)     | `"undefined"` ✅                 |
| Dəyər          | Aşkar **dəyərin olmaması**     | **Təyin edilməyib**             |
| İstifadə yeri  | Dəyişən **qəsdən boş** olduqda | **Dəyişənə dəyər verilmədikdə** |

---

### 🔹 Nümunələr:

```js
let a;
console.log(a);          // undefined (elan edilib, lakin təyin edilməyib)
console.log(typeof a);   // "undefined"

let b = null;
console.log(b);          // null (açıq şəkildə təyin edilib)
console.log(typeof b);   // "object" ❗
```

### 🔸 Harada tətbiq olunur:

- `undefined`: dəyəri olmayan dəyişənlər, çatışmayan arqumentlər.
    
- `null`: dəyərin "sıfırlanması", dəyişənin təmizlənməsi.
    

---

## 📌 `instanceof` — obyekt tipinin dəqiq yoxlanması

`instanceof` operatoru obyektin **konkret bir sinfə** (və ya prototiplər zənciri üzrə valideynlərinə) aid olub-olmadığını yoxlayır.

### 🔹 Sintaksis:

```js
obj instanceof Constructor
```

---

### 🔹 Nümunələr:

```js
[] instanceof Array         // true
{} instanceof Object        // true
() => {} instanceof Function // true
new Date() instanceof Date  // true
"salam" instanceof String   // false ❗ (primitiv)

new String("salam") instanceof String // true ✅
```

---

## 👨‍🏫 `typeof`, `instanceof` və ya `Array.isArray()` nə vaxt istifadə edilməlidir?

|Tapşırıq|Yanaşma|
|---|---|
|Primitiv yoxlanması|`typeof`|
|Massiv yoxlanması|`Array.isArray()`|
|Obyektin konstruktorunu yoxlama|`instanceof`|

---

---

## 📘 JavaScript-də məlumat tipləri: Literal Yazılış vs Funksiya Konstruktoru

JavaScript-də məlumatları iki üsulla yaratmaq olar:

1. **Literal yazılışı (literal notation)** — dəyərlər yaratmaq üçün qısa və oxunaqlı üsul.
    
2. **Funksiya-konstruktor (Function Constructor)** — `new` vasitəsilə obyektlər yaratmaq.
    

---

### 🔹 Primitiv tiplər

#### 1. **String (sətr)**

- **Literal üsulla:**
    
    ```js
    const name = "Aysel";
    console.log(typeof name); // "string"
    ```
    
- **Konstruktor ilə:**
    
    ```js
    const name = new String("Aysel");
    console.log(typeof name); // "object"
    ```
    
    🔸 _Vacib:_ `new String()` **primitiv deyil**, **obyekt** yaradır. Bu müqayisəyə təsir edə bilər:
    
    ```js
    "Aysel" === new String("Aysel"); // false
    ```
    

#### 2. **Number (ədəd)**

- **Literal üsulla:**
    
    ```js
    const age = 30;
    console.log(typeof age); // "number"
    ```
    
- **Konstruktor ilə:**
    
    ```js
    const age = new Number(30);
    console.log(typeof age); // "object"
    ```
    
    🔸 Müqayisə:
    
    ```js
    30 === new Number(30); // false
    ```
    

#### 3. **Boolean (məntiqi tip)**

- **Literal üsulla:**
    
    ```js
    const isActive = true;
    console.log(typeof isActive); // "boolean"
    ```
    
- **Konstruktor ilə:**
    
    ```js
    const isActive = new Boolean(true);
    console.log(typeof isActive); // "object"
    ```
    
    🔸 Xüsusiyyət:
    
    ```js
    if (new Boolean(false)) {
      console.log("Bu icra olunacaq!"); // Bəli, çünki obyekt həmişə true-dur
    }
    ```
    

#### 4. **Symbol** (sadəcə literal)

- Yalnız `Symbol()` vasitəsilə:
    
    ```js
    const id = Symbol("userId");
    console.log(typeof id); // "symbol"
    ```
    

---

### 🔹 Mürəkkəb tiplər (obyektlər)

#### 5. **Object**

- **Literal üsulla:**
    
    ```js
    const user = {
      name: "Aysel",
      age: 30
    };
    ```
    
- **Konstruktor ilə:**
    
    ```js
    const user = new Object({
      name: "Aysel",
      age: 30
    });
    ```
    
    🔸 Hər iki üsul eyni nəticəni — obyekt yaradır.
    

#### 6. **Array (massiv)**

- **Literal üsulla:**
    
    ```js
    const numbers = [1, 2, 3];
    ```
    
- **Konstruktor ilə:**
    
    ```js
    const numbers = new Array(1, 2, 3);
    ```
    
    ⚠️ Bir ədəd ötürülərsə:
    
    ```js
    new Array(3); // elementlərsiz, 3 uzunluqlu massiv yaradır
    ```
    

#### 7. **Function (funksiya)**

- **Literal üsulla:**
    
    ```js
    function greet(name) {
      return "Salam, " + name;
    }
    ```
    
- **Konstruktor ilə:**
    
    ```js
    const greet = new Function("name", 'return "Salam, " + name');
    ```
    
    ⚠️ Funksiya-konstruktor daha təhlükəsizdir (`eval` analoqu), istifadəsi tövsiyə edilmir.
    
    ```js
    greet("Ali'); alert('Hacked');//")   
     ```
    
    
#### 8. **Date**

- Yalnız **konstruktor** vasitəsilə:
    
    ```js
    const now = new Date();
    ```
    

#### 9. **RegExp (müntəzəm ifadə)**

- **Literal üsulla:**
    
    ```js
    const pattern = /abc/i;
    ```
    
- **Konstruktor ilə:**
    
    ```js
    const pattern = new RegExp("abc", "i");
    ```

Here is the translation of the table into Azerbaijani:

| `i` | Böyük/kiçik hərf fərqini nəzərə almamaq (registerə həssas deyil)    |
| --- | ------------------------------------------------------------------- |
| `g` | Qlobal axtarış (bütün uyğunluqları tapır)                           |
| `m` | Çoxsətirli rejim (çoxsətirli mətnlərdə axtarış üçün)                |
| `u` | Unicode dəstəyi (çoxbaytlı simvollarla düzgün işləmək üçün)         |
| `s` | `.` simvolunun yeni sətrə (`\n`) uyğun gəlməsinə icazə verən bayraq |

---

### 🔍 Müqayisə: Literal vs Constructor

|Tip|Literal ilə|Konstruktor ilə|`typeof`|
|---|---|---|---|
|Sətr|`"mətn"`|`new String("mətn")`|`"string"` vs `"object"`|
|Ədəd|`123`|`new Number(123)`|`"number"` vs `"object"`|
|Məntiqi|`true`|`new Boolean(true)`|`"boolean"` vs `"object"`|
|Obyekt|`{}`|`new Object()`|`"object"`|
|Massiv|`[]`|`new Array()`|`"object"`|
|Funksiya|`function() {}`|`new Function(...)`|`"function"`|
|RegExp|`/abc/`|`new RegExp("abc")`|`"object"`|

---

### ✅ Nəyi istifadə etməli?

- **Primitivlər** — həmişə **literal yazılış** istifadə edin.
    
- **Funksiya-konstruktor** bunlar üçün faydalı ola bilər:
    
    - Obyektlər (`new Object()`, `new Array()` — baxmayaraq ki, burada da literal üstünlük təşkil edir).
        
    - Yeni sinif nümunələrinin yaradılması (məsələn, `new Date()`).
        
- **Bunlardan qaçın**: `new String()`, `new Number()`, `new Boolean()` — baqlara səbəb ola bilər.
    

---

### 📌 Primitivlər (dəyərə görə):

Tiplər: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`

🔹 Primitivi başqa dəyişənə təyin etdikdə, **dəyər** kopyalanır:

```js
let a = 10;
let b = a;
b = 20;

console.log(a); // 10 (dəyişmədi)
console.log(b); // 20
```

---

### 📌 Obyektlər (istinad ilə):

Tiplər: `object`, `array`, `function` və digər obyektlər

🔹 Obyekti təyin edərkən **obyektin özü deyil**, **istinad** kopyalanır:

```js
let obj1 = { name: "Aysel" };
let obj2 = obj1;
obj2.name = "Nigar";

console.log(obj1.name); // "Nigar" (çünki obj1 və obj2 eyni obyektə istinad edir)
```

---

## 📌 JavaScript-də əlavə biliklər tələbələr üçün

### 1. Şərti operatorlar və məntiqi qısa qapanma

JavaScript-də məntiqi operatorlar qısa qapanma prinsipinə görə işləyir:

```js
// OR (||) ilk true dəyərini qaytarır
let result = false || 0 || "" || "nəticə" || true; // "nəticə"

// AND (&&) ilk false dəyərini qaytarır
let check = true && "yoxla" && 0 && true; // 0
```

Bu xüsusiyyət kodunuzda şərtləri qısaltmaq üçün faydalıdır:

```js
// Köhnə üsul
let name;
if (user && user.name) {
  name = user.name;
} else {
  name = "Naməlum";
}

// Qısa üsul
let name = (user && user.name) || "Naməlum";
```

### 2. Template Literals (Şablon sətirləri)

Modern JavaScript-də sətirləri birləşdirmək üçün daha rahat üsul:

```js
// Köhnə üsul
let greeting = "Salam, " + userName + "! Siz " + age + " yaşındasınız.";

// Müasir üsul (ES6+)
let greeting = `Salam, ${userName}! Siz ${age} yaşındasınız.`;
```

### 3. Arrow Functions (Ox funksiyaları)

Funksiyaları daha qısa yazmaq üçün:

```js
// Ənənəvi funksiya
function add(a, b) {
  return a + b;
}

// Ox funksiyası
const add = (a, b) => a + b;
```

### 4. Massiv metodları

JavaScript-də massivlərlə işləmək üçün çox faydalı metodlar var:

```js
const numbers = [1, 2, 3, 4, 5];

// map - hər elementin dəyişdirilməsi
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// filter - şərtə cavab verən elementlərin seçilməsi
const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]

// reduce - bütün elementlərin bir dəyərə yığılması
const sum = numbers.reduce((total, num) => total + num, 0); // 15
```

### 5. Destrukturizasiya

Obyekt və massivlərdən dəyərləri çıxarmaq üçün qısa sintaksis:

```js
// Obyekt destrukturizasiyası
const person = { firstName: "Elçin", lastName: "Əliyev", age: 30 };
const { firstName, age } = person;
console.log(firstName); // "Elçin"
console.log(age); // 30

// Massiv destrukturizasiyası
const colors = ["qırmızı", "yaşıl", "mavi"];
const [firstColor, secondColor] = colors;
console.log(firstColor); // "qırmızı"
```

### 6. Rest və Spread operatorları

Massiv və obyektlərlə işləmək üçün güclü alətlər:

```js
// Rest - parametrləri massivə çevirir
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Spread - massivin elementlərini genişləndirir
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Obyektlərdə Spread
const defaults = { color: "qırmızı", size: "orta" };
const custom = { ...defaults, color: "mavi" }; // { color: "mavi", size: "orta" }
```

### 7. Asinxron proqramlaşdırma

JavaScript-də asinxron əməliyyatlar üçün Promises və async/await:

```js
// Promise istifadəsi
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Xəta:", error));

//
```

