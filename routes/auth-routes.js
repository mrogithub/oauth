const router = require('express').Router();
const passport = require('passport');

//auth login

router.get('/login', (req,res) => {
    res.render('login');
});

//auth logout
router.get('/logout', (req,res) =>{
    //handle with passport
    res.send('lggong out');
});


router.get('/google',
    passport.authenticate('google')
);


module.exports = router;