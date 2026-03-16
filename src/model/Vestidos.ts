import { Produtos } from "./Produtos";

export class Vestidos extends Produtos {

    private _tamanho: string;
    private _comprimento: string;

    constructor(sku: number, titulo: string, categoria: number, preco: number, tamanho: string, comprimento: string) {
        super(sku, titulo, categoria, preco)
        this._tamanho = tamanho
        this._comprimento = comprimento

    }

    public get tamanho(): string {
        return this._tamanho;
    }

    public set tamanho(valor: string) {
        this._tamanho = valor;
    }

    public get comprimento(): string {
        return this._comprimento;
    }

    public set comprimento(valor: string) {
        this._comprimento = valor;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Tamanho: ${this._tamanho}`);
        console.log(`Comprimento: ${this.comprimento}`);
    }

}
