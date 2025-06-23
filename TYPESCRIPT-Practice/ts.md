
## 1. TypeScript-a Giriş

### TypeScript nədir?

**TypeScript** — Microsoft tərəfindən 2012-ci ildə yaradılmış, güclü tipizasiya edilmiş proqramlaşdırma dilidir və JavaScript-in üst çoxluğudur. TypeScript adi JavaScript-ə tərcümə olunur və JavaScript-in işlədiyi hər yerdə işləyə bilər.

### TypeScript-in əsas üstünlükləri:

**Statik tipizasiya** — xətaları işləmə zamanı deyil, tərcümə mərhələsində aşkar etməyə imkan verir **Daha yaxşı IDE dəstəyi** — avtomatik tamamlama, refaktorinq, kod naviqasiyası **Müasir JavaScript imkanları** — ən son ES standartlarının dəstəyi **JavaScript ilə uyğunluq** — istənilən etibarlı JS kodu etibarlı TS kodudur **Böyük layihələr** — iri tətbiqlərin inkişafını və saxlanmasını asanlaşdırır

### TypeScript-in qurulması və konfiqurasiyası:

```bash
# Qlobal qurulum
npm install -g typescript

# Layihəyə lokal qurulum
npm install --save-dev typescript

# Konfiqurasiya faylının yaradılması
tsc --init

# TypeScript faylının tərcüməsi
tsc filename.ts

# Dəyişikliklərdə avtomatik tərcümə
tsc --watch
```

### tsconfig.json-un əsas strukturu:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020", "DOM"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## 2. Primitiv məlumat tipləri

### 2.1 Boolean (məntiq tipi)

`true` və ya `false` məntiq dəyərlərini təmsil edir.

```typescript
let isActive: boolean = true;
let isCompleted: boolean = false;

// Avtomatik tip təyini
let autoBoolean = true; // TypeScript avtomatik olaraq boolean tipini təyin edəcək

// Funksiyalarda istifadə
function checkStatus(status: boolean): string {
  return status ? "Aktiv" : "Qeyri-aktiv";
}

console.log(checkStatus(isActive)); // "Aktiv"

// Boolean ifadənin nəticəsi kimi
let isAdult: boolean = age >= 18;
let hasPermission: boolean = user.role === 'admin';
```

### 2.2 Number (rəqəm tipi)

TypeScript-də bütün rəqəmlər üzən nöqtəli rəqəmlər və ya BigInteger-dir.

```typescript
// Onluq rəqəmlər
let decimal: number = 42;
let price: number = 19.99;

// Onaltılıq rəqəmlər
let hex: number = 0xf00d;

// İkilik rəqəmlər
let binary: number = 0b1010;

// Səkkizlik rəqəmlər
let octal: number = 0o744;

// Böyük rəqəmlər (ES2020)
let bigNumber: bigint = 100n;

// Xüsusi rəqəm dəyərləri
let notANumber: number = NaN;
let infinity: number = Infinity;
let negativeInfinity: number = -Infinity;

// Riyazi əməliyyatlar
function calculateArea(radius: number): number {
  return Math.PI * radius * radius;
}

// Rəqəm tiplərinin yoxlanılması
function isValidNumber(value: number): boolean {
  return !isNaN(value) && isFinite(value);
}
```

### 2.3 String (mətn tipi)

Mətn məlumatlarını təmsil edir.

```typescript
// Adi mətnlər
let firstName: string = "İvan";
let lastName: string = 'Petrov';

// Şablon mətnləri (template literals)
let fullName: string = `${firstName} ${lastName}`;
let greeting: string = `Salam, ${fullName}!`;

// Çoxsətirli mətnlər
let multilineString: string = `
  Bu TypeScript-də
  çoxsətirli mətndir
`;

// Mətn metodları
let message: string = "Salam Dünya";
let upperMessage: string = message.toUpperCase();
let messageLength: number = message.length;

// Mətnlərlə işləyən funksiyalar
function formatMessage(name: string, age: number): string {
  return `İstifadəçi ${name}, yaş: ${age} il`;
}

// Mətnlərin yoxlanılması
function isEmptyString(str: string): boolean {
  return str.trim().length === 0;
}
```

## 3. Xüsusi tiplər

### 3.1 Any (istənilən tip)

Dəyişən üçün tip yoxlamasını söndürür.

```typescript
// Any-nin əsas istifadəsi
let dynamicValue: any = 42;
dynamicValue = "mətn";
dynamicValue = true;
dynamicValue = { name: "Obyekt" };

// Any massivlərdə
let mixedArray: any[] = [1, "mətn", true, { key: "value" }];

// Any ilə funksiyalar
function processData(data: any): any {
  return data;
}

// Any ilə problemlər
let userInput: any = "123";
let result: number = userInput * 2; // İşləmə zamanı xəta, amma TypeScript xəbərdarlıq etməyəcək

// Any-nin nə vaxt istifadə ediləcəyi (ehtiyatla):
// 1. JavaScript-dən miqrasiya
// 2. Dinamik məzmunla işləmə
// 3. Tipsiz kitabxanalar

// Any-dən yaxşısı unknown istifadə etmək
let betterApproach: unknown = getData();
if (typeof betterApproach === 'string') {
  console.log(betterApproach.toUpperCase());
}
```

### 3.2 Unknown (naməlum tip)

`any`-ə daha təhlükəsiz alternativ.

```typescript
// Unknown-un əsas istifadəsi
let userInput: unknown;

userInput = 5;
userInput = "salam";
userInput = true;

// İstifadədən əvvəl tip yoxlaması lazımdır
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // Təhlükəsiz
}

if (typeof userInput === "number") {
  console.log(userInput * 2); // Təhlükəsiz
}

// Unknown ilə funksiyalar
function processUnknownData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  if (typeof data === "number") {
    return data.toString();
  }
  if (typeof data === "boolean") {
    return data ? "bəli" : "xeyr";
  }
  return "naməlum tip";
}

// Unknown ilə type guard-lar
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function handleUnknown(value: unknown) {
  if (isString(value)) {
    // TypeScript bilir ki, value string-dir
    console.log(value.charAt(0));
  }
}
```

### 3.3 Void (boş tip)

Dəyərin olmamasını göstərir, adətən funksiyalar üçün istifadə olunur.

```typescript
// Qaytarılan dəyəri olmayan funksiyalar
function logMessage(message: string): void {
  console.log(message);
  
}

function showAlert(): void {
  alert("Bildiriş!");
}

// Void tipli dəyişənlər (nadir istifadə olunur)
let voidValue: void = undefined;
// let anotherVoid: void = null; // Yalnız --strictNullChecks false olduqda

// Void ilə yüksək səviyyəli funksiyalar
function executeCallback(callback: () => void): void {
  callback();
}

executeCallback(() => {
  console.log("Callback icra edildi");
});

// Ox funksiyalarında void
const onClick: () => void = () => {
  console.log("Düymə basıldı");
};

// Sinif metodlarında void
class Logger {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
  
  error(message: string): void {
    console.error(`[ERROR]: ${message}`);
  }
}
```

### 3.4 Never (heç vaxt)

Heç vaxt baş verməyən dəyərlərin tipini təmsil edir.

