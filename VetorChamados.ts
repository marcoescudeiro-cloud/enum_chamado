import { Chamado, Prioridade, Situacao } from "./Chamado";

export class VetorChamados {
    private chamados: Chamado[];
    private quantidade: number;

    constructor() {
        this.chamados = new Array<Chamado>(100);
        this.quantidade = 0;
    }
      public cadastrar(chamado: Chamado): boolean {
        let resultado: boolean = false;
        let posicao: number;
        posicao = this.localizar(chamado.getCodigo());

        if (this.quantidade < 100 && posicao == -1) {
            this.chamados[this.quantidade] = chamado;
            this.quantidade++;
            resultado = true;
        }

        return resultado;
    }
    public localizar(codigo: number): number {
        let resultado: number = -1;
        let i: number = 0;

        while (i < this.quantidade && resultado == -1) {
            if (this.chamados[i].getCodigo() == codigo) {
                resultado = i;
            }
                i++;
        }

        return resultado;
    }

    public listar(): string {
        let resultado: string = "";
        let i: number = 0;

        if (this.quantidade == 0) {
            resultado = "Não existem chamados cadastrados.";
        } else {
            while (i < this.quantidade) {
                resultado += this.chamados[i].apresentarDados() + "\n-------------------------\n";
                i++;
            }
        }
        return resultado;
    }
        public consultar(codigo: number): string {
        let resultado: string = "Chamado não encontrado.";
        let posicao: number;
        posicao = this.localizar(codigo);

        if (posicao != -1) {
            resultado = this.chamados[posicao].apresentarDados();
        }

        return resultado;
    }

    public alterarPrioridade(codigo: number, novaPrioridade: Prioridade): boolean {
        let resultado: boolean = false;
        let posicao: number;
        posicao = this.localizar(codigo);

        if (posicao != -1) {
            this.chamados[posicao].setPrioridade(novaPrioridade);
            resultado = true;
        }

        return resultado;
    }

    public alterarSituacao(codigo: number, novaSituacao: Situacao): boolean {
        let resultado: boolean = false;
        let posicao: number;
        posicao = this.localizar(codigo);

        if (posicao != -1) {
                        this.chamados[posicao].setSituacao(novaSituacao);
            resultado = true;
        }

        return resultado;
    }

    public excluir(codigo: number): boolean {
        let resultado: boolean = false;
        let posicao: number;
        let i: number;

        posicao = this.localizar(codigo);

        if (posicao != -1) {
            i = posicao;

            while (i < this.quantidade - 1) {
                this.chamados[i] = this.chamados[i + 1];
                i++;
            }

            this.quantidade--;
            resultado = true;
        }

        return resultado;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }
}
