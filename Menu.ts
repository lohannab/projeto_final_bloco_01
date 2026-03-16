import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

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
                keyPress()
                break;
            case 2:
                console.log("\nListar Produtos");
                keyPress()
                break;
            case 3:
                console.log("\nBuscar Pordutos");
                keyPress()
                break;
            case 4:
                console.log("\nAtualizar Produtos");
                keyPress()
                break;
            case 5:
                console.log("\nDeletar Produto");
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