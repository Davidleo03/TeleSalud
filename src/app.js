import express from 'express';
import session from 'express-session';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import router from './route.js'


const __dirname =  dirname(fileURLToPath(import.meta.url));



const app = express();


app.set('view engine', 'ejs');
app.set('views',  __dirname + '/views');

app.use('/recursos', express.static(join(__dirname, 'public')));

app.use(session({
    secret : "misecreto",
    resave: false,
    saveUninitialized : false,
    cookie: {
        maxAge :1000 * 60 * 60 * 40
    }
}))
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/', router);

const port = 4000 || process.env.PORT;


app.listen(port, () => console.log(`Server Running on port ${port}`))