```typescript
// Heç vaxt bitməyən funksiyalar
function infiniteLoop(): never {
  while (true) {
    console.log("Sonsuz dövrə");
  }
}

function throwError(message: string): never {
  throw new Error(message);
}

// Switch exhaustiveness checking-də never
type Shape = 'circle' | 'square' | 'triangle';

function getArea(shape: Shape): number {
  switch (shape) {
    case 'circle':
      return Math.PI * 10 * 10;
    case 'square':
      return 10 * 10;
    case 'triangle':
      return 0.5 * 10 * 10;
    default:
      // Bu kod heç vaxt işləməməlidir
      const exhaustiveCheck: never = shape;
      return exhaustiveCheck;
  }
}

// Şərti tiplərdə never
type NonNullable<T> = T extends null | undefined ? never : T;

// Şərti məntiqli never funksiyası
function processValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value.toString();
  }
  // TypeScript anlayır ki, bu kod əlçatmazdır
  const impossible: never = value;
  return impossible;
}
```

### 3.5 Null və Undefined

Dəyərin olmamasını təmsil edir.

```typescript
// Sərt rejim (--strictNullChecks)
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Null və undefined ilə union tiplər
let optionalString: string | null = null;
let maybeNumber: number | undefined = undefined;

// Opsional xüsusiyyətlər
interface User {
  name: string;
  email?: string; // string | undefined ilə bərabərdir
  phone: string | null;
}

const user: User = {
  name: "İvan",
  phone: null
  // email opsionaldır
};

// Null/undefined yoxlaması
function processName(name: string | null | undefined): string {
  if (name === null) {
    return "Ad göstərilməyib (null)";
  }
  if (name === undefined) {
    return "Ad göstərilməyib (undefined)";
  }
  return name.toUpperCase();
}

// Optional chaining operatoru (?.)
const userEmail = user.email?.toLowerCase();

// Nullish coalescing operatoru (??)
const displayName = user.name ?? "Qonaq";

// Non-null assertion operatoru (!)
function getName(): string | undefined {
  return "İvan";
}

const definitelyHasName: string = getName()!; // TS-ə deyirik ki, dəyər əməlində null/undefined deyil
```

## 4. Mürəkkəb tiplər

### 4.1 Arrays (massivlər)

Eyni tipli elementlərin sıralı kolleksiyalarını təmsil edir.

```typescript
// Massivlərin elan edilməsi yolları
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["a", "b", "c"];

// Boş massivlər
let emptyNumbers: number[] = [];
let emptyStrings: Array<string> = [];

// Çoxölçülü massivlər
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Müxtəlif tipli massivlər (Union)
let mixedArray: (string | number)[] = [1, "salam", 2, "dünya"];

// Obyektlərlə massivlər
interface Person {
  name: string;
  age: number;
}

let people: Person[] = [
  { name: "İvan", age: 30 },
  { name: "Mariya", age: 25 }
];

// Massiv metodları
let fruits: string[] = ["alma", "banan", "albalı"];

// Element əlavə etmə
fruits.push("portağal");
fruits.unshift("armud");

// Element silmə
let lastFruit: string | undefined = fruits.pop();
let firstFruit: string | undefined = fruits.shift();

// Axtarış və filtrasiya
let longFruits: string[] = fruits.filter(fruit => fruit.length > 5);
let appleIndex: number = fruits.findIndex(fruit => fruit === "alma");

// Massivlərin çevrilməsi
let upperCaseFruits: string[] = fruits.map(fruit => fruit.toUpperCase());
let totalLength: number = fruits.reduce((sum, fruit) => sum + fruit.length, 0);

// Readonly massivlər
let readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); // Xəta: push readonly massivdə mövcud deyil

// Sabit uzunluqlu tuple kimi massivlər
let fixedArray: [string, number, boolean] = ["test", 42, true];
```

### 4.2 Tuples (kortejlər)

Məlum tipli elementləri olan sabit uzunluqlu massivlər.

```typescript
// Əsas tuple-lar
let person: [string, number] = ["İvan", 30];
let coordinates: [number, number] = [10.5, 20.3];

// Elementlərə müraciət
let name: string = person[0];
let age: number = person[1];

// Tuple-ların destrukturizasiyası
let [personName, personAge] = person;
let [x, y] = coordinates;

// Opsional elementli tuple-lar
let optionalTuple: [string, number?] = ["salam"];
optionalTuple = ["salam", 42];

const number: nubmer[] = [1,2,3,4]

// Tuple-larda rest elementlər
let restTuple: [string, ...number[]] = ["birinci", 1, 2, 3, 4];

// Adlandırılmış tuple-lar (TypeScript 4.0+)
let namedTuple: [name: string, age: number, isActive: boolean] = ["İvan", 30, true];

// Readonly tuple-lar
let readonlyTuple: readonly [string, number] = ["dəyişməz", 42];
// readonlyTuple[0] = "yeni"; // Xəta

// Tuple qaytaran funksiyalar
function getNameAndAge(): [string, number] {
  return ["İvan", 30];
}

function useState<T>(initial: T): [T, (value: T) => void] {
  let state = initial;
  return [
    state,
    (newValue: T) => { state = newValue; }
  ];
}

// Tuple-ları parametr kimi istifadə
function formatCoordinates([x, y]: [number, number]): string {
  return `(${x}, ${y})`;
}

// Obyekt açarlarının tipi kimi tuple-lar
type RGB = [number, number, number];
type RGBA = [number, number, number, number];

const colors: { [key: string]: RGB | RGBA } = {
  red: [255, 0, 0],
  blue: [0, 0, 255],
  transparentGreen: [0, 255, 0, 0.5]
};
```

### 4.3 Objects (obyektlər)

Mürəkkəb məlumat strukturlarını təmsil edir.

```typescript
// Əsas obyektlər
let user: { name: string; age: number } = {
  name: "İvan",
  age: 30
};

// Opsional xüsusiyyətli obyektlər
let product: { name: string; price: number; description?: string } = {
  name: "Noutbuk",
  price: 50000
};

// Readonly xüsusiyyətli obyektlər
let config: { readonly apiUrl: string; timeout: number } = {
  apiUrl: "https://api.example.com",
  timeout: 5000
};

// config.apiUrl = "yeni URL"; // Xəta: yalnız oxunur xüsusiyyət

// İndeks imzaları
let dictionary: { [key: string]: string } = {
  hello: "salam",
  goodbye: "əlvida"
};

let numberMap: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3
};

// İç-içə obyektlər
let employee: {
  personal: {
    name: string;
    age: number;
  };
  work: {
    position: string;
    salary: number;
  };
} = {
  personal: {
    name: "Mariya",
    age: 28
  },
  work: {
    position: "Proqramçı",
    salary: 8000
  }
};

// Obyektlərdə metodlar
let calculator: {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
} = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// Obyektləri funksiya parametrləri kimi
function processUser(user: { name: string; email?: string }): void {
  console.log(`İstifadəçi emal edilir: ${user.name}`);
  if (user.email) {
    console.log(`Email: ${user.email}`);
  }
}

// Obyektlərin destrukturizasiyası
function greetUser({ name, age }: { name: string; age: number }): string {
  return `Salam, ${name}! Sənin ${age} yaşın var.`;
}

// Obyektlərə spread operatoru
let baseUser = { name: "İvan", age: 30 };
let extendedUser = { ...baseUser, email: "ivan@example.com", isActive: true };
```

## 5. Sadalamalar (Enums)

