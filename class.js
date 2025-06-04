// class Avtomobil {
//   constructor(marka, model, il) {
//     this.marka = marka;
//     this.model = model;
//     this.il = il;
//   }
  
//   sür() {
//     console.log(`${this.marka} ${this.model} servisdedir`);
//   }
// }

// const maşın = new Avtomobil("BMW", "X5", 2020);


// class Student {
//     constructor(name, surname, age, faculty) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.faculty = faculty;
//         this.grades = [];
//         this.registration_date = new Date();
//     }
    
//     full_name() {
//         return `${this.name} ${this.surname}`;
//     }
    
//     add_grade(subject, grade) {
//         this.grades.push({ subject, grade, date: new Date() });
//     }
    
//     calculate_average_grade() {
//         if (this.grades.length === 0) return 0;
        
//         const sum = this.grades.reduce((sum, elem) => sum + elem.grade, 0);
//         return Math.round((sum / this.grades.length) * 100) / 100;
//     }
    
//     show_info() {
//         return {
//             full_name: this.full_name(),
//             age: this.age,
//             faculty: this.faculty,
//             average_grade: this.calculate_average_grade(),
//             grade_count: this.grades.length
//         };
//     }
// }

// // Usage
// const veli = new Student("Vali", "Mammadov", 20, "Informatics");

// veli.add_grade("Mathematics", 90);
// veli.add_grade("Physics", 85);
// veli.add_grade("JS", 86);
// veli.add_grade("React", 88);

// console.log(veli.grades);
// console.log(veli.show_info());


// class Company {
//     constructor(name, field, employee_count = 0) {
//         if (!name || !field) {
//             throw new Error("Company name and field are required");
//         }
        
//         this.name = name;
//         this.field = field;
//         this.employee_count = employee_count;
//         this.creation_date = new Date();
//         this.departments = [];
        
//         // Methods called immediately in constructor
//         this.initial_configuration();
//     }
    
//     initial_configuration() {
//         console.log(`${this.name} company created`);
//         this.departments.push("Human Resources");
//         this.departments.push("Finance");
//     }
    
//     add_department(department_name) {
//         if (!this.departments.includes(department_name)) {
//             this.departments.push(department_name);
//             return true;
//         }
//         return false;
//     }
    
//     add_employee(amount = 1) {
//         this.employee_count += amount; // employee_count = employee_count + amount
//     }
    
//     company_info() {
//         const age = new Date().getFullYear() - this.creation_date.getFullYear();
//         return {
//             name: this.name,
//             field: this.field,
//             employee_count: this.employee_count,
//             departments: this.departments,
//             age: age
//         };
//     }
// }

// const company = new Company("TechAz", "Technology");
// company.add_department("Technology")
// company.add_employee(32)
// company.add_employee(32)
// company.add_employee(24)
// console.log(
//     company.company_info()
// );

// teacher - count 
// student - count
// subject - array
// this.initial_configuration - default add 2 subject

// if not academy name and type don't create new academy
// default 2 subject 
// default add 1 student in method
// academy.add_subject("Development");
// academy.add_student(10);
// console.log(academy.academy_info());


// class Calculator {
//     constructor() {
//         this.result = 0;
//         this.operation_history = [];
//     }
    
//     // Basic arithmetic operations
//     add(number) {
//         this.record_operation('add', number);
//         this.result += number;
//         return this; // For method chaining
//     }
    
//     subtract(number) {
//         this.record_operation('subtract', number);
//         this.result -= number;
//         return this;
//     }
    
//     multiply(number) {
//         this.record_operation('multiply', number);
//         this.result *= number;
//         return this;
//     }
    
//     divide(number) {
//         if (number === 0) {
//             throw new Error("Cannot divide by zero");
//         }
//         this.record_operation('divide', number);
//         this.result /= number;
//         return this;
//     }
    
//     // Advanced functions
//     power(exponent) {
//         this.record_operation('power', exponent);
//         this.result = Math.pow(this.result, exponent);
//         return this;
//     }
    
//     sqrt() {
//         if (this.result < 0) {
//             throw new Error("Cannot take square root of negative number");
//         }
//         this.record_operation('sqrt', null);
//         this.result = Math.sqrt(this.result);
//         return this;
//     }
    
//     // Helper methods
//     record_operation(operation, value) {
//         this.operation_history.push({
//             operation,
//             value,
//             previous_result: this.result,
//             date: new Date()
//         });
//     }
    
