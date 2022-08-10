'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RestaurantesSchema extends Schema {
  up () {
    this.create('restaurantes', (table) => {
      table.increments()
      table.timestamps()
      table.string("Productos", 255).notNullable();
      table.string("Servicios", 255).notNullable();
    })
  }

  down () {
    this.drop('restaurantes')
  }
}

module.exports = RestaurantesSchema
