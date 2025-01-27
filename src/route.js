import { Router } from "express";
import db from "./db.js";

const router = Router();

function Auntnticate (req, res, next) {
    if(req.session.autenticate) return next();

    res.status(401).send("No estas autorizado para acceder a esta página");
}

router.get('/', (req, res) => {
    res.render('example')
})

router.post("/msg", (req, res) => {
    const { name, email, msg } = req.body;
    res.redirect('/')
})

router.get('/login', (req, res) => {
    res.render("login")
    
})

router.post('/login', (req, res) => {
    const { email, pass } = req.body;
    const username  = {
        email : 'telesalud@gmail.com',
        pass : 'telesalud-admin-123'
    }
    if(email == username.email && pass == username.pass) {
        req.session.autenticate = true;
        res.redirect('/admin')
    } else {
        res.status(401).send('Creadenciales Incorrectas')
    }

})

router.get("/admin", Auntnticate, (req, res) => {
    db.all("SELECT * FROM Messages", (err, rows) => {
        console.log(rows)
        if(err) return res.send("Error al obtener los mensajes");
        res.render('admin', {messages: rows});

    })
})

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if(err) return res.status(500).send("Error al cerrar sesión")
    })
    res.redirect('/')

})





export default router;