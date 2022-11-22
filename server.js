const request = require('jest');
const app = require('./routes/User');
const mongoose = require('mongoose');


test.todo('It should response the GET method'), () => {
        const response = request(app).post("http://localhost:3001/users/add").json({
            Name: "Muqadisa",
            Email: "abc2gmail.com",
            Age: 20,
            Contact: 1234567890
    })
    expect(response.statusCode).toBe(200);
};

test.todo('It should response the DELEET method'), () => {
    const response = request(app).post("http://localhost:3001/users/637b2f13908ae118bc6772b0").json({
        Name: "Muqadisa",
        Email: "abc@gmail.com",
        Age: 20,
        Contact: 1234567890
})
expect(response.statusCode).toBe(200);
};

