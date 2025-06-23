
---

### 🔹 1. JavaScript-də rəqəmlər nədir?

JavaScript-də bütün rəqəmlər (tam və onluq kəsrli) **bir data tipinə** aiddir — `number`.

```js
let age = 30;        // tam rəqəm
let price = 99.99;   // onluq kəsrli rəqəm
```

---

### 🔹 2. JS-də rəqəmlərin xüsusiyyətləri

- JavaScript **tam rəqəmlər və onluq kəsrli rəqəmlər arasında fərq qoymur** — hamısı `number`-dir.
    
- **IEEE 754** standartına əsaslanır (64-bit təmsil).
    
- Maksimum və minimum qiymətlər:
    

```js
console.log(Number.MAX_VALUE); // mümkün olan maksimum rəqəm
console.log(Number.MIN_VALUE); // mümkün olan minimum müsbət rəqəm
```

- Sonsuzluq və NaN:

```js
console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log("abc" / 2);    // NaN (Rəqəm Deyil)
```

---

### 🔹 3. Rəqəmləri yoxlamaq

```js
Number.isNaN(NaN);         // true
Number.isFinite(100);      // true
Number.isFinite(Infinity); // false
```

---

### 🔹 4. Sətirləri rəqəmlərə çevirmək

```js
Number("42");        // 42
parseInt("42px");    // 42
parseFloat("42.5px");// 42.5
+"99"                // 99
```

---

### 🔹 5. Müxtəlif say sistemlərində rəqəmlər

JavaScript rəqəmləri **ikili**, **səkkizli** və **on altılıq** formalarda yazmağa imkan verir:

#### ✅ On altılıq sistem (`0x`)

```js
let hex = 0xFF;   // onluq sistemdə 255
```

#### ✅ Səkkizli sistem (`0o`)

```js
let oct = 0o77;   // onluq sistemdə 63
```

#### ✅ İkili sistem (`0b`)

```js
let bin = 0b1010; // onluq sistemdə 10
```

---

### 🔹 6. Rəqəm ayırıcıları (digit separator)

Rəqəmləri rahat oxumaq üçün alt xətt simvolundan (`_`) istifadə etmək olar:

```js
let billion = 1_000_000_000; // 1000000000 ilə eynidir
```

---

### 🔹 7. `NaN` — Rəqəm Deyil (Not a Number)

`NaN` — yanlış riyazi əməliyyatların nəticəsidir:

```js
let invalid = "text" / 3; // NaN
console.log(Number.isNaN(invalid)); // true
```

Xüsusiyyət: `NaN !== NaN`

---

### 🔹 8. `Infinity` və `-Infinity`

`Infinity` — daşma və ya sıfıra bölmənin nəticəsidir:

```js
let posInf = 1 / 0;   // Infinity
let negInf = -1 / 0;  // -Infinity

console.log(Number.isFinite(posInf)); // false
```

---

### 🔹 9. Rəqəmlərin eksponensial yazılışı (Elmi notasiya)

JavaScript-də rəqəmləri **elmi (eksponensial) formada** `e` simvolu ilə yazmaq olar.  
Bu "10-un dərəcəsinə vurmaq" deməkdir.

```js
let a = 17e5;   // 17 * 10^5 = 1_700_000
let b = 17e-5;  // 17 * 10^-5 = 0.00017
```

📌 Bu çox böyük və ya çox kiçik rəqəmləri yazmaq üçün rahatdır.

Nümunələr:

```js
console.log(5e3);   // 5000
console.log(2.5e-3); // 0.0025
```

---

### 🔹 10. Rəqəmlərlə əməliyyatlar

JavaScript standart **arifmetik əməliyyatları** dəstəkləyir:

