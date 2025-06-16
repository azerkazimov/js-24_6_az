Məqsəd: Xəta işləmə və təkrar cəhd mexanizmini öyrənmək
Nə etməli:

Qarışıq istifadəçi ID-ləri ilə sorğu göndərin (bəziləri mövcud deyil)
Uğurlu cavabları göstərin
Uğursuz olanları 3 dəfə təkrar cəhd edin
Son nəticəni göstərin

Kod nümunəsi:
javascriptasync function fetchWithRetry(url, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.log(`Cəhd ${attempt} uğursuz: ${error.message}`);
            if (attempt === maxRetries) {
                throw error;
            }
            // 1 saniyə gözləyin
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

async function fetchMultipleUsers() {
    const userIds = [1, 2, 999, 3, 888, 4]; // Bəzi ID-lər mövcud deyil
    
    for (const id of userIds) {
        try {
            const user = await fetchWithRetry(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log(`✅ İstifadəçi ${id}: ${user.name}`);
        } catch (error) {
            console.log(`❌ İstifadəçi ${id}: Tapılmadı`);
        }
    }
}

fetchMultipleUsers();