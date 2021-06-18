'use strict'
const bcrypt = require('bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('users', [{
        name: 'Febrian',
        profession:'Student',
        role:'admin',
        email:'febrian26022001@gmail.com',
        password:await bcrypt.hash('123', 10),
        created_at:Date.now(),
        updated_at:Date.now()

      },
        {
          name: 'Ahmad',
          profession:'Student',
          role:'student',
          email:'ahmad@gmail.com',
          password:await bcrypt.hash('123', 10),
          created_at:Date.now(),
          updated_at:Date.now()

        }
      ], {})

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('users', null, {})

  }
}
