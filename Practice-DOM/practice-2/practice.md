### Nümunə 2: Modal pəncərəsi

```javascript
class Modal {
    constructor() {
        this.modal = null;
        this.isOpen = false;
    }
    
    create() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', () => this.close());
        
        const content = document.createElement('div');
        content.className = 'modal-content';
        
        modal.appendChild(closeBtn);
        modal.appendChild(content);
        overlay.appendChild(modal);
        
        // Overlay-ə klik ilə bağlanma
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.close();
            }
        });
        
        // Escape ilə bağlanma
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
        
        this.modal = overlay;
        this.content = content;
        
        return this;
    }
    
    setContent(html) {
        if (this.content) {
            this.content.innerHTML = html;
        }
        return this;
    }
    
    open() {
        if (!this.modal) {
            this.create();
        }
        
        document.body.appendChild(this.modal);
        document.body.style.overflow = 'hidden';
        this.isOpen = true;
        
        // Görünmə animasiyası
        setTimeout(() => {
            this.modal.classList.add('active');
        }, 10);
        
        return this;
    }
    
    close() {
        if (this.modal && this.isOpen) {
            this.modal.classList.remove('active');
            
            setTimeout(() => {
                if (this.modal && this.modal.parentNode) {
                    this.modal.parentNode.removeChild(this.modal);
                }
                document.body.style.overflow = '';
                this.isOpen = false;
            }, 300);
        }
        
        return this;
    }
}

// İstifadə
const modal = new Modal();
modal.setContent('<h2>Başlıq</h2><p>Modal pəncərəsinin məzmunu</p>').open();
```

