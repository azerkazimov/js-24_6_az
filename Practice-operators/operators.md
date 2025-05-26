
---
### 📘 1. JavaScript-də operatorlar nədir?

**Operatorlar** — JavaScript-in dəyərlər (və ya dəyişənlər) üzərində əməliyyatlar yerinə yetirmək üçün istifadə etdiyi xüsusi simvollar və ya açar sözlərdir.  
Operatorlar **hesablamalar aparmağa**, **dəyərləri müqayisə etməyə**, **məntiqə nəzarət etməyə**, **təyinat əməliyyatlarını yerinə yetirməyə** və daha çox şey etməyə imkan verir.

Onlar **dilin sintaksisinin əsas hissəsini** təşkil edir və demək olar ki, hər skriptdə istifadə olunur.

---

### 🎯 2. Operatorlar nə üçün lazımdır?

Operatorlar bunlar üçün lazımdır:

- **Riyazi hesablamalar aparmaq** (`+`, `-`, `*`, `/`)
    
- **Dəyərləri müqayisə etmək** (`==`, `===`, `>`, `<`)
    
- **Dəyişənlərə dəyərlər təyin etmək** (`=`, `+=`)
    
- **Proqramın şərtlərini və məntiqini təsvir etmək** (`&&`, `||`, `!`)
    
- **Tiplər və obyektlərlə işləmək** (`typeof`, `instanceof`)
    
- **Ternar operator vasitəsilə icra axınını idarə etmək** (`? :`)
    

Operatorlar olmadan dil sadəcə dəyişənlər toplusu olardı — məhz operatorlar proqramın "məntiqini" yaratmağa imkan verir.

---

### 🛠️ 3. Kod nümunələri:

```js
let a = 10;      // təyinat operatoru (=)
let b = 5;
let sum = a + b; // arifmetik operator (+)

console.log(sum); // 15

console.log(a > b); // true — müqayisə operatoru

let isAdult = true;
console.log(!isAdult); // false — məntiqi operator (!)
```

---

### ⚠️ 4. Tipik səhvlər:

- **`=` ilə `==` və ya `===` arasında qarışıqlıq:**  
    `=` — təyinat,  
    `==` — dəyər üzrə müqayisə,  
    `===` — ciddi müqayisə (tip və dəyər üzrə).
    
- **Məntiqi operatorların düzgün istifadə edilməməsi**, xüsusilə şərtlərin yoxlanılması zamanı.
    

---

### 🧠 5. Yoxlama :

1. JavaScript kontekstində operator nədir?
    
2. `=` operatoru `==` və `===` operatorlarından nə ilə fərqlənir?
    
3. Hansı operator növlərini tanıyırsan?
    
4. `5 + "5"` ifadəsində nə baş verəcək və niyə?
    

---

# **"JavaScript-də unar, binar və ternar operatorlar"**

---

### 📘 1. Bu nədir?

JavaScript-də operatorlar onların icra etdiyi əməliyyatın **operandlarının** sayına görə təsnif edilir:

|Operator növü|Operand sayı|Nümunə|
|---|---|---|
|**Unar**|1|`-x`, `!x`|
|**Binar**|2|`x + y`, `x > y`|
|**Ternar**|3|`şərt ? dəyər1 : dəyər2`|

---

### 🧩 2. Unar operatorlar

**Unar operatorlar** yalnız **bir operandla** işləyir.

#### 🔹 Nümunələr:

```js
let x = 5;
console.log(-x);     // -5 — unar mənfi
console.log(typeof x); // "number" — typeof operatoru
console.log(!true);  // false — məntiqi inkar
```

#### 🔍 Tez-tez istifadə edilən unar operatorlar:

- `-x` — unar mənfi (işarəni dəyişir)
    
- `+x` — unar müsbət (ədədə çevirir)
    
- `!x` — məntiqi "deyil"
    
- `typeof` — dəyişənin tipini qaytarır
    
- `++x`, `x++` — artırma (increment)
    
- `--x`, `x--` — azaltma (decrement)
    
- `delete` — obyektin xüsusiyyətini silir
    
- `void` — `undefined` qaytarır
    

---

### 🔗 3. Binar operatorlar

**Binar operatorlar** **iki operand** qəbul edir və ən çox yayılmış operatorlardır.

#### 🔹 Nümunələr:

```js
let a = 10, b = 5;

console.log(a + b);  // 15 — riyazi toplama
console.log(a > b);  // true — müqayisə
console.log(a && b); // 5 — məntiqi "və"
```

