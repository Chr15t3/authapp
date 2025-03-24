import { Router, Request, Response  } from "express";

interface RequestWithBody extends Request {
        body: {[key: string]: string | undefined}
}

const router = Router()

router.get('/login', (req: Request, res: Response) => {
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
})

router.post('/login', (req: RequestWithBody, res)=>{
    const { email, password } = req.body

    if(email && password && email === 'teste@teste.com' && password === 'password'){
        
        req.session = { loggedIn: true }//middleware cookies-session nessa condição de login
       
        res.redirect('/')  //Redireciona o usuário após logado para home
    } else {
        res.send("Invalid email or password")
    }

});

router.get("/", (req, res) => {
if (req.session && req.session.loggedIn) {
    res.send(`
        
        <div>
        
        <div> You are logged in</div>
        <a href="/logout"> Logout</a>

        </div>
        
        `);
} else {
    res.send(`
        
        <div>
        
        <div> You are not logged in </div>
        <a href="/login">Login</a>


        </div>
        
        `)
}

})

export { router };