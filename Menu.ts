import readlinesync = require("readline-sync");
import { Vestidos } from "./src/model/Vestidos";
import { ProdutosController } from "./src/controller/ProdutosController";
import { Bolsas } from "./src/model/Bolsas";
import { colors } from "./src/util/Cores";

export function main() {

    let produtos: ProdutosController = new ProdutosController();
    let opcao, sku, categoria, preco: number;
    let titulo, tamanho, comprimento, estilo: string;
    let carteira: boolean;

    do {

        console.log(colors.fg.magentastrong + colors.bg.black);
        console.log("╔═════════════════════════════════════════════════════╗");
        console.log("║                                                     ║");
        console.log("║           MODA ATUAL - Gestão de Produtos           ║");
        console.log("║                                                     ║");
        console.log("╠═════════════════════════════════════════════════════╣");
        console.log("║                                                     ║");
        console.log("║      " + colors.fg.white + "1 - Cadastrar Produto                          " + colors.fg.magenta + "║");
        console.log("║      " + colors.fg.white + "2 - Listar todos os Produtos                   " + colors.fg.magenta + "║");
        console.log("║      " + colors.fg.white + "3 - Consultar Produto por SKU                  " + colors.fg.magenta + "║");
        console.log("║      " + colors.fg.white + "4 - Atualizar Produto                          " + colors.fg.magenta + "║");
        console.log("║      " + colors.fg.white + "5 - Deletar Produto                            " + colors.fg.magenta + "║");
        console.log("║      " + colors.fg.white + "6 - Sair                                       " + colors.fg.magenta + "║");
        console.log("║                                                     ║");
        console.log("╚═════════════════════════════════════════════════════╝" + colors.reset);
        console.log(colors.fg.whitestrong)
        opcao = readlinesync.questionInt("\n Digite a opção desejada: ")
        console.log(colors.reset)
        if (opcao === 6) {
            console.log(colors.fg.magenta, "\n Moda atual - Você nunca fora de moda!", colors.reset);
            sobre();
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\nCadastrar Produto", colors.reset);
                sku = readlinesync.questionInt("\nDigite o SKU do Produto: \n")
                titulo = readlinesync.question("\nDigite o título do produto: \n")
                console.log("Digite qual categoria: \n1 - Vestidos \n2 - Bolsas")
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
                console.log(colors.fg.whitestrong, "\nListar Produtos", colors.reset);
                produtos.listarProdutos();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nBuscar Pordutos", colors.reset);
                sku = readlinesync.questionInt("\nDigite o SKU do produto: \n");
                produtos.buscarProdutos(sku);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\nAtualizar Produtos", colors.reset);
                sku = readlinesync.questionInt("\nDigite o SKU do produto: \n");
                atualizarSubmenu(sku, produtos);
                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\nDeletar Produto", colors.reset);
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
    console.log(colors.fg.magenta + colors.bg.black);
    console.log("╔═════════════════════════════════════════════════════╗");
    console.log("║                                                     ║");
    console.log("║              PROJETO DESENVOLVIDO POR:              ║");
    console.log("║                                                     ║");
    console.log(colors.fg.magenta + "║" + colors.fg.white + "             Lohanna B.                              " + colors.fg.magenta + "║");
    console.log(colors.fg.magenta + "║" + colors.fg.white + "             Email: lohannausa@gmail.com             " + colors.fg.magenta + "║");
    console.log(colors.fg.magenta + "║" + colors.fg.white + "             GitHub: github.com/lohannab             " + colors.fg.magenta + "║");
    console.log("║                                                     ║");
    console.log("╚═════════════════════════════════════════════════════╝");
    console.log(colors.reset);

}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

function atualizarSubmenu(sku: number, controller: ProdutosController): void {
    try {
        const busca = controller.buscarNoArray(sku);
        if (!busca) return console.log(colors.fg.red,"\nProduto não encontrado!", colors.reset);

        let dados = {
            titulo: busca.nome,
            preco: busca.preco,
            categoria: busca.tipo,
            tamanho: (busca instanceof Vestidos) ? busca.tamanho : "",
            comprimento: (busca instanceof Vestidos) ? busca.comprimento : "",
            estilo: (busca instanceof Bolsas) ? busca.estilo : "",
            carteira: (busca instanceof Bolsas) ? busca.carteira : false
        };

        let continua = true;
        while (continua) {
            console.log(`\nModificando: ${dados.titulo} (Categoria Atual: ${dados.categoria === 1 ? 'Vestido' : 'Bolsa'})`);
            console.log("1 - Titulo            2 - Preço");
            console.log("3 - Alterar Categoria 4 - Atributos especificos");
            console.log("0 - Salvar e Sair");

            const op = readlinesync.questionInt("\nO que deseja alterar? ");

            switch (op) {
                case 1:
                    dados.titulo = readlinesync.question("Novo Titulo: ");
                    break;
                case 2:
                    dados.preco = readlinesync.questionFloat("Novo Preço: ");
                    break;
                case 3:
                    console.log(colors.bg.red, "\nATENÇÃO: Ao mudar a categoria, voce devera preencher os Atributos Especificos (Opcao 4).", colors.reset);
                    dados.categoria = readlinesync.questionInt("Nova Categoria (1 - Vestido / 2 - Bolsa): ");
                    break;
                case 4:
                    if (dados.categoria === 1) {
                        dados.tamanho = readlinesync.question("Novo Tamanho: ");
                        dados.comprimento = readlinesync.question("Novo Comprimento: ");
                    } else {
                        dados.estilo = readlinesync.question("Novo Estilo: ");
                        dados.carteira = readlinesync.keyInYNStrict("Acompanha Carteira? ");
                    }
                    break;
                case 0:
                    continua = false;
                    break;
            }

            if (op !== 0) continua = readlinesync.keyInYNStrict("\nDeseja alterar algo mais? ");
        }

        if (dados.categoria === 1) {
            controller.atualizarProdutos(new Vestidos(sku, dados.titulo, 1, dados.preco, dados.tamanho, dados.comprimento));
        } else {
            controller.atualizarProdutos(new Bolsas(sku, dados.titulo, 2, dados.preco, dados.estilo, dados.carteira));
        }
    } catch (error: any) {
        console.log(colors.fg.red, error.message, colors.reset);
    }
}

main();