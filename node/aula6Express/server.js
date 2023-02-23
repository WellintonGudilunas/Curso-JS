// npm i express
const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})
app.get('/contato', (req, res) => {
    res.send('dshufsiuhfudhisfuihs');
})



app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor porta 3000');
}); 