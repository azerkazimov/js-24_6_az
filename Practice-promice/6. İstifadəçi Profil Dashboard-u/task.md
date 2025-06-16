Məqsəd: Kompleks məlumat strukturları və async işləmə
Nə etməli:

İstifadəçi məlumatlarını alın
Həmin istifadəçinin yazılarını alın
Hər yazının şərhlərini sayın
İstifadəçinin albomlarını və şəkillərini sayın
Tam profil hesabatı yaradın

Kod nümunəsi:
javascriptclass UserDashboard {
    constructor(userId) {
        this.userId = userId;
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }
    
    async fetchUserData() {
        // İstifadəçi məlumatlarını alın
    }
    
    async fetchUserPosts() {
        // İstifadəçi yazılarını alın
    }
    
    async fetchPostComments(postId) {
        // Yazının şərhlərini alın
    }
    
    async fetchUserAlbums() {
        // İstifadəçi albomlarını alın
    }
    
    async fetchAlbumPhotos(albumId) {
        // Albom şəkillərini alın
    }
    
    async generateReport() {
        try {
            console.log('📊 İstifadəçi profil hesabatı hazırlanır...\n');
            
            // Paralel sorğularla əsas məlumatları alın
            const [user, posts, albums] = await Promise.all([
                this.fetchUserData(),
                this.fetchUserPosts(),
                this.fetchUserAlbums()
            ]);
            
            console.log('👤 İstifadəçi məlumatları:');
            console.log(`Ad: ${user.name}`);
            console.log(`Email: ${user.email}`);
            console.log(`Şəhər: ${user.address.city}`);
            console.log(`Website: ${user.website}\n`);
            
            // Yazıların şərhlərini sayın
            let totalComments = 0;
            for (const post of posts) {
                const comments = await this.fetchPostComments(post.id);
                totalComments += comments.length;
            }
            
            // Albomların şəkillərini sayın
            let totalPhotos = 0;
            for (const album of albums) {
                const photos = await this.fetchAlbumPhotos(album.id);
                totalPhotos += photos.length;
            }
            
            console.log('📈 Statistika:');
            console.log(`Yazılar: ${posts.length}`);
            console.log(`Şərhlər: ${totalComments}`);
            console.log(`Albomlar: ${albums.length}`);
            console.log(`Şəkillər: ${totalPhotos}`);
            console.log(`Orta şərh/yazı: ${(totalComments/posts.length).toFixed(1)}`);
            console.log(`Orta şəkil/albom: ${(totalPhotos/albums.length).toFixed(1)}`);
            
        } catch (error) {
            console.error('Hesabat hazırlanarkən xəta:', error);
        }
    }
}

// İstifadə
const dashboard = new UserDashboard(1);
dashboard.generateReport();

