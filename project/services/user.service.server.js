var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");

module.exports = function(app, models) {

    var userModel = models.userModel;

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bobby",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

/*    app.get("/auth/facebook", passport.authenticate('facebook'));
    app.get("/auth/facebook/callback", passport.authenticate('facebook', {
        successRedirect: '/project/#/profile',
        failureRedirect: '/project/#/login'
    }));*/

    app.post("/api/user", createUser);
    app.post("/api/register", register);
    app.post("/api/logout", logout);
    app.post("/api/login", login);
    app.get("/api/user", getUsers);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);




    function register(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var email = req.body.email;

        findUserByUsername(username, res)
    }

    function logout(req, res) {
        req.logout();
        res.send(200);
    }

    function login(req, res) {
        var user = req.body;

        for(var i in users) {
            if(users[i].username === user.username && users[i].password === user.password ) {
                res.send(users[i]);
                return;
            }
        }

        res.status(404).send({msg: "username/password incorrect"});

    }

    function deleteUser(req, res) {
        var id = req.params.userId;

        userModel
            .deleteUser(id)
            .then(
                function(stats) {
                    console.log(stats);
                    res.send(200);
                },
                function(error) {
                    res.statusCode(404).send(error);
                }
            );

        // for(var i in users) {
        //     if (users[i]._id === id) {
        //         users.splice(i, 1);
        //         res.send(200);
        //         return;
        //     }
        // }
        // res.send(400);
    }

    function updateUser(req, res) {
        var id = req.params.userId;
        var newUser = req.body;

        userModel
            .updateUser(id, newUser)
            .then(
                function(stats) {
                    console.log(stats);
                    res.send(200);
                },
                function(error) {
                    res.statusCode(404).send(error);
                }
            );

        // for(var i in users) {
        //     if(users[i]._id === id) {
        //         users[i].firstName = newUser.firstName;
        //         users[i].lastName = newUser.lastName;
        //         res.send(200);
        //         return;
        //     }
        // }
        // res.send(400);
    }

    function createUser(req, res) {
        var user = req.body;

        userModel
            .createUser(user)
            .then(
                function(user) {
                    console.log(user);
                    res.json(user);
                },
                function(error) {
                    res.statusCode(400).send(error);
                }
            )

        // user._id = (new Date()).getTime()+"";
        // users.push(user);
        // res.send(user);
    }

    function findUserById(req, res) {
        var id = req.params.userId;

        console.log(req.session.currentUser);

        userModel
            .findUserById(id)
            .then(
                function(user) {
                    res.send(user);
                },
                function(error) {
                    res.statusCode(404).send(error);
                }
            )

        // for(var i in users) {
        //     if(users[i]._id === id) {
        //         res.send(users[i]);
        //         return;
        //     }
        // }
        // res.send({});
    }

    function getUsers(req, res) {
        var username = req.query['username'];
        var password = req.query['password'];
        console.log(username);
        console.log(password);
        if(username && password) {
            findUserByCredentials(username, password, req, res);
        } else if(username) {
            findUserByUsername(username, res);
        } else {
            res.send(users);
        }
    }

    function findUserByCredentials(username, password, req, res) {
        userModel
            .findUserByCredentials(username, password)
            .then(
                function (user) {

                    console.log(req.session);
                    req.session.currentUser = user;

                    res.json(user);
                },
                function(err) {
                    res.statusCode(404).send(err);
                }
            );
    }

    function findUserByUsername(username, res) {
        for(var i in users) {
            if(users[i].username === username) {
                res.send(users[i]);
                return;
            }
        }
        res.send({});
    }
};
