		var a;
		var result = 0;
		var π = Math.PI;
		$(function agregarpantalla(){
			$('.button').click(function(){
				if (a == null)
				{	
					a = this.value;
					$('#pantalla').val(a);
				}
				else if (this.value == "^" ){
					a = parseInt(a)
					a = Math.pow(a,2);
					if(isNaN(a)){
						a = 0;
					}else{
					result = a
					$('#pantalla').val(a);
					}
				} 
				else if (this.value == "√" ){
					a = parseInt(a)
					a = Math.sqrt(a,2);
					if(isNaN(a)){
						a = 0;
					}else{
					result = a
					$('#pantalla').val(a);
					}
					result = a
					$('#pantalla').val(a);
				}
				else{
					a += this.value;
					$('#pantalla').val(a);
				}
			});
		});
		
		$(function clearPantalla() {
			$("#clear").click(function(){
				a = null;
				$("#pantalla").val("");
			});
		});
		
		$(function resultadoPantalla() {
			if (isNaN(result)){
				result = 0;
				a = 0;
				$("#pantalla").val(result);
			}
			if (result > 3.4336838202925124e+30){
				result = "E"
				a=null;
				$("#pantalla").val(result);
			}
			else{
			$("#resultado").click(function(){
				result = eval(a);
				a = result
				$("#pantalla").val(result);
			});
			}
		});