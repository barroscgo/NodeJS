import Express from 'express';

const app = Express();

app.get('/', (req, res) =>{
    res.send("<h3>Rotas no Express</h3><p>Rota '/'")
})

app.listen(3000, () =>{
    console.log('servidor iniciado na porta 3000')
})

//rota Sobre
app.get('/sobre', (req, res) =>{
    res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar rotas no expres")
})

//Utilizando URL para receber o parâmetro
app.get('/users/:name', (req, res) =>{ // recebe o parametro name 
    res.send('Usuário' + req.params.name)//exibe o parametro name
})

//ROTAS COM REQUISIÇÃO POST

var carros = ['fiesta', 'saveiro'];
app.use(Express.urlencoded({extended: true}));

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});

app.post('/cars/', (req, res) =>{
    let name = req.body.name;
    carros[(carros.length)] = name;
    return res.json([carros[(carros.length - 1)]])
})

app.put('/cars/update/:id', (req, res) =>{
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
})


app.delete('/cars/delete/:id', (req, res) =>{
    let id = req.params.id;
    carros[id] = null; //deletar item
    return res.json(carros[id]);
})