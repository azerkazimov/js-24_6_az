
---

## 🕰 JavaScript-in Tarixi: Necə Başladı?

### 🔹 JavaScript Niyə Yaradıldı?

1990-cı illərin ortalarında veb səhifələr əsasən statik idi. İstifadəçi ilə interaktivliyi artırmaq üçün brauzer daxilində işləyən, yüngül və öyrənilməsi asan bir skript dili lazım idi. Bu ehtiyacdan doğaraq **JavaScript** yaradıldı.

## 🕰 TARİXİ MƏLUMATLAR

### ✅ JavaScript-in yaranma səbəbi

1995-ci ildə Netscape şirkəti interaktiv və dinamik veb səhifələr üçün brauzer içində işləyən yüngül skript dilinə ehtiyac duyurdu. Brendan Eich cəmi **10 günə** bu dili yazdı. Əvvəlcə **Mocha**, sonra **LiveScript**, və sonda **JavaScript** adlandırıldı. Java ilə heç bir əlaqəsi yoxdur, ad sadəcə o vaxtlar məşhur olan Java dilinə olan marketinq jesti idi.

### 🔹 Əsas Tarixi Anlar

- **1995**: Brendan Eich tərəfindən Netscape Navigator üçün **Mocha** adı ilə yaradıldı. Daha sonra **LiveScript**, sonda isə **JavaScript** adlandırıldı.
    
- **1996**: Microsoft, Internet Explorer üçün **JScript** adlı alternativini təqdim etdi.
    
- **1997**: JavaScript-in standartlaşdırılması üçün **ECMAScript** spesifikasiyası ECMA International tərəfindən təqdim edildi.
    

---

## 📜 ECMAScript və JavaScript

## 📚 ECMAScript və JavaScript

**JavaScript** – proqramlaşdırma dilidir.  
**ECMAScript** – bu dilin spesifikasiyasıdır.

> ECMAScript JavaScript-in "qanun kitabı"dır. JavaScript isə onun praktiki tətbiqidir.

### 🔹 ECMAScript Nədir?

**ECMAScript**, ECMA International tərəfindən standartlaşdırılmış bir proqramlaşdırma dili spesifikasiyasıdır. JavaScript, bu spesifikasiyaya əsaslanan bir dildir. ECMAScript, müxtəlif brauzerlərdə və platformalarda JavaScript-in eyni şəkildə işləməsini təmin edir.

### 🔹 ECMAScript Versiyaları

|İl|Versiya|Əsas Yeniliklər|
|---|---|---|
|1997|ES1|İlk versiya|
|1999|ES3|`try/catch`, `switch`, və s.|
|2009|ES5|`strict mode`, JSON dəstəyi, `Array.forEach`|
|2015|ES6 (ES2015)|`let`, `const`, ox funksiyaları, siniflər, modullar|
|2016+|ES7 və sonrası|`async/await`, yeni array metodları və s.|

---
## 🔧 JavaScript-in Xüsusiyyətləri
## ⚙️ FUNKSİONALLIQLAR

### ✅ Dilin Əsas Xüsusiyyətləri

| Xüsusiyyət                           | Təsvir                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------- |
| **Dinamik tip təyini**               | Dəyişənin tipi run-time-da təyin olunur                                   |
| **Interpretasiya olunan dil**        | JavaScript kodu əvvəlcədən tərcümə olunmur, brauzer onu birbaşa icra edir |
| **Prototip əsaslı OOP**              | Siniflər deyil, prototiplər vasitəsilə miras alınır                       |
| **Zəif tipli dil**                   | Tip dönüşümləri avtomatik aparılır                                        |
| **Yüksək səviyyəli funksiya**        | Funksiyalar dəyişən kimi ötürülə bilər                                    |
| **Tək parçalılıq (single-threaded)** | JavaScript əsasən bir prosesdə işləyir (event loop ilə)                   |
- **Dəyişənin tipi run-time-da (icra zamanı) təyin olunur:**  
    JavaScript-də dəyişənin tipi əvvəlcədən müəyyən olunmur. Məsələn, bir dəyişən əvvəl ədəd ola bilər, sonra isə mətn tipinə çevrilə bilər. Tip dinamik olaraq, proqram işləyərkən müəyyən olunur.
    
- **JavaScript kodu əvvəlcədən tərcümə olunmur, brauzer onu birbaşa icra edir:**  
    Java və ya C++ kimi dillərdə kod əvvəlcədən tərcümə olunur (kompilyasiya edilir), lakin JavaScript-də kod birbaşa brauzer tərəfindən sətir-sətir oxunaraq icra olunur.
    
