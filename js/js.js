var nota=0;
var respuesta1= null;
var respuestaselect1=null;

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

    //**************************Corregir HTML******************************
	 formElement=document.getElementById('myform');
	 formElement.onsubmit=function(){
	   inicializar();
	   if (comprobar()){
		corregirText();
		corregirSelect();
		corregirCheckbox();
    corregirMultiple();
		presentarNota();
	   }
	   return false;
	 }

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
	var checkboxContainer1=document.getElementsByTagName('form')[0].getElementsByClassName('pregunta')[6];
	for (i = 0; i < nopt5; i++) {
		opcionesCheckbox5[i]=xmlDoc.getElementsByTagName("question")[6].getElementsByTagName("option")[i].innerHTML;
		    var input = document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML=nopt5[i];
			label.setAttribute("for","p7-r"+i);
			label.innerHTML=opcionesCheckbox5[i];
			input.type="checkbox";
			input.name="checkbox1";
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
	var checkboxContainer2=document.getElementsByTagName('form')[0].getElementsByClassName('pregunta')[7];
	for (i = 0; i < nopt6; i++) {
		opcionesCheckbox6[i]=xmlDoc.getElementsByTagName("question")[7].getElementsByTagName("option")[i].innerHTML;
		    var input = document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML=nopt6[i];
			label.setAttribute("for","p8-r"+i);
			label.innerHTML=opcionesCheckbox6[i];
			input.type="checkbox";
			input.name="checkbox2";
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
	var radioContainer1=document.getElementsByTagName('form')[0].getElementsByClassName('pregunta')[8];
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
	var radioContainer2=document.getElementsByTagName('form')[0].getElementsByClassName('pregunta')[9];
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
		//Salimos de la funcion gentionar XML
	//RESPUESTAS, NOTA Y COMPROBACIÓN
	function inicializar(){
	   document.getElementById('resultadosDiv').innerHTML = "";
	   nota=0.0;
	}
	//comprobar respuestas
	function comprobar(){
	   var f=formElement;
	   var checked=false;
	   for (i = 0; i < f.checkbox1.length; i++) {  //"checkbox1" es el nombre asignado a todos los checkbox
		  if (f.checkbox1[i].checked) checked=true;
	   }
	   //comprueba el input text
	   if (f.elements[0].value=="") {
		f.elements[0].focus();
		alert("Escribe una respuesta en la pregunta 1");
		return false;
	   }else if (f.elements[1].value=="") {
		f.elements[1].focus();
		alert("Escribe una respuesta  en la pregunta 2");
		return false;
	   }
	   //comprueba los select
	   else if (f.elements[2].selectedIndex==0) {
		f.elements[2].focus();
		alert("Selecciona una opción en la pregunta 3");
		return false;
	   }else if (f.elements[3].selectedIndex==0) {
		f.elements[3].focus();
		alert("Selecciona una opción en la pregunta 4");
		return false;
	   }else if (f.elements[4].selectedIndex==0) {
		f.elements[4].focus();
		alert("Selecciona una opción en la pregunta 5");
		return false;
	   }else if (f.elements[5].selectedIndex==0) {
		f.elements[5].focus();
		alert("Selecciona una opción en la pregunta 6");
		return false;
	   }
	  /* if (!checked) {
		f.checkbox1.focus();
		alert("Selecciona una opción del checkbox");
		return false;
	   }*/ else  return true;
	 }
	function corregirText(){

	  var s=formElement.elements[0].value;
	  var r = xmlDoc.getElementsByTagName("answer")[0].innerHTML;
	  if (s==r) {
	   darRespuestaHtml("P1: Correcta");
	   nota +=1;
	  }
	  else {
		darRespuestaHtml("P1: Incorrecta");
	  }
	  var s2=formElement.elements[1].value;
	  var r2 = xmlDoc.getElementsByTagName("answer")[1].innerHTML;
	  if (s2==r2) {
	   darRespuestaHtml("P2: Correcta");
	   nota +=1;
	  }
	  else {
		darRespuestaHtml("P2: Incorrecta");
	  }
	}

	function corregirSelect(){
	  var sel = formElement.elements[2];
      var respuestaSelect = xmlDoc.getElementsByTagName("answer")[2].innerHTML;
	  if (sel.selectedIndex==respuestaSelect) {
	   darRespuestaHtml("P3: Correcta");
	   nota +=1;
	  }
	  else darRespuestaHtml("P3: Incorrecto");

	  var sel2 = formElement.elements[3];
      var respuestaSelect2 = xmlDoc.getElementsByTagName("answer")[3].innerHTML;
	  if (sel2.selectedIndex==respuestaSelect2) {
	   darRespuestaHtml("P4: Correcta");
	   nota +=1;
	  }
	  else darRespuestaHtml("P4: Incorrecta")
	}

	function darRespuestaHtml(r){
	 var p = document.createElement("p");
	 var node = document.createTextNode(r);
	 p.appendChild(node);
	 document.getElementById('resultadosDiv').appendChild(p);
	}
	function presentarNota(){
		darRespuestaHtml("Nota: "+nota+" puntos sobre 6");
	}

	function corregirCheckbox(){
	  var f=formElement;
	  //var respuestasCheckbox = respuesta7;
	  var escorrecta = [];
  	  for (var i = 0; i < f.checkbox1.length; i++) {
    	   if (f.checkbox1[i].checked){
        		escorrecta[i]=false;
        		for (j = 0; j < respuesta7.length; j++) {
        		    if (i==respuestasCheckbox[j]){escorrecta[i]=true};
        		}

        		if (escorrecta[i]) {
        		 nota +=1.0/respuesta7;
        		 darRespuestaHtml("7: "+i+" correcta");
        		} else {
        		 darRespuestaHtml("P7: "+i+" incorrecta");
        		}
    	   }
  	  }

	}

  //*************************************************************************
    function corregirMultiple() {
      var f=formElement;
      for (n = 4; n < 6; n++) {
          var sel = f.elements[n];
          var escorrecta = [];
          var mal = false;
          for (i = 1; i < (sel.length); i++) {
              var opt = sel.options[i];
              if (opt.selected) {
                  escorrecta[i] = false;
                  for (j = 0; j < respuesta5.length; j++) {
                      if ((i - 1) == respuesta5) escorrecta[i] = true;
                  }
                  /*si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.*/
                  if (escorrecta[i]) {
                      nota += 1.0;
                      darRespuestaHtml("P5: "+i+" correcta");
                  } else {
                      darRespuestaHtml("P5: "+i+" incorrecta");
                      mal = true;
                  }
              }
          }

      }
  }
  //***********************************
}
