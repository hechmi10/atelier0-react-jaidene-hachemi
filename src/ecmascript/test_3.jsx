//Déclarer la fonction
let calculateMarks=students=>{
    //Ajouter un bonus de 15 pts pour les étudiants qui ont une note < 50
    let newArr=students.map(student=>{
        return{
            ...student,
            marks:(student.marks<50)?student.marks+15:student.marks
        }
    //Avec une filtrage des étudiants qui ont une note > 50
    }).filter(student=>student.marks>50)
    //Retourner la somme des notes qui est nulle
    return newArr.reduce((acc,student)=>acc+student.marks,0);
}
export default calculateMarks