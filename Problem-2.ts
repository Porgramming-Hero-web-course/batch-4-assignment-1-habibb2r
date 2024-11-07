{

    type ArrayList = number[];
    const removeDuplicates = (list: ArrayList) =>{
        const uniqueList: number[] = [...new Set(list)];
        console.log(uniqueList);
    }

    removeDuplicates([1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 9, 10]);
}