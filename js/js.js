// fichoro xml que está en el servidor rawgit
var url="https://rawgit.com/DaniTur/jsxml/master/xml/preguntas.xml";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  // función personalizada que gestiona la respuesta a la petición de fichero
  gestionarXml(this);
 }
};
xhttp.open("GET", url, true); //url del fichero
xhttp.send();

// función personalizada que gestiona la respuesta a la petición de fichero
function gestionarXml(dadesXml){
    var xmlDoc = dadesXml.responseXML;

    //Ciclo for para poner los enunciados
	for (var i = 1; i <= xmlDoc.getElementsByTagName("title").length; i++) {
      document.getElementById("p"+[i]+"-e").innerHTML = xmlDoc.getElementsByTagName("title")[i-1].innerHTML;
    }

    //for(var i=0;i<xmlDoc.getElementsByTagName("question").length;i++){
	//
    //}
	
	//****************Insertamos les opcions de cada pregunta del XML en el HTML******************************
	//number1
	respuesta1=xmlDoc.getElementsByTagName("answer")[0].innerHTML;
	//number2
	respuesta2=xmlDoc.getElementsByTagName("answer")[1].innerHTML;
	//select1
	var opcionesSelect1 = [];
	var nopt1 = xmlDoc.getElementsByTagName("question")[2].getElementsByTagName('option').length;
	var s1=document.getElementsByTagName("select")[0];
	for (var i = 0; i < nopt1; i++) { 	
		opcionesSelect1[i] = xmlDoc.getElementsByTagName("question")[2].getElementsByTagName("option")[i].innerHTML;
		var option1=document.createElement("option");
		option1.text=opcionesSelect1[i];
		option1.value=i+1;
		s1.appendChild(option1);
	}
	respuesta3=xmlDoc.getElementsByTagName("answer")[2].innerHTML;
	//select2
	var opcionesSelect2 = [];
	var nopt2 = xmlDoc.getElementsByTagName("question")[3].getElementsByTagName('option').length;
	var s2=document.getElementsByTagName("select")[1];
	for (var i = 0; i < nopt2; i++) { 	
		opcionesSelect2[i] = xmlDoc.getElementsByTagName("question")[3].getElementsByTagName("option")[i].innerHTML;
		var option2=document.createElement("option");
		option2.text=opcionesSelect2[i];
		option2.value=i+1;
		s2.appendChild(option2);
	}
	respuesta4=xmlDoc.getElementsByTagName("answer")[3].innerHTML;
	//select3
	var opcionesSelect3 = [];
	var nopt3 = xmlDoc.getElementsByTagName("question")[4].getElementsByTagName('option').length;
	var s3=document.getElementsByTagName("select")[2];
	for (var i = 0; i < nopt3; i++) { 	
		opcionesSelect3[i] = xmlDoc.getElementsByTagName("question")[4].getElementsByTagName("option")[i].innerHTML;
		var option3=document.createElement("option");
		option3.text=opcionesSelect3[i];
		option3.value=i+1;
		option3.classList.add("opciones");
		s3.appendChild(option3);
	}
	respuesta5=xmlDoc.getElementsByTagName("answer")[4].innerHTML;
	//select4
	var opcionesSelect4 = [];
	var nopt4 = xmlDoc.getElementsByTagName("question")[5].getElementsByTagName('option').length;
	var s4=document.getElementsByTagName("select")[3];
	for (var i = 0; i < nopt4; i++) { 	
		opcionesSelect3[i] = xmlDoc.getElementsByTagName("question")[5].getElementsByTagName("option")[i].innerHTML;
		var option4=document.createElement("option");
		option4.text=opcionesSelect3[i];
		option4.value=i+1;
		option4.classList.add("opciones");
		s4.appendChild(option4);
	}
	respuesta6=xmlDoc.getElementsByTagName("answer")[5].innerHTML;
	//checkbox1
	var opcionesCheckbox5 = [];
	var nopt5 = xmlDoc.getElementsByTagName("question")[6].getElementsByTagName("option").length;
	var checkboxContainer1=document.getElementsByTagName('form')[6];
	for (i = 0; i < nopt5; i++) { 
		opcionesCheckbox5[i]=xmlDoc.getElementsByTagName("question")[6].getElementsByTagName("option")[i].innerHTML;
		    var input = document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML=nopt5[i];
			label.setAttribute("for","p7-r"+i);
			label.innerHTML=opcionesCheckbox5[i];
			input.type="checkbox";
			input.id="p7-r"+i; 
			input.value=i+1;
			checkboxContainer1.appendChild(input);
			checkboxContainer1.appendChild(label);
			checkboxContainer1.appendChild(document.createElement("br"));
	}
	var respuesta7 = xmlDoc.getElementsByTagName("question")[6].getElementsByTagName('answer').length;
	for (i = 0; i < respuesta7; i++) { 
		respuesta7[i]=xmlDoc.getElementsByTagName("question")[6].getElementsByTagName("answer")[i].innerHTML;
	}
	//checkbox2
	var opcionesCheckbox6 = [];
	var nopt6 = xmlDoc.getElementsByTagName("question")[7].getElementsByTagName("option").length;
	var checkboxContainer2=document.getElementsByTagName('form')[7];
	for (i = 0; i < nopt6; i++) { 
		opcionesCheckbox6[i]=xmlDoc.getElementsByTagName("question")[7].getElementsByTagName("option")[i].innerHTML;
		    var input = document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML=nopt6[i];
			label.setAttribute("for","p8-r"+i);
			label.innerHTML=opcionesCheckbox6[i];
			input.type="checkbox";
			input.id="p8-r"+i; 
			input.value=i+1;
			checkboxContainer2.appendChild(input);
			checkboxContainer2.appendChild(label);
			checkboxContainer2.appendChild(document.createElement("br"));
	}
	var respuesta8 = xmlDoc.getElementsByTagName("question")[7].getElementsByTagName('answer').length;
	for (i = 0; i < respuesta8; i++) { 
		respuesta8[i]=xmlDoc.getElementsByTagName("question")[7].getElementsByTagName("answer")[i].innerHTML;
	}
	//radio1
	var opcionesRadio6 = [];
	var nopt7 = xmlDoc.getElementsByTagName("question")[8].getElementsByTagName("option").length;
	var radioContainer1=document.getElementsByTagName('form')[8];
	for (i = 0; i < nopt7; i++) { 
		opcionesRadio6[i]=xmlDoc.getElementsByTagName("question")[8].getElementsByTagName("option")[i].innerHTML;
		    var input = document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML=nopt7[i];
			label.setAttribute("for","p9-r"+i);
			label.innerHTML=opcionesRadio6[i];
			input.type="radio";
			input.id="p9-r"+i; 
			input.value=i+1;
			input.classList.add("input");
			radioContainer1.appendChild(input);
			radioContainer1.appendChild(label);
			radioContainer1.appendChild(document.createElement("br"));
	}
	var respuesta9 = xmlDoc.getElementsByTagName("question")[8].getElementsByTagName('answer').length;
	for (i = 0; i < respuesta9; i++) { 
		respuesta9[i]=xmlDoc.getElementsByTagName("question")[8].getElementsByTagName("answer")[i].innerHTML;
	}
	//radio2
	var opcionesRadio7 = [];
	var nopt8 = xmlDoc.getElementsByTagName("question")[9].getElementsByTagName("option").length;
	var radioContainer2=document.getElementsByTagName('form')[9];
	for (i = 0; i < nopt8; i++) { 
		opcionesRadio7[i]=xmlDoc.getElementsByTagName("question")[9].getElementsByTagName("option")[i].innerHTML;
		    var input = document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML=nopt8[i];
			label.setAttribute("for","p10-r"+i);
			label.innerHTML=opcionesRadio7[i];
			input.type="radio";
			input.id="p10-r"+i; 
			input.value=i+1;
			input.classList.add("input");
			radioContainer2.appendChild(input);
			radioContainer2.appendChild(label);
			radioContainer2.appendChild(document.createElement("br"));
	}
	var respuesta10 = xmlDoc.getElementsByTagName("question")[9].getElementsByTagName('answer').length;
	for (i = 0; i < respuesta10; i++) { 
		respuesta10[i]=xmlDoc.getElementsByTagName("question")[9].getElementsByTagName("answer")[i].innerHTML;
	}
}
