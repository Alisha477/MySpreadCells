// let allcellsforcycle = [];
let visited = [];

// for(let i=0; i < 100; i++){
//     let onerow = [];
//     for(let j=0; j < 26; j++){
//         let onecell = [];
//         onerow.push(onecell);
//     }
//     allcellsforcycle.push(onerow);
// }
for(let i = 0;i < 100; i++){
    let onerow = [];
    for(let j = 0;j < 26; j++){
        let onecell = [false];
        onerow.push(onecell);
    }
    visited.push(onerow);
}

function setallcells(formula,maincell,cellstore){
    let rowid = maincell.getAttribute('rowid');
    let colid = maincell.getAttribute('colid');
    formula = formula.split(' ');
    for(let i = 0; i < formula.length; i++){
        let firstchar = formula[i].charCodeAt(0);
  
        if(firstchar >= 65 && firstchar <= 90){
            let [onecell,cellstore] = getactivecell(formula[i]);
            let toputrow = onecell.getAttribute('rowid');
            let toputcol = onecell.getAttribute('colid');
            allcellsforcycle[toputrow][toputcol].push([rowid,colid]);
        }
    }
}
function removefromallcells(formula,maincell,cellstore){
    formula = formula.split(' ');
    for(let i=0;i<formula.length;i++){
        let firstchar = formula[i].charCodeAt(0);
  
        if(firstchar>= 65 && firstchar <= 90){
            let [onecell,cellstore] = getactivecell(formula[i]);
            let toputrow = onecell.getAttribute('rowid');
            let toputcol = onecell.getAttribute('colid');
            allcellsforcycle[toputrow][toputcol].pop();
        }
    }
}

function iscyclic(formula,maincell,cellstore){
    formula = formula.split(' ');

    for(let i=0;i<formula.length;i++){
        let firstchar = formula[i].charCodeAt(0);
        if(firstchar>= 65 && firstchar <= 90){
            let [onecell,cellstore] = getactivecell(formula[i]);
            let toputrow = onecell.getAttribute('rowid');
            let toputcol = onecell.getAttribute('colid');

            let ans = detectcycle(toputrow,toputcol);
            if(ans) return true;
            // allcellsforcycle[toputrow][toputcol].pull();
        }
    }
    return false;
}
function detectcycle(toputrow,toputcol){
    let togos = allcellsforcycle[toputrow][toputcol];
    if(visited[toputrow][toputcol]==true) return true;
    visited[toputrow][toputcol] = true;
    // visited[toputrow][toputcol].push(true);
    let ans = false;
    for(let i = 0; i < togos.length; i++){
        let [rowid,colid] = togos[i];
        let returnvalue = detectcycle(rowid,colid);
        if(returnvalue) {
            ans = true;
            break;
            // return true;
        }
    }
    visited[toputrow][toputcol] = false;
    return ans;
    // return false;
}