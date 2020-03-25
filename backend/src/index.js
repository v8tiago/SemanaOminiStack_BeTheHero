const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * GET: Buscar/listar informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parametros
   * 
   * Query Params:Parâmetros nomeados enviados na rota após "?"(Filtros, paginação)
   * Route Params: Paramentros utilizados para identificar recursos
   * Request Body: Corpo da requeisição, urilizado para criar ou alterar recursos 
   */


