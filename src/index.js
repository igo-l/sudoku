module.exports = function solveSudoku(matrix) {
   const checkEmpty = (matrix) => {
     for ( let row=0; row<9; row++ ) {
       for ( let col=0; col<9; col++ ) {
         if ( matrix[row][col] === 0 ) {
           return [row, col];
         }
       }
      }
      return null;
     }
     const isValid = (matrix, num, pos) => {
       const [row, col] = pos;
       for ( let i=0; i<9; i++ ) {
         if ( matrix[i][col] === num && i !== row ) {
            return false;
         }
       }
       for ( let j=0; j<9; j++ ) {
         if ( matrix[row][j] === num && j !== col ) {
           return false;
         }
       }
     const blockRow = Math.floor(row / 3) * 3;
     const blockCol = Math.floor(col / 3) * 3;
     for ( let i=blockRow; i<blockRow+3; i++ ) {
       for ( let j=blockCol; j<blockCol+3; j++ ) {
         if ( matrix[i][j] === num && i!==row && j!==col ) {
           return false;
         }
       }
     }
    return true;
  }
  const main = () => {
    const position = checkEmpty(matrix);
    if ( position === null ) {
      return true;
    }
    for ( let i=1; i<10; i++ ) {
      const number=i;
      const valid = isValid(matrix, number, position);
      if (valid) {
        const [x, y]=position;
        matrix[x][y]=number;
        if (main()) {
          return true;
        }
        matrix[x][y]=0;
      }
    }
    return false;
  }
  main();
  return matrix;
}