Adlandırılmış sabitlərin təyin edilməsinə imkan verir.

### 5.1 Rəqəmli Enum-lar

```typescript
// Əsas rəqəmli enum
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let userDirection: Direction = Direction.Up;

// İnisializasiyalı enum
enum Status {
  Pending = 1,
  Approved = 2,
  Rejected = 3
}

// İnisializasiyadan sonra avtoinkrementasiya
enum ResponseCode {
  Success = 200,
  NotFound, // 201
  ServerError // 202
}

// Hesablanan dəyərlər
enum FileAccess {
  None = 0,
  Read = 1 << 1,    // 2
  Write = 1 << 2,   // 4
  ReadWrite = Read | Write // 6
}

// Enum-ların istifadəsi
function move(direction: Direction): void {
  switch (direction) {
    case Direction.Up:
      console.log("Yuxarı hərəkət");
      break;
    case Direction.Down:
      console.log("Aşağı hərəkət");
      break;
    case Direction.Left:
      console.log("Sola hərəkət");
      break;
    case Direction.Right:
      console.log("Sağa hərəkət");
      break;
  }
}

// Tərs uyğunlaşdırma (reverse mapping)
console.log(Direction[0]); // "Up"
console.log(Direction["Up"]); // 0
```

### 5.2 Mətn Enum-ları

```typescript
// Mətn enum-u
enum Theme {
  Light = "light",
  Dark = "dark",
  Auto = "auto"
}

enum LogLevel {
  Error = "ERROR",
  Warning = "WARN",
  Info = "INFO",
  Debug = "DEBUG"
}

// Mətn enum-larının istifadəsi
function setTheme(theme: Theme): void {
  document.body.className = theme;
}

function log(level: LogLevel, message: string): void {
  console.log(`[${level}] ${message}`);
}

log(LogLevel.Error, "Xəta baş verdi");
setTheme(Theme.Dark);

// Qarışıq enum-lar (tövsiyə edilmir)
enum Mixed {
  No = 0,
  Yes = "YES"
}
```

### 5.3 Const Enum-lar

Optimallaşdırma üçün tərcümə zamanı tamamilə silinir.

```typescript
// Const enum
const enum Colors {
  Red = "red",
  Green = "green",
  Blue = "blue"
}

// İstifadə
let favoriteColor = Colors.Red; // Belə tərcümə olunur: let favoriteColor = "red";

// Adi enum vs const enum
enum RegularEnum {
  A = 1
}

const enum ConstEnum {
  A = 1
}

// RegularEnum.A işləmə zamanı obyekt yaradır
// ConstEnum.A tərcümə zamanı 1 ilə əvəz olunur
```

## 6. İnterfeyslər (Interfaces)

Obyektlər, siniflər və funksiyalar üçün müqavilələr təyin edir.

### 6.1 Əsas interfeyslər

```typescript
// Sadə interfeys
interface User {
  name: string;
  age: number;
  email: string;
}

// İnterfeysinin istifadəsi
const user: User = {
  name: "İvan",
  age: 30,
  email: "ivan@example.com"
};

// Opsional xüsusiyyətlər
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Opsional xüsusiyyət
  tags?: string[];
}

const product: Product = {
  id: 1,
  name: "Noutbuk",
  price: 50000
  // description və tags opsionaldır
};

// Readonly xüsusiyyətlər
interface Config {
  readonly apiUrl: string;
  readonly version: string;
  timeout: number;
}

const config: Config = {
  apiUrl: "https://api.example.com",
  version: "1.0.0",
  timeout: 5000
};

// config.apiUrl = "yeni URL"; // Xəta: yalnız oxunur
```

### 6.2 İnterfeyslərin genişləndirilməsi

```typescript
// Əsas interfeys
interface Animal {
  name: string;
  age: number;
}

// İnterfeysinin genişləndirilməsi
interface Dog extends Animal {
  breed: string;
  bark(): void;
}

interface Cat extends Animal {
  meow(): void;
  isIndoor: boolean;
}

// Genişləndirilmiş interfeyslərin istifadəsi
const myDog: Dog = {
  name: "Bobik",
  age: 3,
  breed: "Labrador",
  bark() {
    console.log("Hav-hav!");
  }
};

// Çoxlu miras
interface Flyable {
  fly(): void;
  altitude: number;
}

interface Bird extends Animal, Flyable {
  wingspan: number;
}

const eagle: Bird = {
  name: "Qartal",
  age: 5,
  wingspan: 200,
  altitude: 1000,
  fly() {
    console.log("Göydə yüksəkdə uçur");
  }
};
```

### 6.3 Funksiya interfeysləri

```typescript
// Funksiya üçün interfeys
interface Calculator {
  (a: number, b: number): number;
}

const add: Calculator = (x, y) => x + y;
const multiply: Calculator = (x, y) => x * y;

// Bir neçə imzalı interfeys
interface Converter {
  (value: string): number;
  (value: number): string;
  (value: boolean): string;
}

// Yüklənmiş funksiyanın tətbiqi
const convert: Converter = (value: any): any => {
  if (typeof value === "string") return parseInt(value);
  if (typeof value === "number") return value.toString();
  if (typeof value === "boolean") return value ? "true" : "false";
};

// Konstruktor interfeysi
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("bip bip");
  }
}

const createClock = (ctor: ClockConstructor, hour: number, minute: number) => {
  return new ctor(hour, minute);
};
```

### 6.4 İnterfeyslərdə indeks imzaları

```typescript
// Mətn indeksləri
interface StringDictionary {
  [key: string]: string;
}

const translations: StringDictionary = {
  hello: "salam",
  goodbye: "əlvida",
  yes: "bəli"
};

// Rəqəm indeksləri
interface NumberDictionary {
  [index: number]: string;
}

const weekdays: NumberDictionary = {
  0: "Bazar",
  1: "Bazar ertəsi",
  2: "Çərşənbə axşamı"
};

// Qarışıq indekslər
interface MixedDictionary {
  [key: string]: string | number;
  [key: number]: string;
  // Rəqəm indeksi mətn indeksinin alt tipi olmalıdır
}

// Adi xüsusiyyətlərlə birləşdirmə
interface UserDatabase {
  [userId: string]: User;
  currentUser: User;
  adminUser: User;
}
```

## 7. Birləşmə və kəsişmə tipləri

### 7.1 Union Types (Birləşmə tipləri)

```typescript
// Əsas union tiplər
let value: string | number;
value = "salam";
value = 42;
// value = true; // Xəta

// Bir neçə tiplə union
let id: string | number | boolean;

// Null və undefined ilə union
let optionalValue: string | null | undefined;

// Union parametrli funksiyalar
function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  if (typeof id === "number") {
    return id.toString();
  }
}

// Obyekt union tipləri
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      console.log(`${animal.flyingSpeed} km/saat sürətlə uçur`);
      break;
    case "horse":
      console.log(`${animal.runningSpeed} km/saat sürətlə qaçır`);
      break;
  }
}

// Discriminated union-lar
interface LoadingState {
  state: "loading";
}

interface SuccessState {
  state: "success";
  data: any;
}

interface ErrorState {
  state: "error";
  error: string;
}

type AsyncState = LoadingState | SuccessState | ErrorState;

function handleState(state: AsyncState) {
  switch (state.state) {
    case "loading":
      console.log("Yüklənir...");
      break;
    case "success":
      console.log("Məlumat:", state.data);
      break;
    case "error":
      console.log("Xəta:", state.error);
      break;
  }
}
```

