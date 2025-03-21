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

    if(email){
        res.send(email.toUpperCase());
    
    } else {
        res.send("You must provide an email")
    }
    
});

export { router };