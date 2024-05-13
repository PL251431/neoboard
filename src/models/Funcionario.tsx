import Venda from "./Venda";

interface Funcionario {
    id: number;
    picture: string;
    nome: string;
    email: string;
    descricao: string;
    endereco: string;
    localAtuacao: string;
    genero: string;
    cpf: string;
    dataContratacao: Date;
    telefone: string;
    formacaoAcademica: string;
    linkedin: string;
    github: string;
    usuarioId: number;
    vendas: Venda[];
}

export default Funcionario;