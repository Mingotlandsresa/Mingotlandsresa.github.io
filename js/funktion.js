function gissa(){
	 var svar = document.getElementById('svar').value;

	 if(svar=="ja")	{
		alert("Det borde du, det är verkligen jätte fint där");
	 	}
	 else{
	 	alert("Varför inte?:(");
	 }
}

$(document).ready(function(){
	//Ta fram
	$("#ett").hover(function(){
		$("#två").show(500);
	});

	$("#två").hover(function(){
		$("#tre").show(500);
	});

	$("#tre").hover(function(){
		$("#ett").show(500);
	});

	//Ta bort
	$("#ett").click(function(){
		$("#ett").hide(500);
	});

	$("#två").click(function(){
		$("#två").hide(500);
	});

	$("#tre").click(function(){
		$("#tre").hide(500);
	});		
});