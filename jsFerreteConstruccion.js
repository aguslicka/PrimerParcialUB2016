var app= angular.module("FerreteConstruccion",[]);

app.controller("controlConstruccion",function($scope){

	$scope.mensajeRespuesta="sin rta";
	$scope.vCantCemento = 2;
	$scope.vCantCal = 3;	

	$scope.Perimetro=function(dato1, dato2, dato3, dato4){
       	alert(parseInt(dato1) + parseInt(dato2) + parseInt(dato3) + parseInt (dato4));
	};

	$scope.Circulo=function(dato3){
       	alert((2*3.14 * parseInt(dato3)) *3 );
	};	


	$scope.Contrapiso=function(dato1, dato2){
		//parseInt(dato2) * $scope.vCantCal
       	alert("Bolsas de Cemento: "+parseInt(dato1) * $scope.vCantCemento);
       	alert("Bolsas de Cal: "+parseInt(dato2) * $scope.vCantCal);
       		 
	};	
			
});