export enum Prioridade {
    BAIXA,
    MEDIA,
    ALTA,
    URGENTE
}

export enum Situacao {
    ABERTO,
    EM_ATENDIMENTO,
    RESOLVIDO,
    CANCELADO
}

export class Chamado {
    private codigo: number;
    private solicitante: string;
    private descricao: string;
    private prioridade: Prioridade;
    private situacao: Situacao;

    constructor(codigo: number, solicitante: string, descricao: string, prioridade: Prioridade) {
        this.codigo = codigo;
        this.solicitante = solicitante;
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.situacao = Situacao.ABERTO;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public getSolicitante(): string {
        return this.solicitante;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getPrioridade(): Prioridade {
        return this.prioridade;
    }

    public getSituacao(): Situacao {
        return this.situacao;
    }

    public setPrioridade(novaPrioridade: Prioridade): void {
        this.prioridade = novaPrioridade;
    }

        public setSituacao(novaSituacao: Situacao): void {
        this.situacao = novaSituacao;
    }

    public apresentarDados(): string {
        let resultado: string;

        resultado =
            "Código: " + this.codigo +
            "\nSolicitante: " + this.solicitante +
            "\nDescrição: " + this.descricao +
            "\nPrioridade: " + Prioridade[this.prioridade] +
            "\nSituação: " + Situacao[this.situacao];

        return resultado;
    }
}