#### 🔍 Əsas binar operatorlar:

- Arifmetik: `+`, `-`, `*`, `/`, `%`
    
- Müqayisə: `==`, `!=`, `>`, `<`, `>=`, `<=`, `===`, `!==`
    
- Məntiqi: `&&`, `||`
    
- Təyinat: `=`, `+=`, `-=`, `*=`, `/=`
    
- Bit əməliyyatları: `&`, `|`, `^`, `<<`, `>>`, `>>>`
    
### Bit əməliyyatları haqqında 

Bit əməliyyatları (bitwise operatorlar) JavaScript-də ədədlərin binar (ikili) təqdimatı üzərində bit-bit əməliyyatlar aparır. Bu əməliyyatlar zamanı ədədlər öncə 32-bitlik binar formaya çevrilir, əməliyyat yerinə yetirilir və sonra nəticə yenidən ədədə çevrilir.

## Bit əməliyyatları operatorları və funksiyaları:

### `&` (AND - VƏ)

- **Funksiya**: İki ədədin uyğun bitləri arasında AND əməliyyatı
- **Qaydası**: Hər iki bit 1 olduqda, nəticə 1 olur, əks halda 0
- **Nümunə**:
    
    ```javascript
    let a = 5;  // 0101 (binar)
    let b = 3;  // 0011 (binar)
    console.log(a & b); // 0001 = 1 (onluq)
    ```
    

### `|` (OR - VƏ YA)

- **Funksiya**: İki ədədin uyğun bitləri arasında OR əməliyyatı
- **Qaydası**: Ən azı bir bit 1 olduqda, nəticə 1 olur, əks halda 0
- **Nümunə**:
    
    ```javascript
    let a = 5;  // 0101 (binar)
    let b = 3;  // 0011 (binar)
    console.log(a | b); // 0111 = 7 (onluq)
    ```
    

### `^` (XOR - MÜSTƏSNİAL VƏ YA)

- **Funksiya**: İki ədədin uyğun bitləri arasında XOR əməliyyatı
- **Qaydası**: Bitlər fərqli olduqda, nəticə 1 olur, eyni olduqda 0
- **Nümunə**:
    
    ```javascript
    let a = 5;  // 0101 (binar)
    let b = 3;  // 0011 (binar)
    console.log(a ^ b); // 0110 = 6 (onluq)
    ```
    

### `<<` (SOLA SÜRÜŞDÜRMƏ)

- **Funksiya**: Bütün bitləri sola göstərilən sayda sürüşdürür
- **Nəticə**: Ədədi 2ⁿ dəfə böyüdür (n - sürüşdürmə sayı)
- **Nümunə**:
    
    ```javascript
    let a = 5;  // 0101 (binar)
    console.log(a << 1); // 1010 = 10 (onluq)
    console.log(a << 2); // 10100 = 20 (onluq)
    ```
    

### `>>` (İMZALI SAĞA SÜRÜŞDÜRMƏ)

- **Funksiya**: Bütün bitləri sağa göstərilən sayda sürüşdürür, ilk bit işarə biti olaraq qalır
- **Nəticə**: Ədədi 2ⁿ dəfə kiçildir (n - sürüşdürmə sayı)
- **Nümunə**:
    
    ```javascript
    let a = 10;  // 1010 (binar)
    console.log(a >> 1); // 0101 = 5 (onluq)
    let b = -10; // İşarəli ədəd
    console.log(b >> 1); // -5 (işarə saxlanılır)
    ```
    

### `>>>` (İMZASIZ SAĞA SÜRÜŞDÜRMƏ)

- **Funksiya**: Bütün bitləri sağa göstərilən sayda sürüşdürür, soldan 0 əlavə edilir
- **Nəticə**: İşarədən asılı olmayaraq müsbət ədəd qaytarır
- **Nümunə**:
    
    ```javascript
    let a = 10;  // 1010 (binar)console.log(a >>> 1); // 0101 = 5 (onluq)let b = -10; // İşarəli ədədconsole.log(b >>> 1); // 2147483643 (müsbət ədəd)
    ```
    

## Praktiki istifadə halları:

1. **Bayraqlar və Maskalar**: Çoxlu boolean dəyərləri bir ədəddə saxlamaq
    
    ```javascript
    const READ = 1;     // 001
    const WRITE = 2;    // 010
    const EXECUTE = 4;  // 100
    
    let permissions = READ | WRITE;  // 011 = 3
    
    // Yoxlama:
    if (permissions & READ) {
      console.log("Oxuma icazəsi var");
    }
    ```
    
