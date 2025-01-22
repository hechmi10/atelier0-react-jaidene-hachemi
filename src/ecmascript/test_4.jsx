//Déclarer la fonction
let search=(tab,id)=>{
    //Retourner le tableau
    return tab.find(item=>item.id===id)
}
export default search