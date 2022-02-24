let gridcol = document.querySelector('.grid-col');
let gridrow = document.querySelector('.grid-row');
let gridcells = document.querySelector('.grid-cells');
let addressbar = document.querySelector('.cell-position');


for(let i=0;i<100;i++){
    let newdiv = document.createElement('div');
    newdiv.innerText = i+1;
    newdiv.setAttribute('class','grid-col-style');
    gridcol.appendChild(newdiv);
}
for(let i=0;i<26;i++){
    let newdiv = document.createElement('div');
    newdiv.innerText = String.fromCharCode(65+i);
    newdiv.setAttribute('class','grid-row-style');
    gridrow.appendChild(newdiv);
}

for(let i=0;i<100;i++){
    let newdiv = document.createElement('div');
    newdiv.setAttribute('class','grid-rows');
    for(let j=0;j<26;j++){
        let onecell = document.createElement('div');       
        onecell.setAttribute('class','onecell');
        onecell.setAttribute('spellcheck','false');
        onecell.setAttribute('contenteditable','true');
        onecell.setAttribute('rowid',`${i}`);
        onecell.setAttribute('colid',`${j}`);
        newdiv.appendChild(onecell);
        setAddress(onecell,i,j);
    }
    gridcells.appendChild(newdiv);
}
function setAddress(cell,i,j){
    cell.addEventListener('click',(e)=>{
        addressbar.value = String.fromCharCode(65+j)+(i+1);
    })
}

let firstcell = document.querySelector('.onecell');
firstcell.click();