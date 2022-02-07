var valido = function (board){
  var map = {}; //retorna uma outra função, embutida do valor inicial fornecido pela função primária sendo ela um array
  var aux = 0; //variável da função da caixa
  for(var i = 0; i < 9; i++){ //linhas
    for(var j = 0; j < 9; j++){ //colunas
        
      aux = board[i][j];
        
      if(aux !== "."){
        if(map['i' + i + aux] || map['j' + j + aux] || map['b' + Math.floor((i / 3)) + Math.floor(j / 3) + aux]){ //verifica na posição da linha, coluna e na divisão da grade se é o número ou se ponto
              return false;
        }
        else{
          map['i' + i + aux] = 1;
          map['j' + j + aux] = 1;
          map['b' + Math.floor((i / 3)) + Math.floor(j / 3) + aux] = 1;
        }
      }
    }
  }
    return true;
}

console.log(valido([
   ["8","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]
])
);