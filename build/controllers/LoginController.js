"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const decorators_1 = require("./decorators");
let LoginController = class LoginController {
    getLogin(req, res) {
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
          
          
          `); //Se entrar no localhost:3000/login preenchermos e clicarmos, enviará uma solicitação POST para fazer o login
    }
    postLogin(req, res) {
        const { email, password } = req.body;
        if (email && password && email === 'teste@teste.com' && password === 'password') {
            req.session = { loggedIn: true }; //middleware cookies-session nessa condição de login
            res.redirect('/'); //Redireciona o usuário após logado para home
        }
        else {
            res.send("Invalid email or password");
        }
    }
    getLogout(req, res) {
        req.session = undefined;
        res.redirect('/');
    }
};
exports.LoginController = LoginController;
__decorate([
    (0, decorators_1.get)('/login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getLogin", null);
__decorate([
    (0, decorators_1.post)('/login'),
    (0, decorators_1.bodyValidator)('email', 'password'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "postLogin", null);
__decorate([
    (0, decorators_1.get)('/logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getLogout", null);
exports.LoginController = LoginController = __decorate([
    (0, decorators_1.controller)('/auth')
], LoginController);
