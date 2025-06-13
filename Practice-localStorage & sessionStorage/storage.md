
Müasir veb tətbiqlər istifadəçi təcrübəsini yaxşılaşdırmaq, performansı optimallaşdırmaq və daha interaktiv tətbiqlər yaratmaq üçün müştəri tərəfində məlumat saxlama imkanları tələb edir. JavaScript-də brauzerdə məlumat saxlamaq üçün bir neçə mexanizm mövcuddur.

## 1. LocalStorage

### Bu nədir?

LocalStorage - istifadəçinin brauzerində son istifadə müddəti olmadan məlumat saxlamağa imkan verən veb saxlama mexanizmidir. Məlumatlar brauzerin bağlanmasından sonra da əlçatan qalır.

### Əsas xüsusiyyətlər:

- **Həcm**: 5-10 MB-a qədər (brauzerdən asılıdır)
- **Görünüş sahəsi**: origin (protokol + domen + port)
- **Ömür müddəti**: daimi (proqram yolu ilə və ya istifadəçi tərəfindən silinənə qədər)
- **Əlçatanlıq**: yalnız eyni domendə
- **Sinxronluq**: sinxron əməliyyatlar

### İş metodları:

```javascript
// Məlumat saxlama
localStorage.setItem('açar', 'dəyər');
localStorage.setItem('istifadəçi', JSON.stringify({ad: 'İvan', yaş: 25}));

// Məlumat əldə etmə
const dəyər = localStorage.getItem('açar');
const istifadəçi = JSON.parse(localStorage.getItem('istifadəçi'));

// Konkret elementi silmə
localStorage.removeItem('açar');

// Bütün saxlamanı təmizləmə
localStorage.clear();

// Elementlərin sayını əldə etmə
const say = localStorage.length;

// İndeks üzrə açar əldə etmə
const açar = localStorage.key(0);
```

### Alternativ sintaksis:

```javascript
// Yazma
localStorage.istifadəçiAdı = 'İvan';
localStorage['email'] = 'ivan@example.com';

// Oxuma
console.log(localStorage.istifadəçiAdı);
console.log(localStorage['email']);

// Silmə
delete localStorage.istifadəçiAdı;
```

### Nə vaxt istifadə etmək:

- İstifadəçi tənzimləmələrini saxlama
- Məlumatların keşlənməsi
- Tətbiqin vəziyyətini saxlama
- Autentifikasiya tokenlərinin saxlanması
- İnternet mağazasının səbəti

### İstifadə nümunəsi:

```javascript
// Tema tənzimləmələrini saxlama
function temaSaxla(tema) {
    localStorage.setItem('tema', tema);
}

// Başlanğıcda tənzimləmələri yükləmə
function temaYüklə() {
    const tema = localStorage.getItem('tema') || 'açıq';
    document.body.className = tema;
    return tema;
}

// Dəstəyi yoxlama
function localStorageDəstəklənirmi() {
    try {
        const test = 'test';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}
```

## 2. SessionStorage

### Bu nədir?

SessionStorage - yalnız cari brauzerin sessiyası (vərəqəsi) çərçivəsində mövcud olan müvəqqəti saxlama yeridir.

### Əsas xüsusiyyətlər:

- **Həcm**: 5-10 MB-a qədər
- **Görünüş sahəsi**: brauzerin tab
- **Ömür müddəti**: tab bağlanana qədər
- **API**: localStorage ilə eyni
- **Sinxronluq**: sinxron əməliyyatlar

### İş metodları:

```javascript
// API tamamilə localStorage ilə eynidi
sessionStorage.setItem('sessiyaMəlumatı', 'müvəqqəti məlumatlar');
const məlumat = sessionStorage.getItem('sessiyaMəlumatı');
sessionStorage.removeItem('sessiyaMəlumatı');
sessionStorage.clear();
```

### Nə vaxt istifadə etmək:

- Müvəqqəti forma məlumatları
- Çoxpilləli prosesin vəziyyəti
- Müvəqqəti tokenlər
- Sessiyalar arası saxlanmamalı məlumatlar

### İstifadə nümunəsi:

