export abstract class Produtos {
    private _sku: number;
    private _titulo:string;
    private _categoria: number;
    private _preco: number;

    constructor(sku: number, titulo: string, categoria: number, preco: number) {
        this._sku = sku;
        this._titulo = titulo;
        this._categoria = categoria;
        this._preco = preco;
    }

    public get sku(): number {
        return this._sku;
    }

    public set sku(valor: number) {
        this._sku = valor;
    }

    public get nome(): string {
        return this._titulo;
    }

    public set nome(valor: string) {
        this._titulo = valor;
    }

    public get tipo(): number {
        return this._categoria;
    }

    public set tipo(valor: number) {
        this._categoria = valor;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(valor: number) {
        this._preco = valor;
    }

    public visualizar(): void {

        let categoriaProduto: string = "";

        switch (this._categoria) {
            case 1:
                categoriaProduto = "Vestidos";
                break;
            case 2:
                categoriaProduto = "Bolsas";
                break;
        }

        console.log("\nInformações do Produto cadastrado: ")
        console.log(`SKU: ${this._sku}`);
        console.log(`Título: ${this._titulo}`);
        console.log(`Categoria: ${categoriaProduto}`);
        console.log(`Preço R$: ${this._preco.toFixed(2)}`);
    }

}