### 7.2 Intersection Types (Kəsişmə tipləri)

```typescript
// Əsas intersection tiplər
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type PersonEmployee = Person & Employee;

const worker: PersonEmployee = {
  name: "İvan",
  age: 30,
  employeeId: 12345,
  department: "IT"
};

// Əlavə xüsusiyyətlərlə kəsişmə
interface Timestamped {
  timestamp: Date;
}

interface Tagged {
  tag: string;
}

type TimestampedTagged = Timestamped & Tagged;

const logEntry: TimestampedTagged = {
  timestamp: new Date(),
  tag: "info"
};

// Intersection tipli funksiyalar
function createEmployeeRecord(person: Person, employee: Employee): Person & Employee {
  return { ...person, ...employee };
}

// Mürəkkəb intersection tiplər
interface Serializable {
  serialize(): string;
}

interface Loggable {
  log(): void;
}

class DataProcessor implements Serializable & Loggable {
  private data: any;

  serialize(): string {
    return JSON.stringify(this.data);
  }

  log(): void {
    console.log(this.serialize());
  }
}

// Union tipləri ilə intersection
type StringOrNumber = string | number;
type Serializable2 = { serialize(): string };

type SerializableStringOrNumber = StringOrNumber & Serializable2;
// Bu mümkünsüz tipdir, çünki primitivlər metodlara malik ola bilməz
```

## 8. Tip ləqəbləri (Type Aliases)

```typescript
// Sadə ləqəblər
type UserID = string;
type Score = number;
type IsActive = boolean;

// Ləqəblərin istifadəsi
let currentUserId: UserID = "user_123";
let playerScore: Score = 1500;
let accountStatus: IsActive = true;

// Mürəkkəb tiplər üçün ləqəblər
type Point = {
  x: number;
  y: number;
};

type User = {
  id: UserID;
  name: string;
  email: string;
  isActive: IsActive;
};

// Union tiplər üçün ləqəblər
type Status = "pending" | "approved" | "rejected";
type Theme = "light" | "dark" | "auto";
type Size = "small" | "medium" | "large";

// Funksiyalar üçün ləqəblər
type EventHandler = (event: Event) => void;
type Calculator = (a: number, b: number) => number;
type Predicate<T> = (item: T) => boolean;

// Funksional ləqəblərin istifadəsi
const onClick: EventHandler = (event) => {
  console.log("Klik:", event.target);
};

const add: Calculator = (x, y) => x + y;
const isPositive: Predicate<number> = (num) => num > 0;

// Ümumi (Generic) ləqəblər
type Container<T> = {
  value: T;
  getValue(): T;
  setValue(value: T): void;
};

type Pair<T, U> = {
  first: T;
  second: U;
};

// Ümumi ləqəblərin istifadəsi
const stringContainer: Container<string> = {
  value: "salam",
  getValue() { return this.value; },
  setValue(value) { this.value = value; }
};

const coordinates: Pair<number, number> = {
  first: 10,
  second: 20
};

// Şərti tiplər
type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// Ləqəblər vs İnterfeyslar
// Type alias - genişləndirmək olmaz
type Animal = {
  name: string;
};

// type Animal = {  // Xəta: təkrarlama
//   age: number;
// };

// Interface - genişləndirmək olar
interface Plant {
  name: string;
}

interface Plant {  // OK: deklarasiyaların birləşdirilməsi
  height: number;
}

// Rekursiv tiplər
type JSONValue = 
  | string 
  | number 
  | boolean 
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

const jsonData: JSONValue = {
  name: "İvan",
  age: 30,
  isActive: true,
  hobbies: ["oxumaq", "idman"],
  address: {
    city: "Bakı",
    country: "Azərbaycan"
  }
};
```

## 9. Ümumiyyatlar (Generics)

Generics müxtəlif tiplərlə işləyən təkrar istifadə edilə bilən komponentlər yaratmağa imkan verir.

### 9.1 Əsas Generics

```typescript
// Sadə ümumi funksiya
function identity<T>(arg: T): T {
  return arg;
}

// Tipi açıq göstərərək istifadə
let output1 = identity<string>("salam");
let output2 = identity<number>(42);

// Avtomatik tip çıxarışı
let output3 = identity("dünya"); // TypeScript string çıxaracaq
let output4 = identity(123);     // TypeScript number çıxaracaq

// Massivlə ümumi funksiya
function getFirstElement<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

const firstNumber = getFirstElement([1, 2, 3]); // number | undefined
const firstString = getFirstElement(["a", "b"]); // string | undefined

// Çoxlu tip parametrləri
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const stringNumberPair = pair("salam", 42); // [string, number]
const booleanArrayPair = pair(true, [1, 2, 3]); // [boolean, number[]]
```

### 9.2 Ümumi interfeyslər

```typescript
// Ümumi interfeys
interface Container<T> {
  value: T;
  setValue(value: T): void;
  getValue(): T;
}

// Ümumi interfeysin tətbiqi
class Box<T> implements Container<T> {
  constructor(public value: T) {}

  setValue(value: T): void {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const stringBox = new Box<string>("salam");
const numberBox = new Box<number>(42);

// Bir neçə parametrli ümumi interfeys
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const userAge: KeyValuePair<string, number> = {
  key: "İvan",
  value: 30
};

// Ümumi funksiya interfeysi
interface Comparable<T> {
  compareTo(other: T): number;
}

class Version implements Comparable<Version> {
  constructor(private version: string) {}

  compareTo(other: Version): number {
    return this.version.localeCompare(other.version);
  }
}
```

### 9.3 Ümumi siniflər

```typescript
// Ümumi sinif
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push("salam");
stringStack.push("dünya");

// Məhdudiyyətli ümumi sinif
interface Lengthwise {
  length: number;
}

class LengthChecker<T extends Lengthwise> {
  constructor(private item: T) {}

  getLength(): number {
    return this.item.length;
  }

  compareLength(other: T): number {
    return this.item.length - other.length;
  }
}

const stringChecker = new LengthChecker("salam");
const arrayChecker = new LengthChecker([1, 2, 3, 4]);
// const numberChecker = new LengthChecker(42); // Xəta: number-də length xüsusiyyəti yoxdur
```

### 9.4 Tip məhdudiyyətləri (Type Constraints)

```typescript
// extends məhdudiyyəti
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "İvan", age: 30, city: "Bakı" };
const name = getProperty(person, "name"); // string
const age = getProperty(person, "age");   // number
// const invalid = getProperty(person, "height"); // Xəta

// Obyektlə tip məhdudiyyəti
interface HasId {
  id: number;
}

function updateEntity<T extends HasId>(entity: T, updates: Partial<T>): T {
  return { ...entity, ...updates };
}

const user = { id: 1, name: "İvan", email: "ivan@example.com" };
const updatedUser = updateEntity(user, { name: "Petro" });

// Şərti məhdudiyyətlər
type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsArray<string[]>; // true
type Test2 = IsArray<number>;   // false

// Funksiya məhdudiyyəti
function callFunction<T extends (...args: any[]) => any>(
  fn: T,
  ...args: Parameters<T>
): ReturnType<T> {
  return fn(...args);
}

function add(a: number, b: number): number {
  return a + b;
}

const result = callFunction(add, 5, 3); // number
```

