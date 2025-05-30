**Massivin destrukturizasiyası və spread operatoru**

**Şərt**

`getMessagesForBestStudents` adlı funksiya yaradın. Bu funksiya imtahandan keçmiş tələbələr üçün təbrik mesajları yaratmalıdır.

**Tapşırıq:**

* Funksiyanın adı `getMessagesForBestStudents` olmalıdır
* Funksiya iki arqument qəbul etməlidir:

  1. Bütün qrupun adlarını saxlayan massiv
  2. İmtahandan keçməyən tələbələrin adlarını saxlayan massiv (bu massiv birinci massivdəki bəzi adları ehtiva edir)
* Funksiya yalnız birinci massivdə olub ikinci massivdə olmayan adları seçməlidir
* Bu adlar əsasında `Good job, [ad]` formatında yeni bir massiv qaytarmalıdır
* Əsas (orijinal) massivlər dəyişməməlidir
* Nümunə: `['a', 'b', 'c', 'd'], ['b', 'd']` → `['Good job, a', 'Good job, c']`
