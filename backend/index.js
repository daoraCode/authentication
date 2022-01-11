const express = require('express');
const app = express();
const port = 8000;
const session = require('express-session');
const passport = require('./config/passport');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}));


app.use(express.json());

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);


app.use(passport.initialize());
app.use(passport.session());


app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});

module.exports = app;