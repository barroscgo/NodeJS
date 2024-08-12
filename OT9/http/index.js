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

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});