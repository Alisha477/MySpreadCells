// let addsheet = document.querySelector('.fas.fa-folder-plus');
let addsheet = document.querySelector('.fas.fa-folder-plus');
let sheetstore = document.querySelector('.store-sheet');
let sheetcollection = [];
let sheetdb = [];
let graphcollection = [];
let allcellsforcycle = [];

addsheet.addEventListener('click',(e)=>{
    console.log('came in');
    let newdiv = document.createElement('div');
    newdiv.setAttribute('class','onesheet');
    let totalid = document.querySelectorAll('.onesheet');
    // if(totalid.length<18){
        idd = totalid.length;
        newdiv.setAttribute('id',idd);
        newdiv.innerText = `Sheet-${totalid.length+1}`;
        sheetstore.appendChild(newdiv);
        newdiv.scrollIntoView();
    // }else{
    //     alert('Maximum Limit of sheets have been reached');
    // }
    let allsheets = document.querySelectorAll('.onesheet');
    let newsheetdb = [];
    managecells(newsheetdb);
    managecellsforformula();
    sheetclick(allsheets);
    deletesheets(newdiv);
    // if(allsheets.length==1) allsheets[0].click(); 
})

function managecells(newsheetdb){
    for(let i=0;i<100;i++){
        let rowprop = [];
        for(let j=0;j<26;j++){
            let onecellprop = {
                fontType:'cursive',
                fontSize:'14',
                bold:false,
                italic:false,
                underline:false,
                alignment:'left',
                fontcolor:'#D0E7F3',
                bgcolor:'rgb(59, 61, 59)',
                value: '',
                formula:'',
                children: []
            }
            rowprop.push(onecellprop);
        }
        newsheetdb.push(rowprop);
    }
    sheetcollection.push(newsheetdb);
  
 //   console.log('collection is ',sheetcollection);
}
function managecellsforformula(){
    let newallcellsforcycle = [];
    for(let i=0; i < 100; i++){
        let onerow = [];
        for(let j=0; j < 26; j++){
            let onecell = [];
            onerow.push(onecell);
        }
        newallcellsforcycle.push(onerow);
    }
    graphcollection.push(newallcellsforcycle);
}
function sheetclick(allsheets){
    allsheets.forEach(sheet => {
        // alert('aya');
        sheet.addEventListener('click',(e)=>{
            console.log('Clicked');
            let getid = Number(sheet.getAttribute('id'));
            sheetdb = sheetcollection[getid];
            allcellsforcycle = graphcollection[getid];
            // if(getid>0)
            // console.log('Sheetdb is changed with id ');
            for(let i=0;i<100;i++){
                for(let j=0;j<26;j++){
                    let cell = document.querySelector(`.onecell[rowid = "${i}"][colid = "${j}"]`);
                    cell.click();
                }
            }
            handlesheetactiveness(allsheets,sheet);
        })
    });
}
function handlesheetactiveness(allsheets,sheet){
    allsheets.forEach((ss)=>{
        ss.style.backgroundColor = 'rgb(78, 76, 76)';
    })
    sheet.style.backgroundColor = 'transparent';
}
// function deletesheets(allsheets,sheet){
//     sheet.addEventListener('mousedown',(e)=>{
//         if(e.button==2){
//             allsheets = document.querySelectorAll('.onesheet');
//             if(allsheets.length==1){
//                 alert('Minimum one sheet is required!');
//             } else {
//                 let response = confirm('Are you sure to delete this sheet?');
//                 if(response){
//                     let idx = sheet.getAttribute('id');
//                     sheetcollection.splice(idx,1);
//                     graphcollection.splice(idx,1);
//                     sheet.remove();
//  

// }
//             }
//         }
//     })
// }

// function deletesheets(){
//     let allsheets = document.querySelectorAll('.onesheet');
//     allsheets.forEach(sheet=>{
//         sheet.addEventListener('mousedown',(e)=>{
//             console.log('no is ' + allsheets.length);
//             if(e.button==2){
//                 if(allsheets.length==1) {
//                     alert('Minimum one sheet is required!');
//                 } else {
//                     // let response = confirm('Are you sure to delete this sheet?');
//                     // if(response) {
//                         let idx = sheet.getAttribute('id');
//                         sheetcollection.splice(idx,1);
//                         graphcollection.splice(idx,1);
//                         sheet.remove();
//                     // } 
//                 }
//             }
//         })
//     })
// }
// function deletesheets(allsheets){
//     allsheets.forEach(sheet=>{
//         sheet.addEventListener('mousedown',(e)=>{
//             console.log(e.button);
//             if(e.button==2){
//                 if(allsheets.length==1){
//                     alert('Minimum one sheet is required!');
//                 } else {
//                     let response = confirm('Are you sure to delete this sheet?');
//                     if(response){
//                         let idx = sheet.getAttribute('id');
//                         sheetcollection.splice(idx,1);
//                         graphcollection.splice(idx,1);
//                         sheet.remove();
//                     } else return;
//                 }
//             }
//         })
//     })
// }
function deletesheets(sheet){
    sheet.addEventListener('mousedown',(e)=>{
        if(e.button==2){
                            allsheets = document.querySelectorAll('.onesheet');
                            if(allsheets.length==1){
                                alert('Minimum one sheet is required!');
                            } else {
                                let response = confirm('Are you sure to delete this sheet?');
                                if(response){
                                    let idx = sheet.getAttribute('id');
                                    sheetcollection.splice(idx,1);
                                    graphcollection.splice(idx,1);
                                    sheet.remove();
                                    renumbersheets();
                                } else return;
                            }
                        }
    })
}
function renumbersheets(){
    allsheets = document.querySelectorAll('.onesheet');
    allsheets.forEach((sheet,i)=>{
        sheet.setAttribute('id',i);
        sheet.innerText = `Sheet-${i+1}`;
    })
}