// import * as firebase from "firebase";

// Firebase doesn't support saving arrays. It gets converted to object structure

// const config = {
//     apiKey: "AIzaSyAnN7ZReMXwNVrDb-CQQRYcYygSfnITjaE",
//     authDomain: "expensify-e521d.firebaseapp.com",
//     databaseURL: "https://expensify-e521d.firebaseio.com",
//     projectId: "expensify-e521d",
//     storageBucket: "expensify-e521d.appspot.com",
//     messagingSenderId: "511699968713"
// };

// firebase.initializeApp(config);

// const database = firebase.database();

// child_removed - gets fired when child is removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed - fires when one of the children changes
// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added - fires when new child is added. Also gets called for existing children
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses")
//     .on("value", (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//
//         console.log(expenses);
//     });

// database.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//
//         console.log(expenses);
//     });

// database.ref("expenses").push({
//     description: "Rent",
//     note: "",
//     amount: 109500,
//     createdAt: 234308423409
// });

// database.ref("notes/-LHx6RzmAOH6X7qGfZUc").remove();

// database.ref("notes").push({
//    title: "Course topics",
//    body: "React, Angular"
// });

// This is how firebase actually saves notes
// const firebaseNotes = {
//     notes: {
//         adfad: {
//             title: "First node!",
//             body: "This is my note!"
//         },
//         addsadfad: {
//             title: "Second node!",
//             body: "This is my note!"
//         }
//     }
// };
// This is how we want to save notes
// const notes = [{
//     id: 12,
//     title: "First note!",
//     body: "This is my note"
// }, {
//     id: 12134,
//     title: "Second note!",
//     body: "This is my note"
// }];

// This enables us to get data initially and to listen to changes on database
// const onValueChange = database.ref().on("value", (snapshot) => {
//     console.log(snapshot.val());
// }, (error) => {
//     console.log("Error with data fetching", error);
// });
//
// setTimeout(() => {
//     database.ref("age").set(29);
// }, 3500);
//
// setTimeout(() => {
//     // Cancels all subscriptions
//     // To cancel only from specific subscription, give the same
//     // function as argument
//     database.ref().off("value", onValueChange);
// }, 7000);
//
// setTimeout(() => {
//     database.ref("age").set(30);
// }, 10500);

// Using "once" we retrieve data only once
// database.ref("location/city")
//     .once("value")
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log("Error fetching data", e);
//     });

// database.ref().set({
//     name: "Maja Filakovic",
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: "Software Engineer",
//         company: "Amphinicy"
//     },
//     location: {
//         city: "Zagreb",
//         country: "Croatia"
//     }
// }).then(() => {
//     console.log("Data is saved!");
// }).catch((e) => {
//     console.log("This failed", e);
// });

// This update updates only on the root level
// It won't update "location", it would replace it
// database.ref().update({
//     job: "Manager",
//     location: {
//         city: "Osijek"
//     }
// });

// This is a bit ugly, but city will be updated
// database.ref().update({
//     "job/title": "Manager",
//     "location/city": "Osijek"
// });

// database.ref().update({
//     "location/city": "Seattle",
//     stressLevel: 9,
//     "job/company": "Amazon"
// }).then(() => {
//     console.log("Data is updated!");
// }).catch((e) => {
//     console.log("Data update failed", e);
// });

// Also possible to remove data with set(null), but not that clear as remove()
// database.ref("isSingle").set(null);

// database.ref()
//     .remove()
//     .then(() => {
//     console.log("Data was removed");
// }).catch((e) => {
//     console.log("Data not remove data", e);
// });