2. **Rəng manipulyasiyası**: Rəngin R, G, B komponentlərini işləmək
    
    ```javascript
    // RGB rəngində qırmızı komponenti almaq
    let color = 0xFF0000;  // Qırmızı rəng
    let red = (color >> 16) & 0xFF;  // 255
    ```
    
3. **Ədəd dəyişmə**: İki ədədi müvəqqəti dəyişən olmadan dəyişmək
    
    ```javascript
    let a = 5, b = 10;
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log(a, b);  // 10, 5
    ```
    

Bit əməliyyatları xüsusilə sistem proqramlaşdırma, kriptoqrafiya, optimallaşdırma və verilənlər strukturları sahəsində faydalıdır, lakin normal veb tətbiqlərində çox vaxt lazım olmur.
---

### 📘 1. Sətir birləşdirməsi (konkatensasiya) nədir?

**Konkatensasiya** — sətrlərin bir sətir halında birləşdirilməsidir. JavaScript-də bu məqsədlə ən çox **binar `+` operatoru** istifadə olunur.

---

### 🔗 2. Sətirlər üçün binar `+` operatoru

Əgər **operandlardan biri sətirdirsə**, `+` operatoru digər operandı sətrə çevirir və **birləşdirmə** əməliyyatını yerinə yetirir:

#### 🔹 Nümunələr:

```js
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"
```

```js
let age = 30;
let message = "Yaş: " + age;
console.log(message); // "Yaş: 30" — ədəd sətrə çevrilir
```

---

### 💡 3. `+` operatorunda tiplərin çevrilməsi

Əgər bir operand sətirdirsə, **ikinci operand da sətrə çevrilir**:

```js
console.log("5" + 1); // "51"
console.log("Nəticə: " + true); // "Nəticə: true"
```

> Bu davranış **qeyri-açıq tip çevrilməsi (type coercion)** adlanır.

---

### ⚠️ 4. Tipik səhvlər

- ❌ **Ədədlərin toplanmasını gözləyirik, amma sətr alırıq:**

```js
let a = 10;
let b = "5";
console.log(a + b); // "105", 15 deyil
```

- ❌ **İfadələrin səhv sırası:**

```js
console.log(1 + 2 + "3"); // "33"
console.log("1" + 2 + 3); // "123"
```

> `+` operatoru soldan sağa işləyir: əvvəlcə `1 + 2 = 3`, sonra `"3" + "3"` → "33".

---

### 🛠️ 5. Müasir alternativ: şablon sətirləri (template literals)

Daha oxunaqlı birləşdirmə üsulu:

```js
let name = "Alice";
let age = 25;
console.log(`Ad: ${name}, Yaş: ${age}`); // Ad: Alice, Yaş: 25
```

---

### 🧠 6. Yoxlama sualları:

1. `"Hello" + 5 + 10` ifadəsində nə baş verəcək və niyə?
    
2. `"2" + 2` ilə `2 + "2"` arasında nə fərq var?
    
3. Niyə `true + "!"` sətr qaytarır?
    
4. Şablon sətirlərinin `+` vasitəsilə birləşdirmədən üstünlüyü nədir?
    

```js
// Konkatensasiya
let result = "Salam, " + name + "! Sənin " + age + " yaşın var.";

// Şablon sətri
let result = `Salam, ${name}! Sənin ${age} yaşın var.`;
```

---

### 📘 `Infinity` nədir?

JavaScript-də `Infinity` — **sonsuzluğu** bildirən **xüsusi ədədi dəyərdir**.  
Bu, hesablamanın nəticəsi dildə təsvir ediləbilən ədədlərin həddini aşdıqda meydana çıxır.

---

### 🔹 `Infinity` meydana çıxması nümunələri

```js
console.log(1 / 0);       // Infinity
console.log(-1 / 0);      // -Infinity
console.log(Number.MAX_VALUE * 2); // Infinity
```

---

### 🧠 `Infinity`-nin əsas xüsusiyyətləri:

|Xüsusiyyət|Dəyər|
|---|---|
|Tip (`typeof Infinity`)|`"number"` — bu ədədi tipdir|
|İşarə|`Infinity` (müsbət) və `-Infinity` (mənfi) ola bilər|
|Qlobal dəyişən|`Infinity` — JavaScript-də qlobal dəyərdir|

