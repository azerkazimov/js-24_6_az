

### 👥 **2. Eyni yaşı olanları qruplaşdırın**

Aşağıdakı `users` massivindən yaşa görə **qrup** yaradın. Eyni yaşa malik olan adlar eyni qrupda olsun.

```js
const users = [
  { name: "Ali", age: 25 },
  { name: "Leyla", age: 20 },
  { name: "Murad", age: 25 },
  { name: "Ayan", age: 20 }
];
```

🟰 Nəticə:

```js
{
  25: ["Ali", "Murad"],
  20: ["Leyla", "Ayan"]
}
```
