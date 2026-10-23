import { Chamado, Prioridade, Situacao } from "./Chamado";
import { VetorChamados } from "./VetorChamados";

class ChamadosTest {
    private vetor: VetorChamados;

    constructor() {
        this.vetor = new VetorChamados();
    }

    private lerOpcaoPrioridade(): Prioridade {
        let resultado: Prioridade = Prioridade.BAIXA;
        let opcao: number;

        console.log("\nPrioridades:");
        console.log("0 - BAIXA");
        console.log("1 - MEDIA");
        console.log("2 - ALTA");

        console.log("3 - URGENTE");

        opcao = parseInt(prompt("Escolha a prioridade: ")!);

        while (opcao < 0 || opcao > 3) {
            console.log("Prioridade inválida.");
            opcao = parseInt(prompt("Escolha a prioridade: ")!);
        }

        resultado = opcao as Prioridade;
        return resultado;
    }

    private lerOpcaoSituacao(): Situacao {
        let resultado: Situacao = Situacao.ABERTO;
        let opcao: number;

        console.log("\nSituações:");
        console.log("0 - ABERTO");
        console.log("1 - EM_ATENDIMENTO");
        console.log("2 - RESOLVIDO");
        console.log("3 - CANCELADO");

        opcao = parseInt(prompt("Escolha a situação: ")!);

        while (opcao < 0 || opcao > 3) {
            console.log("Situação inválida.");
            opcao = parseInt(prompt("Escolha a situação: ")!);
        }

        resultado = opcao as Situacao;
        return resultado;
    }

    private cadastrarChamado(): void {
        let codigo: number;
        let solicitante: string;
        let descricao: string;
        let prioridade: Prioridade;
        let chamado: Chamado;
        let resultado: boolean;

        codigo = parseInt(prompt("Código do chamado: ")!);
        solicitante = prompt("Nome do solicitante: ")!;
        descricao = prompt("Descrição do problema: ")!;
        prioridade = this.lerOpcaoPrioridade();

        chamado = new Chamado(codigo, solicitante, descricao, prioridade);
        resultado = this.vetor.cadastrar(chamado);

          if (resultado) {
            console.log("Chamado cadastrado!");
            } else {
            console.log("Não foi possível cadastrar. Código duplicado ou limite de 100 chamados atingido.");
        }
    }

    private listarChamados(): void {
        let resultado: string;
        resultado = this.vetor.listar();
        console.log("\n=== LISTA DE CHAMADOS ===");
        console.log(resultado);
    }

    private localizarChamado(): void {
        let codigo: number;
        let posicao: number;
        let dados: string;

        codigo = parseInt(prompt("Digite o código do chamado: ")!);
        posicao = this.vetor.localizar(codigo);

        if (posicao != -1) {
            dados = this.vetor.consultar(codigo);
            console.log("\nChamado encontrado:");
            console.log(dados);
        } else {
            console.log("Chamado não encontrado.");
        }
    }

    private alterarPrioridade(): void {
        let codigo: number;
        let prioridade: Prioridade;
        let resultado: boolean;
           codigo = parseInt(prompt("Digite o código do chamado: ")!);
        prioridade = this.lerOpcaoPrioridade();

        resultado = this.vetor.alterarPrioridade(codigo, prioridade);

        if (resultado) {
            console.log("Prioridade alterada!");
        } else {
            console.log("Chamado não encontrado. Alteração não realizada.");
        }
    }

    private alterarSituacao(): void {
        let codigo: number;
        let situacao: Situacao;
        let resultado: boolean;

                codigo = parseInt(prompt("Digite o código do chamado: ")!);
        situacao = this.lerOpcaoSituacao();

        resultado = this.vetor.alterarSituacao(codigo, situacao);

        if (resultado) {
            console.log("Situação alterada!");
        } else {
            console.log("Chamado não encontrado. Alteração não realizada.");
        }
    }

    private excluirChamado(): void {
        let codigo: number;
        let resultado: boolean;

        codigo = parseInt(prompt("Digite o código do chamado: ")!);
        resultado = this.vetor.excluir(codigo);

        if (resultado) {
            console.log("Chamado excluído!");
        } else {
            console.log("Chamado não encontrado.");
        }
    }
}