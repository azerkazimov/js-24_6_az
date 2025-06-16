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

const fetchData = new Promise((resolve, reject) => {
  const success = -1;
  if (success === 1) {
    resolve("Məlumatlar uğurla alındı!");
  } else if (success === -1) {
    reject("Məlumatların alınmasında xəta");
  }
});

fetchData
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally((res) => console.log(res));
