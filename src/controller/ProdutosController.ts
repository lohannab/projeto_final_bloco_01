import { Produtos } from "../model/Produtos";
import { ProdutosRespository } from "../repository/ProdutosRepository";

export class ProdutosController implements ProdutosRespository {

    private listaProdutos = new Array<Produtos>();

    public buscarNoArray(sku: number): Produtos | null {
        for (let produto of this.listaProdutos) {
            if (produto.sku === sku) {
                return produto;
            }
        }
        return null;
    }

    cadastrarProduto(produto: Produtos): void {
        this.listaProdutos.push(produto)
        console.log("Produto cadastrado com sucesso!")
    }

    listarProdutos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    buscarProdutos(sku: number): void {
        const produto = this.buscarNoArray(sku);
        if (produto !== null) {
            produto.visualizar();
        } else {
            console.log("Produto com o SKU: ", sku, " não foi encontrado!");
        }
    }

    atualizarProdutos(produto: Produtos): void {
        try {
            const buscaProduto = this.buscarNoArray(produto.sku);

            if (buscaProduto !== null) {
                const indice = this.listaProdutos.indexOf(buscaProduto);
                this.listaProdutos[indice] = produto;
                console.log("Produto atualizado com sucesso!");
            } else {
                console.log("Não foi possível atualizar! Tente novamente.")
            }
        } catch (error: any) {   //se algo der ruim ele n quebra o codigo e imprime mensagem de erro
            console.log(error.message);
        }
    }

    deletar(sku: number): void {
        const buscaProduto = this.buscarNoArray(sku);

        if (buscaProduto !== null) {
            const indice = this.listaProdutos.indexOf(buscaProduto);
            this.listaProdutos.splice(indice, 1)
            console.log("Produto deletado com sucesso!");
        } else {
            console.log("Não foi possível deletar! Tente novamente.")
        }
    }

}