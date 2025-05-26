

### 📌 **Tapşırıq: Ən uzun təkrarlanan alt-sətrin tapılması**

Verilmiş string daxilində **ən uzun təkrarlanan alt-sözü (alt-sətri)** tapın. Bu alt-sətir eyni ilə daha sonra yenidən istifadə olunmalıdır.

---

### 🎯 **Tələb:**

* Giriş: bir string, məsələn:

  ```js
  const input = "// afaasfdafdaafaafaaffeartteq // gegegegerteteyeb // fdertfertfertderty";
  ```
* Çıxış: həmin stringdə **ən uzun təkrarlanan hissə** (bir neçə dəfə eyni ilə təkrarlanıb)

---

### 💡 **Nümunə nəticə:**

```js
Input:
"abcabcdabc"

Output:
"abc"
```

> `"abc"` burada bir neçə dəfə təkrarlandığı üçün ən uzun təkrarlanan alt-sətr hesab olunur.

---

### 📋 **Əlavə qeydlər:**

* Təkrarlanan hissələr **bitişik** və ya **ayrılmış** ola bilər.
* Eyni uzunluqlu bir neçə hissə varsa, **birincisini** qaytarın.
* `for` dövrləri və `substring()` metodundan istifadə tövsiyə olunur.
* `Set` və `Map` **istifadə olunmamalıdır**.

