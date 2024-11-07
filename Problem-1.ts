{

    type ArrayList = number[];
    
    const sumArray =  (lists : ArrayList) =>{
        let initialNumber : number = 0;
        lists.map((num : number) =>{
            initialNumber += num
        })
        console.log(initialNumber)
    }

    sumArray([1, 2, 3, 4, 5])


}