"use strict";

var alunos = [{
  nome: 'João',
  nota: 7.3
}, {
  nome: 'Maria',
  nota: 9.2
}, {
  nome: 'Pedro',
  nota: 6.5
}, {
  nome: 'Ana',
  nota: 7.1
}, {
  nome: 'Guilherme',
  nota: 6.1
}, {
  nome: 'Alvin',
  nota: 5.9
}, {
  nome: 'Eduardo',
  nota: 9.0
}, {
  nome: 'Nathan',
  nota: 5.5
}];

// Filtra os alunos aprovados (nota >= 6)
var alunosAprovados = function alunosAprovados() {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};

// Filtra os alunos reprovados (nota < 6)
var alunosReprovados = function alunosReprovados() {
  return alunos.filter(function (aluno) {
    return aluno.nota < 6;
  });
};

// Exibe os resultados
var exibirResultados = function exibirResultados() {
  var aprovados = alunosAprovados();
  var reprovados = alunosReprovados();
  console.log("Aprovados:");
  aprovados.forEach(function (aluno) {
    console.log("".concat(aluno.nome, ": Aprovado com nota ").concat(aluno.nota));
  });
};

// Exibir os resultados
exibirResultados();