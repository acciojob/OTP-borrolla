//your JS code here. If required.
const codes = document.querSelectorAll('.code');
codes[0].focus

codes.forEach((code, idx) => {
	code.addEventListener("input", (event) => {
		 if(event.target.value.length === 1 && idx < codes.length - 1){
			 codes[idx +  1].focus();
		 }	
     })
		code.addEventListener("keydown", (event) => {
		 if(event.key === 'BackSpace' && !event.target.value && idx > 0) { 
	
				codes[idx - 1].focus();
		   
		}
	 })		
 })










	
})