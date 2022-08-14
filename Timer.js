var secondVal = 0
var minuteVal = 0
var hourVal = 0
function getInput() {
    hourVal = document.getElementById("Hour").value
    minuteVal = document.getElementById("Minute").value
    secondVal = document.getElementById("Second").value
}


function startCountdown() {
        document.getElementById("secondbox").placeholder = secondVal 
        document.getElementById("minutebox").placeholder = minuteVal 
        document.getElementById("hourbox").placeholder = hourVal
        
        if(secondVal==0 && minuteVal==0 && hourVal==0) {
            clearInterval(myVar)    

        }
        if(secondVal==0 && minuteVal==0) {
            if(hourVal>0) {
                hourVal = hourVal - 1
                document.getElementById("hourbox").placeholder = hourVal 
                secondVal = 60
                minuteVal = 59
                document.getElementById("secondbox").placeholder = secondVal 
                document.getElementById("minutebox").placeholder = minuteVal 
            }
            else {
                hourVal = 0
                secondVal = 60
                minuteVal = 59
                document.getElementById("secondbox").placeholder = secondVal 
                document.getElementById("minutebox").placeholder = minuteVal 
                document.getElementById("hourbox").placeholder = hourVal 
        

            }
        }

         else if (secondVal == 0) {
            secondVal = 60
            if(minuteVal == 0 ) {
                minuteVal = 59
                document.getElementById("minutebox").placeholder = minuteVal 

                
            } 
            else {
                minuteVal = minuteVal - 1
                document.getElementById("minutebox").placeholder = minuteVal 
            }
            
         }

        
         document.getElementById("secondbox").placeholder = secondVal 

         secondVal = secondVal - 1

}