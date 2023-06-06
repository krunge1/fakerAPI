//Express Import and Port assignment
const express = require("express");
const app = express();
const port = 8000;
//Faker Import function
const { faker } = require('@faker-js/faker');

//Express post setting requirements
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//User Creation using Faker Data
const createUser = () => {
    const fakeUser = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return fakeUser;
}
const newFakeUser = createUser();
// console.log(newFakeUser);

//Company Creation using Faker Data
const createCompany = () => {
    const fakeCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
    };
    return fakeCompany;
}
const newFakeCompany = createCompany();
// console.log(newFakeCompany);

//Home Route (Get Request)
app.get("/api", (req, res) => {
    res.json({ message: "Faker API" });
});

//User Routes
//Get User (Get Request)
app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
    });

//Company Routes
//Get Company (Get Request)
app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany);
    });

//User and Company Routes
//Get User and Company (Get Request)
app.get("/api/users/companies/new", (req, res) => {
    const groupedItems = {
        user: newFakeUser,
        company: newFakeCompany
    }
    res.json(groupedItems);
    });

//Express port listen function to run. Input at the bottom of codeblocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );