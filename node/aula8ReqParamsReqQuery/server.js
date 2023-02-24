// NPM INSTALL

const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))

app.get('/', (req, resp) => {
    resp.send(`
        <form action="/" method ="POST">
            Nomeee: <input type="text" name="nome">
            Sobrenome: <input type="text" name="sobrenome">
            <button>enviar</button>
        </form>
    `);
});
app.get('/testes/:idUsuarios?/:param?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`o q vc me enviou foi: ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor porta 3000');
}); 

