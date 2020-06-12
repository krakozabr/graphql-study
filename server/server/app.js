const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');

const app = express();
const PORT = 3005;

mongoose.connect('mongodb+srv://maks_go:12345@graph-vydw2.mongodb.net/graph?retryWrites=true&w=majority', { useNewUrlParser: true });


app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: true
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));

app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server started!');
}); 