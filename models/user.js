module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address: DataTypes.STRING,
        age: DataTypes.INTEGER,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        gender: DataTypes.ENUM('male', 'female', 'other'),
        note: DataTypes.TEXT,
        status: DataTypes.ENUM('active', 'inactive'),
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'users',
        timestamps: true
    });

    
    return User;
};
