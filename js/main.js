$(document).ready(function(){
    var operandoa;
    var operandob;
    var operacion;

    //PASAR INFORMACIÓN DE NÚMEROS
    var pasarDato = ["uno", "1", "dos", "2", "tres", "3"];

    for(var i = 0; i < pasarDato.length; i++){
        dato(pasarDato[i], pasarDato[i+1]);
    }

    var pasarDato2 = ["cuatro", "4", "cinco", "5", "seis", "6"];

    for(var i = 0; i < pasarDato2.length; i++){
        dato(pasarDato2[i], pasarDato2[i+1]);
    }

    var pasarDato3 = ["siete", "7", "ocho", "8", "nueve", "9"];

    for(var i = 0; i < pasarDato3.length; i++){
        dato(pasarDato3[i], pasarDato3[i+1]);
    }

    var pasarDato4 = ["cero", "0"];

    for(var i = 0; i < pasarDato4.length; i++){
        dato(pasarDato4[i], pasarDato4[i+1]);
    }


    function dato(numText, valor){
        $("#" + numText).on('click', function(){
            var tot = $("#display").val() + valor;
            $("#display").val(tot);
        });
    }
    //PASAR INFORMACIÓN DE NÚMEROS


    $("#resetear").on('click', function(){
        reset();
    });


    $("#suma").on('click', function(){
        operandoa = $("#display").val();
        operacion = '+';
        limpiar();
    });

    $("#menos").on('click', function(){
        operandoa = $("#display").val();
        operacion = '-';
        limpiar();
    });

    $("#dividir").on('click', function(){
        operandoa = $("#display").val();
        operacion = '/';
        limpiar();
    });

    $("#mult").on('click', function(){
        operandoa = $("#display").val();
        operacion = '*';
        limpiar();
    });

    $("#porcentaje").on('click', function(){
        operandoa = $("#display").val();
        operacion = '%';
        limpiar();
    });

    $("#sqrt").on('click', function(){
        operandoa = $("#display").val();
        operacion = 'raiz';
        solucion();
    });

    $("#pow").on('click', function(){
        operandoa = $("#display").val();
        operacion = 'pow';
        limpiar();
    });

    $("#igual").on('click', function(){
        operandob = $("#display").val();
        solucion();
    });
    
    function solucion(){
        var total = 0;
        switch(operacion){
            case '+':
                total = parseInt(operandoa) + parseInt(operandob);
                break;
            case '-':
                total = parseInt(operandoa) - parseInt(operandob);
                break;
            case '*':
                total = parseInt(operandoa) * parseInt(operandob);
                break;
            case '/':
                total = parseInt(operandoa) / parseInt(operandob);
                break;
            case '%':
                total = (parseInt(operandoa) * parseInt(operandob)) / 100;
                break;
            case 'raiz':
                total = Math.sqrt(operandoa);
                break;
            case 'pow':
                total = Math.pow(operandoa, operandob);
                break;
        }
        $("#display").val(total);
        //reset();
        
    }

    function limpiar(){
        $("#display").val("");
    }
    
    function reset(){
        $("#display").val("");
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }
    
});