let prompt = require('prompt-sync')();
let alunos = [];
let opcao

do{
    opcao = prompt('1 - Cadastrar aluno\n' +
    '2 - Excluir aluno\n' +
  '3 - Relatório aluno\n' +
    '4 - Sair sistema\n\n' + 
   'Esolha uma opção\n');

switch(opcao){
    case '1':
        let nomeAluno = prompt('digite o nome do aluno: ');
        if(nomeAluno != null && nomeAluno.trim() !== '');
       alunos.push(nomeAluno.trim());

        break;
     case '2':
        
     break;
     case '3':
}
let info = 'Alunos Cadastrados: \n';
    if (alunos.length>0){
    for (let i = 0; i < alunos.length; i++ ){
    info += '-' + alunos[i] + '\n';
    }
} else{
    info += 'Nenhum aluno cadastrado. \n';
}
    console.log(info);
break;


}while(opcao!=4);
    
