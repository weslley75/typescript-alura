export abstract class View<T = string> {
  protected elemento: HTMLElement;
  constructor(seletor: string, private escapar = false) {
    this.elemento = document.querySelector(seletor);
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
