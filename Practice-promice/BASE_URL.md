Tapşırıqlar üçün API Resursları
Tapşırıqlara başlamazdan əvvəl istifadə edəcəyiniz pulsuz API-lər:
1. JSONPlaceholder (API açarı tələb etmir)

Əsas URL: https://jsonplaceholder.typicode.com
Endpoint-lər:

İstifadəçilər: /users və ya /users/{id}
Yazılar: /posts və ya /posts/{id}
Şərhlər: /comments və ya /posts/{id}/comments
Albomlar: /albums və ya /users/{id}/albums
Şəkillər: /photos və ya /albums/{id}/photos



2. REST Countries (API açarı tələb etmir)

Əsas URL: https://restcountries.com/v3.1
Endpoint-lər:

Bütün ölkələr: /all
Ada görə: /name/{name}
Koda görə: /alpha/{code}
Regiona görə: /region/{region}




3. Open Weather API (Pulsuz API açarı tələb edir)

Əsas URL: https://api.openweathermap.org/data/2.5
Qeydiyyat: https://openweathermap.org/api
Endpoint-lər:

Cari hava: /weather?q={city}&appid={API_key}
5 günlük proqnoz: /forecast?q={city}&appid={API_key}



4. CoinGecko API (API açarı tələb etmir)

Əsas URL: https://api.coingecko.com/api/v3
Endpoint-lər:

Coin siyahısı: /coins/list
Coin məlumatları: /coins/{id}
Qiymət: /simple/price?ids={id}&vs_currencies=usd




// ==================================================

Ümumi Məsləhətlər və Xətaların Qarşısını Almaq
1. API Limitləri
javascript// Rate limiting üçün gecikdirmə əlavə edin
async function apiCallWithDelay(url, delay = 1000) {
    await new Promise(resolve => setTimeout(resolve, delay));
    return fetch(url);
}
2. CORS Problemləri
Əgər brauzer mühitində CORS xətası alırsınızsa:
javascript// Proxy istifadə edin və ya
// Node.js mühitində işləyin
// Və ya CORS Proxy istifadə edin
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://api.example.com/data';
fetch(proxyUrl + targetUrl)
3. API Açarının Təhlükəsizliği
javascript// API açarını environment variable-da saxlayın
const API_KEY = process.env.OPENWEATHER_API_KEY || 'YOUR_API_KEY';

// Frontend-də API açarını gizlətmək üçün backend endpoint istifadə edin
4. Network Xətalarının İşlənməsi
javascriptasync function robustFetch(url, options = {}) {
    const timeout = options.timeout || 10000;
    const controller = new AbortController();
    
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
            throw new Error('Sorğu vaxtı keçdi');
        }
        
        throw error;
    }
}
5. Məlumatların Validasiyası
javascriptfunction validateWeatherData(data) {
    const required = ['name', 'main', 'weather', 'wind'];
    
    for (const field of required) {
        if (!data[field]) {
            throw new Error(`Tələb olunan sahə yoxdur: ${field}`);
        }
    }
    
    if (typeof data.main.temp !== 'number') {
        throw new Error('Temperatur rəqəm olmalıdır');
    }
    
    return true;
}

Debugging və Test Üsulları
1. Console.log Strategiyası
javascriptasync function debugAsyncFunction() {
    console.log('🚀 Funksiya başladı');
    
    try {
        console.log('📤 API sorğusu göndərilir...');
        const response = await fetch(url);
        console.log('📥 Cavab alındı:', response.status);
        
        const data = await response.json();
        console.log('✅ Məlumat parse edildi:', data);
        
        return data;
    } catch (error) {
        console.error('❌ Xəta baş verdi:', error);
        throw error;
    } finally {
        console.log('🏁 Funksiya tamamlandı');
    }
}
2. Performance Ölçmə
javascriptasync function measurePerformance() {
    const startTime = performance.now();
    
    try {
        await yourAsyncFunction();
    } finally {
        const endTime = performance.now();
        console.log(`⏱️ İcra müddəti: ${(endTime - startTime).toFixed(2)}ms`);
    }
}
3. Mock Data ilə Test
javascript// Test üçün mock məlumatlar
const mockWeatherData = {
    name: 'Baku',
    main: { temp: 25, humidity: 60 },
    weather: [{ description: 'açıq hava' }],
    wind: { speed: 3.5 }
};

// Test funksiyası
async function testWithMockData() {
    // Real API çağırışı əvəzinə mock data istifadə edin
    return new Promise(resolve => {
        setTimeout(() => resolve(mockWeatherData), 1000);
    });
}