import { ProdutoRepository } from './repository/produtoRepository'

const repo = new ProdutoRepository("context");

let x = repo.findById(2);

console.log(x);