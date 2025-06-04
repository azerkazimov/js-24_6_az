

## DOM nədir?

**DOM (Document Object Model)** — HTML və XML sənədləri üçün proqramlaşdırma interfeysidir. O, sənədin strukturunu JavaScript vasitəsilə dəyişdirilə bilən obyektlər ağacı şəklində təqdim edir.
![[dom.png]]
### Əsas xüsusiyyətlər:

- DOM sənədi qovşaqlar ağacı kimi təqdim edir
- Hər HTML elementi obyektdir
- JavaScript səhifənin məzmununu, strukturunu və stillərini dəyişə bilər
- DOM JavaScript-in hissəsi deyil, veb-API-dir

---

## DOM-un strukturu

### Qovşaq növləri:

- **Element Node** (element qovşağı) - HTML teqləri
- **Text Node** (mətn qovşağı) - elementlərin daxilindəki mətn
- **Comment Node** (şərh qovşağı) - HTML şərhləri
- **Document Node** (sənəd qovşağı) - DOM ağacının kökü

### İerarxiya:

```
Document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── div
        └── p
```

---

## Elementlərin seçilməsi

### Əsas seçim metodları:

#### ID-yə görə:

```javascript
const element = document.getElementById('myId');
```

#### Sinifə görə:

```javascript
const elements = document.getElementsByClassName('myClass');
const element = document.querySelector('.myClass');
const allElements = document.querySelectorAll('.myClass');
```

#### Teqə görə:

```javascript
const elements = document.getElementsByTagName('div');
const element = document.querySelector('div');
```

#### Universal selektorlar:

```javascript
// Selektora uyğun ilk element
const element = document.querySelector('selector');

// Selektora uyğun bütün elementlər
const elements = document.querySelectorAll('selector');

// Sektor nümunələri:
document.querySelector('#id');           // ID-yə görə
document.querySelector('.class');        // sinifə görə
document.querySelector('tag');           // teqə görə
document.querySelector('[attr="value"]'); // atributa görə
document.querySelector('div > p');       // daxili elementlər
```

---

## Elementlərin xassələri və metodları

### Əsas xassələr:

#### Məzmun:

```javascript
element.innerHTML = `<p>HTML məzmunu ${content}</p>`;
element.textContent = 'Yalnız mətn';
element.innerText = 'Görünən mətn';
```

#### Atributlar:

```javascript
element.getAttribute('href');
element.setAttribute('href', 'https://example.com');
element.removeAttribute('href');
element.hasAttribute('href');

// Standart atributlara birbaşa müraciət:
element.id = 'newId';
element.className = 'newClass';
element.src = 'image.jpg';
```

#### Siniflər:

```javascript
element.classList.add('newClass');
element.classList.remove('oldClass');
element.classList.toggle('activeClass');
element.classList.contains('someClass');
element.classList.replace('oldClass', 'newClass');
```

#### Ölçülər və mövqe:

```javascript
element.offsetWidth;    // sərhədlərlə genişlik
element.offsetHeight;   // sərhədlərlə hündürlük
element.clientWidth;    // sərhədsiz genişlik
element.clientHeight;   // sərhədsiz hündürlük
element.scrollWidth;    // məzmunun tam genişliyi
element.scrollHeight;   // məzmunun tam hündürlüyü

element.offsetTop;      // yuxarıdan mövqe
element.offsetLeft;     // soldan mövqe
element.scrollTop;      // yuxarıdan sürüşmə
element.scrollLeft;     // soldan sürüşmə
```

---

## Elementlərin yaradılması və dəyişdirilməsi

### Elementlərin yaradılması:

```javascript
// Yeni elementin yaradılması
const newDiv = document.createElement('div');
const newText = document.createTextNode('Salam, dünya!');

// Elementin konfiqurasiyası
newDiv.id = 'myDiv';
newDiv.className = 'container';
newDiv.innerHTML = `<p>Salam ${name}</p>`;
```

### Elementlərin əlavə edilməsi:

```javascript
// Sonuna əlavə etmək
parent.appendChild(newElement);

// Elementin qarşısına daxil etmək
parent.insertBefore(newElement, existingElement);

// Müasir metodlar:
parent.prepend(newElement);        // əvvələ
parent.append(newElement);         // sona
element.before(newElement);        // elementin qarşısına
element.after(newElement);         // elementin arxasına
```

### Elementlərin silinməsi:

```javascript
	// Köhnə üsul
parent.removeChild(element);

// Müasir üsul
element.remove();
```

### Elementlərin əvəz edilməsi:

```javascript
// Köhnə üsul
parent.replaceChild(newElement, oldElement);

// Müasir üsul
oldElement.replaceWith(newElement);
```

### Klonlama:

```javascript
const clone = element.cloneNode(false); // səth kopyalama
const deepClone = element.cloneNode(true); // dərin kopyalama
```

---

## Hadisələrin işlənməsi

### İşləyicilərin əlavə edilməsi:

```javascript
// addEventListener metodu (tövsiyə edilir)
element.addEventListener('click', function(event) {
    console.log('Element klikləndi!');
});

// Ox funksiyası
element.addEventListener('click', (event) => {
    console.log('Klik!', event);
});

// Elementin xassəsi
element.onclick = function(event) {
    console.log('Xassə vasitəsilə klik');
};
```

### İşləyicilərin silinməsi:

```javascript
function handleClick(event) {
    console.log('Klik!');
}

element.addEventListener('click', handleClick);
element.removeEventListener('click', handleClick);
```

### Hadisə obyekti (Event):

```javascript
element.addEventListener('click', function(event) {
    event.preventDefault();    // standart əməliyyatı ləğv etmək
    event.stopPropagation();   // qabarıqlaşmanı dayandırmaq
    
    console.log(event.target);      // hadisənin baş verdiyi element
    console.log(event.currentTarget); // işləyicinin bağlandığı element
    console.log(event.type);        // hadisə növü
    console.log(event.clientX);     // kursorun X koordinatı
    console.log(event.clientY);     // kursorun Y koordinatı
});
```

### Əsas hadisə növləri:

#### Siçan hadisələri:

```javascript
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mousedown', handler);
element.addEventListener('mouseup', handler);
element.addEventListener('mouseover', handler);
element.addEventListener('mouseout', handler);
element.addEventListener('mouseenter', handler);
element.addEventListener('mouseleave', handler);
element.addEventListener('mousemove', handler);
```

#### Klaviatura hadisələri:

```javascript
element.addEventListener('keydown', handler);
element.addEventListener('keyup', handler);
element.addEventListener('keypress', handler); // köhnəlib
```

#### Forma hadisələri:

```javascript
form.addEventListener('submit', handler);
input.addEventListener('input', handler);
input.addEventListener('change', handler);
input.addEventListener('focus', handler);
input.addEventListener('blur', handler);
```

#### Yükləmə hadisələri:

```javascript
window.addEventListener('load', handler);
window.addEventListener('DOMContentLoaded', handler);
window.addEventListener('beforeunload', handler);
```

---

## DOM-da naviqasiya

### Valideyn elementlər:

```javascript
element.parentNode;        // valideyn qovşağı
element.parentElement;     // valideyn elementi
element.closest('selector'); // selektora görə ən yaxın valideyn
```

### Övlad elementlər:

```javascript
element.childNodes;        // bütün övlad qovşaqları (mətn daxil)
element.children;          // yalnız övlad elementlər
element.firstChild;        // ilk övlad qovşağı
element.firstElementChild; // ilk övlad elementi
element.lastChild;         // son övlad qovşağı
element.lastElementChild;  // son övlad elementi
```

### Qonşu elementlər:

```javascript
element.nextSibling;           // növbəti qovşaq
element.nextElementSibling;    // növbəti element
element.previousSibling;       // əvvəlki qovşaq
element.previousElementSibling; // əvvəlki element
```

---

## JavaScript vasitəsilə stilləşdirmə

### Birbaşa stil dəyişikliyi:

```javascript
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.fontSize = '16px';
element.style.display = 'none';

// Çoxlu stillər
Object.assign(element.style, {
    color: 'red',
    backgroundColor: 'blue',
    fontSize: '16px'
});
```

### Hesablanmış stillərin əldə edilməsi:

```javascript
const styles = getComputedStyle(element);
console.log(styles.color);
console.log(styles.fontSize);
```

### CSS sinifləri ilə işləmək:

```javascript
element.className = 'class1 class2 class3';
element.classList.add('newClass');
element.classList.remove('oldClass');
element.classList.toggle('activeClass');
```

---

## Formalarla işləmək

### Forma elementlərinə giriş:

```javascript
const form = document.forms['myForm'];
const input = form.elements['inputName'];

// Və ya selektorlar vasitəsilə
const form = document.querySelector('#myForm');
const input = document.querySelector('#myInput');
```

### Dəyərlərin alınması və təyin edilməsi:

```javascript
// Mətn sahələri
input.value = 'yeni dəyər';
console.log(input.value);

// Checkbox və radio düymələri
checkbox.checked = true;
console.log(checkbox.checked);

// Açılan siyahılar
select.value = 'option2';
console.log(select.selectedIndex);
console.log(select.options[select.selectedIndex].text);
```

### Formaların yoxlanılması:

```javascript
form.addEventListener('submit', function(event) {
    if (!input.value.trim()) {
        event.preventDefault();
        alert('Sahə boş ola bilməz!');
    }
});

// HTML5 yoxlanması
console.log(input.validity.valid);
console.log(input.validationMessage);
```

---

## Müasir DOM metodları

### Intersection Observer:

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Element görünür!');
        }
    });
});

observer.observe(element);
```

### Mutation Observer:

```javascript
const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        console.log('DOM dəyişdi:', mutation);
    });
});

observer.observe(element, {
    childList: true,
    subtree: true,
    attributes: true
});
```

### ResizeObserver:

```javascript
const observer = new ResizeObserver((entries) => {
    entries.forEach(entry => {
        console.log('Ölçü dəyişdi:', entry.contentRect);
    });
});

observer.observe(element);
```

---

## Performans

### DOM əməliyyatlarının optimallaşdırılması:

#### Reflow və repaint-in minimuma endirilməsi:

```javascript
// Pis - çoxlu dəyişikliklər
element.style.left = '10px';
element.style.top = '10px';
element.style.width = '100px';

// Yaxşı - bir dəyişiklik
element.style.cssText = 'left: 10px; top: 10px; width: 100px;';

// Və ya sinif vasitəsilə
element.className = 'positioned';
```

#### Çoxlu daxiletmələr üçün DocumentFragment:

```javascript
const fragment = document.createDocumentFragment();

for (let i = 0; i < 10000; i++) {
    const div = document.createElement('div');
    div.textContent = `Element ${i}`;
    fragment.appendChild(div);
}

container.appendChild(fragment); // 1000 əvəzinə bir əməliyyat
```

#### Elementlərin keşlənməsi:

```javascript
// Pis
for (let i = 0; i < 1000; i++) {
    document.getElementById('myElement').innerHTML += 'mətn';
}

// Yaxşı
const element = document.getElementById('myElement');
let html = '';
for (let i = 0; i < 1000; i++) {
    html += 'mətn';
}
element.innerHTML = html;
```

---

## Praktik nümunələr

### Nümunə 1: Dinamik tapşırıqlar siyahısı

```javascript
class TodoList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.tasks = [];
        this.init();
    }
    
    init() {
        this.createForm();
        this.createTaskList();
    }
    
    createForm() {
        const form = document.createElement('form');
        const input = document.createElement('input');
        const button = document.createElement('button');
        
        input.type = 'text';
        input.placeholder = 'Tapşırığı daxil edin...';
        button.textContent = 'Əlavə et';
        
        form.appendChild(input);
        form.appendChild(button);
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTask(input.value);
            input.value = '';
        });
        
        this.container.appendChild(form);
    }
    
    createTaskList() {
        this.taskList = document.createElement('ul');
        this.container.appendChild(this.taskList);
    }
    
    addTask(text) {
        if (!text.trim()) return;
        
        const task = {
            id: Date.now(),
            text: text,
            completed: false
        };
        
        this.tasks.push(task);
        this.renderTask(task);
    }
    
    renderTask(task) {
        const li = document.createElement('li');
        li.dataset.id = task.id;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        
        const span = document.createElement('span');
        span.textContent = task.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Sil';
        
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            li.classList.toggle('completed', task.completed);
        });
        
        deleteBtn.addEventListener('click', () => {
            this.deleteTask(task.id);
        });
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        
        this.taskList.appendChild(li);
    }
    
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        const li = this.taskList.querySelector(`[data-id="${id}"]`);
        li.remove();
    }
}

// İstifadə
const todoList = new TodoList('todo-container');
```

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

---

## Faydalı məsləhətlər və ən yaxşı təcrübələr

### 1. Həmişə elementlərin mövcudluğunu yoxlayın:

```javascript
const element = document.getElementById('myElement');
if (element) {
    // elementlə təhlükəsiz əməliyyatlar
    element.innerHTML = 'yeni məzmun';
}
```

### 2. Hadisə delegasiyasından istifadə edin:

```javascript
// Hər elementə hadisə bağlamaq əvəzinə
document.querySelector('.container').addEventListener('click', function(e) {
    if (e.target.classList.contains('button')) {
        // düyməyə klik işlənməsi
    }
});
```

### 3. Tez-tez DOM sorğularından çəkinin:

```javascript
// Pis
for (let i = 0; i < items.length; i++) {
    document.querySelector('.container').appendChild(items[i]);
}

// Yaxşı
const container = document.querySelector('.container');
for (let i = 0; i < items.length; i++) {
    container.appendChild(items[i]);
}
```

### 4. Müasir metodlardan istifadə edin:

```javascript
// Köhnə üsul
const elements = document.querySelectorAll('.item');
for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('active');
}

// Müasir üsul
document.querySelectorAll('.item').forEach(el => {
    el.classList.add('active');
});
```

---