---

### 🔎 Necə istifadə etmək və müqayisə etmək:

```js
let x = 1 / 0; // Infinity
console.log(x === Infinity); // true
```

```js
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
```

---

### ⚠️ Xüsusi cəhətlər və çətinliklər:

1. `Infinity` — səhv deyil:
    
    ```js
    let result = 1 / 0;
    // səhv vermir, sadəcə Infinity qaytarır
    ```
    
2. `Infinity` ilə riyazi əməliyyatlar:
    
    ```js
    console.log(Infinity + 1);    // Infinity
    console.log(Infinity - Infinity); // NaN (qeyri-müəyyən nəticə!)
    console.log(Infinity * 0);    // NaN
    ```
    
3. Məntiqi müqayisələr:
    
    ```js
    console.log(Infinity > 1000000000); // true
    console.log(-Infinity < -999999999); // true
    ```
    

---

### 📌 Bilmək faydalıdır:

- `Infinity` — riyazi mənada "sonsuzluq" deyil, dildə **ədədi diapazonun məhdudiyyətidir**.
    
- `NaN` ilə qarışdırmayın — `Infinity` **0-a bölmə** nəticəsində yaranır, `NaN` isə **səhv riyazi əməliyyatlar** zamanı meydana çıxır.
    

---

### 🧠 Yoxlama sualları:

1. `typeof Infinity` nə qaytaracaq?
    
2. Niyə `Infinity - Infinity` `NaN` verir?
    
3. Real kodda `Infinity` hansı hallarda meydana çıxa bilər?
    
4. `Infinity` ilə `NaN` arasında fərq nədir?
    

## 📘 JavaScript-də `undefined` və `null` ilə riyazi əməliyyatlar

---

### 🔍 1. Riyazi əməliyyatlarda `null`-un davranışı

Riyazi kontekstdə `null` **0-a çevrilir**.

#### 🔹 Nümunələr:

```js
console.log(null + 5);     // 5
console.log(null - 3);     // -3
console.log(null * 4);     // 0
console.log(null / 2);     // 0
```

> ✅ `null` => 0 (ədədi çevrilmədə)

---

### ⚠️ 2. Riyaziyyatda `undefined`-in davranışı

`undefined` **düzgün şəkildə ədədə çevrilə bilmir**, nəticə həmişə **`NaN`** (Not-a-Number) olur.

#### 🔹 Nümunələr:

```js
console.log(undefined + 5);   // NaN
console.log(undefined - 3);   // NaN
console.log(undefined * 4);   // NaN
console.log(undefined / 2);   // NaN
```

> ❌ `undefined` => NaN (ədədi əməliyyatlarda)

---

### 🧠 3. Niyə belə?

- JavaScript arifmetik operator istifadə edildikdə (`+`, `-`, `*`, `/` və s.) dəyərləri avtomatik olaraq **ədədlərə çevirir**.
    
- Tiplərin çevrilməsi:
    
    - `Number(null)` → `0`
        
    - `Number(undefined)` → `NaN`
        

---

### 🧪 4. Əl ilə yoxlama:

```js
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
```

---

### 📌 5. `undefined` və `null` ilə `+` operatoru

Əgər **sətir birləşdirilməsi** istifadə edilirsə, `null` və `undefined` sətrə çevrilir:

```js
console.log("Dəyər: " + null);      // "Dəyər: null"
console.log("Dəyər: " + undefined); // "Dəyər: undefined"
```

---

### 🧠 Yoxlama sualları:

1. `null + 10` nə verəcək?
    
2. Niyə `undefined - 5` ne ve niye verir?
    
3. Arifmetikada `null` və `undefined` arasında fərq nədir?
    
4. Dəyərin hansı tipə çevriləcəyini necə yoxlamaq olar?
    

---

# 4. Ternar operatoru

**Ternar operatoru** — JavaScript-də **üç operand** qəbul edən yeganə operatordur.

#### 💡 Sintaksis:

```js
şərt ? həqiqət_halında_dəyər : yanlış_halında_dəyər
```

#### 🔹 Nümunə:

```js
let age = 18;
let access = (age >= 18) ? "İcazə verilir" : "Qadağandır";
console.log(access); // "İcazə verilir"
```

Ternar operatoru çox vaxt qısa yoxlamalarda `if...else` əvəzinə istifadə olunur.

---

### ⚠️ 5. Səhvlər:

