const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    req.flash('success', `Category has been created successfully.`);
    res.status(201).redirect('/users/dashboard');
  } catch (error) {
    req.flash('error', `Wrong something happened!`);
    res.status(400).redirect('/users/dashboard');
  }
};
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.id);
    req.flash('success', `Category has been deleted successfully.`);
    res.status(201).redirect('/users/dashboard');
  } catch (error) {
    req.flash('error', `Wrong something happened!`);
    res.status(400).redirect('/users/dashboard');
  }
};
