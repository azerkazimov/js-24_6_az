// Literal notation

const avtomobil = {
  marka: "BMW",
  model: "X5",
  il: 2008,
  rəng: "ağ",
  ise_sal: function () {
    return `${this.marka} ${this.model} işə salındı`;
  },
};

// console.log(avtomobil.ise_sal());

// Object constructor

// const avtomobil = new Object();

// avtomobil.marka = "BMW";
// avtomobil.model = "X5";
// avtomobil.il = 2023;
// avtomobil.işə_sal = function () {
//   return `${this.marka} ${this.model} işə salındı`;
// };

// const autoPrototype = {
//   ise_sal: function () {
//     return `${this.marka} ${this.model} ${this.year} işə salındı`;
//   },
// };

// Object method:

// const avtomobil = Object.create(autoPrototype);
// avtomobil.marka = "BMW";
// avtomobil.model = "f30";
// avtomobil.year = "2014";

// console.log(avtomobil.ise_sal());

// Function constructor
function Avtomobil(marka, model, il) {
  this.marka = marka;
  this.model = model;
  this.il = il;
  this.ise_sal = function () {
    return `${this.marka} ${this.model} işə salındı`;
  };
}

const bmw = new Avtomobil("BMW", "x6", 2009);
const prius = new Avtomobil("toyota", "prius", "2007");

const sexs = {
  ad: "Leyla",
  yaş: 28,
  email: "leyla@example.com",
  unvan: {
    şəhər: "Bakı",
    rayon: "Nəsimi",
    küçə: "Nizami",
  },
};

const hesabat = {
  ad: "İllik Hesabat",
  tarix: "2024",

  // Method sintaksisi (ES6)
  melumat_al() {
    return `${this.ad} - ${this.tarix}`;
  },

  // Ənənəvi method sintaksisi
  cap_et() {
    console.log(this.melumat_al());
  },

  // Arrow function (this context problemi var!)
  sehv_metod: () => {
    // this.ad = ad
    // this burada window/undefined olacaq
    console.log(this.ad); // undefined
    return this.ad; // əlavə olaraq return edirik
  },
};

// getter and setter

const user1 = {
  _name: "",
  _age: 0,

  // Getter
  get name() {
    return this._name.toUpperCase();
  },

  // Setter
  set name(value) {
    if (value.length < 2) {
      throw new Error("Name must be at least 2 characters long");
    }
    this._name = value;
  },

  get age() {
    return this._age;
  },

  set age(value) {
    if (value < 0 || value > 150) {
      throw new Error("Age must be between 0 and 150");
    }
    this._age = value;
  },
};

user1.name = "Veli";
user1.age = 25;

// getter and setter methods

const user2 = {
  _name: "",
  _age: 0,
  fullName() {
    return `${this._name} ${this.surname}: ${this._age}`;
  },

  // Getter
  getName() {
    return this._name.toUpperCase();
  },

  // Setter
  setName(value) {
    if (value.length < 2) {
      throw new Error("Name must be at least 2 characters long");
    }
    this._name = value;
  },

  getAge() {
    return this._age;
  },

  setAge(value) {
    if (value < 0 || value > 150) {
      throw new Error("Age must be between 0 and 150");
    }
    this._age = value;
  },
};

// user.name = "Veli"
// user.age = 25

user2.setName("Veli");
user2.setAge(25);
user2.surname = "Aliyev";

delete user2.surname;

const şəxs = {
  ad: "Nigar",
  yaş: 30,
  peşə: "Müəllim",
};

const açarlar = Object.keys(şəxs); // ["ad", "yaş", "peşə"]
const dəyərlər = Object.values(şəxs); // ["Nigar", 30, "Müəllim"]
const giriş_ləri = Object.entries(şəxs); // [["ad", "Nigar"], ["yaş", 30], ["peşə", "Müəllim"]]

// console.log(açarlar);
// console.log(dəyərlər);
// console.log(giriş_ləri);

const obyekt1 = { a: 1, b: 2 };
const obyekt2 = { b: 3, c: 4 };
const obyekt3 = { c: 5, d: 6 };

const birləşmiş = Object.assign({}, obyekt1, obyekt2, obyekt3);
// console.log(birləşmiş); // { a: 1, b: 3, c: 5, d: 6 }

// freeze
const sabit_obyekt = Object.freeze({
  ad: "JavaScript",
  tip: "Proqramlaşdırma dili",
});

sabit_obyekt.ad = "Python"; // İşləməyəcək
// console.log(sabit_obyekt.ad); // JavaScript

// seal
const möhürlənmiş = Object.seal({
  ad: "React",
  versiya: "18.0",
});

möhürlənmiş.ad = "Vue"; // İşləyəcək
möhürlənmiş.yeni_sahə = "test"; // İşləməyəcək
delete möhürlənmiş.versiya;

const obyekt = {
  öz_xüsusiyyət: "dəyər",
};

// console.log(obyekt.hasOwnProperty("öz_xüsusiyyət")); // true
// console.log("öz_xüsusiyyət" in obyekt); // true
// console.log(obyekt.hasOwnProperty("toString"))
// console.log("valueOf" in obyekt); // true (prototipindən)
// console.log(obyekt);

const orijinal = {
  ad: "Kənan",
  yaş: 35,
  hobbilar: ["oxumaq", "idman"],
};

// const copy = orijinal;
// // console.log(copy);

// copy.ad = "Veli";

