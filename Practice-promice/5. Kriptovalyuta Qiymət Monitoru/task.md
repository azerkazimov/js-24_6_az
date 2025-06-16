Məqsəd: Real vaxt məlumatları və interval ilə işləmək
Nə etməli:
Bitcoin, Ethereum və Cardano qiymətlərini alın
Hər 10 saniyədə qiymətləri yeniləyin
Qiymət dəyişikliklərini izləyin və göstərin
1 dəqiqədən sonra monitorinqi dayandırın

Kod nümunəsi:
javascriptclass CryptoMonitor {
    constructor() {
        this.previousPrices = {};
        this.intervalId = null;
    }
    
    async getCryptoPrices() {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd');
            return await response.json();
        } catch (error) {
            console.error('Qiymət alınarkən xəta:', error);
            return null;
        }
    }
    
    displayPrices(prices) {
        console.log('\n🔄 Kriptovalyuta Qiymətləri:');
        console.log('========================');
        
        for (const [coin, data] of Object.entries(prices)) {
            const currentPrice = data.usd;
            const previousPrice = this.previousPrices[coin];
            
            let changeIndicator = '';
            if (previousPrice) {
                if (currentPrice > previousPrice) {
                    changeIndicator = '📈 ↗️';
                } else if (currentPrice < previousPrice) {
                    changeIndicator = '📉 ↘️';
                } else {
                    changeIndicator = '➡️ =';
                }
            }
            
            console.log(`${coin.toUpperCase()}: $${currentPrice} ${changeIndicator}`);
            this.previousPrices[coin] = currentPrice;
        }
    }
    
    async start() {
        console.log('💰 Kriptovalyuta monitoru başladı...');
        
        // İlk məlumatları alın
        const initialPrices = await this.getCryptoPrices();
        if (initialPrices) {
            this.displayPrices(initialPrices);
        }
        
        // Hər 10 saniyədə yeniləyin
        this.intervalId = setInterval(async () => {
            const prices = await this.getCryptoPrices();
            if (prices) {
                this.displayPrices(prices);
            }
        }, 10000);
        
        // 1 dəqiqədən sonra dayandırın
        setTimeout(() => {
            this.stop();
        }, 60000);
    }
    
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            console.log('\n⏹️ Monitoring dayandırıldı');
        }
    }
}

// İstifadə
const monitor = new CryptoMonitor();
monitor.start();