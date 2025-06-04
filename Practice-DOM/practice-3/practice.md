### Nümunə 3: Şəkil slayderi

```javascript
class ImageSlider {
    constructor(containerId, images) {
        this.container = document.getElementById(containerId);
        this.images = images;
        this.currentIndex = 0;
        this.init();
    }
    
    init() {
        this.createSlider();
        this.createControls();
        this.createIndicators();
        this.showSlide(0);
    }

    
    
    createSlider() {
        this.slider = document.createElement('div');
        this.slider.className = 'slider';
        
        this.track = document.createElement('div');
        this.track.className = 'slider-track';
        
        this.images.forEach(src => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Slayd şəkli';
            
            slide.appendChild(img);
            this.track.appendChild(slide);
        });
        
        this.slider.appendChild(this.track);
        this.container.appendChild(this.slider);
    }
    
    createControls() {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'slider-btn prev';
        prevBtn.innerHTML = '&#8249;';
        prevBtn.addEventListener('click', () => this.prevSlide());
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'slider-btn next';
        nextBtn.innerHTML = '&#8250;';
        nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.slider.appendChild(prevBtn);
        this.slider.appendChild(nextBtn);
    }
    
    createIndicators() {
        const indicators = document.createElement('div');
        indicators.className = 'slider-indicators';
        
        this.images.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = 'indicator';
            indicator.addEventListener('click', () => this.showSlide(index));
            indicators.appendChild(indicator);
        });
        
        this.indicators = indicators.querySelectorAll('.indicator');
        this.container.appendChild(indicators);
    }
    
    showSlide(index) {
        this.currentIndex = index;
        
        const translateX = -index * 100;
        this.track.style.transform = `translateX(${translateX}%)`;
        
        // İndikatorların yenilənməsi
        this.indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }
    
    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.images.length;
        this.showSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.showSlide(prevIndex);
    }
    
    // Avtomatik keçid
    startAutoplay(interval = 3000) {
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, interval);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}

// İstifadə
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];

const slider = new ImageSlider('slider-container', images);
slider.startAutoplay();
```
