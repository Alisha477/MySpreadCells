
let body = document.querySelector('body');
{
    addsheet.click();
    let firstsheet = document.querySelector('.onesheet');
    firstsheet.click();
}
// body.addEventListener('click',(e)=>{
//     addsheet.click();
//     // let firstsheet = document.querySelector('.onesheet');
//     // firstsheet.click();
//     console.log(sheetdb);
// })

// for(let i=0;i<100;i++){
//     let rowprop = [];
//     for(let j=0;j<26;j++){
//         let onecellprop = {
//             fontType:'Fantasy',
//             fontSize:'14',
//             bold:false,
//             italic:false,
//             underline:false,
//             alignment:'left',
//             fontcolor:'rgb(208, 231, 243)',
//             bgcolor:'rgb(59, 61, 59)',
//             value: '',
//             formula:'',
//             children: []
//         }
//         rowprop.push(onecellprop);
//     }
//     sheetdb.push(rowprop);
// }

let copy = document.querySelector('.copy');
let cut = document.querySelector('.cut');
let paste = document.querySelector('.paste');
let fonttype = document.querySelector('.font-types');
let fontsize = document.querySelector('.font-size-group');
let bold = document.querySelector('.fa-bold');
let italic = document.querySelector('.fa-italic');
let underline = document.querySelector('.fa-underline');
let leftalign = document.querySelector('.fa-align-left');
let centeralign = document.querySelector('.fa-align-center');
let rightalign = document.querySelector('.fa-align-right');
let fontcolor = document.querySelector('.font-color');
let bgcolor = document.querySelector('BGcolor');
let fontcinput = document.querySelector('.font-color>input');
let bgcinput = document.querySelector('.BGcolor>input');

let formulainput = document.querySelector('.formula-input');

let allcells = document.querySelectorAll('.onecell');

