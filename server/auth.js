const passport = require('passport');

let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'ZERTY42VGDIAOZDNAZD';

let strategy = new JwtStrategy(opts, function(jwt_payload, done) {
    const query = `
        query getUser($id: ID!) {
            user(Id: $id){
                Email
                Passwd
            }
        }
        `;

    const variables = {
        id: jwt_payload.sub
    };

    fetch('http://localhost:4467', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({mutation: query, variables})
    })
        .then(response => response.json())
        .then(response => {
            return done(null, response.data.user);
        })
        .catch((e) => {
            done(e);
        });
});

passport.use("jwt", strategy);

passport.serializeUser(function (user, done) {
    done(null, user.Id);
});

passport.deserializeUser(function (id, done) {
    const query = `
        query getUser($id: ID!) {
            user(Id: $id){
                Email
                Passwd
            }
        }
        `;

    const variables = {
        id: id
    };

    fetch('http://localhost:4467', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({mutation: query, variables})
    })
        .then(response => response.json())
        .then(response => {
            return done(null, response.data.user);
        })
        .catch((e) => {
            done(e);
        });
});
