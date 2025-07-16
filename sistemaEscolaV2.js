let prompt = require("prompt-sync")();
let senha = 1234;
let tentativasenha = 0;
while (tentativasenha < 3) {
  let login = parseFloat(prompt("Digite a senha: "));

  if (login === senha) {
    console.log("Senha Correta! Acesso concedido.");
    break;
  } else {
    tentativasenha++;
    console.log(
      "Senha incorreta. Tentativas restantes: " + (3 - tentativasenha)
    );
  }
}
if (tentativasenha === 3) {
  console.log("Acesso não autorizado. Você excedeu o número de tentativas");
  process.exit();
} else {
  let cursos = [];
  let alunos = [];
  let curso;
  let opcao;

  do {
    opcao = prompt(
      "1 - Cadastrar aluno\n" +
        "2 - Excluir aluno\n" +
        "3 - Cadastrar curso\n" +
        "4 - Excluir curso\n" +
        "5 - Registro\n" +
        "6 - Matricular aluno em curso\n" +
        "7 - Saindo do sistema\n\n" +
        "Escolha uma opção\n"
    );

    switch (opcao) {
      case "1":
        let nomeAluno = prompt("digite o nome do aluno: ");
        if (nomeAluno != null && nomeAluno.trim() !== "") {
          alunos.push(nomeAluno.trim());

          console.log("Aluno cadastrado com sucesso!");
        } else {
          console.log("Nome desconhecido.");
        }
        break;
      case "2":
        let excluirAluno = prompt("Digite o nome do aluno: ");
        let posicao = alunos.indexOf(excluirAluno);
        if (posicao !== -1) {
          alunos.splice(posicao, 1);

          console.log(alunos);
        } else {
          console.log("Aluno não encontrado.");
        }

        break;

      case "3":
        let nomeCursos = prompt("digite o nome do curso: ");
        if (nomeCursos != null && nomeCursos.trim() !== "") {
          cursos.push(nomeCursos.trim());

          console.log("Curso cadastrado com sucesso!");
        } else {
          console.log("Nome desconhecido.");
        }
        break;
      case "4":
        let excluirCurso = prompt("Digite o nome do curso: ");
        let posicao2 = cursos.indexOf(excluirCurso);

        if (posicao !== -1) {
          cursos.splice(posicao, 1);

          console.log(cursos);
        } else {
          console.log("Curso não encontrado.");
        }

        break;

      case "5":
        let info2 = "Cursos Cadastrados: \n";
        if (cursos.length > 0) {
          for (let i = 0; i < cursos.length; i++) {
            info2 += "-" + cursos[i] + "\n";

            console.log(info2);
          }
        } else {
          info2 += "Nenhum curso cadastrado. \n";
        }
        let info = "Alunos Cadastrados: \n";
        if (alunos.length > 0) {
          for (let i = 0; i < alunos.length; i++) {
            curso;
            if (alunos[1].curso) {
              curso = aluno[1].curso;
            } else {
              curso = "Não matriculado";
            }
            console.log("-" + alunos[i].nomeAluno + "(Curso: " + curso);
          }
        } else {
          info += "Nenhum aluno cadastrado. \n";
        }
        break;
      case "6":
        if (alunos.length === 0 || cursos.length === 0) {
          console.log(
            "É necessário ter aluno e curso cadastrados para realizar a matrícula."
          );
        }
        let nomeMatricula = prompt("Digite o nome do aluno para matrícula: ");
        let aluno = null;
        for (let i = 0; i < alunos.length; i++) {
          if (alunos[i].nome === nomeMatricula) {
            aluno = alunos[i];
          }
        }
        if (!aluno) {
          console.log("Aluno não encontrado.");
        }

        console.log("Cursos disponíveis: ");
        for (let i = 0; i < cursos.length; i++) {
          console.log(i + 1 + " - " + cursos[i]);
        }

        let cursoIndex = parseInt(prompt("Escolha o número do curso: "));
        if (cursoIndex >= 0 && cursoIndex < cursos.length) {
          aluno.curso = curso[cursoIndex];

          console.log(
            "Aluno: " + aluno.nome + "matriculado no curso: " + curso
          );
        } else {
          console.log("Curso inválido.");
          break;
        }
      case "7":
        console.log("Saindo do sistema...");
        break;
      default:
        console.log("Número não indentificado.");
    }
  } while (opcao !== "7");
}