allcells.forEach(onecell=>{
    onecell.addEventListener('click',(e)=>{
        let address = addressbar.value;
        let [desiredcell,sheetcell] = getactivecell(address);
        bold.style.backgroundColor = sheetcell.bold ? "rgb(162, 226, 66)" : "greenyellow";
        italic.style.backgroundColor = sheetcell.italic ? "rgb(162, 226, 66)" : "greenyellow";
        underline.style.backgroundColor = sheetcell.underline ? "rgb(162, 226, 66)" : "greenyellow";
        fonttype.value = sheetcell.fontType;
        fontsize.value = sheetcell.fontSize;

        let alignmentt = sheetcell.alignment;
        if(alignmentt == 'left'){
            leftalign.style.backgroundColor = "rgb(162, 226, 66)";
            centeralign.style.backgroundColor = "greenyellow";
            rightalign.style.backgroundColor = "greenyellow";
            onecell.style.textAlign = 'left';
        }else if (alignmentt == 'center'){
            leftalign.style.backgroundColor = "greenyellow";
            centeralign.style.backgroundColor = "rgb(162, 226, 66)";
            rightalign.style.backgroundColor = "greenyellow";
            onecell.style.textAlign = 'center';
        }else if (alignmentt == 'right'){
            leftalign.style.backgroundColor = "greenyellow";
            centeralign.style.backgroundColor = "greenyellow";
            rightalign.style.backgroundColor = "rgb(162, 226, 66)";
            onecell.style.textAlign = 'right';
        }

        fontcinput.value = sheetcell.fontcolor;
        formulainput.value = sheetcell.formula;
        onecell.innerText = sheetcell.value;
        onecell.style.fontFamily = sheetcell.fontType;
        onecell.style.fontSize = sheetcell.fontSize+"px";
        onecell.style.fontWeight = sheetcell.bold ? "bold" : "normal";
        onecell.style.fontStyle = sheetcell.italic ? "italic" : "normal";
        onecell.style.textDecoration = sheetcell.underline ? "underline" : "none";
        onecell.style.backgroundColor = sheetcell.bgcolor;
        onecell.style.color = sheetcell.fontcolor;

    })
})
fonttype.addEventListener('change',(e)=>{
    let address = addressbar.value;
    let [desiredcell,sheetcell] = getactivecell(address);
    let newvalue = fonttype.value;
    desiredcell.style.fontFamily = newvalue;
    sheetcell.fontType = newvalue;
})
fontsize.addEventListener('change',(e)=>{
    let address = addressbar.value;
    let [desiredcell,sheetcell] = getactivecell(address);
    let newvalue = fontsize.value;
    desiredcell.style.fontSize = newvalue + "px";
    sheetcell.fontSize = newvalue;


})
bold.addEventListener('click',(e)=>{
    let address = addressbar.value;
    let [desiredcell,sheetcell] = getactivecell(address);
    sheetcell.bold = !sheetcell.bold;
    desiredcell.style.fontWeight = sheetcell.bold ? "bold" : "normal";
    bold.style.backgroundColor = sheetcell.bold ? "rgb(162, 226, 66)" : "greenyellow";
})
italic.addEventListener('click',(e)=>{
    let address = addressbar.value;
    let [desiredcell,sheetcell] = getactivecell(address);
    sheetcell.italic = !sheetcell.italic;
    desiredcell.style.fontStyle = sheetcell.italic ? "italic" : "normal";
    italic.style.backgroundColor = sheetcell.italic ? "rgb(162, 226, 66)" : "greenyellow";

})
underline.addEventListener('click',(e)=>{
    let address = addressbar.value;
    let [desiredcell,sheetcell] = getactivecell(address);
    sheetcell.underline = !sheetcell.underline;
    desiredcell.style.textDecoration = sheetcell.underline ? "underline" : "none";
    underline.style.backgroundColor = sheetcell.underline ? "rgb(162, 226, 66)" : "greenyellow";

})
leftalign.addEventListener('click',(e)=>{
    let address = addressbar.value;
    let [desiredcell,sheetcell] = getactivecell(address);
    sheetcell.alignment = 'left';
    desiredcell.style.textAlign = 'left';
    leftalign.style.backgroundColor = "rgb(162, 226, 66)";
    centeralign.style.backgroundColor = "greenyellow";
    rightalign.style.backgroundColor = "greenyellow";

})
centeralign.addEventListener('click',(e)=>{
    let address = addressbar.value;
    let [desiredcell,sheetcell] = getactivecell(address);
    sheetcell.alignment = 'center';
    desiredcell.style.textAlign = 'center';
    leftalign.style.backgroundColor = "greenyellow";
    centeralign.style.backgroundColor = "rgb(162, 226, 66)";
    rightalign.style.backgroundColor = "greenyellow";

})
rightalign.addEventListener('click',(e)=>{
    let address = addressbar.value;
    let [desiredcell,sheetcell] = getactivecell(address);
    sheetcell.alignment = 'right';
    desiredcell.style.textAlign = 'right';
    leftalign.style.backgroundColor = "greenyellow";
    centeralign.style.backgroundColor = "greenyellow";
    rightalign.style.backgroundColor = "rgb(162, 226, 66)";

})
fontcinput.addEventListener('change',(e)=>{
    let newcolor = fontcinput.value;
    let address = addressbar.value;
    let [desiredcell,sheetcell] = getactivecell(address);
    desiredcell.style.color = newcolor;
    sheetcell.fontcolor = newcolor;
})
bgcinput.addEventListener('change',(e)=>{
    let address = addressbar.value;
    let [desiredcell,sheetcell] = getactivecell(address);
    let newcolor = bgcinput.value;
    desiredcell.style.backgroundColor = newcolor;
    sheetcell.bgcolor = newcolor;
})
console.log(sheetdb);

function getactivecell(address){
    let colval = address.charCodeAt(0) - 65;
    let rowval = Number(address.substring(1) - 1);
    let desiredcell = document.querySelector(`.onecell[rowid = "${rowval}"][colid = "${colval}"]`);
    return [desiredcell,sheetdb[rowval][colval]];
}