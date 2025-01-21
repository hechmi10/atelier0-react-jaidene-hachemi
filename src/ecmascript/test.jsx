//Déclaration du fonction findLongestWord
let findLongestWord=words =>{
    //Déclarer un objet de mots et ses longueurs
    let newArr=words.map(word =>{
        return {
            mot:word,
            longueur:word.length
        }
    })
    //Retourner le mot le plus long
    return newArr.reduce((acc,cur)=>{
        return(acc.length>cur.length)?acc:cur;
    })
};