## 10. Utilitar tiplər (Utility Types)

TypeScript çoxlu daxili utilitar tiplər təqdim edir.

### 10.1 Partial və Required

```typescript
// Partial - bütün xüsusiyyətləri opsional edir
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type PartialUser = Partial<User>;
// Bərabərdir:
// {
//   id?: number;
//   name?: string;
//   email?: string;
//   age?: number;
// }

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const user: User = { id: 1, name: "İvan", email: "ivan@example.com", age: 30 };
const updatedUser = updateUser(user, { age: 31 });

// Required - bütün xüsusiyyətləri məcburi edir
interface OptionalConfig {
  apiUrl?: string;
  timeout?: number;
  retries?: number;
}

type RequiredConfig = Required<OptionalConfig>;
// Bərabərdir:
// {
//   apiUrl: string;
//   timeout: number;
//   retries: number;
// }

function initializeApp(config: Required<OptionalConfig>): void {
  // Bütün xüsusiyyətlər zəmanətlə mövcuddur
  console.log(`API: ${config.apiUrl}, Timeout: ${config.timeout}`);
}
```

### 10.2 Pick və Omit

```typescript
// Pick - müəyyən xüsusiyyətləri seçir
interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  startDate: Date;
}

type PublicEmployee = Pick<Employee, 'id' | 'name' | 'department'>;
// Bərabərdir:
// {
//   id: number;
//   name: string;
//   department: string;
// }

// Omit - müəyyən xüsusiyyətləri istisna edir
type EmployeeWithoutSalary = Omit<Employee, 'salary' | 'startDate'>;
// Bərabərdir:
// {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
// }

// Praktik istifadə
function createPublicProfile(employee: Employee): PublicEmployee {
  return {
    id: employee.id,
    name: employee.name,
    department: employee.department
  };
}

function updateEmployeeInfo(
  employee: Employee,
  updates: Omit<Employee, 'id'>
): Employee {
  return { ...employee, ...updates };
}
```

### 10.3 Record və Readonly

```typescript
// Record - müəyyən tip açarlı obyekt yaradır
type UserRole = 'admin' | 'user' | 'guest';
type RolePermissions = Record<UserRole, string[]>;

const permissions: RolePermissions = {
  admin: ['read', 'write', 'delete'],
  user: ['read', 'write'],
  guest: ['read']
};

// Daha mürəkkəb tiplərlə Record
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiEndpoint = Record<HttpMethod, {
  url: string;
  requiresAuth: boolean;
}>;

const userApi: ApiEndpoint = {
  GET: { url: '/users', requiresAuth: false },
  POST: { url: '/users', requiresAuth: true },
  PUT: { url: '/users/:id', requiresAuth: true },
  DELETE: { url: '/users/:id', requiresAuth: true }
};

// Readonly - bütün xüsusiyyətləri yalnız oxunur edir
interface MutableConfig {
  apiUrl: string;
  timeout: number;
  features: string[];
}

type ImmutableConfig = Readonly<MutableConfig>;
// Bərabərdir:
// {
//   readonly apiUrl: string;
//   readonly timeout: number;
//   readonly features: readonly string[];
// }

const config: ImmutableConfig = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  features: ['feature1', 'feature2']
};

// config.apiUrl = 'yeni URL'; // Xəta: yalnız oxunur
```

### 10.4 ReturnType və Parameters

```typescript
// ReturnType - funksiyanın qaytardığı dəyərin tipini çıxarır
function getUser(id: number): { name: string; email: string } {
  return { name: "İvan", email: "ivan@example.com" };
}

type UserReturnType = ReturnType<typeof getUser>;
// Bərabərdir: { name: string; email: string }

// Parameters - funksiyanın parametrlərinin tiplərini çıxarır
function createUser(name: string, age: number, isActive: boolean): User {
  return { id: 1, name, email: "", age };
}

type CreateUserParams = Parameters<typeof createUser>;
// Bərabərdir: [string, number, boolean]

// Praktik istifadə
function logFunctionCall<T extends (...args: any[]) => any>(
  fn: T,
  ...args: Parameters<T>
): ReturnType<T> {
  console.log(`${fn.name} funksiyası çağırıldı arqumentlərlə:`, args);
  const result = fn(...args);
  console.log(`Nəticə:`, result);
  return result;
}

const result = logFunctionCall(createUser, "Petro", 25, true);

// ConstructorParameters - konstruktorlar üçün
class DatabaseConnection {
  constructor(
    public host: string,
    public port: number,
    public database: string
  ) {}
}

type DbConstructorParams = ConstructorParameters<typeof DatabaseConnection>;
// Bərabərdir: [string, number, string]

// InstanceType - sinif nümunəsinin tipi
type DbInstance = InstanceType<typeof DatabaseConnection>;
// Bərabərdir: DatabaseConnection
```

### 10.5 Exclude və Extract

```typescript
// Exclude - union-dan tipləri istisna edir
type AllColors = 'red' | 'green' | 'blue' | 'yellow' | 'purple';
type PrimaryColors = Exclude<AllColors, 'yellow' | 'purple'>;
// Bərabərdir: 'red' | 'green' | 'blue'

// Extract - union-dan tipləri çıxarır
type StringOrNumber = string | number | boolean;
type OnlyStringOrNumber = Extract<StringOrNumber, string | number>;
// Bərabərdir: string | number

// Praktik nümunələr
type ApiResponse = 
  | { status: 'loading' }
  | { status: 'success'; data: any }
  | { status: 'error'; error: string };

type SuccessResponse = Extract<ApiResponse, { status: 'success' }>;
// Bərabərdir: { status: 'success'; data: any }

type NonLoadingResponse = Exclude<ApiResponse, { status: 'loading' }>;
// Bərabərdir: { status: 'success'; data: any } | { status: 'error'; error: string }

// NonNullable - null və undefined istisna edir
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;
// Bərabərdir: string

function processValue(value: string | null | undefined): NonNullable<typeof value> | null {
  if (value === null || value === undefined) {
    return null;
  }
  return value.toUpperCase();
}
```

## 11. Əlavə tip konstruksiyaları

### 11.1 Mapped Types (Xəritələnmiş tiplər)

```typescript
// Əsas mapped type
type Optional<T> = {
  [K in keyof T]?: T[K];
};

interface Person {
  name: string;
  age: number;
  email: string;
}

type OptionalPerson = Optional<Person>;
// Bərabərdir:
// {
//   name?: string;
//   age?: number;
//   email?: string;
// }

// Açar çevrilməsi ilə mapped type
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type PersonGetters = Getters<Person>;
// Bərabərdir:
// {
//   getName: () => string;
//   getAge: () => number;
//   getEmail: () => string;
// }

// Şərti mapped types
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type NullablePerson = Nullable<Person>;
// Bərabərdir:
// {
//   name: string | null;
//   age: number | null;
//   email: string | null;
// }

// Xüsusiyyətləri tipə görə filtrləmə
type StringProperties<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type PersonStringProps = StringProperties<Person>;
// Bərabərdir: "name" | "email"

// Yalnız mətn xüsusiyyətləri ilə obyekt yaratma
type StringOnly<T> = Pick<T, StringProperties<T>>;
type PersonStrings = StringOnly<Person>;
// Bərabərdir:
// {
//   name: string;
//   email: string;
// }
```

