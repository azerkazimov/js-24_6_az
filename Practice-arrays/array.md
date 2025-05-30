
### Massiv nədir?

Massiv — JavaScript-də elementlərin nizamlı kolleksiyasını saxlamağa imkan verən data strukturudur. Massivin hər bir elementi indeks adlanan sıra nömrəsinə malikdir ki, bu da 0-dan başlayır.

- Massivlər hər növ məlumatı saxlaya bilərlər: ədədlər, sətrlər, obyektlər, digər massivlər və s.
- Massivlər bir deyil, bir neçə dəyərlə işləmək lazım olduqda istifadə olunur.

### Massivlər niyə lazımdır?

- Bir dəyişəndə bir neçə əlaqəli məlumatı saxlamaq üçün.
- Məlumat kolleksiyalarını rahat emal etmək və idarə etmək üçün.
- Məlumatları tez bir zamanda nəzərdən keçirmək və dəyişdirmək imkanı verir.
- Bir çox məsələlərdə istifadə olunur: istifadəçi siyahıları, sorğu nəticələri, məhsul kolleksiyaları və bir çox başqa sahələrdə.

### Massivin digər data tiplərindən fərqi

|Data tipi|Xüsusiyyətləri|Nümunə|
|---|---|---|
|Primitiv tiplər|Bir dəyər saxlayırlar (ədəd, sətr, boolean)|`let x = 5;`|
|Obyektlər|Açar-dəyər cütləri toplusunu saxlayır|`let obj = {ad: 'Anar'}`|
|Massivlər|Elementlərin nizamlı kolleksiyası olan xüsusi obyekt|`let arr = [1, 2, 3];`|

- Massiv bir obyektdir, amma xüsusi xüsusiyyətlərlə:
    - Ədədlərlə indeksləmə
    - `.length` xüsusiyyətinə malikdir
    - Elementlərlə işləmək üçün xüsusi metodlar təqdim edir

### Sadə massiv nümunəsi

```javascript
// Ədədlərdən ibarət massiv yaradırıq
let ədədlər = [10, 20, 30, 40, 50];

// Birinci elementi çıxarırıq (indeks 0)
console.log(ədədlər[0]); // 10

// Massivin uzunluğunu çıxarırıq
console.log(ədədlər.length); // 5
```

> **Qeyd**: Massiv yaratdıqda, dəyərlər kvadrat mötərizə içərisində yazılır və vergül ilə ayrılır. İndekslər həmişə 0-dan başlayır, yəni birinci element 0-cı indeksdə, ikinci element 1-ci indeksdə və s.

---

## 2. Massivlərin yaradılması

### Massiv yaratmaq üsulları

#### 1. Massiv literalı (tövsiyə olunan üsul)

Bu, massiv yaratmağın ən sadə və geniş yayılmış üsuludur — kvadrat mötərizələrdən `[]` istifadə etməklə.

```javascript
let meyvələr = ['alma', 'banan', 'kivi'];
```

#### 2. `Array` konstruktoru

Konstruktor vasitəsilə də massiv yarada bilərsiniz:

```javascript
let ədədlər = new Array(10, 20, 30);
```

Lakin bəzi xüsusiyyətlər var:

- Əgər bir ədədi arqument ötürülsə, bu massivin elementini deyil, uzunluğunu təyin edəcək.

```javascript
let arr = new Array(5); // 5 uzunluğunda boş massiv yaradacaq (boş elementlərlə)
console.log(arr.length); // 5
console.log(arr); // [ <5 empty items> ]
```

- Element kimi bir ədəd olan massiv yaratmaq üçün literal istifadə etmək və ya bir neçə arqument ötürmək lazımdır.

```javascript
let arr2 = [5]; // bir elementi 5 olan massiv
let arr3 = new Array(5, 10); // iki elementi olan massiv: 5 və 10
```

### Qısa məllumat

| Yaratma üsulu            | Nümunə                       | Xüsusiyyətlər                                     |
| ------------------------ | ---------------------------- | ------------------------------------------------- |
| Massiv literalı          | `let arr = [1, 2, 3];`       | Sürətli və aydındır                               |
| `new Array` konstruktoru | `let arr = new Array(1, 2);` | Bir ədədlə qarışıq ola bilər (uzunluq təyin edir) |

> **Qeyd:** Əksər JavaScript tərtibatçıları massiv literalı sintaksisindən istifadə edirlər, çünki daha qısadır və `new Array()` ilə bağlı çaşqınlıqlardan qaçmağa imkan verir. Daim yadda saxlayın ki, `new Array(5)` bir elementi olan massiv deyil, beş boş yeri olan massiv yaradır.

