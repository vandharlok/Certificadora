module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.ENUM('1', '2', '3'),
      allowNull: false
    },
    options: {
      type: DataTypes.JSON,
      allowNull: false
    },
    correctAnswer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'questions'
  });

  return Question;
};
