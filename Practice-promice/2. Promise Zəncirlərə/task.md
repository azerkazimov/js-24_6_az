Məqsəd: Promise chaining-i öyrənmək
Nə etməli:

İlk öncə istifadəçi ID=1-i alın
Sonra həmin istifadəçinin yazılarını alın
Hər yazının başlığını konsola çıxarın

Kod nümunəsi:
javascriptfunction getUserPosts() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => {
            console.log('İstifadəçi:', user.name);
            // Buraya yazıları almaq üçün növbəti fetch əlavə edin
        })
        .then(posts => {
            // Yazıların başlıqlarını çıxarın
        })
        .catch(error => {
            console.error('Xəta:', error);
        });
}

getUserPosts();
Gözlənilən nəticə:
İstifadəçi: Leanne Graham
Yazı başlıqları:
- sunt aut facere repellat provident occaecati excepturi optio reprehenderit
- qui est esse
- ea molestias quasi exercitationem repellat qui ipsa sit aut
...