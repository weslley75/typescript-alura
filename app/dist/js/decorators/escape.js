export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === "string") {
            return retorno.replace(/<script>[\s\S]*?<\/script>/gi, "");
        }
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=escape.js.map