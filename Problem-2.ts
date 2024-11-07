{

    type ArrayList = number[];
    const removeDuplicates = (list: ArrayList): ArrayList =>{
        const uniqueList: number[] = [...new Set(list)];
        return uniqueList;
    }

    removeDuplicates([1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 9, 10]);
    console.log(removeDuplicates([1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 9, 10]))
}