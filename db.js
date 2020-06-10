import Sequalize from 'sequelize';
// const Sequalize = require('sequelize')
// const _ = require('lodash')
// const Faker = require('faker')
import _ from 'lodash';
import faker from 'faker';

const Conn = new Sequalize(
    'products',
    'pedro',
    'postgres',
    {
        dialect: 'postgres',
        host: 'localhost'
    }
);

const Product = Conn.define('product', {
    name :{
        type: Sequalize.STRING,
        allowNull: false
    },
    description:{
        type: Sequalize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequalize.STRING,
        allowNull: false
    },
    imagen: {
        type: Sequalize.VIRTUAL,
        allowNull: true
    }
})

Conn.sync({force: true}).then(() =>{
    _.times(10, () => {
        return Product.create({
            name: faker.name.firstName(),
            description: faker.lorem.sentence(),
            price: faker.random.number(),
            imagen: faker.image.food(),
        })
    })
})

export default  Conn;