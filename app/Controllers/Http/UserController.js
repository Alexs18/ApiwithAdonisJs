'use strict'
const Usuario = use('App/Models/User');
// const Database = use('Database');
//import Database from '@ioc:Adonis/Lucid/Database'
const Database = use('Database')
class UserController {

  async showDatabase({request, auth,response}){

    try {
      let allusers = await Database.raw('select * from users');
      //console.log(Database);
      response.json({data:allusers.rows})

    } catch (error) {
      return error.message
    }
  }
  async Login({request, auth ,response}){
    const {email, password} = request.body;
    let token;
    try {
          token = await auth.attempt(email, password)
          return token
      } catch(error) {
        response.status(500).json({error})
      }
  }
  async createuser({request, response}){
    try {
      const {email, password} = await request.all();
      let UserNew = await Usuario.create({
        email,
        password,
        username:email
      })
      return this.Login(...arguments);
    }
   catch (error) {
     console.log(error)
  }
  }
  async hola({request, response}){
    debugger
    return{'say':'hola'}
  }
  async Delete({params, request, response, auth}){
    let user = auth.getUser();
    let {id} = params;

  }

}

module.exports = UserController
