function showcycle(formula,maincell,cellstore){
    formula = formula.split(' ');

    for(let i=0;i<formula.length;i++){
        let firstchar = formula[i].charCodeAt(0);
        if(firstchar >= 65 && firstchar <= 90){
            let [onecell,cellstore] = getactivecell(formula[i]);
            let toputrow = onecell.getAttribute('rowid');
            let toputcol = onecell.getAttribute('colid');

            let ans = detectcycle2(toputrow,toputcol,false);
            
            // allcellsforcycle[toputrow][toputcol].pull();
        }
    }
    return false;
}
function justpromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },1000);
    })
}
async function detectcycle2(toputrow,toputcol,detected){
    let togos = allcellsforcycle[toputrow][toputcol];
    if(detected && visited[toputrow][toputcol] == false) {return ;}
    if(visited[toputrow][toputcol]==true){
        detected = true;
        let [onlycell,cellstore] = getactivecell(toputrow,toputcol);
        console.log('This ',onlycell);
        
        onlycell.style.backgroundColor =  'white';  
        await justpromise();
        visited[toputrow][toputcol] = false;
        for(let i = 0; i < togos.length; i++){
            let [rowid,colid] = togos[i];
            let returnvalue = detectcycle2(rowid,colid,detected);
        }
        return;
    }
    // visited[toputrow][toputcol] = true;
    // visited[toputrow][toputcol].push(true);
    for(let i = 0; i < togos.length; i++){
        let [rowid,colid] = togos[i];
        let returnvalue = detectcycle2(rowid,colid,detected);
        // if(returnvalue) return true;
    }
    visited[toputrow][toputcol] = false;
    return false;
}