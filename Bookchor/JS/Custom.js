window.addEventListener('load',()=>{
    window.alert("Please Click Add Details Buttons");
    var Main11 = document.getElementById('Main11');
    var Main12 = document.getElementById('Main12');
    var Main13 = document.getElementById('Main13');
    var Main2 = document.getElementsByClassName("Main2");
    takeButtonFromMain2(Main2);
});

function takeButtonFromMain2(Main2){
var arrMain = [{Main:Main2[0].childNodes[1],toggle:false},{Main:Main2[0].childNodes[3],toggle:false},{Main:Main2[0].childNodes[5],toggle:false}];
    var arrMain2 = arrMain.map((MainArrObject)=>{
        const MainH = MainArrObject.Main.childNodes[1];
        const MainP = MainArrObject.Main.childNodes[3];
        const MainButton = MainArrObject.Main.childNodes[3].childNodes[5];        
        applyEventOnButton(MainButton,MainH,MainP,MainArrObject);
    });
}

    function applyEventOnButton(btn,H,P,MainArrObject){
        btn.addEventListener('click',function(){
            performAction(btn,H,P,MainArrObject);
         });
    }
function performAction(btn,H,P,MainArrObject){
    // console.log(btn,H,P,MainArrObject);
      var toggle = checkToggle(MainArrObject);
      if(toggle){            
            MainArrObject.Main.classList.add('MainBorder');
            btn.classList.add('MainBtn');
            btn.innerHTML = 'Edit Details';
            H.childNodes[1].classList.add('MainH');
           const M1 =  checkMain1(MainArrObject.Main.id);
           M1.classList.add('MDiv');
           
           
      }
      else if(!toggle){
            MainArrObject.Main.classList.remove('MainBorder');
            btn.classList.remove('MainBtn');
            btn.innerHTML = 'Add Details';
            H.childNodes[1].classList.remove('MainH');
          const M1 =  checkMain1(MainArrObject.Main.id);
          M1.classList.remove('MDiv');
      }
        
        
}
function checkMain1(id){
    if(id == 'Main21'){
        return Main11.childNodes[0];
    }
    else if(id == 'Main22'){
        return Main12.childNodes[0];
    }
    else if(id == 'Main23'){
        return Main13.childNodes[0];
    }
    }
function checkToggle(arrObject){
    arrObject.toggle = !arrObject.toggle;
    return arrObject.toggle;
}
// window.addEventListener('load',function(){
//     var Main11 = document.getElementById('Main11');
//     var Main12 = document.getElementById('Main12');
//     var Main13 = document.getElementById('Main13');
//     var Main21 = document.getElementById('Main21');
//     var Main22 = document.getElementById('Main22');
//     var Main23 = document.getElementById('Main23');    
//     addEventToButtons();
// });
// function addEventToButtons(){
//     var arr2 = [{Main:Main11,toggle:false},{Main:Main12,toggle:false},{Main:Main13,toggle:false}];
//     let divArr = [Main21,Main22,Main23];
//  var appliedEvent = divArr.map((Main,InDex,arr) => {
//     //  console.log(Main.childNodes[3].childNodes[5]);
//     const GetButton = Main.childNodes[3].childNodes[5]; 
//     GetButton.addEventListener('click',function(){
//         toggleMyDivOnButtonClick(GetButton);
//     });
//  });
// }

// function toggleMyDivOnButtonClick(btn){
    
    
      
// }