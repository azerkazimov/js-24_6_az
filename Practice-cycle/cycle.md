
## 📌 1. JavaScript-də dövrlər nə üçün lazımdır

Dövrlər eyni kod blokunun bir neçə dəfə **təkrarlanmasına imkan verir**, onu əl ilə dublikat etmək lazım olmadan.

**İstifadə nümunələri:**

- Massiv elementlərini nəzərdən keçirmək
    
- Formadan gələn məlumatları emal etmək
    
- 1-dən 100-ə qədər rəqəmləri göstərmək
    
- Səhifədə elementlərin avtomatik generasiyası (məsələn, məhsul kartları)
    

💡 **Əsas ideya**: təkrarlanan əməliyyatların avtomatlaşdırılması.

---

## 🔁 2. JavaScript-də hansı dövrlər var

JavaScript bir neçə növ dövrü dəstəkləyir, hər biri müəyyən vəziyyətlər üçün uyğundur:

### ▶️ `for`

Dəqiq **iterasiya sayğacı** məlum olduqda istifadə edilir.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

⏳ İcra olunur:

1. İlkin mərhələ: `let i = 0`
    
2. Şərtin yoxlanılması: `i < 5`
    
3. Dövr gövdəsinin icra edilməsi
    
4. Addım: `i++`
    

---

### ▶️ `while`

Şərt yerinə yetirildiyi müddətdə işləyir.  
**Dövrün neçə dəfə icra olunacağı məlum olmayanda** uyğundur.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

### ▶️ `do...while`

Fərqi ondadır ki, **dövrün gövdəsi ən azı bir dəfə icra olunur**, hətta şərt yanlış olsa belə.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

### ▶️ `for...in`

**Obyekt xassələrini nəzərdən keçirmək** üçün istifadə olunur.

```js
const user = { name: "Alice", age: 25 };
for (let key in user) {
  console.log(key, user[key]);
}
```

---

### ▶️ `for...of`

**İterasiya edilə bilən obyektlərin dəyərlərini** (massivlər, sətirlər, `Map`, `Set` və s.) **nəzərdən keçirmək** üçün istifadə olunur.

```js
const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
```

---

## ⚠️ 3. Sonsuz dövr nədir

**Sonsuz dövr** — heç vaxt başa çatmayan dövrdir, çünki ondan çıxış şərti **heç vaxt yanlış olmur**.

Nümunə:

```js
while (true) {
  console.log("Bu sonsuz dövrdür");
}
```

---

### ❌ Niyə bu pisdir:

- Brauzer **dona bilər**
    
- **Prosessora yüksək yüklənmə**
    
- Tətbiq cavab verməyi dayandıra bilər
    

---

### ✅ Sonsuz dövrlərdən necə qaçmaq olar

1. **Sayğac dəyişənlərini mütləq yeniləyin**
    
2. Dövrdən **çıxış şərtinə nəzarət edin**
    
3. İşləmə zamanı sazlama (`console.log`) istifadə edin
    

Təhlükəsiz dövr nümunəsi:

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++; // vacibdir!
}
```

---

### 💡 Sonsuz dövrlər nə vaxt faydalıdır

- **Sistem skriptlərində** (məsələn, oyun dövrü `game loop`)
    
- Əgər daxili çıxış nöqtələri varsa (`break`), **asinxron tapşırıqlarla** işləyərkən
    
- Proqramın həmişə daxil olan məlumatları "dinləməli" olduğu **server tətbiqlərində**
    

Çıxışla nümunə:

```js
while (true) {
  const input = prompt("Rəqəm daxil edin (və ya çıxmaq üçün 'exit'):");
  if (input === 'exit') break;
  console.log("Siz daxil etdiniz:", input);
}
```

---

## ✅ Nəticələr

- Dövrlər **təkrarlanan hərəkətləri avtomatlaşdırmaq** üçün lazımdır
    
- Əsas məsələ — **nə vaxt və hansı dövrün istifadəsinin daha yaxşı olduğunu başa düşməkdir**
    
- Sonsuz dövrlər — **təhlükəlidir**, lakin düzgün idarə olunduqda faydalı ola bilər
    

---

## 🔄 `for` dövrü daxilində `continue` — İterasiyanın atlanması

### 📌 `continue` nə edir

`continue` açar sözü **dövr daxilində istifadə olunur** ki, **cari iterasiyanı dayandırsın** və **dövrü tam bitirmədən növbəti iterasiyaya keçsin**.

Bu, dövrü icra edərkən **müəyyən dəyərləri atlamaq** lazım olduqda faydalıdır.

---

### ▶️ `for`-da `continue` sintaksisi:

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // yalnız tək ədədləri göstərəcək
}
```