- **Siniflər (class) deyil, prototiplər vasitəsilə miras alınır:**  
    Ənənəvi OOP dillərində miras siniflər vasitəsilə olur. JavaScript-də isə obyektlər bir-birindən **prototiplər** vasitəsilə xüsusiyyət və metodları miras alır.
    
- **Tip dönüşümləri avtomatik aparılır:**  
    JavaScript avtomatik olaraq bir tipi digər tipə çevirə bilir. Məsələn, `"5" + 3` yazanda nəticə `"53"` olacaq, çünki 3 avtomatik olaraq mətnə çevrilir.
    
- **Funksiyalar dəyişən kimi ötürülə bilər:**  
    JavaScript-də funksiyalar **birinci dərəcəli vətəndaşlar** sayılır — yəni dəyişənlər kimi saxlanıla, başqa funksiyalara ötürülə və ya funksiyadan qaytarıla bilər.
    
- **JavaScript əsasən bir prosesdə işləyir (event loop ilə):**  
    JavaScript bir prosesli (single-threaded) dildir, amma **event loop** adlı mexanizmdən istifadə edərək asinxron əməliyyatları (məsələn, zaman gecikməsi, serverə sorğu və s.) səmərəli şəkildə idarə edir.
---

### ✅ Çoxparadigmalı Proqramlaşdırma Dili

JavaScript müxtəlif proqramlaşdırma paradiqmalarını dəstəkləyir:

- **İmperativ**: Əmrlər və dövrlər vasitəsilə.
    
- **Obyekt yönümlü**: Prototiplər və siniflər vasitəsilə.
    
- **Funksional**: Yüksək səviyyəli funksiyalar, bağlamalar və s.
    

### ✅ Dinamik Tip Təyini

JavaScript-də dəyişənlərin tipi təyin olunmur; tip, proqramın icrası zamanı müəyyən edilir.

```javascript
let x = 5;      // x - ədəd
x = "salam";    // indi x - sətir
```

### ✅ Avtomatik Yaddaş İdarəetməsi

JavaScript, istifadə olunmayan obyektləri avtomatik olaraq yaddaşdan silən **Garbage Collector**-a malikdir. Bu, proqramçının yaddaş idarəetməsi ilə məşğul olmasına ehtiyac yaratmır.

### ✅ Prototip əsaslı Proqramlaşdırma

JavaScript siniflər əvəzinə prototiplərdən istifadə edir. Hər bir obyekt başqa bir obyektin xüsusiyyətlərini miras ala bilər.

```javascript
const heyvan = {
  ses: function() {
    console.log("Səs!");
  }
};

const it = Object.create(heyvan);
it.ses(); // Çıxış: Səs!
```

---

## 📦 JavaScript-in Tərkibi

JavaScript üç əsas komponentdən ibarətdir:

1. **ECMAScript (Dil Nüvəsi)**: Sintaksis, dəyişənlər, operatorlar, əsas obyektlər və s.
    
2. **DOM (Document Object Model)**: HTML sənədinin strukturuna daxil olmaq və onu dəyişmək üçün API.
		
``` js
document.querySelector("h1").innerText = "Başlıq dəyişdi!";
```
    
3. **BOM (Browser Object Model)**: Brauzerə aid obyektlərə (məsələn, `window`, `navigator`) daxil olmaq üçün API.
    


---

## 🔗 JavaScript-in HTML-ə Əlavə Edilməsi

### ✅ Daxili Skript

```html
<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="UTF-8">
  <title>Nümunə</title>
</head>
<body>
  <h1>Salam, dünya!</h1>

  <script>
    alert('Skript işləyir!');
  </script>
</body>
</html>
```

### ✅ Xarici Skript

1. `script.js` adlı fayl yaradın:
    

```javascript
// script.js
alert('Bu, xarici JavaScript faylıdır');
```

2. HTML sənədində bu faylı daxil edin:
    

```html
<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="UTF-8">
  <title>Nümunə</title>
</head>
<body>
  <h1>Salam, dünya!</h1>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🔤 `var`, `let` və `const` Arasındakı Fərqlər

|Açar Söz|Yenidən Təyin|Yenidən İstifadə|Görünürlük Sahəsi|Hoisting (Yuxarı Qaldırma)|
|---|---|---|---|---|
|`var`|✅|✅|Funksiya|✅|
|`let`|❌|✅|Blok|❌|
|`const`|❌|❌|Blok|❌|

- **`var`**: Funksiya səviyyəli görünürlük, dəyişənlər yuxarı qaldırılır.
    
- **`let`**: Blok səviyyəli görünürlük, dəyişənlər yuxarı qaldırılmır.
    
- **`const`**: Blok səviyyəli görünürlük, dəyişənlər dəyişdirilə bilməz.
    

---