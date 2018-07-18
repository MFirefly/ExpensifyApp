//---------------------------------------------------------------------------------------
// Object destructing
//---------------------------------------------------------------------------------------

// const person = {
//     name: "Maja",
//     age: 26,
//     location: {
//         city: "Zagreb",
//         temp: 25
//     }
// };
//
// // const name = person.name;
// // const age = person.age;
// const {name: firstName = "Anonymous", age} = person;
//
// console.log(`${firstName} is ${age}°C.`);
//
// const {city, temp: temperature} = person.location;
//
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };
//
// const {name: publisherName = "Self-Published"} = book.publisher;
//
// console.log(publisherName);

//------------------------------------------------------------------------------------
// Array destructing
//------------------------------------------------------------------------------------

const address = ['1299 South Juniper Street', 'Zagreb', 'Croatia', '10000'];
const [ , city, state = 'Djakovo'] = address; // Mapped by position. When want to skip, leave blank
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [it, , medium] = item;
console.log(`A medium ${it} costs ${medium}`);