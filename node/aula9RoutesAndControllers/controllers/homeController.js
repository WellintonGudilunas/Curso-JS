exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method ="POST">
            Nomeee: <input type="text" name="nome">
            Sobrenome: <input type="text" name="sobrenome">
            <button>enviar</button>
        </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de post')
}