---

## 3. Massiv elementlərinə giriş və onları dəyişdirmək

### Elementlərə indeks vasitəsilə giriş

Massiv elementlərinə kvadrat mötərizə içərisində indeks göstərərək müraciət edə bilərsiniz:

```javascript
let meyvələr = ['alma', 'banan', 'kivi'];

console.log(meyvələr[0]); // 'alma'
console.log(meyvələr[1]); // 'banan'
console.log(meyvələr[2]); // 'kivi'
```

### Elementləri dəyişdirmək

Massiv elementlərini eyni indeks notasiyasından istifadə edərək dəyişdirə bilərsiniz:

```javascript
let meyvələr = ['alma', 'banan', 'kivi'];

meyvələr[1] = 'portağal'; // 'banan'-ı 'portağal' ilə əvəz edirik
console.log(meyvələr); // ['alma', 'portağal', 'kivi']
```

### Mövcud olmayan indekslərə giriş

Əgər mövcud olmayan indeksə müraciət etsəniz, `undefined` alarsınız:

```javascript
let meyvələr = ['alma', 'banan', 'kivi'];

console.log(meyvələr[3]); // undefined - belə bir indeks yoxdur
```

### Massiv uzunluğu (length)

`length` xüsusiyyəti massivin uzunluğunu (elementlərin sayını) qaytarır:

```javascript
let meyvələr = ['alma', 'banan', 'kivi'];
console.log(meyvələr.length); // 3
```

> **Qeyd:** `length` xüsusiyyəti həmişə massivin son indeksindən bir vahid böyük olur. Məsələn, əgər sonuncu element indeks 2-dirsə, onda `length` 3 olacaq. Bu xüsusiyyət massivi yenidən ölçüləndirmək üçün də istifadə edilə bilər.

---

## 4. Massiv elementlərini əlavə etmək və silmək

### Sonuna əlavə etmək - push()

`.push()` metodu massivin sonuna bir və ya bir neçə element əlavə edir və massivin yeni uzunluğunu qaytarır:

```javascript
let meyvələr = ['alma', 'banan'];
let yeniUzunluq = meyvələr.push('kivi', 'ananas');
console.log(meyvələr); // ['alma', 'banan', 'kivi', 'ananas']
console.log(yeniUzunluq); // 4
```

### Sonundan silmək - pop()

`.pop()` metodu massivin sonundan elementi silir və həmin elementi qaytarır:

```javascript
let meyvələr = ['alma', 'banan', 'kivi'];
let silinmişElement = meyvələr.pop();
console.log(meyvələr); // ['alma', 'banan']
console.log(silinmişElement); // 'kivi'
```

### Əvvəlinə əlavə etmək - unshift()

`.unshift()` metodu massivin əvvəlinə bir və ya bir neçə element əlavə edir və massivin yeni uzunluğunu qaytarır:

```javascript
let meyvələr = ['banan', 'kivi'];
let yeniUzunluq = meyvələr.unshift('alma', 'ananas');
console.log(meyvələr); // ['alma', 'ananas', 'banan', 'kivi']
console.log(yeniUzunluq); // 4
```

### Əvvəlindən silmək - shift()

`.shift()` metodu massivin əvvəlindən elementi silir və həmin elementi qaytarır:

```javascript
let meyvələr = ['alma', 'banan', 'kivi'];
let silinmişElement = meyvələr.shift();
console.log(meyvələr); // ['banan', 'kivi']
console.log(silinmişElement); // 'alma'
```

> **Müəllim qeydi:** `push()` və `pop()` metodları massivin sonunda əməliyyat aparır və performans baxımından daha effektivdir. `unshift()` və `shift()` metodları isə massivin əvvəlində əməliyyat aparır və böyük massivlərdə daha çox vaxt və resurs tələb edə bilər, çünki bütün elementlərin indekslərini yenidən təyin etmək lazım gəlir.

---

## 5. Massiv elementlərinin nəzərdən keçirilməsi

Massivin nəzərdən keçirilməsi - massivdəki bütün elementlər üzərində gəzərək hər biri ilə müəyyən bir əməliyyat aparmaq deməkdir.

### Massiv nəzərdən keçirilməsinin əsas üsulları

#### 1. `for` dövrü

Ən klassik üsul - indeksi əl ilə idarə etdiyimiz adi `for` dövrüdür.

```javascript
let meyvələr = ['alma', 'banan', 'kivi'];

for (let i = 0; i < meyvələr.length; i++) {
  console.log(meyvələr[i]);
}
```

