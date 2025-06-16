Məqsəd: Sorğuların ləğvi və resurs idarəetməsi
Nə etməli:

Müxtəlif ölkələrin məlumatlarını paralel alın
İstifadəçiyə 5 saniyə sonra sorğuları ləğv etmək imkanı verin
Ləğv edilən və tamamlanan sorğuları fərqləndirin
Nəticələri düzgün formatlayın

Kod nümunəsi:
javascriptclass RequestManager {
    constructor() {
        this.activeRequests = new Map();
    }
    
    async fetchWithAbort(url, requestId, timeout = 10000) {
        // AbortController yaradın
        const controller = new AbortController();
        this.activeRequests.set(requestId, controller);
        
        try {
            // Timeout əlavə edin
            const timeoutId = setTimeout(() => {
                controller.abort();
            }, timeout);
            
            const response = await fetch(url, {
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            
            const data = await response.json();
            this.activeRequests.delete(requestId);
            
            return { success: true, data, requestId };
        } catch (error) {
            this.activeRequests.delete(requestId);
            
            if (error.name === 'AbortError') {
                return { success: false, error: 'Sorğu ləğv edildi', requestId };
            } else {
                return { success: false, error: error.message, requestId };
            }
        }
    }
    
    cancelRequest(requestId) {
        const controller = this.activeRequests.get(requestId);
        if (controller) {
            controller.abort();
            console.log(`⏹️ Sorğu ləğv edildi: ${requestId}`);
        }
    }
    
    cancelAllRequests() {
        for (const [requestId, controller] of this.activeRequests) {
            controller.abort();
        }
        this.activeRequests.clear();
        console.log('⏹️ Bütün sorğular ləğv edildi');
    }
    
    async fetchMultipleCountries() {
        const countries = ['azerbaijan', 'turkey', 'iran', 'russia', 'georgia'];
        
        console.log('🌍 Ölkə məlumatları yüklənir...');
        console.log('💡 5 saniyə sonra "q" düyməsini basaraq ləğv edə bilərsiniz\n');
        
        // Ləğv etmək üçün timer
        setTimeout(() => {
            console.log('\n⚠️ 5 saniyə keçdi, sorğuları ləğv etmək istəyirsinizsə "q" basın');
        }, 5000);
        
        // Bütün sorğuları göndərin
        const promises = countries.map((country, index) => 
            this.fetchWithAbort(
                `https://restcountries.com/v3.1/name/${country}`,
                `country-${index}`,
                8000
            )
        );
        
        try {
            const results = await Promise.allSettled(promises);
            
            console.log('\n📊 Nəticələr:');
            console.log('=============');
            
            results.forEach((result, index) => {
                const countryName = countries[index];
                
                if (result.status === 'fulfilled') {
                    const response = result.value;
                    if (response.success) {
                        const country = response.data[0];
                        console.log(`✅ ${countryName}: ${country.name.common} - ${country.capital?.[0] || 'N/A'}`);
                    } else {
                        console.log(`❌ ${countryName}: ${response.error}`);
                    }
                } else {
                    console.log(`❌ ${countryName}: ${result.reason}`);
                }
            });
            
        } catch (error) {
            console.error('Ümumi xəta:', error);
        }
    }
}

// İstifadə
const requestManager = new RequestManager();

// Klaviaturadan input dinləmək (Node.js mühitində)
if (typeof process !== 'undefined') {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', (key) => {
        if (key.toString() === 'q') {
            requestManager.cancelAllRequests();
        }
    });
}

requestManager.fetchMultipleCountries();