### 11.2 Conditional Types (Şərti tiplər)

```typescript
// Əsas şərti tip
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// infer ilə şərti tiplər
type ArrayElement<T> = T extends (infer U)[] ? U : never;

type StringArrayElement = ArrayElement<string[]>; // string
type NumberArrayElement = ArrayElement<number[]>; // number
type NotArrayElement = ArrayElement<string>; // never

// Promise tipini çıxarma
type PromiseType<T> = T extends Promise<infer U> ? U : never;

type StringPromise = PromiseType<Promise<string>>; // string
type NumberPromise = PromiseType<Promise<number>>; // number

// İç-içə şərti tiplər
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

interface NestedObject {
  name: string;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];
}

type ReadonlyNested = DeepReadonly<NestedObject>;
// Bütün iç-içə obyektlər də readonly olur

// Paylanmış şərti tiplər
type ToArray<T> = T extends any ? T[] : never;

type StringOrNumberArray = ToArray<string | number>;
// Bərabərdir: string[] | number[]
```

### 11.3 Template Literal Types

```typescript
// Əsas template literal types
type Greeting = `Salam ${string}`;

const greeting1: Greeting = "Salam Dünya"; // OK
const greeting2: Greeting = "Salam TypeScript"; // OK
// const greeting3: Greeting = "Salut"; // Xəta

// Literalların birləşdirilməsi
type HttpMethod = 'GET' | 'POST';
type ApiVersion = 'v1' | 'v2';
type ApiEndpoint = `/${ApiVersion}/${HttpMethod}`;

// Bərabərdir: "/v1/GET" | "/v1/POST" | "/v2/GET" | "/v2/POST"

// Mətn manipulyasiyaları
type UppercaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

interface User {
  name: string;
  age: number;
}

type UppercaseUser = UppercaseKeys<User>;
// Bərabərdir:
// {
//   NAME: string;
//   AGE: number;
// }

// Event handler-lər yaratma
type EventHandlers<T> = {
  [K in keyof T as `on${Capitalize<string & K>}`]: (value: T[K]) => void;
};

type UserEventHandlers = EventHandlers<User>;
// Bərabərdir:
// {
//   onName: (value: string) => void;
//   onAge: (value: number) => void;
// }

// CSS xüsusiyyətləri
type CSSSize = 'small' | 'medium' | 'large';
type CSSProperty = `margin-${'top' | 'right' | 'bottom' | 'left'}`;
type CSSClass = `.${string}-${CSSSize}`;

const cssClass: CSSClass = ".button-large"; // OK
const cssProperty: CSSProperty = "margin-top"; // OK
```

## 12. Praktik nümunələr və şablonlar

### 12.1 Tip-təhlükəsiz API kliyentinin yaradılması

```typescript
// API strukturunun təyini
interface ApiRoutes {
  '/users': {
    GET: { response: User[] };
    POST: { body: Omit<User, 'id'>; response: User };
  };
  '/users/:id': {
    GET: { response: User };
    PUT: { body: Partial<User>; response: User };
    DELETE: { response: void };
  };
  '/posts': {
    GET: { response: Post[] };
    POST: { body: Omit<Post, 'id'>; response: Post };
  };
}

interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

// Tip-təhlükəsiz HTTP klienti
class ApiClient {
  async request<
    Route extends keyof ApiRoutes,
    Method extends keyof ApiRoutes[Route]
  >(
    route: Route,
    method: Method,
    options?: ApiRoutes[Route][Method] extends { body: infer Body }
      ? { body: Body }
      : never
  ): Promise<
    ApiRoutes[Route][Method] extends { response: infer Response }
      ? Response
      : never
  > {
    // HTTP sorğusunun tətbiqi
    const response = await fetch(route as string, {
      method: method as string,
      body: options ? JSON.stringify(options.body) : undefined,
      headers: { 'Content-Type': 'application/json' }
    });
    return response.json();
  }
}

// İstifadə
const client = new ApiClient();

// TypeScript parametrlərin və qaytarılan dəyərlərin tiplərini bilir
const users = await client.request('/users', 'GET'); // User[]
const newUser = await client.request('/users', 'POST', {
  body: { name: 'İvan', email: 'ivan@example.com', age: 30 }
}); // User
```

### 12.2 Tiplərlə hadisə sistemi

```typescript
// Tətbiq hadisələrinin təyini
interface AppEvents {
  'user:login': { userId: string; timestamp: Date };
  'user:logout': { userId: string };
  'order:created': { orderId: string; amount: number };
  'payment:completed': { orderId: string; paymentId: string };
}

// Tip-təhlükəsiz Event Emitter
class TypedEventEmitter<Events extends Record<string, any>> {
  private listeners: {
    [K in keyof Events]?: Array<(data: Events[K]) => void>;
  } = {};

  on<K extends keyof Events>(
    event: K,
    listener: (data: Events[K]) => void
  ): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(listener);
  }

  emit<K extends keyof Events>(event: K, data: Events[K]): void {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      eventListeners.forEach(listener => listener(data));
    }
  }

  off<K extends keyof Events>(
    event: K,
    listener: (data: Events[K]) => void
  ): void {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      const index = eventListeners.indexOf(listener);
      if (index > -1) {
        eventListeners.splice(index, 1);
      }
    }
  }
}

// İstifadə
const eventEmitter = new TypedEventEmitter<AppEvents>();

// TypeScript hadisə və məlumat tiplərini yoxlayır
eventEmitter.on('user:login', (data) => {
  console.log(`İstifadəçi ${data.userId} ${data.timestamp} tarixində daxil oldu`);
});

eventEmitter.on('order:created', (data) => {
  console.log(`${data.orderId} sifariş ${data.amount} məbləğində yaradıldı`);
});

// Tip yoxlaması ilə hadisə generasiyası
eventEmitter.emit('user:login', {
  userId: 'user123',
  timestamp: new Date()
});

// eventEmitter.emit('user:login', { invalid: 'data' }); // Tip xətası
```

## 13. Nəticə və ən yaxşı təcrübələr

### TypeScript-də tiplərlə işləməyin əsas prinsipləri:

**1. Sadə tiplərdən başlayın**

- Sadə dəyərlər üçün primitiv tipləri istifadə edin
- Tədricən daha mürəkkəb konstruksiyalara keçin

**2. Açıqlığı gizliliyə üstün tutun**

- Oxunaqlığı artıran yerlərdə tipləri açıq göstərin
- Aydın hallarda tip çıxarışından istifadə edin

**3. Sərt parametrlərdən istifadə edin**

- tsconfig.json-da `strict: true` daxil edin
- Həddindən artıq ehtiyac olmadan `any` tipindən çəkinin

**4. Tiplərin kompozisiyası**

- Mürəkkəb tipləri sadədən yaradın
- Çeviklik üçün union və intersection tipləri istifadə edin

**5. Tiplərin təkrar istifadəsi**

- Ümumi tipləri ayrı fayllarda çıxarın
- Çevrilmələr üçün utilitar tiplərdən istifadə edin

### Performans üzrə tövsiyələr:

- Çox dərin iç-içə tiplərdən çəkinin
- Literal tiplər üçün `const assertions` istifadə edin
- Obyekt tipləri üçün `interface`-ə üstünlük verin
- Union tiplər və ləqəblər üçün `type` istifadə edin

