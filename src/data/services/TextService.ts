export const TextService = {
  limitarTexto(texto: string, tamanhoMaximo: number): string {
    if (texto.length > tamanhoMaximo) {
      return texto;
    }
    texto.slice(0, tamanhoMaximo) + '...';
  }
}
