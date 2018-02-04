const express = require('express');
const passport = require('passport');
const router = express.Router();
var engines = require('consolidate');

//this page will contain different pages and the responses the server gives to get or post requests coming from those pages

//Right now all pages are set to send their name to the screen if the user makes a get request to the page by navigating
// to, for example, localhost:3000/home. None of these routes are protected yet, meaning anyone can access them.
router.get('/', function(req, res, next){
    res.render('index.html',{ message: req.flash('loginMessage')});
});

router.post('/index',passport.authenticate('local-login',{
    successRedirect:'/home',
    failureRedirect:'/index',
    failureFlash:true,
}));


router.get('/signup', function(req,res,next){
    res.render('signup.html',{message:req.flash('signupMessage')});
});

router.post('/signup',passport.authenticate('local-signup',{
    successRedirect:'/index',
    failureRedirect:'/signup',
    failureFlash:true,
}));

router.post('/home', isLoggedIn,function(req, res, next){
    res.render('home.html', {title:'Welcome to Verbatm'})
});

//Allows other files to access the router
module.exports = router;
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}