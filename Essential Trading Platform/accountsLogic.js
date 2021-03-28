$(document).ready(function(){

var accList=[
                {accountName:" Premier Candle Co.",companyName:" Essential Trading Ltd ",accountNumber:" 000001 ",telephoneNumber:" 6469420453 ",cellNumber:"0",contactNumber:"Eddie ",terms:"1000 Days ",address:" 919 West St Pelham, NY 10803"}


                ]
function redrawList(){
  let list= $("#accountList");
  list.html("");
  $.each(accList,function(index,value){
        $('<tr/>').text("Account Name: "+value.accountName+" |Company Name: "+value.companyName+" |Account Number: "+value.accountNumber+" |Telephone: "+value.telephoneNumber+" |Cell: "+value.cellNumber+" |Contact: "+value.contactNumber+" |Terms: "+value.terms+" |Address: "+value.address).appendTo(list);
        });
      }
redrawList();
$("#submitAcc").click(function(){
      let accName=$("#accountInput").val();
      let comName=$("#companyInput").val();
      let accNum=$("#accNumInput").val();
      let telNum=$("#telInput").val();
      let celNum=$("#celInput").val();
      let contactN=$("#contactInput").val();
      let termCod=$("#termsInput").val();
      let addy=$("#addressInput").val();
    let accountObject={accountName:accName,companyName:comName,accountNumber:accNum,telephoneNumber:telNum,cellNumber:celNum,contactNumber:contactN,terms:termCod,address:addy};
      accList.push(accountObject);
      redrawList()
    });

});
