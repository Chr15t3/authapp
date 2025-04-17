import { Router, Request, Response, NextFunction  } from "express";


interface RequestWithBody extends Request {
        body: {[key: string]: string | undefined}
}


function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
         next();
        return;
        
    }

    res.status(403);
    res.send("Not permitted")
    
}

const router = Router()



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

router.get("/logout", (req, res)=>{
    req.session = undefined
    res.redirect('/')
});

router.get("/protected", requireAuth, (req, res)=>{
    res.send("Welcome to protected route, logged in user!")
})

export { router };