| Əməliyyat               | Nümunə   | Nəticə |
| ----------------------- | -------- | ------ |
| Toplama                 | `5 + 3`  | `8`    |
| Çıxma                   | `5 - 3`  | `2`    |
| Vurma                   | `5 * 3`  | `15`   |
| Bölmə                   | `6 / 2`  | `3`    |
| Bölmədən qalıq (modulo) | `7 % 2`  | `1`    |
| Dərəcəyə yüksəltmə      | `2 ** 3` | `8`    |

---

### 🔹 Artırma və azaltma

```js
let x = 5;
x++; // postfiks artırma, x = 6
++x; // prefiks artırma, x = 7

x--; // postfiks azaltma, x = 6
--x; // prefiks azaltma, x = 5
```

---

### 🔹 Qarışıq tiplər (sətir + rəqəm)

Əgər operandlardan biri sətirdirsə, `+` toplama deyil, **birləşdirmə** edər:

```js
console.log(5 + "3");   // "53"
console.log("5" - 2);   // 3 (sətir rəqəmə çevrilir)
```

---

### 🔹 Yuvarlaqlaşdırma

```js
Math.floor(4.7);   // 4 (aşağıya)
Math.ceil(4.2);    // 5 (yuxarıya)
Math.round(4.5);   // 5 (ən yaxına)
Math.trunc(4.9);   // 4 (kəsr hissəsini atır)
```

---

### 🔹 11. JavaScript-də rəqəmləri yoxlamaq və çevirmək

#### ✅ `isNaN(value)`

Qiymətin **`NaN` (Rəqəm Deyil)** olub-olmadığını yoxlayır.  
Amma **arqumenti avtomatik olaraq rəqəmə çevirir**, bu gözlənilməz nəticə verə bilər.

```js
isNaN("text");   // true — "text" rəqəmə çevrilə bilmir
isNaN(123);      // false — bu rəqəmdir
isNaN("123");    // false — sətir 123 rəqəminə çevrilir
isNaN(undefined); // true — undefined → NaN
```

❗ Daha yaxşısı `Number.isNaN()` istifadə etməkdir — o **tip çevrilməsi etmir**:

```js
Number.isNaN("text"); // false
Number.isNaN(NaN);    // true
```

---

#### ✅ `isFinite(value)`

Qiymətin **sonlu rəqəm** olub-olmadığını yoxlayır.  
Həmçinin qiyməti **rəqəmə çevirir**.

```js
isFinite(100);     // true
isFinite("123");   // true — "123" → 123
isFinite("text");  // false — "text" → NaN → sonlu deyil
isFinite(Infinity); // false
```

❗ Oxşar şəkildə: `Number.isFinite()` çevrilmə olmadan:

```js
Number.isFinite("123"); // false
Number.isFinite(123);   // true
```

---

#### ✅ `parseInt(string, radix)`

Sətiri **tam rəqəmə** çevirir, **ilk rəqəm olmayan simvola qədər oxuyur**.

```js
parseInt("123px");    // 123
parseInt("12.34");    // 12
parseInt("abc");      // NaN
parseInt("010", 10);  // 10 (açıq şəkildə əsas göstəririk)

parseInt("11", 2);    // 3 — ikili sistem
```

---

#### ✅ `parseFloat(string)`

Sətiri **onluq kəsrli rəqəmə** çevirir, `parseInt` kimi işləyir, amma kəsr hissələrini dəstəkləyir:

```js
parseFloat("12.34px"); // 12.34
parseFloat("3.14");    // 3.14
parseFloat("abc");     // NaN
```

---

#### ✅ `Number.isInteger(value)`

Qiymətin **tam rəqəm** olub-olmadığını yoxlayır.  
Tip çevrilməsi etmir.

```js
Number.isInteger(10);     // true
Number.isInteger(10.5);   // false
Number.isInteger("10");   // false
Number.isInteger(NaN);    // false
Number.isInteger(Infinity); // false
```

---

### 📌 `parseInt`, `Number`, `+`-ın müqayisəsi

```js
parseInt("15.7")   // 15
Number("15.7")     // 15.7
+"15.7"            // 15.7
```

