Məqsəd: Promise.all() və async/await istifadəsini öyrənmək
Nə etməli:

Eyni zamanda 3 fərqli ölkənin məlumatlarını alın: Azerbaijan, Turkey, Georgia
Hər ölkənin adını, paytaxtını və əhalisini göstərin
Ən çox əhalisi olan ölkəni tapın

Kod nümunəsi:
javascriptasync function compareCountries() {
    try {
        const countries = ['azerbaijan', 'turkey', 'georgia'];
        
        // Promise.all() istifadə edərək paralel sorğular göndərin
        const results = await Promise.all([
            // Buraya fetch sorğularını əlavə edin
        ]);
        
        // Nəticələri işləyin və ən böyük əhalini tapın
        
    } catch (error) {
        console.error('Xəta:', error);
    }
}

compareCountries();
Gözlənilən nəticə:
Ölkələr müqayisəsi:
Azerbaijan - Paytaxt: Baku, Əhali: 10,139,177
Turkey - Paytaxt: Ankara, Əhali: 84,339,067
Georgia - Paytaxt: Tbilisi, Əhali: 3,714,000

Ən böyük əhali: Turkey (84,339,067)