const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Basket = sequelize.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const ShopsProduct = sequelize.define('shops_product', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Shops = sequelize.define('shops', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, autoNull: false},
})

const Product = sequelize.define('product', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  img: {type: DataTypes.STRING,allowNull: false},
})

const Orders = sequelize.define('orders', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  productId: {type: DataTypes.INTEGER, unique: true, allowNull: false},
  amount: {type: DataTypes.INTEGER, allowNull: false},
  totalPrice: {type: DataTypes.INTEGER, allowNull: false},
  email, tel
})

Shops.hasMany(ShopsProduct)
ShopsProduct.belongsTo(Shops)

Product.hasMany(ShopsProduct)
ShopsProduct.belongsTo(Product)


Product.belongsTo(Shops)

module.exports = {
  Basket,
  BasketProduct,
  Product,
  Shops
}

