// IIFE - Immediately Invoked Function Expression

// (function chai(){
//   console.log("DB CONNECTED")
// })();
// ( () => {
//   console.log("DB CONNECTED two");
// }
// )()

const userEmail = 2;
// switch (userEmail) {
//   case 1:
//     console.log("from the one");
//     break;
//   case 2:
//     console.log("from the two");
//     break;
//   case 3:
//     console.log("from the three");
//     break;

//   default:
//     console.log("here you go with default...");
//     break;
// }

// userEmail >= 2 ? console.log("true") : console.log("false")

// const array = [1,2,4]
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(array[i]);
// }

const greetings = "hello world!";
for (const greet of greetings) {
  if (greet == " ") continue;
  console.log(`The charater is: ${greet}`);
}
