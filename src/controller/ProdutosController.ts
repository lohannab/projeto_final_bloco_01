import { Produtos } from "../model/Produtos";
import { ProdutosRespository } from "../repository/ProdutosRepository";
import { colors } from "../util/Cores";

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
        console.log(colors.fg.green,"\nProduto cadastrado com sucesso!",colors.reset)
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
            console.log(colors.fg.red,"\nProduto com o SKU: ",colors.fg.red, sku,colors.fg.red, " não foi encontrado!",colors.reset);
        }
    }

    atualizarProdutos(produto: Produtos): void {
        try {
            const buscaProduto = this.buscarNoArray(produto.sku);

            if (buscaProduto !== null) {
                const indice = this.listaProdutos.indexOf(buscaProduto);
                this.listaProdutos[indice] = produto;
                console.log(colors.fg.green,"\nProduto atualizado com sucesso!",colors.reset);
            } else {
                console.log(colors.fg.red,"\nNão foi possível atualizar! Tente novamente.",colors.reset)
            }
        } catch (error: any) {   
            console.log(colors.fg.red,error.message,colors.reset);
        }
    }

    deletar(sku: number): void {
        const buscaProduto = this.buscarNoArray(sku);

        if (buscaProduto !== null) {
            const indice = this.listaProdutos.indexOf(buscaProduto);
            this.listaProdutos.splice(indice, 1)
            console.log(colors.fg.green,"\nProduto deletado com sucesso!",colors.reset);
        } else {
            console.log(colors.fg.red,"\nNão foi possível deletar! Tente novamente.",colors.reset)
        }
    }

}