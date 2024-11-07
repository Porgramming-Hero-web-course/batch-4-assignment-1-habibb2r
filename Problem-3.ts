{

    function countWordOccurrences (sentence: string, word: string) : number {
        const sentenceIntoWordsofArray: string[] = sentence.toLowerCase().split(' ');
        let count: number = 0;
        sentenceIntoWordsofArray.forEach((sentenceWord: string) => {
            if(sentenceWord === word.toLowerCase()){
                count++;
            }
        })
        return count;
    }

    countWordOccurrences("Hi there, I'm Habib and love typescript and enjoying typescript", "Typescript");
    console.log(countWordOccurrences("Hi there, I'm Habib and love typescript and enjoying typescript", "typescript"))
}