- **Unar mənfi `-x`** və **binar mənfi `a - b`** qarışdırma — kontekst vacibdir!
    
- Ternar operatoru iç-içə olduqda pis oxunur — `if...else` istifadə etmək daha yaxşıdır.
    
- `++x` və `x++` oxşar işləyir, lakin fərqli dəyərlər qaytarır — diqqətli olun.
    

---

### 🧠 6. Yoxlama sualları:

1. Unar və binar operator arasında fərq nədir?
    
2. Ternar operatoru nə edir və hansı hallarda faydalıdır?
    
3. `typeof null` ifadəsi necə işləyir? 
    
4. `+"123"` nə qaytaracaq və niyə?
    

---

## Aşkar tip çevrilməsi

## 📘 JavaScript-də müqayisə operatorları

---

### 🔍 Müqayisə operatorları nədir?

Müqayisə operatorları — iki dəyəri **müqayisə edən** və **məntiqi nəticə** (`true` və ya `false`) qaytaran konstruksiyalardır.

---

### 🔢 Əsas müqayisə operatorları:

| Operator | Ad                          | Nümunə      | Nəticə                                       |
| -------- | --------------------------- | ----------- | -------------------------------------------- |
| `==`     | Bərabərdir (qeyri-ciddi)    | `5 == '5'`  | `true` (tipləri çevirir)                     |
| `===`    | Ciddi bərabərlik            | `5 === '5'` | `false` (həm tipi, həm dəyəri müqayisə edir) |
| `!=`     | Bərabər deyil (qeyri-ciddi) | `5 != '5'`  | `false`                                      |
| `!==`    | Ciddi bərabər deyil         | `5 !== '5'` | `true`                                       |
| `>`      | Böyükdür                    | `10 > 3`    | `true`                                       |
| `<`      | Kiçikdir                    | `2 < 8`     | `true`                                       |
| `>=`     | Böyük və ya bərabərdir      | `5 >= 5`    | `true`                                       |
| `<=`     | Kiçik və ya bərabərdir      | `4 <= 3`    | `false`                                      |

---

### ⚠️ `==` və `===` arasında fərq (müqayisə və ciddi müqayisə)

```js
console.log(5 == '5');   // true — tiplər avtomatik çevrilir
console.log(5 === '5');  // false — tiplər fərqlidir
```

> 🧠 Həmişə **proqnozlaşdırılabilinlik və etibarlılıq** üçün `===` və `!==` istifadə edin.

---

### 🔄 Müxtəlif tiplərin müqayisəsi

JS qeyri-ciddi operatorlar halında tipləri **avtomatik** çevirir:

```js
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log('0' == 0); // true
console.log('' == false); // true
```

> Belə hallar tez-tez səhvlərə səbəb olur, buna görə də **tiplərin çevrilməsini** başa düşmək və ciddi müqayisələrdən istifadə etmək vacibdir.

---

### 🔎 Müqayisə nümunələri:

```js
console.log(3 > 2);     // true
console.log(2 >= 2);    // true
console.log(2 < 1);     // false
console.log('apple' > 'banana'); // false (Unicode üzrə müqayisə)
```

> Sətrlərin müqayisəsi zamanı — simvolların kodlarına görə **simvol-simvol** müqayisə edilir.

---

### 🧠 Yoxlama sualları:

1. `==` və `===` arasında fərq nədir?
    
2. `null == undefined` və `null === undefined` nə qaytaracaq?
    
3. Niyə `'5' == 5` — `true`, amma `'5' === 5` — `false`?
    

---

## 📘 JavaScript-də məntiqi operatorlar

---

### 🔍 Məntiqi operatorlar nədir?

Məntiqi operatorlar **bulean ifadələrini** birləşdirmək və kodun icrasının məntiqini idarə etmək üçün istifadə olunur. Onlar vəziyyətdən asılı olaraq **məntiqi dəyər** və ya **operandlardan birini** qaytarır.

---

### 🔢 Əsas məntiqi operatorlar:

| Operator | Ad         | Nümunə          | Nəticə  |
| -------- | ---------- | --------------- | ------- |
| `&&`     | VƏ (AND)   | `true && false` | `false` |
| \|\|     | VƏ YA (OR) | `true && false` | `true`  |
| `!`      | YOX (NOT)  | `!true`         | `false` |

---

### ✅ `&&` (VƏ) operatoru

- **Yalnız hər iki operand true olduqda** `true` qaytarır.
    
