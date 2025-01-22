//Déclarer la fonction
let calculateMarks=students=>{
    //Ajouter un bonus de 15 pts pour les étudiants qui ont une note < 50
    let newArr=students.map(student=>{
        return{
            ...student,
            mark:(student.mark<50)?student.mark+15:student.mark
        }
    //Avec une filtrage des étudiants qui ont une note > 50
    }).filter(student=>student.mark>50)
    //Retourner la somme des notes qui est nulle
    return newArr.reduce((acc,student)=>acc+student.mark,0);
}
export default calculateMarks