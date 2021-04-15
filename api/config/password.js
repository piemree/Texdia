const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/userModel");
let opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
/* opts.issuer = "accounts.examplesoft.com";
opts.audience = "yoursite.net"; */

module.exports = async (passport) => {
  passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
      try {
        let user = await User.findById(jwt_payload.id);

        if (user) return done(null, user);

        done(null, false);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
