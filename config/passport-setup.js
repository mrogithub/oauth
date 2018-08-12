const passport = require('passport');
const GoogleStrategy = require('paasport-google-oauth20');

passport.use(
    new GoogleStrategy({
        // options for the google strategy
    }), () => {
        // passport callback function
    }
);
