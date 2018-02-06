/**
 * 
 */
	 
function required()
{
var numberfilter = /^(\d{7})(\d{3})?$/;
var x=document.form1.text1.value;
if(numberfilter.test(x)==true)
    alert("Valid");
else if(numberfilter.test(x)==false)
    alert("Invalid");
}