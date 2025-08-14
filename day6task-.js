// 1) Create an array of contact objects with properties and a method
let contacts = [
    {
        name: "Alice Johnson",
        phone: "123-456-7890",
        email: "alice@example.com",
        displayInfo: function () {
            // 2) Using destructuring inside a method
            const { name, phone, email } = this;
            console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
        }
    },
    {
        name: "Bob Smith",
        phone: "987-654-3210",
        email: "bob@example.com",
        displayInfo: function () {
            const { name, phone, email } = this;
            console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
        }
    }
];

// 3) Access contact properties using both dot and bracket notation
console.log("Dot notation:", contacts[0].name);
console.log("Bracket notation:", contacts[0]["email"]);

// Iterate through the array of contacts to print all contact details
console.log("\nAll Contacts:");
contacts.forEach(contact => contact.displayInfo());

// 4) Use rest parameters to create a function that adds multiple contacts
function addContacts(...newContacts) {
    contacts.push(...newContacts);
}

addContacts(
    {
        name: "Charlie Brown",
        phone: "555-555-5555",
        email: "charlie@example.com",
        displayInfo: function () {
            const { name, phone, email } = this;
            console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
        }
    },
    {
        name: "Diana Prince",
        phone: "111-222-3333",
        email: "diana@example.com",
        displayInfo: function () {
            const { name, phone, email } = this;
            console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
        }
    }
);

console.log("\nAfter Adding New Contacts:");
contacts.forEach(contact => contact.displayInfo());

// 5) Use the spread operator to merge multiple contact arrays
let moreContacts = [
    {
        name: "Edward Norton",
        phone: "444-444-4444",
        email: "edward@example.com",
        displayInfo: function () {
            const { name, phone, email } = this;
            console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
        }
    }
];

contacts = [...contacts, ...moreContacts];

console.log("\nAfter Merging Contact Arrays:");
contacts.forEach(contact => contact.displayInfo());

// Demonstrate call(), apply(), and bind()
let displayContact = function () {
    const { name, phone, email } = this;
    console.log(`(Borrowed Method) Name: ${name}, Phone: ${phone}, Email: ${email}`);
};

let extraContact = { name: "Frank Castle", phone: "999-999-9999", email: "frank@example.com" };

console.log("\nUsing call():");
displayContact.call(extraContact);

console.log("\nUsing apply():");
displayContact.apply(extraContact);

console.log("\nUsing bind():");
let boundDisplay = displayContact.bind(extraContact);
boundDisplay();
