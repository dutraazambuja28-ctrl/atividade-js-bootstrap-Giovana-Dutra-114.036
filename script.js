//Itens 1 e 2
console.log("Meu primeiro script foi executado!");
console.log()
//Iniciando o projeto -- Painel de estudos
console.log("Painel de estudos");
console.log(12+3);
console.log("Iniciando a atividade...");
console.log()

//Itens 3 e 4
const nomeAluno = "Giovana Dutra";
const curso = "Desenvolvimento web";
let atividadesNota = 0;
let atividadesConcluidas = 2;
console.log(`Quantidade de atividades concluídas: ${atividadesConcluidas}`);
console.log(`Quantidade de atividades com nota: ${atividadesNota}`);

atividadesNota = 3
atividadesConcluidas = 5;
console.log()
console.log(`Nome do aluno(a): ${nomeAluno}`);
console.log(`Curso: ${curso}`);
console.log(`Quantidade atualizada de atividades concluídas: ${atividadesConcluidas}`);
console.log(`Quantidade atualizada de atividades com nota: ${atividadesNota}`);

var exemploAntigo = "Declaração utilizada em códigos antigos (ES5 e anteriores)";
console.log(exemploAntigo);
console.log()

//Item 5
const tituloPainel = "Painel Acadêmico"; 
const totalmaterias = 8;                  
const matriculaAtiva = true;             
const observacaoTutor = null;            

console.log(`Tipo String: ${tituloPainel}`);
console.log(`Tipo Number: ${totalmaterias}`);
console.log(`Tipo Boolean: ${matriculaAtiva}`);
console.log(`Tipo Null: ${observacaoTutor}`);

//Item 6
const nota1 = 8.5;
const nota2 = 6.0;
const nota3 = 9.5;

const somaNotas = nota1 + nota2 + nota3;
const mediaFinal = somaNotas / 3;

const cargaHorariaTotal = 120;
const horasAssistidas = 40;
const horasRestantes = cargaHorariaTotal - horasAssistidas;
const fatorProgresso = horasAssistidas * 2;

const aprovadoPorMedia = mediaFinal >= 7.0;
const cargaCompleta = horasAssistidas >= 120;

console.log()
console.log(`Média Final: ${mediaFinal}`);
console.log(`Aprovado por média? ${aprovadoPorMedia}`);
console.log(`Horas restantes: ${horasRestantes} horas restantes`);
console.log()

//Item 7 e 8
const mensagemPerfil = `O(a) aluno(a) ${nomeAluno} está matriculado no curso de ${curso} e concluiu ${atividadesConcluidas} atividade(s).`;
console.log(mensagemPerfil);
console.log()

if (mediaFinal >= 7.0) {
  console.log("Situação acadêmica: Aprovado!");
} else {
  console.log("Situação acadêmica: Necessita de recuperação.");
}
console.log()

//Item 9 no index
//Item 10
const disciplina = "JavaScript";
const pontosAtividade = 9.0;
const pesoAtividade = 3;
const pontuacaoTotal = pontosAtividade * pesoAtividade;

console.log(`Desafio integrador: Disciplina: ${disciplina} | Pontuação ponderada: ${pontuacaoTotal}`);

if (pontuacaoTotal >= 25) {
  console.log("Excelente aproveitamento.");
} else {
  console.log("Desempenho regular, requer revisão.");
}