const User = require('../models/User');

const middlewareFunction = async (req, res, next) => {
  try {
    const user = await User.findById(req.session.userID);
    if (!user) {
      return res.redirect('/login');
    }
    next();
  } catch (err) {
    res.redirect('/login');
  }
};
module.exports = middlewareFunction;