TypeScript JavaScript tətbiqlərinin inkişafını əhəmiyyətli dərəcədə yaxşılaşdırır, statik tipizasiya, daha yaxşı IDE dəstəyi və erkən xəta aşkarlanması təmin edir. TypeScript tip sisteminin düzgün istifadəsi kodu daha etibarlı, oxunaqlı və saxlanıla bilən edir.

Bu konspekt TypeScript-də tiplərlə işləməyin bütün əsas aspektlərini əhatə edir - əsas primitivlərdən tutmuş inkişaf etmiş texnikalara və şablonlara qədər. TypeScript öyrənərkən və onunla işləyərkən bu bələdçini məlumat mənbəyi kimi istifadə edin.

## 14. İnkişaf etmiş şablonlar və texnikalar

### 14.1 Tip dekoratorları

```typescript
// Eksperimental dekorator dəstəyi
// tsconfig.json-da "experimentalDecorators": true aktivləşdirmək lazımdır

// Metodları qeydə alan dekorator
function log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(`${propertyName} metodu çağırıldı arqumentlərlə:`, args);
    const result = method.apply(this, args);
    console.log(`Nəticə:`, result);
    return result;
  };
}

// Validasiya dekoratoru
function validate(target: any, propertyName: string) {
  let value: any;
  
  const getter = () => value;
  const setter = (newValue: any) => {
    if (typeof newValue !== 'string' || newValue.length < 2) {
      throw new Error(`${propertyName} 2 simvoldan çox olan mətn olmalıdır`);
    }
    value = newValue;
  };
  
  Object.defineProperty(target, propertyName, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

// Dekoratorların istifadəsi
class UserService {
  @validate
  private _name: string = '';
  
  get name() { return this._name; }
  set name(value: string) { this._name = value; }
  
  @log
  createUser(name: string, email: string): User {
    return { id: Date.now(), name, email, age: 0 };
  }
}
```

### 14.2 Tiplərlə Builder şablonu

```typescript
// Tip-təhlükəsiz Builder şablonu
interface UserData {
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

// Builder üçün köməkçi tiplər
type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

class UserBuilder {
  private userData: Partial<UserData> = {};

  setName(name: string): UserBuilder & { userData: { name: string } } {
    this.userData.name = name;
    return this as any;
  }

  setEmail(email: string): UserBuilder & { userData: { email: string } } {
    this.userData.email = email;
    return this as any;
  }

  setAge(age: number): UserBuilder & { userData: { age: number } } {
    this.userData.age = age;
    return this as any;
  }

  setActive(isActive: boolean): UserBuilder & { userData: { isActive: boolean } } {
    this.userData.isActive = isActive;
    return this as any;
  }

  // build metodu yalnız bütün məcburi sahələr doldurulduqda əlçatandır
  build(this: UserBuilder & { 
    userData: Required<Pick<UserData, 'name' | 'email' | 'age' | 'isActive'>>
  }): UserData {
    return { ...this.userData } as UserData;
  }
}

// Tərcümə mərhələsində yoxlama ilə istifadə
const user = new UserBuilder()
  .setName("İvan")
  .setEmail("ivan@example.com")
  .setAge(30)
  .setActive(true)
  .build(); // OK

// const incompleteUser = new UserBuilder()
//   .setName("İvan")
//   .build(); // Xəta: məcburi sahələr çatışmır
```

### 14.3 Tiplərlə plugin sistemi

```typescript
// Əsas plugin sistemi
interface Plugin<TOptions = {}> {
  name: string;
  version: string;
  install(app: Application, options?: TOptions): void;
}

interface Application {
  plugins: Map<string, Plugin>;
  use<T extends Plugin>(plugin: T, options?: T extends Plugin<infer U> ? U : never): this;
  getPlugin<T extends Plugin>(name: string): T | undefined;
}

// Konkret pluginlər
interface LoggerOptions {
  level: 'debug' | 'info' | 'warn' | 'error';
  format: string;
}

class LoggerPlugin implements Plugin<LoggerOptions> {
  name = 'logger';
  version = '1.0.0';

  install(app: Application, options: LoggerOptions = { level: 'info', format: 'json' }) {
    // Logger qurulması
    console.log(`Logger ${options.level} səviyyəsi ilə quruldu`);
  }
}

interface DatabaseOptions {
  connectionString: string;
  poolSize: number;
}

class DatabasePlugin implements Plugin<DatabaseOptions> {
  name = 'database';
  version = '2.0.0';

  install(app: Application, options: DatabaseOptions) {
    console.log(`Verilənlər bazasına qoşulma: ${options.connectionString}`);
  }
}

// Application tətbiqi
class App implements Application {
  plugins = new Map<string, Plugin>();

  use<T extends Plugin>(
    plugin: T, 
    options?: T extends Plugin<infer U> ? U : never
  ): this {
    plugin.install(this, options);
    this.plugins.set(plugin.name, plugin);
    return this;
  }

  getPlugin<T extends Plugin>(name: string): T | undefined {
    return this.plugins.get(name) as T | undefined;
  }
}

// Seçimlərin avtomatik tipizasiyası ilə istifadə
const app = new App()
  .use(new LoggerPlugin(), { level: 'debug', format: 'text' })
  .use(new DatabasePlugin(), { connectionString: 'mongodb://localhost', poolSize: 10 });
```

### 14.4 Tiplərlə funksional proqramlaşdırma

```typescript
// Nullable dəyərlərlə təhlükəsiz işləmək üçün Maybe monadı
abstract class Maybe<T> {
  abstract map<U>(fn: (value: T) => U): Maybe<U>;
  abstract flatMap<U>(fn: (value: T) => Maybe<U>): Maybe<U>;
  abstract filter(predicate: (value: T) => boolean): Maybe<T>;
  abstract getOrElse(defaultValue: T): T;
  abstract isSome(): boolean;
  abstract isNone(): boolean;

  static some<T>(value: T): Maybe<T> {
    return new Some(value);
  }

  static none<T>(): Maybe<T> {
    return new None<T>();
  }

  static fromNullable<T>(value: T | null | undefined): Maybe<T> {
    return value != null ? Maybe.some(value) : Maybe.none<T>();
  }
}

class Some<T> extends Maybe<T> {
  constructor(private value: T) {
    super();
  }

  map<U>(fn: (value: T) => U): Maybe<U> {
    return Maybe.some(fn(this.value));
  }

  flatMap<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
    return fn(this.value);
  }

  filter(predicate: (value: T) => boolean): Maybe<T> {
    return predicate(this.value) ? this : Maybe.none<T>();
  }

  getOrElse(_defaultValue: T): T {
    return this.value;
  }

  isSome(): boolean {
    return true;
  }

  isNone(): boolean {
    return false;
  }
}

class None<T> extends Maybe<T> {
  map<U>(_fn: (value: T) => U): Maybe<U> {
    return Maybe.none<U>();
  }

  flatMap<U>(_fn: (value: T) => Maybe<U>): Maybe<U> {
    return Maybe.none<U>();
  }

  filter(_predicate: (value: T) => boolean): Maybe<T> {
    return this;
  }

  getOrElse(defaultValue: T): T {
    return defaultValue;
  }

  isSome(): boolean {
    return false;
  }

  isNone(): boolean {
    return true;
  }
}

// Maybe istifadəsi
function findUser(id: number): Maybe<User> {
  const users: User[] = [
    { id: 1, name: "İvan", email: "ivan@example.com", age: 30 }
  ];
  const user = users.find(u => u.id === id);
  return Maybe.fromNullable(user);
}

const result = findUser(1)
  .filter(user => user.age >= 18)
  .map(user => user.name.toUpperCase())
  .getOrElse("İstifadəçi tapılmadı");

console.log(result); // "İVAN"

// Tiplərlə funksiya kompozisiyası
type Fn<A, B> = (a: A) => B;

function compose<A, B, C>(f: Fn<B, C>, g: Fn<A, B>): Fn<A, C> {
  return (a: A) => f(g(a));
}

function pipe<A, B>(value: A, fn: Fn<A, B>): B;
function pipe<A, B, C>(value: A, fn1: Fn<A, B>, fn2: Fn<B, C>): C;
function pipe<A, B, C, D>(value: A, fn1: Fn<A, B>, fn2: Fn<B, C>, fn3: Fn<C, D>): D;
function pipe(value: any, ...fns: Fn<any, any>[]): any {
  return fns.reduce((acc, fn) => fn(acc), value);
}

// Kompozisiya istifadəsi
const addOne = (x: number) => x + 1;
const multiplyByTwo = (x: number) => x * 2;
const toString = (x: number) => x.toString();

const processNumber = compose(
  compose(toString, multiplyByTwo),
  addOne
);

const result2 = pipe(5, addOne, multiplyByTwo, toString); // "12"
```