```javascript
// Forma doldurma irəliləyişini saxlama
function formaİrəliləyişiSaxla() {
    const formaMəlumatı = {
        addım: 2,
        istifadəçiMəlumatı: {
            ad: document.getElementById('ad').value,
            email: document.getElementById('email').value
        }
    };
    sessionStorage.setItem('formaİrəliləyişi', JSON.stringify(formaMəlumatı));
}

// İrəliləyişi bərpa etmə
function formaİrəliləyişiBərpa() {
    const saxlanılan = sessionStorage.getItem('formaİrəliləyişi');
    if (saxlanılan) {
        const məlumat = JSON.parse(saxlanılan);
        document.getElementById('ad').value = məlumat.istifadəçiMəlumatı.ad;
        document.getElementById('email').value = məlumat.istifadəçiMəlumatı.email;
        addımaKeç(məlumat.addım);
    }
}
```

## 3. Cookies

### Bu nədir?

Cookies - veb saytın istifadəçinin brauzerində məlumat izləmək üçün saxlaya biləcəyi kiçik mətn fayllarıdır.

### Əsas xüsusiyyətlər:

- **Həcm**: hər cookie üçün 4 KB-a qədər
- **Miqdar**: ümumi 300 cookie-ə qədər, domen üçün 20-yə qədər
- **Göndərmə**: hər HTTP sorğusu ilə avtomatik göndərilir
- **Ömür müddəti**: tənzimlənə bilən
- **Əlçatanlıq**: serverə əlçatan ola bilər

### Cookies ilə işləmək:

```javascript
// Cookie təyin etmə
document.cookie = "istifadəçiAdı=İvan";
document.cookie = "istifadəçiAdı=İvan; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";

// Parametrlərlə cookie təyin etmək üçün funksiya
function cookieTəyin(ad, dəyər, günlər) {
    const bitir = new Date();
    bitir.setTime(bitir.getTime() + (günlər * 24 * 60 * 60 * 1000));
    document.cookie = `${ad}=${dəyər};expires=${bitir.toUTCString()};path=/`;
}

// Cookie əldə etmək üçün funksiya
function cookieAl(ad) {
    const adEQ = ad + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(adEQ) === 0) return c.substring(adEQ.length, c.length);
    }
    return null;
}

// Cookie silmək üçün funksiya
function cookieSil(ad) {
    document.cookie = `${ad}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
```

### Cookies atributları:

```javascript
// Bütün mümkün atributlar
document.cookie = "sessiyaToken=abc123; " +
    "expires=Wed, 05 Aug 2025 23:00:00 GMT; " +
    "path=/admin; " +
    "domain=.example.com; " +
    "secure; " +
    "HttpOnly; " +
    "SameSite=Strict";
```

### Nə vaxt istifadə etmək:

- İstifadəçi autentifikasiyası
- Sessiya izləmə
- Məzmun fərdiləşdirmə
- Analitika və reklam
- Serverə əlçatan olmalı tənzimləmələr

## 4. IndexedDB

### Bu nədir?

IndexedDB - böyük həcmli strukturlaşdırılmış məlumatları saxlamaq üçün güclü müştəri bazası məlumatıdır.

### Əsas xüsusiyyətlər:

- **Həcm**: digər metodlardan əhəmiyyətli dərəcədə çox (qiqabaytlar)
- **Məlumat növü**: JavaScript obyektləri, fayllar, blob
- **API**: asinxron
- **Transaksiyalar**: ACID-transaksiyalara dəstək
- **İndekslər**: indeksləşdirməyə dəstək

### **ACID IndexedDB-də**:

|Xüsusiyyət|Təsvir|
|---|---|
|**A — Atomicity (Atomluq)**|Transaksiyada bütün əməliyyatlar ya bütövlükdə icra olunur, ya da heç biri.|
|**C — Consistency (Uyğunluq)**|Məlumat bazası vəziyyəti transaksiyadan əvvəl və sonra düzgün qalır.|
|**I — Isolation (Təcridolunma)**|Transaksiyalar təcrid olunmuş şəkildə icra olunur — paralel transaksiyalar toqquşmur.|
|**D — Durability (Etibarlılıq)**|Transaksiya tamamlandıqdan sonra dəyişikliklər qarantili şəkildə saxlanır (uğursuzluq zamanı belə).|

### Əsas nümunə:

```javascript
// Məlumat bazasını açma
function mBaç() {
    return new Promise((həllEt, rəddEt) => {
        const sorğu = indexedDB.open('MənimMəlumatBazam', 1);
        
        sorğu.onerror = () => rəddEt(sorğu.error);
        sorğu.onsuccess = () => həllEt(sorğu.result);
        
        sorğu.onupgradeneeded = (hadisə) => {
            const mb = hadisə.target.result;
            const obyektMağaza = mb.createObjectStore('istifadəçilər', { keyPath: 'id' });
            obyektMağaza.createIndex('email', 'email', { unique: true });
        };
    });
}

