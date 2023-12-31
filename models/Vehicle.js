'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vehicle.hasMany(models.Device, {
        foreignKey: 'vehicle_id',
        as: 'devices',
        onUpdate: 'CASCADE'
      });
    }
  }
  Vehicle.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    plat_number: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    created_at: DataTypes.DATE,
    created_by: DataTypes.STRING(50),
    updated_at: DataTypes.DATE,
    updated_by: DataTypes.STRING(50)
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Vehicle',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        name: "Vehicles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Vehicle;
}