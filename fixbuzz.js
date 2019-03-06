function fizzbuzz(n){
    for (var num = 1; num<= n;num++){
        if (num % 3==0 && num % 5==0)
            console.log("FizzBuzz")
        if (num % 3==0 && num % 5 !=0)
            console.log("Fizz")
        if (num % 3 != 0 && num % 5 ==0)
            console.log("Buzz")

        else{
            console.log(num)
        }
    }
}   

fizzbuzz(10)