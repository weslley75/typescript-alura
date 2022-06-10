export class View {
    constructor(seletor, escapar = false) {
        this.escapar = escapar;
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