- Burada `i` - 0-dan başlayaraq `length - 1`-ə qədər olan elementin indeksidir.
- Dövr daxilində elementə `meyvələr[i]` şəklində müraciət edə bilərsiniz.

#### 2. `for...of` dövrü

Massivin **dəyərlərini** nəzərdən keçirmək üçün sadələşdirilmiş dövr.

```javascript
for (let meyvə of meyvələr) {
  console.log(meyvə);
}
```

- `meyvə` dəyişəni növbə ilə hər elementin dəyərini alır.
- İndekslərlə işləmək lazım deyil.

#### 3. Massivin `forEach()` metodu

`forEach` metodu funksiyanı qəbul edir və onu massivin hər elementi üçün yerinə yetirir.

```javascript
meyvələr.forEach(function(meyvə, indeks) {
  console.log(indeks, meyvə);
});
```

Və ya ox funksiyası ilə istifadə edərək:

```javascript
meyvələr.forEach((meyvə, indeks) => {
  console.log(indeks, meyvə);
});
```

- Birinci parametr - cari element.
- İkinci parametr (ixtiyari) - elementin indeksi.
- `forEach` yeni massiv qaytarmır — sadəcə əməliyyatı yerinə yetirir.

#### Digər nəzərdən keçirmə metodları haqqında qısa məlumat

- `map()` — hər elementi dəyişdirərək yeni massiv yaradır.
- `filter()` — yoxlamadan keçən elementlərlə yeni massiv yaradır.
- `reduce()` — massivi bir dəyərə gətirir.

### Nəzərdən keçirmə üsullarının müqayisəsi nümunəsi

```javascript
const ədədlər = [1, 2, 3, 4];

// for
for (let i = 0; i < ədədlər.length; i++) {
  console.log(ədədlər[i]);
}

// for...of
for (let ədəd of ədədlər) {
  console.log(ədəd);
}

// forEach
ədədlər.forEach(ədəd => console.log(ədəd));
```

> **Qeyd:** Hər nəzərdən keçirmə üsulunun öz üstünlükləri var:
> 
> - Klassik `for` dövrü - indeksə tam nəzarət lazım olduqda
> - `for...of` - daha yığcam kod və yalnız dəyərlər maraqlı olduqda
> - `forEach` - funksional proqramlaşdırma tərzində yazılan kodda daha oxunaqlı

### Möhkəmləndirmək üçün tapşırıqlar

**Tapşırıq 1:** `let arr = ['a', 'b', 'c'];` massivinin bütün elementlərini `for` dövrü istifadə edərək çıxarın.

**Tapşırıq 2:** `let arr = [10, 20, 30];` massivinin bütün elementlərini `for...of` istifadə edərək çıxarın.

**Tapşırıq 3:** `forEach` metodundan istifadə edərək, `['x', 'y', 'z']` massivinin indekslərini və dəyərlərini çıxarın.

---

## 6. Massivin əsas metodları

Massiv metodları — massivləri dəyişdirmək, baxmaq və yeni massivlər yaratmaq üçün əlverişli daxili funksiyalardır.

### 6.1 Elementlərin əlavə edilməsi və silinməsi

#### `push()` — massivinin sonuna element(lər) əlavə edir

```javascript
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```

#### `pop()` — son elementi silir və onu qaytarır

```javascript
let arr = [1, 2, 3];
let last = arr.pop();
console.log(arr); // [1, 2]
console.log(last); // 3
```

#### `unshift()` — massivin əvvəlinə element(lər) əlavə edir

```javascript
let arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]
```

#### `shift()` — ilk elementi silir və onu qaytarır

```javascript
let arr = [1, 2, 3];
let first = arr.shift();
console.log(arr); // [2, 3]
console.log(first); // 1
```

### 6.2 Elementləri axtarma və çıxarma

#### `indexOf(value)` — dəyərin ilk rast gəlmə indeksini qaytarır, əgər tapılmazsa `-1` qaytarır

```javascript
let arr = ['a', 'b', 'c', 'b'];
console.log(arr.indexOf('b')); // 1
console.log(arr.indexOf('z')); // -1
```

#### `includes(value)` — massiv dəyəri ehtiva edirsə `true` qaytarır

```javascript
let arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(5)); // false
```

#### `slice(start, end)` — original massivin bir hissəsini kopyalayaraq yeni massiv qaytarır, `start`-dan `end`-ə qədər (`end` daxil deyil)

```javascript
let arr = [1, 2, 3, 4, 5];
let part = arr.slice(1, 3); // indeksi 1 və 2 olan elementləri kopyalayırıq
console.log(part); // [2, 3]
```

### 6.3 Massivin məzmununun dəyişdirilməsi

