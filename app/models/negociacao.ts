export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data() {
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume() {
    return this.quantidade * this.valor;
  }

  public static criaDe(
    dateString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const date = new Date(dateString.replace(/-/g, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }
}
