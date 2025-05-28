

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

```
function findLongestRepeatedSubstring(str) {
  let maxLen = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      let len = 0;
      // Uzunluq artıraraq substringləri yoxlayırıq
      while (
        str[i + len] !== undefined &&
        str[j + len] !== undefined &&
        str[i + len] === str[j + len]
      ) {
        len++;
        // Növbəti simvolları yoxlayırıq
      }
      // Ən uzununu yadda saxlayırıq
      if (len > maxLen) {
        maxLen = len;
        result = str.substr(i, len);
      }
    }
  }
  return result;
}

// Nümunə yoxlama
const input = "abcabcdabc";
console.log(findLongestRepeatedSubstring(input)); // "abc"
```