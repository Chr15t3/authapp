import { NextFunction, Request, Response  } from "express";
import { get, controller, bodyValidator, post } from "./decorators";



@controller('/auth')
export class LoginController {
@get('/login')

  getLogin(req: Request, res: Response): void  {
      res.send(`
          <form method="POST">
              <div>
              <label>Email</label>
              <input name = "email"/>
              </div>
  
              <div>
                  <label>Password</label>
                  <input name = "password" type="password"/>
              </div>
  
              <button>Submit</button>
          </form>
          
          
          `) //Se entrar no localhost:3000/login preenchermos e clicarmos, enviará uma solicitação POST para fazer o login
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin (req: Request, res: Response) {
      const { email, password } = req.body
  
      if(email && password && email === 'teste@teste.com' && password === 'password'){
          
          req.session = { loggedIn: true }//middleware cookies-session nessa condição de login
         
          res.redirect('/')  //Redireciona o usuário após logado para home
      } else {
          res.send("Invalid email or password")
      }
  
  }
}