// Məlumat əlavə etmə
async function istifadəçiƏlavəEt(istifadəçi) {
    const mb = await mBaç();
    const transaksiya = mb.transaction(['istifadəçilər'], 'readwrite');
    const obyektMağaza = transaksiya.objectStore('istifadəçilər');
    obyektMağaza.add(istifadəçi);
}

// Məlumat əldə etmə
async function istifadəçiAl(id) {
    const mb = await mBaç();
    const transaksiya = mb.transaction(['istifadəçilər'], 'readonly');
    const obyektMağaza = transaksiya.objectStore('istifadəçilər');
    return new Promise((həllEt, rəddEt) => {
        const sorğu = obyektMağaza.get(id);
        sorğu.onsuccess = () => həllEt(sorğu.result);
        sorğu.onerror = () => rəddEt(sorğu.error);
    });
}
```

### Nə vaxt istifadə etmək:

- Böyük həcmli məlumatlar
- Mürəkkəb məlumat strukturları
- Oflayn tətbiqlər
- API cavablarının keşlənməsi
- Yüksək performans tələbləri olan tətbiqlər

## 5. Cache API

### Bu nədir?

Cache API HTTP sorğuları və cavabları keşləmək üçün nəzərdə tutulmuşdur, tez-tez Service Worker-lərdə istifadə olunur.

### Əsas sintaksis:

```javascript
// Keşi açma
caches.open('mənim-keşim-v1').then(keş => {
    // Keşə resurslar əlavə etmə
    keş.addAll([
        '/index.html',
        '/styles.css',
        '/script.js'
    ]);
    
    // Ayrı sorğu əlavə etmə
    keş.add('/api/data');
    
    // Keşdə axtarış
    keş.match('/index.html').then(cavab => {
        if (cavab) {
            console.log('Keşdə tapıldı');
        }
    });
});

// Bütün keşlərdə axtarış
caches.match('/index.html').then(cavab => {
    if (cavab) {
        return cavab;
    }
    return fetch('/index.html');
});
```

### Nə vaxt istifadə etmək:

- Service Worker-lər
- PWA (Progressive Web Apps)
- Statik resursların keşlənməsi
- Oflayn funksionallıq

## 6. Müqayisə cədvəli

|Xüsusiyyət|LocalStorage|SessionStorage|Cookies|IndexedDB|Cache API|
|---|---|---|---|---|---|
|Məlumat həcmi|5-10 MB|5-10 MB|4 KB|Qiqabaytlar|Brauzerdən asılıdır|
|Ömür müddəti|Daimi|Sessiya|Tənzimlənə bilən|Daimi|Daimi|
|Serverə göndərmə|Xeyr|Xeyr|Bəli|Xeyr|Xeyr|
|API|Sinxron|Sinxron|Sətir|Asinxron|Asinxron|
|Brauzər dəstəyi|Əla|Əla|Universal|Yaxşı|Müasir|

## 7. Ən yaxşı praktikalar

### Xətaların idarə edilməsi:

```javascript
function təhlükəsizLocalStorage() {
    try {
        if (typeof Storage !== "undefined" && localStorage) {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return localStorage;
        }
    } catch (e) {
        console.warn('LocalStorage əlçatan deyil:', e);
        return null;
    }
}

// İstifadə
const saxlama = təhlükəsizLocalStorage();
if (saxlama) {
    saxlama.setItem('açar', 'dəyər');
}
```

### JSON ilə işləmək:

```javascript
// Obyektləri saxlama
function obyektSaxla(açar, obj) {
    try {
        localStorage.setItem(açar, JSON.stringify(obj));
    } catch (e) {
        console.error('Saxlama xətası:', e);
    }
}