#### `splice(start, deleteCount, ...items)` — elementləri silir, əvəz edir və ya əlavə edir

```javascript
let arr = [1, 2, 3, 4, 5];

// indeks 1-dən başlayaraq 2 elementi sil
arr.splice(1, 2);
console.log(arr); // [1, 4, 5]

// indeks 1-dən başlayaraq 1 elementi 99 ilə əvəz et
arr.splice(1, 1, 99);
console.log(arr); // [1, 99, 5]

// indeks 1-dən başlayaraq heç nə silmədən elementlər əlavə et
arr.splice(1, 0, 10, 20);
console.log(arr); // [1, 10, 20, 99, 5]
```

### 6.4 Digər faydalı metodlar

#### `join(separator)` — massivin elementlərini ayırıcı vasitəsilə birləşdirib sətir yaradır

```javascript
let arr = ['alma', 'banan', 'kivi'];
console.log(arr.join(', ')); // 'alma, banan, kivi'
```

#### `reverse()` — massivin elementlərinin sırasını əksinə çevirir

```javascript
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

#### `concat(...arrays)` — massivləri birləşdirir və yeni massiv qaytarır

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);
console.log(newArr); // [1, 2, 3, 4]
```

> **Müəllim qeydi:** `splice()` metodu orijinal massivi dəyişdirir, `slice()` isə orijinal massivi dəyişdirmədən onun bir hissəsinin surətini qaytarır. `splice()` çox funksionaldır və massivə müdaxilə etməyin əsas üsullarından biridir. Üç əsas əməliyyatı yerinə yetirə bilər: silmə, əvəzetmə və əlavəetmə.

### Möhkəmləndirmək üçün tapşırıqlar

**Tapşırıq 1:** `[1, 2, 3]` ədədləri olan massiv yaradın. Sonuna 4 və əvvəlinə 0 əlavə edin.

**Tapşırıq 2:** `['a', 'b', 'c', 'd']` massivindən `splice` istifadə edərək `'b'` və `'c'` elementlərini silin.

**Tapşırıq 3:** `['apple', 'banana', 'orange']` sətrlərindən ibarət massiv yaradın və onu `;` vasitəsilə birləştirin.

---

## 7. Massivlərdə destrukturizasiya və Spread operatoru

### 7.1 Massivin destrukturizasiyası

Destrukturizasiya — massivdən dəyərləri ayrı-ayrı dəyişənlərə "açmağın" rahat bir yoludur.

#### Nümunə

```javascript
const meyvələr = ['alma', 'banan', 'kivi'];

// adi üsul
const first = meyvələr[0];
const second = meyvələr[1];

// destrukturizasiya ilə
const [a, b, c] = meyvələr;

console.log(a); // 'alma'
console.log(b); // 'banan'
console.log(c); // 'kivi'
```

#### Elementləri buraxmaq

Əgər bəzi elementləri buraxmaq lazımdırsa, dəyişəni göstərməmək olar:

```javascript
const [first, , third] = meyvələr;
console.log(first); // 'alma'
console.log(third); // 'kivi'
```

#### Elementlərin qalığı — rest operatoru (`...`)

Massivin qalan hissəsini ayrıca massivə toplamaq olar:

```javascript
const [first, ...others] = meyvələr;
console.log(first); // 'alma'
console.log(others); // ['banan', 'kivi']
```

### 7.2 Spread operatoru (`...`)

Spread massivi (və ya iterasiya edilə bilən obyekti) elementlər siyahısına **açmağa** imkan verir.

#### İstifadə nümunələri

#### Massivin kopyalanması

```javascript
const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy); // [1, 2, 3]
```

