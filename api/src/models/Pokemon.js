const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
 
  sequelize.define("Pokemon", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
      type: DataTypes.STRING,
    },
    ataque: {
      type: DataTypes.STRING,
    },
    defensa: {
      type: DataTypes.STRING,
    },
    velocidad: {
      type: DataTypes.STRING,
    },
    altura: {
      type: DataTypes.STRING,
    },
    peso: {
      type: DataTypes.STRING,
    },    
  },
  {timestamps: false}
  );

  
};