// Obyektləri yükləmə
function obyektYüklə(açar, defaultDəyər = null) {
    try {
        const element = localStorage.getItem(açar);
        return element ? JSON.parse(element) : defaultDəyər;
    } catch (e) {
        console.error('Yükləmə xətası:', e);
        return defaultDəyər;
    }
}
```

### Rahatlıq üçün Wrapper sinifi:

```javascript
class SaxlamaManaceri {
    constructor(saxlama = localStorage) {
        this.saxlama = saxlama;
    }
    
    təyin(açar, dəyər) {
        try {
            this.saxlama.setItem(açar, JSON.stringify(dəyər));
            return true;
        } catch (e) {
            console.error('Saxlama xətası:', e);
            return false;
        }
    }
    
    al(açar, defaultDəyər = null) {
        try {
            const element = this.saxlama.getItem(açar);
            return element ? JSON.parse(element) : defaultDəyər;
        } catch (e) {
            console.error('Saxlama xətası:', e);
            return defaultDəyər;
        }
    }
    
    sil(açar) {
        this.saxlama.removeItem(açar);
    }
    
    təmizlə() {
        this.saxlama.clear();
    }
    
    var(açar) {
        return this.saxlama.getItem(açar) !== null;
    }
}

// İstifadə
const yerliSaxlama = new SaxlamaManaceri(localStorage);
const sessiyaSaxlama = new SaxlamaManaceri(sessionStorage);

yerliSaxlama.təyin('istifadəçi', {ad: 'İvan', yaş: 30});
const istifadəçi = yerliSaxlama.al('istifadəçi');
```

## 8. Saxlama hadisələri

```javascript
// localStorage-da dəyişiklikləri izləmə
window.addEventListener('storage', (e) => {
    console.log('Saxlamada dəyişiklik:');
    console.log('Açar:', e.key);
    console.log('Köhnə dəyər:', e.oldValue);
    console.log('Yeni dəyər:', e.newValue);
    console.log('URL:', e.url);
    console.log('Saxlama sahəsi:', e.storageArea);
});

// Qeyd: storage hadisəsi dəyişikliyin baş verdiyi eyni vərəqədə işləmir,
// yalnız eyni domenin digər vərəqələrində işləyir
```

## 9. Təhlükəsizlik

### Əsas prinsiplər:

- Heç vaxt localStorage/sessionStorage-da parol saxlamayın
- Autentifikasiya tokenləri ilə diqqətli olun
- Məlumatların DevTools vasitəsilə əlçatan olduğunu unutmayın
- Secure bayraqlı cookie-lər üçün HTTPS istifadə edin
- Saxlamadan yükləyərkən məlumatları təsdiq edin

### Təhlükəsiz token saxlama nümunəsi:

```javascript
// Pis - localStorage-da token
localStorage.setItem('authToken', token);

// Yaxşı - yaddaşda qısa ömürlü token + httpOnly cookie-də refresh token
class AuthManaceri {
    constructor() {
        this.girişToken = null;
        this.yenilemeToken = null; // httpOnly cookie-də olacaq
    }
    
    tokenləriTəyin(girişToken, yenilemeToken) {
        this.girişToken = girişToken;
        // yenilemeToken httpOnly cookie təyin etmək üçün serverə göndərilir
        this.yenilemeTokenCookieTəyin(yenilemeToken);
    }
    
    yenilemeTokenCookieTəyin(token) {
        // Server tərəfindən httpOnly cookie kimi təyin edilir
        fetch('/api/set-refresh-token', {
            method: 'POST',
            body: JSON.stringify({ refreshToken: token })
        });
    }
}
```

## Nəticə

Saxlama metodunun seçimi sizin konkret ehtiyaclarınızdan asılıdır:

- **localStorage** - daimi istifadəçi tənzimləmələri və məlumatları üçün
- **sessionStorage** - sessiya çərçivəsində müvəqqəti məlumatlar üçün
- **cookies** - serverə lazım olan məlumatlar üçün
- **IndexedDB** - böyük həcmli strukturlaşdırılmış məlumatlar üçün
- **Cache API** - PWA-da HTTP resurslarını keşləmək üçün

Müştəri tərəfində məlumat saxlama ilə işləyərkən həmişə brauzerin məhdudiyyətlərini unutmayın, xətaları idarə edin və təhlükəsizlik prinsiplərini izləyin.