// const person = {
//   location:{city:'Sydney', temp:13},
//   age: 46
// };

// // Straight destructuring
// const {name:firstName = "Fide", age} = person;

// // Destructuring nested object
// const { city, temp } = person.location;

// console.log(`${firstName} is ${age} years old. ${name} hails from ${city}.`);

// if(city && typeof temp === 'number'){
//   console.log(`${name} lives in the city of ${city} where the temperature is ${temp} degrees.`)
// }

// Object Destructuring
  // const book = {
  //   title:"Ego is the enemy",
  //   author:"Ryan Holiday",
  //   publisher:{}
  // }

  // // const {title:bookTitle, author} = book;

  // const {name:publisherName = "Self-Published" } = book.publisher;

  // if(publisherName){
  //   console.log(publisherName);
  // }

  // Lesson - Array Destructuring
    // const address = ['10 Marlowe St.', 'Wetherill Park', 'Sydney'];
    // const [street, city, , zip='2164'] = address;
    // console.log(`I am in ${street}, ${city}  with the zip code - ${zip}`);

    const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

    const [product, , mediumPrice] = item;

    console.log(`A medium ${product} costs ${mediumPrice}`);