const kopya1 = Object.assign({}, orijinal);
kopya1.ad = "Veli";

// console.log("copy:",kopya1);

const dərin_kopya1 = JSON.parse(JSON.stringify(orijinal));
dərin_kopya1.ad = "Senan";

// Recursive funksiya ilə
function dərinKopya(obyekt) {
  if (obyekt === null || typeof obyekt !== "object") {
    return obyekt;
  }

  if (obyekt instanceof Date) {
    return new Date(obyekt.getTime());
  }

  if (obyekt instanceof Array) {
    return obyekt.map((element) => dərinKopya(element));
  }

  const kopya = {};
  for (let açar in obyekt) {
    if (obyekt.hasOwnProperty(açar)) {
      kopya[açar] = dərinKopya(obyekt[açar]);
    }
  }

  return kopya;
}

const dərin_kopya2 = dərinKopya(orijinal);

// destrukturizasiya
const user = {
  name: "Sabina",
  age: 28,
  email: "sabina@gmail.com",
  city: "Ganja",
};

// const { name: newName, age, email, city, postcode = "az1020" } = user;

const company = {
  name: "TechAZ",
  address: {
    city: "Baku",
    district: "Yasamal",
    postal_code: "AZ1000",
  },
  employees: 250,
};

const {
  name: company_name,
  address: { city, district },
  employees,
} = company;

// console.log(company_name); // TechAZ
// console.log(city);         // Baku
// console.log(district);     // Yasamal

// function userInfo({ name, age, email }) {
//     return `${name} (${age}) - ${email}`;
// }

// const info = userInfo(user);
// console.log(info); // Sabina (28) - sabina@gmail.com

// With default parameters
// function createProfile({
//     name,
//     age,
//     city = "Baku",
//     profession = "Not specified"
// } = {}) {
//     return { name, age, city, profession };
// }

// const information = createProfile(user)
// console.log(information);

// Prototip və miras
const animal = {
  type: "Dino",
  ad: "warik",
  makeSound() {
    console.log("Animal makes a sound");
  },
};

const dog = Object.create(animal);
dog.cins = "Golden Retriever";
dog.makeSound = function () {
  console.log("Hav hav!");
};

// prototype
function Heyvan(ad) {
  this.ad = ad;
  // ses_cixar{}
  // info(){}
}

Heyvan.prototype.səs_çıxar = function () {
  console.log(`${this.ad} səs çıxarır`);
};

Heyvan.prototype.info = function () {
  return `Bu ${this.ad} adlı heyvandır`;
};

const pişik = new Heyvan("Mırnav");
console.log(pişik.səs_çıxar());
console.log(pişik.info());

// miras

function It(ad, cins) {
  Heyvan.call(this, ad);
  this.cins = cins;
}

// Miras qurmaq
It.prototype = Object.create(Heyvan.prototype);
It.prototype.constructor = It;

// Override metod
It.prototype.səs_çıxar = function () {
  console.log(`${this.ad}: Hav hav!`);
};

// Yeni metod
It.prototype.gətir = function () {
  console.log(`${this.ad} topu gətirir`);
};

// const it = new It("Rex", "Çoban iti");
// it.səs_çıxar(); // Rex: Hav hav!
// it.gətir();

function Şəxs(ad, yaş, peşə) {
  this.ad = ad;
  this.yaş = yaş;
  this.peşə = peşə;

  // Metod (hər instance üçün yeni yaradılır - səmərəsiz)
  this.məlumat_ver = function () {
    return `${this.ad}, ${this.yaş} yaşında, ${this.peşə}`;
  };

//   this.yaş_artır = function () {
//     this.yaş++;
//     return this.yaş;
//   };
}

Şəxs.prototype.məlumat_ver = function () {
  return `${this.ad}:, ${this.peşə}`;
};

Şəxs.prototype.yaş_artır = function () {
  this.yaş++;
  return this.yaş;
};

Şəxs.prototype.toString = function () {
  return this.məlumat_ver();
};

const şəxs1 = new Şəxs("Elnur", 32, "Mühendis");
console.log(şəxs1.yaş_artır());

// ES6 Class 
class Heyvan2 {
  constructor(ad, yaş) {
    this.ad = ad;
    this.yaş = yaş;
  }
  
  // Instance metod
  səs_çıxar() {
    console.log(`${this.ad} səs çıxarır`);
  }
  
  // Getter
  get məlumat() {
    return `${this.ad} (${this.yaş} yaş)`;
  }
  
  // Setter
  set ad_dəyiş(yeni_ad) {
    if (yeni_ad.length < 2) {
      throw new Error("Ad çox qısadır");
    }
    this.ad = yeni_ad;
  }
  
  // Static metod
  static növ_müqayisə(heyvan1, heyvan2) {
    return heyvan1.constructor === heyvan2.constructor;
  }
}

// Miras
class Dog extends Heyvan2 {
  constructor(ad, yaş, cins) {
    super(ad, yaş); // Parent constructor çağırışı
    this.cins = cins;
  }
  
  // Method override
  səs_çıxar() {
    console.log(`${this.ad}: Hav hav!`);
  }
  
  // Yeni metod
  oyna() {
    console.log(`${this.ad} oyun oynayır`);
  }
}

const dog2 = new Dog("Buddy", 3, "Labrador");
dog2.səs_çıxar(); // Buddy: Hav hav!
dog2.oyna(); 
