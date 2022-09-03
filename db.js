const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://rajeswaran:WQlO2zYL8aK1vtfO@cluster0.eutso4r.mongodb.net/password-reset?retryWrites=true&w=majority"

module.exports = connection = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(mongoURL, connectionParams);
        console.log("connected to database.");
    } catch (error) {
        console.log(error, "could not connect database.");
    }
};
