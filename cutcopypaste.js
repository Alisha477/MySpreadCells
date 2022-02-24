let ctrlkey;
let twocells = [];
let copieddata = [];

document.addEventListener('keydown',(e)=>{
    ctrlkey = e.ctrlKey;
})
document.addEventListener('keyup',(e)=>{
    ctrlkey = e.ctrlKey;
})
for(let i=0;i<100;i++){
    for(let j = 0;j<26;j++){
        let cell = document.querySelector(`.onecell[rowid = "${i}"][colid = "${j}"]`);
        handelcells(cell,i,j);
    }
}
function handelcells(cell,i,j){
    cell.addEventListener('click',(e)=>{
        if(ctrlkey){
            if(twocells.length>=2){
                undoborder();
                twocells = [];
            }else {
                cell.style.border = '5px solid greenyellow';
                twocells.push([i,j]);
            }
        }
    })
}
function undoborder(){
    for(let i=0;i<2;i++){
        let [a,b] = twocells[i];
        let ourcell = document.querySelector(`.onecell[rowid = "${a}"][colid = "${b}"]`);
        ourcell.style.border = '';
    }
}
cut.addEventListener('click',(e)=>{
    if(twocells.length<2) return;
    let startrow = twocells[0][0];
    let startcol = twocells[0][1];
    let endrow = twocells[1][0];
    let endcol = twocells[1][1];
    for(let i=startrow;i<=endrow;i++){
        for(let j = startcol;j<=endcol;j++){
            let targetsheetdb = sheetdb[i][j];
            targetsheetdb.fontType = 'cursive';
            targetsheetdb.fontSize = '14';
            targetsheetdb.bold = false;
            targetsheetdb.italic = false;
            targetsheetdb.underline = false;
            targetsheetdb.alignment = 'left';
            targetsheetdb.fontcolor = '#D0E7F3';
            targetsheetdb.bgcolor = 'rgb(59, 61, 59)';
            targetsheetdb.value = '';
            targetsheetdb.formula ='';
            let targetcell = document.querySelector(`.onecell[rowid = "${i}"][colid = "${j}"]`);
            targetcell.click();
        }
    }
})
copy.addEventListener('click',(e)=>{
    if(twocells.length<2) return;
    copieddata = [];
    for(let i = twocells[0][0]; i <= twocells[1][0]; i++){
        let rowdata = [];
        for(let j = twocells[0][1]; j<=twocells[1][1]; j++){
            let data = sheetdb[i][j];
            rowdata.push(data);
        }
        copieddata.push(rowdata);
    }
})
paste.addEventListener('click',(e)=>{
    let address = addressbar.value;
    let rid = Number(address.slice(1)-1);
    let cid = Number(address.charCodeAt(0)-65);
    let desiredcelldb = sheetdb[rid][cid];
    for(let i=rid,ik=0;ik<copieddata.length;i++ && ik++){
        for(let j=cid,jk=0;jk<copieddata[0].length;j++ && jk++){ 
            let thiscell = document.querySelector(`.onecell[rowid = "${i}"][colid = "${j}"]`);
            if(!thiscell) continue;
            let tochangedb = sheetdb[i][j];
            let newdb = copieddata[ik][jk];
            sheetdb[i][j].fontType = newdb.fontType;
            sheetdb[i][j].fontSize = newdb.fontSize;
            sheetdb[i][j].bold = newdb.bold;
            sheetdb[i][j].italic = newdb.italic;
            sheetdb[i][j].underline = newdb.underline;
            sheetdb[i][j].alignment = newdb.alignment;
            sheetdb[i][j].fontcolor = newdb.fontcolor;
            sheetdb[i][j].bgcolor = newdb.bgcolor;
            sheetdb[i][j].value = newdb.value;
            sheetdb[i][j].formula = newdb.formula;
            
            thiscell.click();
            // fontType:'Fantasy',
            //     fontSize:'14',
            //     bold:false,
            //     italic:false,
            //     underline:false,
            //     alignment:'left',
            //     fontcolor:'rgb(208, 231, 243)',
            //     bgcolor:'rgb(59, 61, 59)',
            //     value: '',
            //     formula:'',
        }
    }
})