
function consultaCEP(){
    let cep = document.getElementById("CEP").value
    let url = "http://viacep.com.br/ws/"+cep+"/json/"

    $.ajax({
        url: url ,
        type: "GET" ,
        success:function(response){
            console.log(response);
        }
    
    })

}