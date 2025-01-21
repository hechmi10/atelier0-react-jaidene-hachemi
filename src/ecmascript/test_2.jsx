let numberRedundants=strs=>{
    return strs.flat().reduce((acc,value)=>{
        acc[value]=(acc[value] || 0) + 1;
        return acc;
    },{});
}
export default numberRedundants;