- Əgər birinci operand — `false` olarsa, ikinci operand hətta hesablanmır (**qısa qapanma**).
    

```js
console.log(true && true);    // true
console.log(true && false);   // false
console.log(5 > 3 && 10 < 20); // true
```

---

### ✅ `||` (VƏ YA) operatoru

- **Operandlardan ən azı biri true olduqda** `true` qaytarır.
    
- Əgər birinci operand — `true` olarsa, ikinci operand hətta yoxlanılmır.
    

```js
console.log(true || false);   // true
console.log(false || false);  // false
console.log(5 > 10 || 10 < 20); // true
```

---

### ✅ `!` (YOX) operatoru

- Bulean dəyərini tərs çevirir: `true` `false` olur və əksinə.

```js
console.log(!true);  // false
console.log(!false); // true
console.log(!(5 > 3)); // false
```

---

### 🔎 Şərtlərlə nümunə:

```js
let age = 25;
if (age > 18 && age < 30) {
  console.log("Gənc yetişkin");
}
```

---

### 🧠 Məntiqi operatorlar və qeyri-bulean dəyərlər

JavaScript **həmişə true/false qaytarmır**, operandın **dəyərini** qaytara bilər:

```js
console.log(null || "default");     // "default"
console.log("user" && "admin");     // "admin"
```

- `||` **ilk "həqiqi" dəyəri** qaytarır
    
- `&&` **ilk "yanlış" dəyəri** qaytarır, əks halda — sonuncunu
    

---

### 📌 Nümunələr:

```js
	console.log(0 || false || "hello"); // "hello"
console.log(1 && null && 3);        // null
```

---

### 🧠 Yoxlama sualları:

1. `!false` nə edir?
    
2. `||` ilə `&&` arasındakı fərq nədir, onların məntiqi və davranışı necədir?
    
3. Niyə `console.log(null || "mətn")` `"mətn"` çap edir?
    

---

## 📘 JavaScript-də şərti operatorlar

---

### ❓ Şərti operatorlar nədir?

Şərti operatorlar **şərtlərdən asılı olaraq müxtəlif kod bloklarını icra etməyə** imkan verir. Bu, proqramda **qərar qəbul etmə məntiqinin** əsasıdır.

---

### 🔹 Əsas sintaksis: `if`, `else if`, `else`

```js
if (şərt) {
  // şərt doğru (true) olduqda kod icra olunur
} else if (başqa_şərt) {
  // əgər birinci yanlışdırsa, bu yoxlanılır
} else {
  // əgər heç bir şərt yerinə yetirilmirsə
}
```

---

### ✅ Nümunə:

```js
let age = 20;

if (age >= 18) {
  console.log("Giriş icazəlidir");
} else {
  console.log("Giriş qadağandır");
}
```

---

### 🔹 `else if` bloku

**Əlavə yoxlama** əlavə etməyə imkan verir:

```js
let grade = 85;

if (grade >= 90) {
  console.log("Əla");
} else if (grade >= 70) {
  console.log("Yaxşı");
} else {
  console.log("Çalışmaq lazımdır");
}
```

---

### ⚠️ Vacib: şərt **bulean dəyər** (`true` və ya `false`) olmalıdır

---

### 🧠 Həqiqi və yanlış dəyərlər (truthy / falsy)

JavaScript bəzi dəyərləri yanlış kimi qəbul edir:

```js
// falsy dəyərlər: false, 0, "", null, undefined, NaN
if (0) console.log("icra olunmayacaq");
if ("hello") console.log("icra olunacaq"); // true
```

---

### 🔹 Ternar operator (şərtin qısa forması)

```js
şərt ? true_halında_ifadə : false_halında_ifadə;
```

Nümunə:

```js
let message = age >= 18 ? "Giriş icazəlidir" : "Giriş qadağandır";
```

---

### 🔹 `switch` — çoxsaylı `if` üçün alternativ

```js
let color = "green";

switch (color) {
  case "red":
    console.log("Dayan");
    break;
  case "green":
    console.log("Getmək olar");
    break;
  default:
    console.log("Rəng tanınmır");
}
```

> Bir dəyəri bir neçə variant ilə müqayisə etmək lazım olduqda istifadə olunur.

---

### 🧠 Yoxlama sualları:

1. `if` və `switch` arasındakı fərq nədir?
    
2. `else` nə edir və nə üçün lazımdır?
    
3. Bu ifadə nə qaytaracaq: `5 > 3 ? "Bəli" : "Xeyr"`?
    

---