#### Massivlərin birləşdirilməsi

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]
```

#### Massiv elementlərinin funksiya arqumentləri kimi ötürülməsi

```javascript
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3
```

### 7.3 Vacib qeydlər

- Destrukturizasiya — rahat mənimsətmə üçün sintaksisdir.
- Spread — massivi "açmaq" və ya "kopyalamaq" üsuludur.
- Spread **səthi kopyalama** yaradır (daxili obyektlər eyni obyektlərə istinad edəcəklər).

> **Müəllim qeydi:** Destrukturizasiya və spread JavaScript-in son versiyalarında əlavə edilmiş çox güclü funksiyalardır və təmiz və yığcam kod yazmağa kömək edirlər. Onlar funksional proqramlaşdırma prinsiplərini dəstəkləyərək immutable data ilə işləməyi asanlaşdırır. Həmçinin, fəaliyyətdə olan proqramçılar arasında geniş şəkildə istifadə olunurlar.

### Möhkəmləndirmək üçün tapşırıqlar

**Tapşırıq 1:** Destrukturizasiyadan istifadə edərək `['a', 'b', 'c', 'd']` massivinin birinci və üçüncü elementini əldə edin.

**Tapşırıq 2:** Spread operatorundan istifadə edərək `[1, 2]` və `[3, 4]` massivlərini bir massivdə birləşdirin.

**Tapşırıq 3:** Spread operatorundan istifadə edərək `[5, 6, 7]` massivinin kopyasını yaradın.

---

## 8. Massivlərlə işləmə üçün praktik nümunələr

### 8.1 Filtrləmə və axtarış

```javascript
// Müştəri siyahısından Bakıda olanları filtrləmək
const müştərilər = [
  { ad: 'Əli', şəhər: 'Bakı', yaş: 25 },
  { ad: 'Aytən', şəhər: 'Gəncə', yaş: 30 },
  { ad: 'Murad', şəhər: 'Bakı', yaş: 28 },
  { ad: 'Lalə', şəhər: 'Sumqayıt', yaş: 22 }
];

const bakıdakıMüştərilər = müştərilər.filter(müştəri => müştəri.şəhər === 'Bakı');
console.log(bakıdakıMüştərilər);
// [{ ad: 'Əli', şəhər: 'Bakı', yaş: 25 }, { ad: 'Murad', şəhər: 'Bakı', yaş: 28 }]
```

### 8.2 Məlumatların çevrilməsi

```javascript
// Adlar massivini böyük hərflərlə yaratmaq
const adlar = ['əli', 'aytən', 'murad', 'lalə'];
const böyükHərfliAdlar = adlar.map(ad => ad.toUpperCase());
console.log(böyükHərfliAdlar); // ['ƏLİ', 'AYTƏN', 'MURAD', 'LALƏ']
```

### 8.3 Məlumatların cəmlənməsi

```javascript
// Qiymətlər massivinin cəmi
const qiymətlər = [29.99, 10.50, 5.75, 16.30];
const toplam = qiymətlər.reduce((cəm, cariQiymət) => cəm + cariQiymət, 0);
console.log(toplam); // 62.54
```

### 8.4 Daha mürəkkəb əməliyyatlar

```javascript
// Müştəriləri yaşa görə qruplaşdırmaq
const yaşaGörəMüştərilər = müştərilər.reduce((qruplar, müştəri) => {
  // Yaş qrupunu müəyyənləşdirək (20-29, 30-39)
  const yaşQrupu = Math.floor(müştəri.yaş / 10) * 10;
  const qrupAdı = `${yaşQrupu}-${yaşQrupu + 9}`;
  
  // Əgər bu qrup hələ yaradılmayıbsa, yaradaq
  if (!qruplar[qrupAdı]) {
    qruplar[qrupAdı] = [];
  }
  
  // Müştərini uyğun yaş qrupuna əlavə edək
  qruplar[qrupAdı].push(müştəri);
  
  return qruplar;
}, {});

console.log(yaşaGörəMüştərilər);
// { '20-29': [{ ad: 'Əli', şəhər: 'Bakı', yaş: 25 }, { ad: 'Murad', şəhər: 'Bakı', yaş: 28 }, { ad: 'Lalə', şəhər: 'Sumqayıt', yaş: 22 }],
//   '30-39': [{ ad: 'Aytən', şəhər: 'Gəncə', yaş: 30 }] }
```

> **Müəllim qeydi:** JavaScript-də massiv metodları zəncirlənə bilər! Bu o deməkdir ki, bir metodun nəticəsi üzərində dərhal başqa bir metodu çağıra bilərsiniz. Məsələn:

```javascript
// Bakıdan olan müştərilərin adlarını böyük hərflərlə əldə etmək
const bakıdakıAdlar = müştərilər
  .filter(müştəri => müştəri.şəhər === 'Bakı')
  .map(müştəri => müştəri.ad.toUpperCase());

console.log(bakıdakıAdlar); // ['ƏLİ', 'MURAD']
```

---

## 9. Məşğələ tapşırıqları

### Tapşırıq 1: Sadə massiv əməliyyatları

1. "xurma", "nar", "alma", "heyva", "armud" elementlərindən ibarət massiv yaradın.
2. Massivi əlifba sırasına görə çeşidləyin.
3. Massivin uzunluğunu çıxarın.
4. Massivin əvvəlinə "əncir" və sonuna "üzüm" əlavə edin.
5. "nar" elementinin indeksini tapın.

### Tapşırıq 2: Massiv filtrlənməsi və dəyişdirilməsi

1. [5, 12, 8, 130, 44] ə