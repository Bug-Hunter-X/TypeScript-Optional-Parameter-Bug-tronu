function printName(person: { name: string; age?: number }) {
  console.log(person.name);
  // Handle optional property gracefully
  if (person.age !== undefined) {
    console.log(person.age);
  }
}

const user = { name: "John Doe", age: 30 };
printName(user);

const user2 = { name: "Jane Doe" };
printName(user2); 
