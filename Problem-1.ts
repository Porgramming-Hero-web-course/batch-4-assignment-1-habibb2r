{

    type ArrayList = number[];
    
    const sumArray =  (lists : ArrayList): number =>{
        let sum : number = 0;
        lists.map((num : number) =>{
            sum += num
        })
        return sum
    }

    sumArray([1, 2, 3, 4, 5])
    console.log(sumArray([1, 2, 3, 4, 5]))


}