## 15. Məşhur kitabxanalarla inteqrasiya

### 15.1 TypeScript ilə React

```typescript
// React komponentlərinin tipizasiyası
import React, { useState, useEffect, PropsWithChildren } from 'react';

// Komponent propları
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Tipli funksional komponent
const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  variant,
  size = 'medium',
  disabled = false,
  onClick,
  children
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Tipli hooklər
interface User {
  id: number;
  name: string;
  email: string;
}

function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch('/api/users');
        const userData: User[] = await response.json();
        setUsers(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Naməlum xəta');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return { users, loading, error };
}

// Tipli Context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme ThemeProvider daxilində istifadə edilməlidir');
  }
  return context;
}
```

### 15.2 TypeScript ilə Express.js

```typescript
// Express tətbiqinin tipizasiyası
import express, { Request, Response, NextFunction } from 'express';

// Request tiplərinin genişləndirilməsi
interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
    role: 'admin' | 'user';
  };
}

// Tipizasiya edilmiş middleware
function authenticate(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    res.status(401).json({ error: 'Token təqdim edilməyib' });
    return;
  }

  // Token yoxlaması və istifadəçinin req-ə əlavə edilməsi
  req.user = { id: 1, email: 'user@example.com', role: 'user' };
  next();
}

// Tipizasiya edilmiş controllerlər
interface CreateUserBody {
  name: string;
  email: string;
  age: number;
}

function createUser(req: Request<{}, User, CreateUserBody>, res: Response<User>) {
  const { name, email, age } = req.body;
  
  const newUser: User = {
    id: Date.now(),
    name,
    email,
    age
  };

  res.status(201).json(newUser);
}

// Tipizasiya edilmiş route parametrləri
interface UserParams {
  id: string;
}

function getUser(req: Request<UserParams>, res: Response<User | { error: string }>) {
  const userId = parseInt(req.params.id);
  
  if (isNaN(userId)) {
    res.status(400).json({ error: 'Səhv istifadəçi ID-si' });
    return;
  }

  // İstifadəçi axtarışı
  const user = findUserById(userId);
  
  if (!user) {
    res.status(404).json({ error: 'İstifadəçi tapılmadı' });
    return;
  }

  res.json(user);
}

function findUserById(id: number): User | undefined {
  // Verilənlər bazasında axtarışın imitasiyası
  return { id, name: 'İvan', email: 'ivan@example.com', age: 30 };
}

// Route-ların konfiqurasiyası
const app = express();
app.use(express.json());

app.post('/users', createUser);
app.get('/users/:id', getUser);
app.get('/protected', authenticate, (req: AuthenticatedRequest, res: Response) => {
  res.json({ message: `Salam, ${req.user?.email}!` });
});
```

## 16. TypeScript kodunun testləşdirilməsi

### 16.1 Jest ilə unit testlər

```typescript
// Test ediləcək funksiya
export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Sıfıra bölmə');
    }
    return a / b;
  }

  async fetchData(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
  }
}

// Tipli testlər
import { Calculator } from '../Calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('iki rəqəmi düzgün toplamalıdır', () => {
      const result: number = calculator.add(2, 3);
      expect(result).toBe(5);
    });

    it('mənfi rəqəmlərlə işləməlidir', () => {
      const result: number = calculator.add(-2, 3);
      expect(result).toBe(1);
    });
  });

  describe('divide', () => {
    it('rəqəmləri düzgün bölməlidir', () => {
      const result: number = calculator.divide(10, 2);
      expect(result).toBe(5);
    });

    it('sıfıra bölmədə xəta atmalıdır', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Sıfıra bölmə');
    });
  });

  describe('fetchData', () => {
    beforeEach(() => {
      global.fetch = jest.fn();
    });

    it('məlumat qaytarmalıdır', async () => {
      const mockData = { id: 1, name: 'Test' };
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
        json: () => Promise.resolve(mockData),
      } as Response);

      const result = await calculator.fetchData('https://api.test.com');
      expect(result).toEqual(mockData);
      expect(fetch).toHaveBeenCalledWith('https://api.test.com');
    });
  });
});

// Tipli mocklər
interface UserService {
  getUser(id: number): Promise<User>;
  createUser(userData: Omit<User, 'id'>): Promise<User>;
}

const mockUserService: jest.Mocked<UserService> = {
  getUser: jest.fn(),
  createUser: jest.fn(),
};

// Tipizasiya edilmiş fixturələr
const createMockUser = (overrides: Partial<User> = {}): User => ({
  id: 1,
  name: 'Test İstifadəçisi',
  email: 'test@example.com',
  age: 25,
  ...overrides,
});
```

## 17. JavaScript-dən TypeScript-ə miqrasiya

### 17.1 Addım-addım miqrasiya strategiyası

```typescript
// 1. tsconfig.json ilə başlayın
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "commonjs",
    "lib": ["ES2018", "DOM"],
    "allowJs": true,           // JS fayllarına icazə ver
    "checkJs": false,          // JS fayllarını hələlik yoxlama
    "declaration": false,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": false,           // Tədricən daxil et
    "noImplicitAny": false,    // Sonra daxil et
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

// 2. Faylları tədricən .js -> .ts olaraq adlandırın
// 3. Tədricən tipləri əlavə edin

// Əvvəl (JavaScript):
function processData(data) {
  return data.map(item => ({
    id: item.id,
    name: item.name.toUpperCase(),
    isActive: item.status === 'active'
  }));
}

// İndi (TypeScript):
interface InputItem {
  id: number;
  name: string;
  status: string;
}

interface OutputItem {
  id: number;
  name: string;
  isActive: boolean;
}

function processData(data: InputItem[]): OutputItem[] {
  return data.map(item => ({
    id: item.id,
    name: item.name.toUpperCase(),
    isActive: item.status === 'active'
  }));
}

```