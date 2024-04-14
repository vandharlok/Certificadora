module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.ENUM('1', '2', '3'),
      allowNull: false
    }
  }, {
    tableName: 'questions'
  });

  return Question;
};