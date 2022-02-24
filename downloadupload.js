let download = document.querySelector('.fa-download');
let upload = document.querySelector('.upload>input');
download.addEventListener('click',(e)=>{
    var a = document.createElement("a");
    let content = JSON.stringify([sheetdb,allcellsforcycle]);
    var file = new Blob([content], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = "myspreadcellsheet";
    a.click();
})
document.getElementById('inputfile')
            .addEventListener('change', function() {
              
                addsheet.click();
                let totalsheets = document.querySelectorAll('.onesheet');
                console.log(totalsheets.length);
                var fr=new FileReader();
                let ans;
                fr.onload=function(){
                     ans =JSON.parse(fr.result);
                    // document.getElementById('output')
                    //         .textContent
                     console.log(ans);
                     sheetcollection[totalsheets.length-1] = ans[0];
                     graphcollection[totalsheets.length-1] = ans[1];
                    
            
                }
            
                 fr.readAsText(this.files[0]);
        })
// upload.addEventListener('change',(e)=>{
//     addsheet.click();
//     let totalsheets = document.querySelectorAll('.onesheet');
//     var fr=new FileReader();
//     let ans;
//     fr.onload=function(){
//         // ans =fr.result;
//         // document.getElementById('output')
//         //         .textContent
//         ans = JSON.parse(fr.result);
//         console.log(ans);
//         // sheetcollection[totalsheets.length-1] = ans[0];
//         // graphcollection[totalsheets.length-1] = ans[1];
        

//     }

//      fr.readAsText(this.files[0]);
// })
