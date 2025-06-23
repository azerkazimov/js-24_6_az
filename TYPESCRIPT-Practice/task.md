# TypeScript CRUD Tapşırıqları

## Tapşırıq 1: İstifadəçi İdarəetmə Sistemi

### Məqsəd:
İstifadəçilərin əlavə edilməsi, oxunması, yenilənməsi və silinməsi üçün CRUD funksiyalarını yaratmaq.

### Tələblər:

1. **Interface yaradın:**
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}
```

2. **CRUD funksiyalarını yazın:**
- `createUser(user: Omit<User, 'id'>): User` - yeni istifadəçi yaradır
- `getUsers(): User[]` - bütün istifadəçiləri qaytarır
- `getUserById(id: number): User | undefined` - ID-yə görə istifadəçi tapır
- `updateUser(id: number, updates: Partial<User>): User | undefined` - istifadəçini yeniləyir
- `deleteUser(id: number): boolean` - istifadəçini silir

3. **Test məlumatları:**
- 3-4 istifadəçi əlavə edin
- Biri 18 yaşından kiçik olsun (isActive: false)
- Birini yeniləyin və birini silin

---

## Tapşırıq 2: Kitab Kataloqu Sistemi

### Məqsəd:
Kitabların idarə edilməsi üçün tip-təhlükəsiz CRUD sistemi yaratmaq.

### Tələblər:

1. **Enum və Interface yaradın:**
```typescript
enum BookCategory {
  Fiction = "fiction",
  NonFiction = "non-fiction", 
  Science = "science",
  History = "history"
}

interface Book {
  id: string;
  title: string;
  author: string;
  category: BookCategory;
  publishYear: number;
  price: number;
  isAvailable: boolean;
}
```

2. **CRUD funksiyalarını yazın:**
- `addBook(book: Omit<Book, 'id'>): Book` - kitab əlavə edir (ID avtomatik yaradılır)
- `getAllBooks(): Book[]` - bütün kitabları qaytarır
- `getBooksByCategory(category: BookCategory): Book[]` - kateqoriyaya görə kitabları filtrləyir
- `updateBookPrice(id: string, newPrice: number): Book | undefined` - qiymət yeniləyir
- `toggleAvailability(id: string): Book | undefined` - mövcudluq statusunu dəyişir

3. **Test scenario:**
- Hər kateqoriyadan ən azı 1 kitab əlavə edin
- Bir kitabın qiymətini dəyişin
- Mövcudluq statusunu dəyişin
- Müəyyən kateqoriyaya görə filtrləyin

### Əlavə Bonus:
- Type guard funksiyası yazın: `isValidBook(obj: any): obj is Book`
- Axtarış funksiyası: `searchBooks(query: string): Book[]` (ad və ya müəllifə görə)

---

## Qeydlər:
- Bütün funksiyalarda düzgün tip annotasiyalardan istifadə edin
- Optional chaining (`?.`) və nullish coalescing (`??`) operatorlarından istifadə edin
- Hər tapşırığın sonunda console.log ilə nəticələri göstərin