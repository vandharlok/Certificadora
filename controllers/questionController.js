const { Question } = require('../models');

exports.getQuestions = async (req, res) => {
  const order = req.query.order || 'ASC';

  try {
    const problems = await Question.findAll({
      attributes: ['title', 'difficulty'],
      limit: 10,
      order: [['difficulty', order]]
    });
    res.json(problems);
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving problems: " + error.message
    });
  }
};