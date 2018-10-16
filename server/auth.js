const passport = require('passport');

let LocalStrategy = require('passport-local').Strategy;

let strategy = new LocalStrategy(
    function (email, password, done) {
        console.log("CALL IN STRATEGY");
        const query = `
        query getUser {
            users{
                Email
                Passwd
            }
        }
        `;

        const variables = {};

        fetch('http://localhost:4466', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query, variables})
        })
            .then(response => response.json())
            .then(response => {
                const users = response.data.users;
                console.log(users);
                const user = users.find(el => el.Email === email);
                if (user === undefined)
                    throw new Error("Invalid username");
                if (user.Passwd !== password)
                    throw new Error("Invalid password");
                done(null, user);
            })
            .catch((e) => {
                done(e);
            });

    }
);

passport.use("local", strategy);

passport.serializeUser(function (user, done) {
    console.log("serialize user");
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    console.log("deserialize user");
    done(null, user);
});