### 🔍 İzah:

- `for` dövrü `0`-dan `9`-a qədər gedir
    
- Əgər `i` — cütdürsə (`i % 2 === 0`), onda `continue` işə düşür və `console.log(i)` **atlanılır**
    
- Beləliklə, **konsolda yalnız tək ədədlər olacaq**: `1, 3, 5, 7, 9`
    

---

### 💡 Faydalı nümunə: Massivdə boş dəyərləri atlamaq

```js
const names = ["Alice", "", "Bob", "", "Charlie"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "") continue;
  console.log(names[i]);
}
```

**Nəticə:**

```
Alice  
Bob  
Charlie
```

---

### ⚠️ Vacib:

- `continue` **bütün dövrü bitirmir**, sadəcə **bir iterasiyanı**
    
- **İstənilən dövrdə** istifadə edilə bilər (`for`, `while`, `do...while`)
    
- Məlumatları filtrlələmək üçün tez-tez `if` ilə birlikdə istifadə olunur
    

---

---

## 🔚 `break` — Dövrün dayandırılması

### 📌 `break` nə edir

`break` açar sözü dövrlərin daxilində istifadə olunur ki, dövrün icrasını **tam dayandırsın** və ondan erkən çıxsın.

---

### ▶️ Sintaksis:

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

**Nəticə:**

```
1  
2  
3  
4
```

➡️ Dövr `i === 5` olan kimi dayanır

---

### 🔍 `break` nə vaxt istifadə edilir

- Massivdə **lazımi element tapıldıqda**
    
- **İterasiyaların davam etməsinin mənasız olduğu** halda
    
- Onları idarə etmək üçün **sonsuz dövrlərdə**
    

---

### ✅ Nümunə: Massivdə ilk mənfi ədədi tapmaq

```js
const numbers = [4, 2, 7, -1, 5, -3];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    console.log("İlk mənfi ədəd:", numbers[i]);
    break;
  }
}
```

---

## 📚 JavaScript-də Massivlər (əsaslar)

### 📌 Massiv nədir?

Massiv — **bir dəyişəndə saxlanan** **nizamlı məlumat kolleksiyasıdır**. Massiv elementləri sıfırdan indekslənir.

```js
const fruits = ["apple", "banana", "cherry"];
```

- `fruits[0]` → `"apple"`
    
- `fruits[1]` → `"banana"`
    
- `fruits.length` → `3`
    

---

### 🔁 Massivi nəzərdən keçirmək:

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## 🧱 JavaScript-də Obyektlər (əsaslar)

### 📌 Obyekt nədir?

Obyekt — **açar: dəyər** cütlərini saxlayan **məlumat strukturudur**.

```js
const user = {
  name: "Alice",
  age: 25,
  isAdmin: false
};
```

- `user.name` → `"Alice"`
    
- `user["age"]` → `25`
    

---

### 🔁 `for...in` ilə obyekti nəzərdən keçirmək:

```js
for (let key in user) {
  console.log(key, ":", user[key]);
}
```

**Nəticə:**

```
name : Alice  
age : 25  
isAdmin : false
```

---

### ✅ Nümunə: Obyektlər massivi

```js
const users = [
  { name: "Tom", age: 20 },
  { name: "Anna", age: 23 },
  { name: "Mike", age: 30 }
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name + " " + users[i].age + " yaşındadır.");
}
```

**Nəticə:**

```
Tom 20 yaşındadır.  
Anna 23 yaşındadır.  
Mike 30 yaşındadır.
```

---