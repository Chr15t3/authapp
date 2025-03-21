"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
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
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'teste@teste.com' && password === 'password') {
        req.session = { loggedIn: true }; //middleware cookies-session nessa condição de login
        res.redirect('/'); //Redireciona o usuário após logado para home
    }
    else {
        res.send("Invalid email or password");
    }
});
