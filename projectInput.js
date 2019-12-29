var head=''
 let alertA=0;
 let lack='';

let serial;
let numB=0;
let numC=0;
document.getElementById('submit').onclick=function(){

  numC=0

 //Anti-Overwritting Chapter; 

while(numB==1){
     if(document.getElementById('inputSerialNo').value==serial){
             numC=1;
            
             break;
     }
     if(document.getElementById('inputRollNo').value==roll){
             numC=1;
            
             break;
     }
     if(document.getElementById('inputImage').value==imageA){
        numC=1;
            
             break;
     }
     numB=0;
     break;
}



//Finish
if(numC==0){

    let enterName=document.getElementById('inputName').value;
    let enterFathersName=document.getElementById('inputFathersName').value; 
    let enterMothersName=document.getElementById('inputMothersName').value; 
    let rollNo=document.getElementById('inputRollNo').value;
    let enterDate=document.getElementById('inputDate').value;
    let enterMonth=document.getElementById('inputMonth').value;
    let enterYear=document.getElementById('inputYear').value;
    let enterNationality=document.getElementById('inputNationality').value
    let enterReligion=document.getElementById('inputReligion').value;
    let enterImage=document.getElementById('inputImage').value;
    let enterPaid=document.getElementById('inputPaid').value;
    let enterDue=document.getElementById('inputDue').value;
    let enterAdv=document.getElementById('inputAdv').value;
    let enterSerialNo=document.getElementById('inputSerialNo').value;
    let enterTeachersSign=document.getElementById('inputTeachersSign').value;

//alert Chapter
alertA=0;
lack='';
if(document.getElementById('inputName').value==""){
  alertA=1;
  lack=lack+'Name; ';
}
if(document.getElementById('inputFathersName').value==""){
  alertA=1;
  lack=lack+"Father's Name; ";
}
if(document.getElementById('inputMothersName').value==""){
  alertA=1;
  lack=lack+"Mother's Name; ";
}
if(document.getElementById('inputRollNo').value==""){
  alertA=1;
  lack=lack+'Roll No; ';
}
if(document.getElementById('inputDate').value=="Date"){
  alertA=1;
  lack=lack+'Date; ';
}
if(document.getElementById('inputMonth').value=="Month"){
  alertA=1;
  lack=lack+'Month; ';
}
if(document.getElementById('inputYear').value=="Year"){
  alertA=1;
  lack=lack+'Year; ';
}
if(document.getElementById('inputNationality').value==""){
  alertA=1;
  lack=lack+'Nationality; ';
}
if(document.getElementById('inputReligion').value==""){
  alertA=1;
  lack=lack+'Religion; ';
}
if(document.getElementById('inputImage').value==""){
  alertA=1;
  lack=lack+'Image; ';
}
if(document.getElementById('inputPaid').value==""){
  alertA=1;
  lack=lack+'Paid; ';
}
if(document.getElementById('inputDue').value==""){
  alertA=1;
  lack=lack+'Due; ';
}
if(document.getElementById('inputAdv').value==""){
  alertA=1;
  lack=lack+'Adv.; ';
}
if(document.getElementById('inputSerialNo').value==""){
  alertA=1;
  lack=lack+'Serial No.; ';
}
if(document.getElementById('inputTeachersSign').value=="Input Image Name"){
  alertA=1;
  lack=lack+"Teacher's Signature: " ;
}



//Chapter End;

if(alertA==1){
    alert(`Please Enter `+lack);
}





if(alertA==0){

let main=`<fieldset id='fieldsetB' style=' width:600px;height:280px;  border-width: 1px; border-color: yellow; margin-left: 375px; text-align: center;'><i style='color:rgb(145, 211, 231)'>STUDENT's PROFILE</i><hr><div id='profilePartA' style=' text-align: left; float: left;'><b style='color:yellow'>Name: </b><i id='printName'>` + enterName +`</i><br><b style='color:yellow'>Father's Name: </b><i id='printFathersName'>`+enterFathersName +`</i><br><b style='color:yellow'>Mother's Name: </b><i id='printMothersName'>`+enterMothersName +`</i><br><b style='color:yellow'>Roll: </b><i id='printRoll'>`+rollNo+`</i><br><b style='color:yellow'>Date Of Birth: </b><i id='printDob'>`+enterDate+` `+enterMonth+`,`+enterYear+`</i><br><b style='color:yellow'>Nationality: </b><i id='printNationality'>`+enterNationality+`</i><br><b style='color:yellow'>Religion: </b><i id='printReligion'>`+enterReligion+`</i></div><div id='profilePartB' style=' float: left;   text-align: right;  width: 354px;'><span id='printImage'><img src='images/`+enterImage+`.jpg' height='115px' width='100px'></span><br><b style='color:yellow'>Serial No.: </b><i id='printSerialNo'>`+enterSerialNo+`</i></div><div id='profilePartC' style=' clear:both; text-align: center;'><br><i style='color:yellow'><u>Fees</u></i><br><b style='color:yellow'>Paid: </b><i id='printPaid'>`+enterPaid+`</i><br><b style='color:yellow'>Due: </b><i id='printDue'>`+enterDue+`</i><br><b style='color:yellow'>Advance: </b><i id='printAdvance'>`+enterAdv+`</i></div><div id='profilePartD' style=' text-align: right;'><b style='color:yellow'>Teacher's Signature: </b><span id='printSignature'><img src='images/`+enterTeachersSign+`.jpg' height='16px' width='60px'></span></div></fieldset>`

head=head+'<br>'+main;



document.getElementById('checkAA').innerHTML=head;
}

serial=document.getElementById('inputSerialNo').value;
roll=document.getElementById('inputRollNo').value;
imageA=document.getElementById('inputImage').value;

numB++;

}

}





















