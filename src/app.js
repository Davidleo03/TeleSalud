import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import router from './route.js'


const __dirname =  dirname(fileURLToPath(import.meta.url));



const app = express();


app.set('view engine', 'ejs');
app.set('views',  __dirname + '/views');

app.use('/recursos', express.static(join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/', router);


const port = 3000 || process.env.PORT;


app.listen(port, () => console.log(`Server Running on port ${port}`))