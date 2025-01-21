let calculateMarks=students=>{
    let newArr=students.map(student=>{
        return{
            ...student,
            mark:(student.mark<50)?student.mark+15:student.mark
        }
    }).filter(student=>student.mark>50)
    return newArr.reduce((acc,student)=>acc+student.mark,0);
}
export default calculateMarks