---

### 🔹 12. Niyə `0.1 + 0.2 !== 0.3`?

```js
console.log(0.1 + 0.2);         // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

#### 📌 Səbəb:

JavaScript **64-bit rəqəm təmsili (IEEE 754)** istifadə edir, burada **kəsr qiymətlər ikili formada** (əsas 2) saxlanılır.  
Amma **0.1 və 0.2 ikili sistemdə dəqiq təmsil edilə bilmir**, məsələn, onluq sistemdə 1/3 kimi.

Yəni:

- 0.1 → ≈ 0.10000000000000000555
- 0.2 → ≈ 0.2000000000000000111
- Cəmi ≈ 0.3000000000000000444

---

### ✅ Belə rəqəmləri necə düzgün müqayisə etmək?

**Xəta payı (epsilon müqayisəsi)** istifadə etmək:

```js
const isEqual = Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;
console.log(isEqual); // true
```

📌 `Number.EPSILON` — 0-dan böyük iki təmsil edilə bilən rəqəm arasında minimum fərqdir.  
Qiymət: `2.220446049250313e-16`

Başqa sözlə, `Number.EPSILON`:

- Ən kiçik fərqi göstərir ki, bu fərq iki ədədi fərqli saymaq üçün kifayət edir.
    
- Əsasən, ondalıqlı ədədlərlə hesablama apararkən yaranan xətaları yoxlamaq üçün istifadə olunur.

---

### 🔧 Praktik qayda:

> İki onluq kəsrli rəqəmi heç vaxt birbaşa müqayisə etməyin. `Math.abs(a - b) < ε` istifadə edin.

---

## 🔹 13. `Math` obyekti — riyazi funksiyalar və sabitlər

`Math` — JavaScript-in daxili obyektidir, **riyazi sabitlər** və **funksiyalar** ehtiva edir.

O **konstruktor deyil** — nümunə yaratmaq lazım deyil:  
hər şey birbaşa istifadə olunur: `Math.method()`.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

---

### 📐 `Math` sabitləri

|Sabit|Qiymət (təxmini)|Təsvir|
|---|---|---|
|`Math.PI`|`3.14159…`|π rəqəmi|
|`Math.E`|`2.71828…`|Təbii loqarifmin əsası|
|`Math.LN2`|`0.6931…`|2-nin təbii loqarifmi|
|`Math.LN10`|`2.3025…`|10-un təbii loqarifmi|
|`Math.LOG2E`|`1.4426…`|E-nin 2 əsaslı loqarifmi|
|`Math.LOG10E`|`0.4342…`|E-nin 10 əsaslı loqarifmi|
|`Math.SQRT1_2`|`0.7071…`|√1/2|
|`Math.SQRT2`|`1.4142…`|√2|

---

### 🔧 `Math` funksiyaları

#### 🔢 Yuvarlaqlaşdırma və kəsmə

|Metod|Nümunə|Nəticə|
|---|---|---|
|`Math.round(x)`|`Math.round(4.5)`|`5`|
|`Math.floor(x)`|`Math.floor(4.9)`|`4`|
|`Math.ceil(x)`|`Math.ceil(4.1)`|`5`|
|`Math.trunc(x)`|`Math.trunc(4.9)`|`4`|

---

#### 📈 Statistika

| Metod              | Nümunə              | Nəticə |
| ------------------ | ------------------- | ------ |
| `Math.max(a, b,…)` | `Math.max(4, 7, 2)` | `7`    |
| `Math.min(a, b,…)` | `Math.min(4, 7, 2)` | `2`    |
| `Math.abs(x)`      | `Math.abs(-10)`     | `10`   |

---

#### 🎲 Təsadüfi rəqəmlər

|Metod|Təsvir|
|---|---|
|`Math.random()`|`0`-dan `1`-ə qədər (1 daxil olmaqla) təsadüfi rəqəm verir|

1-dən 10-a qədər təsadüfi rəqəm yaratma nümunəsi:

```js
let rand = Math.floor(Math.random() * 10) + 1;
```

---

#### 📐 Dərəcə və köklər

| Metod              | Nümunə             | Nəticə         |
| ------------------ | ------------------ | -------------- |
| `Math.pow(x, y)`   | `Math.pow(2, 3)`   | `8`            |
| `Math.sqrt(x)`     | `Math.sqrt(9)`     | `3`            |
| `Math.cbrt(x)`     | `Math.cbrt(27)`    | `3`            |
| `Math.hypot(...x)` | `Math.hypot(3, 4)` | `5` (√(3²+4²)) |

---

#### 🔢 Loqaritmlər

|Metod|Nümunə|Nəticə|
|---|---|---|
|`Math.log(x)`|`Math.log(10)`|Təbii loqarifm (e əsaslı)|
|`Math.log2(x)`|`Math.log2(8)`|`3`|
|`Math.log10(x)`|`Math.log10(1000)`|`3`|

---

#### 🎯 Triqonometriya

|Metod|Nümunə|
|---|---|
|`Math.sin(x)`|`Math.sin(Math.PI/2)`|
|`Math.cos(x)`|`Math.cos(0)`|
|`Math.tan(x)`|`Math.tan(Math.PI/4)`|
|`Math.asin(x)`|`Math.asin(1)`|
|`Math.acos(x)`|`Math.acos(1)`|
|`Math.atan(x)`|`Math.atan(1)`|
|`Math.atan2(y, x)`|`Math.atan2(1, 1)`|

---

## 🔝 Ən çox istifadə olunan `Math` metodları

### 1. `Math.round(x)`

Rəqəmi ən yaxın tam rəqəmə yuvarlaqlaşdırır.

```js
Math.round(4.6); // 5
Math.round(4.4); // 4
```

---

### 2. `Math.floor(x)`

**Aşağıya** yuvarlaqlaşdırır (ən yaxın kiçik tam rəqəmə).

```js
Math.floor(4.9); // 4
```

---

### 3. `Math.ceil(x)`

**Yuxarıya** yuvarlaqlaşdırır (ən yaxın böyük tam rəqəmə).

```js
Math.ceil(4.1); // 5
```

---

### 4. `Math.random()`

`0`-dan `1`-ə qədər (1 daxil olmaqla) təsadüfi rəqəm verir.  
Tez-tez təsadüfi qiymətlər yaratmaq üçün istifadə olunur:

```js
// 1-dən 10-a qədər təsadüfi tam rəqəm
Math.floor(Math.random() * 10) + 1;
```

---

### 5. `Math.max(...numbers)` və `Math.min(...numbers)`

Dəstdən ən böyük və ya ən kiçik qiyməti tapır.

```js
Math.max(3, 7, 9); // 9
Math.min(3, 7, 9); // 3
```

---

### 6. `Math.abs(x)`

Rəqəmin **modulunu** (işarəsiz) qaytarır.

```js
Math.abs(-42); // 42
```

---

### 7. `Math.pow(base, exponent)`

Dərəcəyə yüksəltmə.

```js
Math.pow(2, 3); // 8
// Alternativ: 2 ** 3
```

---

### 8. `Math.sqrt(x)`

Kvadrat kök.

```js
Math.sqrt(16); // 4
```

---

### 9. `Math.trunc(x)`

Kəsr hissəsini silir (yuvarlaqlaşdırmadan).

```js
Math.trunc(4.9); // 4
```

---

### 10. `Math.PI`

π sabiti, tez-tez `Math.sin`, `Math.cos` və s. ilə istifadə olunur.

```js
Math.PI; // 3.141592...
```

---

### 💡 Tez-tez istifadə olunan nümunə: intervalda təsadüfi tam rəqəm

```js
// min-dən max-a qədər (daxil olmaqla) təsadüfi rəqəm
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```