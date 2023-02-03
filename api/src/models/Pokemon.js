const { DataTypes } = require("sequelize");
//NIY VALIDACIONES Y TEASTING
module.exports = (sequelize) => {
  sequelize.define(
    "Pokemon",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-zA-Z]+$/,
        },
      },
      vida: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ataque: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      defensa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      velocidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      altura: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      peso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
