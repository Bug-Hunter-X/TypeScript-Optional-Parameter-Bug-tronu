function printName(person: { name: string; age?: number }) {
  console.log(person.name);
}

const user = { name: "John Doe", age: 30 };
printName(user);

const user2 = { name: "Jane Doe" };
printName(user2);