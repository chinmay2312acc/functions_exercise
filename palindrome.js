 //let str = "hwello world" ;
//console.log(str.indexOf(2))   

 function check_pal(string){

    let dup_str = string ;

    let count = 0 ; 
   let count2 = dup_str.length ; 
    let true_value = true  ;

   while(count<string.length){

    if(string[count]==dup_str[count2-1]){

        count = count + 1 ; 
        count2 = count2 - 1 ;
    }
    else {
        //return " this is not a palindrome " ; 
        true_value = false  ; 
        break ; 
    } 
   } 

   if(true_value==true){
    return "this is a palindrome"
   } 
   else { 
    return "this is not palindrome"
   }

  // let len = dup_str.length ;
    //return string.length ;
    //return count2 ; 
} 

 let result  = check_pal("kayakkk") ; 

console.log(result)
//console.log(5/2) ; 