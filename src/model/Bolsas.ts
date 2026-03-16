import { Produtos } from "./Produtos";

export class Bolsas extends Produtos {

    private _estilo: string;
    private _carteira: boolean;

    constructor(sku: number, titulo: string, categoria: number, preco: number, estilo: string, carteira: boolean) {
        super(sku, titulo, categoria, preco)
        this._estilo = estilo
        this._carteira = carteira

    }

    public get estilo(): string {
        return this._estilo;
    }

    public set estilo(valor: string) {
        this._estilo = valor;
    }

    public get carteira(): boolean {
        return this._carteira;
    }

    public set carteira(valor: boolean) {
        this._carteira = valor;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Estilo: ${this._estilo}`);
        console.log(`Acompanha Carteira? ${this.carteira}`);
    }
}
