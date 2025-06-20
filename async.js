// console.log("1 - Sinxron kod");

// // Macrotask (setTimeout)
// setTimeout(() => console.log("2 - Macrotask"), 100);

// // Microtask (Promise)

// Promise.resolve().then(() => console.log("3 - Microtask"));

// console.log("4 - Sinxron kod");

// function getData(callback) {
//     setTimeout(() => {
//         callback(null, "Məlumatlar alındı");
//     }, 1000);
// }

// getData((error, data) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(data);
//     }
// });

// const fetchData = new Promise((resolve, reject) => {
//   const success = -1;
//   if (success === 1) {
//     resolve("Məlumatlar uğurla alındı!");
//   } else if (success === -1) {
//     reject("Məlumatların alınmasında xəta");
//   }
// });

// fetchData
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally((res) => console.log(res));

// function createUser(user) {
//   let users = JSON.parse(localStorage.getItem("users")) || [];
//   user.id = Date.now(); // unikal ID
//   users.push(user);
//   localStorage.setItem("users", JSON.stringify(users));
//   return user;
// }

// // İstifadə nümunəsi
// const eli = {
//   ad: "Əli",
//   soyad: "Məmmədov",
//   email: "ali@example.com",
// };

// const veli = {
//   ad: "Veli",
//   soyad: "Məmmədov",
//   email: "vali@example.com",
// };

// createUser(eli);
// createUser(veli);


async function getAllUsersAPI() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            console.log('İstifadəçilər:', users);
            return users;
        })
        .catch(error => {
            console.error('Xəta:', error);
        });
}
getAllUsersAPI()

// async function getUserByIdAPI(id) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         if (!response.ok) {
//             throw new Error('Şəxs tapılmadı');
//         }
//         const user = await response.json();
//         console.log('İstifadəçi:', user);
//         return user;
//     } catch (error) {
//         console.error('Xəta:', error);
//     }
// }
// getUserByIdAPI(3)

async function searchUsers(searchTerm) {
    const users = await getAllUsersAPI();
    const filtered = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Axtarış nəticələri:', filtered);
    return filtered;   
}

searchUsers('Leanne');




