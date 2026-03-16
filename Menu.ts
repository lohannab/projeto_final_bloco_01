import readlinesync = require("readline-sync");
import { Vestidos } from "./src/model/Vestidos";
import { ProdutosController } from "./src/controller/ProdutosController";
import { Bolsas } from "./src/model/Bolsas";

export function main() {

    let produtos: ProdutosController = new ProdutosController();
    let opcao, sku, categoria, preco: number;
    let titulo, tamanho, comprimento, estilo: string;
    let carteira: boolean;

    do {

        console.log("\n*****************************************************")
        console.log("\n                     Moda Atual                      ")
        console.log("\n*****************************************************")
        console.log("\n            1 - Cadastrar Produto                    ")
        console.log("            2 - Listar todos os Produtos             ")
        console.log("            3 - Consultar Produto por SKU            ")
        console.log("            4 - Atualizar Produto                    ")
        console.log("            5 - Deletar Produto                      ")
        console.log("            6 - Sair                                 ")
        console.log("\n*****************************************************")

        opcao = readlinesync.questionInt("\n Digite a opção desejada: ")

        if (opcao === 6) {
            console.log("\n Moda atual - Você nunca fora de moda!");
            sobre();
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log("\nCadastrar Produto");
                sku = readlinesync.questionInt("\nDigite o SKU do Produto: \n")
                titulo = readlinesync.question("\nDigite o título do produto: \n")
                console.log("Digite qual categoria: \n1 - Vestidos \n2-Bolsas")
                categoria = readlinesync.questionInt("\n")
                switch (categoria) {
                    case 1:
                        tamanho = readlinesync.question("\nQual o tamanho? \nP|M|G|gg \n")
                        comprimento = readlinesync.question("\nDigite o tamanho do comprimento: \n")
                        preco = readlinesync.questionFloat("\nDigite o preço \n")
                        produtos.cadastrarProduto(new Vestidos(sku, titulo, categoria, preco, tamanho, comprimento));
                        break;
                    case 2:
                        estilo = readlinesync.question("\nQual o estilo da bolsa? \n")
                        carteira = readlinesync.keyInYNStrict("\nAcompanha carteira?\n")
                        preco = readlinesync.questionFloat("\nDigite o preço \n")
                        produtos.cadastrarProduto(new Bolsas(sku, titulo, categoria, preco, estilo, carteira));
                        break;
                }
                keyPress()
                break;
            case 2:
                console.log("\nListar Produtos");
                produtos.listarProdutos();
                keyPress()
                break;
            case 3:
                console.log("\nBuscar Pordutos");
                sku = readlinesync.questionInt("\nDigite o SKU do produto: \n");
                produtos.buscarProdutos(sku);
                keyPress()
                break;
            case 4:
                console.log("\nAtualizar Produtos");
                try {
                    sku = readlinesync.questionInt("\nDigite o SKU do produto: \n");
                    let busca = produtos.buscarNoArray(sku);

                    if (busca !== null) {
                        titulo = readlinesync.question("\nDigite o novo Título: \n");
                        preco = readlinesync.questionFloat("\nDigite o novo Preço: \n");
                        categoria = busca.tipo;

                        if (categoria === 1) {
                            tamanho = readlinesync.question("\nDigite o novo Tamanho: \n");
                            comprimento = readlinesync.question("\nDigite o novo Comprimento: \n");
                            produtos.atualizarProdutos(new Vestidos(sku, titulo, categoria, preco, tamanho, comprimento));
                        } else {
                            estilo = readlinesync.question("\nNovo Estilo: \n");
                            carteira = readlinesync.keyInYNStrict("\nAcompanha carteira? \n");
                            produtos.atualizarProdutos(new Bolsas(sku, titulo, categoria, preco, estilo, carteira));
                        }
                    } else {
                        console.log("\nProduto não encontrado!");
                    }
                } catch (error: any) {
                    console.log("\nErro ao atualizar: " + error.message);
                }
                keyPress();
                break;
            case 5:
                console.log("\nDeletar Produto");
                sku = readlinesync.questionInt("\nDigite o SKU do produto: \n");
                produtos.deletar(sku);
                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!");
                keyPress()
                break;

        }

    } while (true)

}

function sobre(): void {
    console.log("\n*****************************************************")
    console.log("\nProjeto Desenvolvido por: ")
    console.log("Lohanna B - lohannausa@gmail.com")
    console.log("github.com/lohannab")
    console.log("\n*****************************************************")

}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();