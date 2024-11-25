var diagonalDiff = (matrix)=>{
    let d1 = 0;
    let d2 = 0;
    for(let i=0;i<matrix.length;i++){
            d1 += matrix[i][i];
            d2 += matrix[i][matrix.length-i-1];
        
    }
    return {
        d1,
        d2,
        diff : Math.abs(d1-d2)  
    }  
}
console.log(diagonalDiff([[1,2,3],[4,5,6],[7,8,9]]));