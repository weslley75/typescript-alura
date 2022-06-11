export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    let elemento: HTMLElement;
    const getter = function () {
      if (!elemento) {
        console.log(`Buscando elemento com o seletor ${seletor}`);
        elemento = document.querySelector(seletor) as HTMLElement;
      }
      return elemento;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}
