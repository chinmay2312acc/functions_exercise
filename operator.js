function operator(n1,op,n2) {

    if(op=="+"){
        return n1 + n2 ;
    } 
    else if(op=="*"){
        return n1*n2
    } 
    else if(op=="/"){
        return n1/n2
    } 
    else if(op = "-"){
        return n1-n2 ;
    }
} 

let result = operator(8,"+",4) ;

console.log(result) ;