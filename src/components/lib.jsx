export const pages = {
    HOME: "home",
    AVIAO: "aviao",
    FUNCIONARIO: "funcionario",
    PASSAGEIRO: "passageiro",
    VIAGEM: "viagem",
    LOCALIZACAO: "localizacao",
    PASSAGEM: "passagem",
    TRIPULACAO: "tripulacao",
};

export const funcionario = [
    { name: "CPF", prop: "cpf" },
    { name: "Nome", prop: "nome" },
    { name: "Cargo", prop: "cargo" },
    { name: "Data de Contratação", prop: "dataContratacao" },
    { name: "Horas de Voo", prop: "hrVoo" },
];

export const aviao = [
    { name: "ID", prop: "id" },
    { name: "Modelo", prop: "modelo" },
    { name: "Data de Fabricação", prop: "dataFabricacao" },
    { name: "Data Última Manutenção", prop: "dataUltimaManutencao" },
    { name: "Capacidade", prop: "capacidade" },
];

export const passageiro = [
    { name: "CPF", prop: "cpf" },
    { name: "Nome", prop: "nome" },
    { name: "Data de Nascimento", prop: "dataNascimento" },
];

export const localizacao = [
    { name: "ID", prop: "id" },
    { name: "Nome", prop: "nome" },
    { name: "Cidade", prop: "cidade" },
    { name: "Estado", prop: "estado" },
];

export const passagem = [
    { name: "CPF do passageiro", prop: "passageiroCPF" },
    { name: "ID da Viagem", prop: "viagemId" },
    { name: "Poltrona", prop: "poltrona" },
];

export const tripulacao = [
    { name: "ID", prop: "id" },
    { name: "CPF Piloto", prop: "pilotoCPF" },
    { name: "CPF Copiloto", prop: "copilotoCPF" },
    { name: "CPF Comissario1", prop: "comissario1CPF" },
    { name: "CPF Comissario2", prop: "comissario2CPF" },
];

export const viagem = [
    { name: "ID", prop: "id" },
    { name: "Número de Passagens", prop: "numeroPassagens" },
    { name: "Preço", prop: "preco" },
    { name: "Data", prop: "data" },
    { name: "Horas de Voo", prop: "hrVoo" },
    { name: "ID da Origem", prop: "origemId" },
    { name: "ID da Destino", prop: "destinoId" },
    { name: "ID da Tripulação", prop: "tripulacaoId" },
    { name: "ID do Avião", prop: "aviaoId" },
];
