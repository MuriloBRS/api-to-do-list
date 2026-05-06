const taskController = require('../controllers/taskController');
const fs = require('fs').promises;

module.exports = (req, res) => {

  const url = req.url;
  const method = req.method;

  if (req.url === '/'){
    res.end("Home");
  }
  else if (req.url === '/usuarios') {
    async function lerArquivo() {
      const caminho = '../Dados.JSON';
      const conteudo = await fs.readFile(caminho,'utf-8');
      res.end(conteudo);
    }

  
  } else if (req.url === '/api') {
    res.end(JSON.stringify({mensagem:'API funcionando'}));
  
  }else {
    res.statusCode = 404;
    res.end('Rota não encontrada')
  }

  
};
