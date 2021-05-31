const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const passportConfig = require('./services/auth');
// const MongoStore = require('connect-mongo')(session);
const schema = require('./schema/schema');

// Create a new Express application
const app = express();

// Replace with your mongoLab URI
const MONGO_URI =
  'mongodb+srv://HassanKhan123:HassanKhan123@cluster0.d13tg.mongodb.net/auth?retryWrites=true&w=majority';

if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise

// Connect to the mongoDB instance and log a message
// on success or failure
(async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('mongodb connected');
  } catch (error) {
    console.error(error.message);
    //exit process with failure
    process.exit(1);
  }
})();

// Configures express to use sessions.  This places an encrypted identifier
// on the users cookie.  When a user makes a request, this middleware examines
// the cookie and modifies the request object to indicate which user made the request
// The cookie itself only contains the id of a session; more data about the session
// is stored inside of MongoDB.

let corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // <-- REQUIRED backend setting
};
app.use(cors(corsOptions));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'aaabbbccc',
    // store: new MongoStore({
    //   url: MONGO_URI,
    //   autoReconnect: true,
    // }),
  }),
);

// Passport is wired into express as a middleware. When a request comes in,
// Passport will examine the request's session (as set by the above config) and
// assign the current user to the 'req.user' object.  See also servces/auth.js
app.use(passport.initialize());
app.use(passport.session());

// Instruct Express to pass on any request made to the '/graphql' route
// to the GraphQL instance.
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  }),
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  next();
});

app.listen(5000, () => {
  `Listening on port 5000`;
});
