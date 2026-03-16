import { Produtos } from "../model/Produtos";

export interface ProdutosRespository {

    cadastrarProduto(produto: Produtos): void;
    listarProdutos(): void;
    buscarProdutos(sku:number): void;
    atualizarProdutos(produto: Produtos): void;
    deletar(sku:number):void;
}