//     reset() {
//         this.result = 0;
//         this.operation_history = [];
//         return this;
//     }
    
//     get_result() {
//         return this.result;
//     }
    
//     show_history() {
//         return this.operation_history;
//     }
    
//     last_operation() {
//         return this.operation_history[this.operation_history.length - 1];
//     }
// }

// // Method Chaining example
// const calc = new Calculator();
// const result = calc
//     .add(10)
//     .multiply(2)
//     .subtract(5)
//     .divide(3)
//     .get_result();

// console.log(result); // 5
// console.log(calc.show_history());

// class User {
//     constructor(name, email, birth_date) {
//         this._name = name;
//         this._email = email;
//         this._birth_date = new Date(birth_date);
//         this._profile_picture = null;
//         this._status = "active";
//     }
    
//     // Getter/setter for name
//     get name() {
//         return this._name;
//     }
    
//     set name(new_name) {
//         if (typeof new_name !== 'string' || new_name.length < 2) {
//             throw new Error("Name must be at least 2 characters");
//         }
//         this._name = new_name.trim("Name");
//     }
    
//     // Getter/setter for email
//     get email() {
//         return this._email;
//     }
    
//     set email(new_email) {
//         const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email@mail.com
//         if (!email_regex.test(new_email)) {
//             throw new Error("Enter a valid email format");
//         }
//         this._email = new_email.trim().toLowerCase();
//     }
    
//     // Age is calculated (getter only)
//     get age() {
//         const today = new Date();
//         let age = today.getFullYear() - this._birth_date.getFullYear();
//         const month_diff = today.getMonth() - this._birth_date.getMonth();
        
//         if (month_diff < 0 || (month_diff === 0 && today.getDate() < this._birth_date.getDate())) {
//             return age - 1;
//         }
//         return age;
//     }
    
//     // Getter/setter for status
//     get status() {
//         return this._status;
//     }
    
//     set status(new_status) {
//         const allowed_statuses = ["active", "inactive", "pending", "blocked"];
//         if (!allowed_statuses.includes(new_status)) {
//             throw new Error(`Status must be one of: ${allowed_statuses.join(", ")}`);
//         }
//         this._status = new_status;
//     }
    
//     // Full info (getter only)
//     get full_info() {
//         return {
//             name: this._name,
//             email: this._email,
//             age: this.age,
//             status: this._status,
//             has_profile_picture: this._profile_picture !== null
//         };
//     }
    
//     // Setter for profile picture
//     set profile_picture(picture_url) {
//         if (picture_url && typeof picture_url === 'string') {
//             try {
//                 new URL(picture_url);
//                 this._profile_picture = picture_url;
//             } catch {
//                 throw new Error("Enter a valid URL format");
//             }
//         } else {
//             this._profile_picture = null;
//         }
//     }
    
//     get profile_picture() {
//         return this._profile_picture || "https://via.placeholder.com/150";
//     }
// }

// // Usage example
// const ali = new User("Ali Mammadov", "ali@example.com", "1990-05-15");

// // // Test setters
// // ali.name = "Vali Hasanov";
// // ali.status = "inactive";
// // ali.profile_picture = "https://example.com/profile.jpg";
// console.log(ali.full_info);

// ali.name = "Veli Hasanov"
// ali.email = "veli@mail.com"
// // ali.setEmail("veli@mail.com")
// ali.status = "blocked"


// console.log(ali.full_info);
class Car {
    constructor(brand, model, year, engine_type) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engine_type = engine_type;
        this.creation_date = new Date();
    }
    
    // Static factory methods
    static createBMW(model, year) {
        return new Car("BMW", model, year, "petrol");
    }
    
    static createTesla(model, year) {
        return new Car("Tesla", model, year, "electric");
    }
    
    static createToyota(model, year) {
        return new Car("Toyota", model, year, "hybrid");
    }
    
    static fromData(data_object) {
        return new Car(
            data_object.brand,
            data_object.model,
            data_object.year,
            data_object.engine_type
        );
    }
    
    info() {
        return `${this.brand} ${this.model} (${this.year}) - ${this.engine_type}`;
    }
}

// Usage of factory methods
const bmwf30 = Car.createBMW("3 series", 2016);
const bmwg30 = Car.createBMW("5 series", 2023);
const tesla = Car.createTesla("Model 3", 2023);
const toyota = Car.createToyota("Prius", 2023);





console.log(bmwf30.info());
console.log(bmwg30.info());
console.log(tesla.info());
console.log(toyota.info());


