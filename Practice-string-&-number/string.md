
### 🔹 1. Sətir nədir?

**Sətir (string)** — bu, aşağıdakılara alınmış simvolların ardıcıl toplusudur:

- tək dırnaq `'...'`
- qoşa dırnaq `"..."`
- əks dırnaq `` `...` `` (şablon sətiri)

```js
let str1 = 'Salam';
let str2 = "Dünya";
let str3 = `Salam, ${str2}`; // şablon sətiri
```

---

### 🔹 2. Sətirin uzunluğu

```js
let message = "Hello";
console.log(message.length); // 5
```

---

### 🔹 3. Simvollara müraciət

```js
let str = "JavaScript";
console.log(str[0]);     // J
console.log(str.charAt(1)); // a
```

---

### 🔹 4. Dəyişkənlik

Sətirlər **dəyişilməzdir** — indeks üzrə simvolu dəyişmək olmaz:

```js
str[0] = "X"; // ❌ işləmir
```

---

### 🔹 5. Sətirlərin birləşdirilməsi

```js
let a = "Salam";
let b = "Dünya";
let result = a + " " + b;          // "Salam Dünya"
let result2 = `${a} ${b}`;         // "Salam Dünya" (şablon sətiri)
```

---

### 🔹 6. Tez-tez istifadə olunan sətir metodları

| Metod                   | Təsvir                                              |
| ----------------------- | --------------------------------------------------- |
| `toLowerCase()`         | Kiçik hərflərə çevirir                              |
| `toUpperCase()`         | Böyük hərflərə çevirir                              |
| `trim()`                | Ətraf boşluqları silir                              |
| `includes(sub)`         | Sətirin alt sətir ehtiva edib-etmədiyini yoxlayır   |
| `startsWith(sub)`       | Sətirin alt sətirlə başlayıb-başlamadığını yoxlayır |
| `endsWith(sub)`         | Sətirin alt sətirlə bitib-bitmədiyini yoxlayır      |
| `slice(start, end)`     | Sətirin hissəsini qaytarır                          |
| `substring(start, end)` | `slice()` alternatividir                            |
| `substr(start, length)` | Köhnə metod                                         |
| `indexOf(sub)`          | Alt sətirin indeksini qaytarır (və ya -1)           |
| `replace(old, new)`     | İlk alt sətiri əvəz edir                            |
| `split(delimiter)`      | Sətiri massivə bölür                                |
| `repeat(n)`             | Sətiri `n` dəfə təkrarlayır                         |

---

### 🔹 7. Nümunələr

```js
let name = "  JavaScript ";
console.log(name.trim().toUpperCase()); // "JAVASCRIPT"

let text = "Salam, dünya!";
console.log(text.includes("dünya"));  // true
console.log(text.replace("dünya", "dost")); // "Salam, dost!"
```

### 🔹 8. Sətir simvollar massivi kimi

JavaScript-də sətir **simvollar massivinə bənzəyir**, amma **massiv deyil**.

- Simvollara indeks üzrə müraciət etmək olar:

```js
let str = "salam";
console.log(str[1]);     // "a"
```

- Gəzinti üçün `for...of` istifadə etmək olar:

```js
for (let char of str) {
  console.log(char);
}
```

⛔ Amma massiv metodları (`push`, `pop`, `splice`) sətirlər üçün **işləmir**, çünki sətirlər dəyişilməzdir.

---

### 🔹 9. Template string (şablon sətirlər)

Şablon sətirlər — əks dırnaqda `` `...` `` yazılan sətirlərdir.  
Onlar **çoxsətirlilik** və **`${}` vasitəsilə dəyişənlərin daxil edilməsini** dəstəkləyir:

```js
let name = "Azer";
let greeting = `Salam, ${name}!`;
console.log(greeting); // "Salam, Azer!"
```

Çoxsətirli sətir:

```js
let text = `Bu birinci sətrdir
Bu isə ikinci sətrdir.`;
```

---

### 🔹 10. Faydalı sətir metodlarının tam siyahısı

| Metod                   | Nümunə                         | Təsvir                                                  |
| ----------------------- | ------------------------------ | ------------------------------------------------------- |
| `length`                | `"abc".length`                 | Sətirin uzunluğu                                        |
| `charAt(index)`         | `"abc".charAt(1)`              | İndeks üzrə simvol                                      |
| `slice(start, end)`     | `"abcde".slice(1, 3)`          | Alt sətirin çıxarılması                                 |
| `substring(start, end)` | `"abcde".substring(1, 3)`      | `slice` ilə oxşardır, amma mənfi indeksləri dəstəkləmir |
| `substr(start, length)` | `"abcde".substr(1, 2)`         | Köhnədir                                                |
| `indexOf(sub)`          | `"abc".indexOf("b")`           | Alt sətirin ilk indeksi                                 |
| `lastIndexOf(sub)`      | `"ababc".lastIndexOf("b")`     | Son indeks                                              |
| `includes(sub)`         | `"abc".includes("b")`          | Daxil olub-olmadığını yoxlayır                          |
| `startsWith(sub)`       | `"abc".startsWith("a")`        | Sətirin başlanğıcı                                      |
| `endsWith(sub)`         | `"abc".endsWith("c")`          | Sətirin sonu                                            |
| `replace(a, b)`         | `"abc".replace("b", "X")`      | İlk alt sətiri əvəz edir                                |
| `replaceAll(a, b)`      | `"a_b_b".replaceAll("b", "X")` | Hamısını əvəz edir                                      |
| `toLowerCase()`         | `"ABC".toLowerCase()`          | Kiçik hərflərə                                          |
| `toUpperCase()`         | `"abc".toUpperCase()`          | Böyük hərflərə                                          |
| `trim()`                | `" abc ".trim()`               | Ətraf boşluqları silir                                  |
| `trimStart()`           | `" abc ".trimStart()`          | Sol tərəfdəki boşluqları silir                          |
| `trimEnd()`             | `" abc ".trimEnd()`            | Sağ tərəfdəki boşluqları silir                          |
| `repeat(n)`             | `"ab".repeat(3)`               | Sətirin təkrarlanması                                   |
| `split(delimiter)`      | `"a,b,c".split(",")`           | Massivə bölür                                           |
| `padStart(length, pad)` | `"5".padStart(3, "0")`         | Sol tərəfə simvol əlavə edir                            |
| `padEnd(length, pad)`   | `"5".padEnd(3, "0")`           | Sağ tərəfə simvol əlavə edir                            |

---

### 🔹 11. Unicode və simvol kodları ilə işləmək

#### ✅ Hər sətir **UTF-16 simvollarının** ardıcıllığıdır.

```js
console.log("A".charCodeAt(0)); // 65
console.log(String.fromCharCode(65)); // "A"
```

#### ✅ Emoji və BMP-dən kənar simvollar (`0xFFFF`-dən böyük) xüsusi işləmə tələb edir:

```js
let smile = "😊";
console.log(smile.length);      // 2 (surrogate pair)
console.log([...smile].length); // 1 (spread operatoru ilə)

let codePoint = smile.codePointAt(0);       // 128522
console.log(String.fromCodePoint(128522));  // 😊
```

---

### 🔹 12. Sətirlərədə xüsusi simvollar (escape sequences)

JavaScript-də sətirlər daxilində **escape simvollarından** istifadə etmək olar — bunlar xüsusi idarəetmə simvollarını təmsil edən kombinasiyalardır:

| Ardıcıllıq   | Təsvir                     |
| ------------ | -------------------------- |
| `\n`         | Yeni sətir (line break)    |
| `\t`         | Üfüqi tab                  |
| `\\`         | Tərs slash (`\`)           |
| `\'`         | Tək dırnaq                 |
| `\"`         | Qoşa dırnaq                |
| `\r`         | Carriage return (nadir)    |
| `\b`         | Backspace (nadir istifadə) |
| `\f`         | Form feed (nadir istifadə) |
| `\v`         | Şaquli tab (köhnə)         |
| `\uXXXX`     | Kod üzrə Unicode simvolu   |
| `\u{XXXXXX}` | Tam yazılışda Unicode      |

---

#### 📌 Nümunələr

```js
let multiline = "Birinci sətir\nİkinci sətir";
console.log(multiline);
/*
Birinci sətir
İkinci sətir
*/

let quote = 'O dedi: \"Salam!\"';
console.log(quote); // O dedi: "Salam!"

let path = "C:\\Program Files\\Node";
console.log(path); // C:\Program Files\Node

let tab = "Ad\tSoyad\tYaş";
console.log(tab); // Ad    Soyad    Yaş
```

---

#### ✅ Unicode simvolları

```js
let heart = "\u2764";      // ❤
let emoji = "\u{1F600}";   // 😀 (codepoint > 0xFFFF)
let azerbaijanFlag = "\u{1F1E6}\u{1F1FF}"; // 🇦🇿
```

---

### 🔹 13. Sətirlər üzərində döngülər

#### ✅ `for...of` döngüsü (tövsiyə olunur)

```js
let str = "Salam";
for (let char of str) {
  console.log(char); // S, a, l, a, m
}
```

#### ✅ Adi `for` döngüsü

```js
let str = "Salam";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]); // S, a, l, a, m
}
```

#### ✅ `forEach` (sətirlər massivə çevrildikdən sonra)

```js
let str = "Salam";
[...str].forEach(char => console.log(char));
```

---

### 🔹 14. Sətir müqayisəsi

```js
console.log("a" < "b");        // true
console.log("Apple" < "Banana"); // true
console.log("10" < "9");       // true (leksikografik müqayisə)

// Rəqəmli müqayisə üçün:
console.log(Number("10") < Number("9")); // false
```

---

### 🔹 15. Praktik nümunələr

#### ✅ Sətirdəki sözlərin sayını tapmaq

```js
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

console.log(wordCount("Salam dünya necəsən")); // 3
```

#### ✅ Palindrom yoxlanması

```js
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
```

#### ✅ Sətiri böyük hərflə başlatmak

```js
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("javascript")); // "Javascript"
```

#### ✅ Kebab-case-dən camelCase-ə çevirmək

```js
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

console.log(toCamelCase("my-variable-name")); // "myVariableName"
```

---

### 🔹 16. Regex ilə sətirlər

JavaScript-də **Regex (Regular Expressions)** sətirlər üzərində güçlü axtarış və əvəzetmə imkanları verir:

```js
let text = "Mənim telefon nömrəm: +994-50-123-45-67";

// Telefon nömrəsini tapmaq
let phonePattern = /\+\d{3}-\d{2}-\d{3}-\d{2}-\d{2}/;
console.log(text.match(phonePattern)); // ["+994-50-123-45-67"]

// Bütün rəqəmləri çıxarmaq
let numbers = text.match(/\d/g);
console.log(numbers); // ["9", "9", "4", "5", "0", "1", "2", "3", "4", "5", "6", "7"]

// E-mail validasiyası
let email = "test@example.com";
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test(email)); // true
```

### 📌 Regex nədir?

**Regex (Regular Expressions)** — xüsusi axtarış şablonları yaratmağa imkan verən simvollar ardıcıllığıdır. Mətnlərdə axtarış, əvəzləmə, doğruluğun yoxlanılması və məlumatların çıxarılması üçün istifadə olunur.

---

## 📌 JavaScript-də Regex necə yaradılır?

Regex yaratmaq üçün iki yol var:

1. **Literal üsul** (üstünlük verilir):
    

```js
const regex = /pattern/flags;
```

2. **RegExp obyekti vasitəsilə:**
    

```js
const regex = new RegExp('pattern', 'flags');
```

---

## 📌 Bayraqlar (modifikatorlar):

Regex-in işləmə prinsipini idarə edir:

| Bayraq | Məqsəd                                        |
| ------ | --------------------------------------------- |
| **g**  | qlobal axtarış (bütün uyğunluqlar)            |
| **i**  | hərf ölçüsünə həssas olmayan axtarış          |
| **m**  | çoxsətirli rejim                              |
| **s**  | dotall rejimi (nöqtə sətir keçidini də tapır) |
| **u**  | Unicode rejimi dəstəkləyir                    |
| **y**  | yapışqan (sticky) rejim                       |

**Misal:**

```js
const regex = /hello/gi;
```

---

## 📌 Regex ilə işləyən əsas metodlar:

### 🔸 1. `.test()`

Mətndə uyğunluq varsa `true`, yoxdursa `false` qaytarır:

```js
const regex = /world/;
console.log(regex.test('hello world')); // true
```

---

### 🔸 2. `.exec()`

Ətraflı uyğunluq məlumatlarını qaytarır, uyğunluq tapılmadıqda `null` qaytarır:

```js
const regex = /\d+/;
console.log(regex.exec('Mənim yaşım 25-dir')); // ["25"]
```

---

### 🔸 3. `.match()`

Uyğunluqları tapır və qaytarır:

```js
const text = "Bugün 2025-05-30 tarixidir";
console.log(text.match(/\d{4}/)); // ["2025"]
```

`g` bayrağı ilə bütün uyğunluqlar:

```js
const text = "Rəqəmlər: 3, 6, 9";
console.log(text.match(/\d/g)); // ["3", "6", "9"]
```

---

### 🔸 4. `.replace()`

Tapılan uyğunluğu yeni mətnlə əvəz edir:

```js
const text = "salam dunya";
console.log(text.replace(/dunya/, "JS")); // "salam JS"
```

---

### 🔸 5. `.search()`

İlk uyğunluğun indeksini qaytarır:

```js
const text = "Rəqəm 7-ni tap";
console.log(text.search(/\d/)); // 6
```

---

### 🔸 6. `.split()`

Mətni uyğunluğa görə massivə parçalayır:

```js
const text = "alma, armud, heyva";
console.log(text.split(/,\s*/)); // ["alma", "armud", "heyva"]
```

---

## 📌 Regex-də əsas simvollar və siniflər:

### 📍 Xüsusi simvollar:

| Simvol | İzahı                              |
| ------ | ---------------------------------- |
| `.`    | yeni sətir xaric istənilən simvol  |
| `\d`   | rəqəmlər `[0-9]`                   |
| `\w`   | hərflər və rəqəmlər `[a-zA-Z0-9_]` |
| `\s`   | boşluq, tab simvolları             |
| `\D`   | rəqəm olmayan                      |
| `\W`   | hərf və rəqəm olmayan              |
| `\S`   | boşluq olmayan                     |

**Misal:**

```js
const regex = /\d\s\w/;
console.log("8 a".match(regex)); // ["8 a"]
```

---

### 📍 Kəmiyyət göstəriciləri (quantifiers):

| Simvol  | İzahı                            |
| ------- | -------------------------------- |
| `*`     | 0 və daha çox təkrar             |
| `+`     | ən az 1 təkrar                   |
| `?`     | 0 və ya 1 dəfə təkrar (optional) |
| `{n}`   | dəqiq n dəfə təkrar              |
| `{n,m}` | n-dən m-ə qədər təkrar           |
| `{n,}`  | ən az n dəfə təkrar              |

**Misal:**

```js
const regex = /\d{3}-\d{2}-\d{4}/;
console.log("123-45-6789".match(regex)); // ["123-45-6789"]
```

---

### 📍 Simvol dəstləri və diapazonlar:

- `[abc]` — `a`, `b` və ya `c` simvollarından biri
    
- `[a-z]` — `a`-dan `z`-yə qədər simvol
    
- `[^abc]` — göstərilən simvollardan başqa hər hansı simvol
    

**Misal:**

```js
const regex = /[a-c]+/g;
console.log("abcdabc".match(regex)); // ["abc", "abc"]
```

---

### 📍 Mövqe göstərən simvollar (anchors):

| Simvol | İzahı                   |
| ------ | ----------------------- |
| `^`    | sətirin başlanğıcı      |
| `$`    | sətirin sonu            |
| `\b`   | sözün sərhədi           |
| `\B`   | söz sərhədi olmayan yer |

**Misal:**

```js
const regex = /^Salam\b/;
console.log(regex.test("Salam dünya")); // true
console.log(regex.test("dünya Salam")); // false
```

---

## 📌 Qruplaşdırma və geriyə istinadlar:

- `(pattern)` — qrupları ayırmaq üçün istifadə olunur.
    
- Geriyə istinad: `\1`, `\2` (qrup nömrəsinə istinad)
    

**Misal:**

```js
const regex = /(ha)+/;
console.log("hahaha".match(regex)); // ["hahaha", "ha"]
```



---

## 📌 İrəliyə və geriyə baxışlar (Lookahead, Lookbehind):

- **Pozitiv Lookahead**: `x(?=y)`
    
- **Negativ Lookahead**: `x(?!y)`
    
- **Pozitiv Lookbehind**: `(?<=y)x`
    
- **Negativ Lookbehind**: `(?<!y)x`
    

**Pozitiv lookahead nümunəsi (sonrası `%` olan rəqəm tapır):**

```js
const regex = /\d+(?=%)/;
console.log("Endirim 100%".match(regex)); // ["100"]
```

---

## 📌 Tipik istifadə halları:

- **Email yoxlama:**
    

```js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

- **Tarix çıxarma (İİİİ-AA-GG):**
    

```js
const dateRegex = /\d{4}-\d{2}-\d{2}/;
```

- **Artıq boşluqları təmizləmək:**
    

```js
const text = "Salam    dünya";
console.log(text.replace(/\s+/g, ' ')); // "Salam dünya"
```

---

## 📌 Regex məşqi üçün faydalı onlayn alətlər:

- [regex101.com](https://regex101.com/)
    
- [regexr.com](https://regexr.com/)
    
- [regexper.com](https://regexper.com/) 
    

---
### 🔹 17. JSON və sətirlər

```js
// Obyekti JSON sətrinə çevirmək
let obj = { name: "Azer", age: 25 };
let jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Azer","age":"25"}'

// JSON sətirini obyektə çevirmək
let parsedObj = JSON.parse(jsonString);
console.log(parsedObj); // { name: "Azer", age: 25 }
```

---

### 💡 Tövsiyələr və ən yaxşı təcrübələr

1. **Performans üçün**: Çoxlu sətir birləşdirməsi üçün array + join istifadə edin:

```js
// Yavaş
let result = "";
for (let i = 0; i < 1000; i++) {
  result += "text ";
}

// Sürətli
let parts = [];
for (let i = 0; i < 1000; i++) {
  parts.push("text ");
}
let result = parts.join("");
```

2. **Template literals** istifadə edin kompleks sətir yaradarkən:

```js
// Əvəzinə
let message = "Salam " + name + ", sizin yaşınız " + age + " və şəhər " + city;

// Bu istifadə edin
let message = `Salam ${name}, sizin yaşınız ${age} və şəhər ${city}`;
```

3. **Həmişə input validasiyası** edin:

```js
function processString(str) {
  if (typeof str !== 'string') {
    throw new Error('String gözlənilir');
  }
  return str.trim().toLowerCase();
}
```