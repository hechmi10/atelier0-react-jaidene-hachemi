//Déclarer le fonction
let numberRedundants=strs=>{
    //Retourner un objet de clé acc et valeur le nombre d'occurences
    return strs.flat().reduce((acc,value)=>{
        acc[value]=(acc[value] || 0) + 1;
        return acc;
    },{});
}
export default numberRedundants;