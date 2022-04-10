module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9333d2d7d97d6aa2da57075ce5099cc9'),
  },
});
