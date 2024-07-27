// Activity 1:
// task:1 Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const person = new Person('John', 30);
console.log(person.getGreeting());



//task2: Add a method to the Person class that updates the age property and logs the updated age.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`My updated age is ${this.age} years old.`);
    }
}
const person = new Person('John', 30);
console.log(person.getGreeting());
person.updateAge(31);



//Activity 2:
//task3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID//
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`My updated age is ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return `My student ID is ${this.studentId}.`;
    }
}
const student = new Student('Alice', 20, 'S12345');
console.log(student.getStudentId());



//Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`My updated age is ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getGreeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    getStudentId() {
        return `My student ID is ${this.studentId}.`;
    }
}
const student = new Student('Alice', 20, 'S12345');
console.log(student.getGreeting());



//Activity 3:
//task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`My updated age is ${this.age} years old.`);
    }

    static getGenericGreeting() {
        return 'Hello, this is a generic greeting message.';
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getGreeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    getStudentId() {
        return `My student ID is ${this.studentId}.`;
    }
}
console.log(Person.getGenericGreeting());



//Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`My updated age is ${this.age} years old.`);
    }

    static getGenericGreeting() {
        return 'Hello, this is a generic greeting message.';
    }
}

class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
        console.log(`Total number of students: ${Student.studentCount}`);
    }

    getGreeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    getStudentId() {
        return `My student ID is ${this.studentId}.`;
    }
}

// Create instances of the Student class
const student1 = new Student('Alice', 20, 'S12345');
const student2 = new Student('Bob', 22, 'S67890');
const student3 = new Student('Charlie', 19, 'S54321');



//Activity 4:
//task 7:Add a getter method to the Person class to return the full name (assume a firstliame and lastlame property). Create an instance and log the full name using the getter.
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`My updated age is ${this.age} years old.`);
    }

    static getGenericGreeting() {
        return 'Hello, this is a generic greeting message.';
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person = new Person('John', 'Doe', 30);
console.log(person.fullName);




//Task 8: Add a setter method to the Person class to update the name properties (firstName and lastflame). Update the name using the setter and log the updated full name.
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`My updated age is ${this.age} years old.`);
    }

    static getGenericGreeting() {
        return 'Hello, this is a generic greeting message.';
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person = new Person('John', 'Doe', 30);
console.log(person.fullName);
person.fullName = 'Jane Smith';
console.log(person.fullName);


//Activity 5:
//Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}.`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}.`);
        } else if (amount > this.#balance) {
            console.log('Insufficient funds.');
        } else {
            console.log('Withdraw amount must be positive.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}
const myAccount = new Account(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(1500);
console.log(`Current balance: $${myAccount.getBalance()}`);




//Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}.`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}.`);
        } else if (amount > this.#balance) {
            console.log('Insufficient funds.');
        } else {
            console.log('Withdraw amount must be positive.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}
const myAccount = new Account(1000);
console.log(`Initial balance: $${myAccount.getBalance()}`);
myAccount.deposit(500);
console.log(`Balance after deposit: $${myAccount.getBalance()}`);
myAccount.withdraw(200);
console.log(`Balance after withdrawal: $${myAccount.getBalance()}`);
myAccount.withdraw(1500);
console.log(`Balance after attempting to overdraw: $${myAccount.getBalance()}`);
myAccount.withdraw(100);
console.log(`Balance after another withdrawal: $${myAccount.getBalance()}`);



























 