
formulainput.addEventListener('keydown',(e)=>{
    let formulavalue = formulainput.value;

    if(e.key == 'Enter' ){
        let address = addressbar.value;
        let [maincell,cellstore] = getactivecell(address);
        setallcells(formulavalue,maincell,cellstore);

        if(iscyclic(formulavalue,maincell,cellstore)){
            alert('Cycle is observed!');
            removefromallcells(formulavalue,maincell,cellstore);
       //     showcycle(formulavalue,maincell,cellstore);
        }else {
            setformula(formulavalue,maincell,cellstore);
            if(cellstore.children.length>0){
                changechildren(cellstore);
            } 
            formulainput.value = "";
        }
    }
})
function iscycle(formula,maincell,cellstore) {
    return false;
}
function setformula(formulavalue,maincell,cellstore){
        cellstore.formula = formulavalue;
        formulavalue = getformulavalue(formulavalue,maincell,cellstore);
        maincell.innerText = eval(formulavalue);
        cellstore.value = eval(formulavalue);
}
function changechildren(cellstore){
    let childrenn = cellstore.children;
    console.log(cellstore);
    childrenn.forEach((child,i)=>{
        console.log('Deleted from ',cellstore,'is ',cellstore.children[i]);
        cellstore.children.splice(i,1);
        let {originalcell,originalcellstore} = child;
        // alert(originalcellstore.formula);
        setformula(originalcellstore.formula,originalcell,originalcellstore);
        console.log(originalcell);
        console.log(originalcellstore);
        changechildren(originalcellstore);
    })
}
function getformulavalue(original,originalcell,originalcellstore){
    original = original.split(' ');
    for(let i=0;i<original.length;i++){
        let firstchar = original[i].charCodeAt(0);
        if(firstchar>= 65 && firstchar <= 90){
            let [onecell,cellstore] = getactivecell(original[i]);
            original[i] = cellstore.value;
            console.log('Char is ', original[i]);
            cellstore.children.push({originalcell,originalcellstore});
            if(!original[i]){
                original[i] = 0;
            }
        }
    }
    let tobreturned = original.join(' ');
    return tobreturned;
}

allcells.forEach(onecell=>{
    onecell.addEventListener('blur',(e)=>{
        let address = addressbar.value;
        let [maincell,cellstore] = getactivecell(address);
        
        cellstore.value = onecell.innerText;
        if(cellstore.children && cellstore.children.length>0 && maincell.innerText){
            changechildren(cellstore);
        } 
    })
})



















// let allcells = [];

// let formulainput = document.querySelector('.formula-input');

// for(let i=0;i<100;i++){
//     let rowone = [];
//     for(let j=0;j<26;j++){
//         let onecell;
//         rowone.push(onecell);
//     }
//     allcells.push(rowone);
// }

// formulainput.addEventListener('change',(e)=>{
//     let formulastring = formulainput.value;
//     formula = formulastring.split(' ');
//     formula.forEach(unit=>{
//         if(unit == '('){
//             statusbar.push()
//         }
//     })

// })
// function getformula(formulastring){

// }