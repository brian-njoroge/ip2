function generateName(){
    var date = document.getElementById('date').value;
    
    var month = document.getElementById('month').value;
   
    var yearOfBirth = document.getElementById('year').value;
    
  
    var century = yearOfBirth.slice(0,2);
    var year = yearOfBirth.slice(2,4);
  
    var genders = document.getElementById("gender");
    var gender = genders.options[genders.selectedIndex].text;
  
    var maleName = ["Kwesi", "Kwadwo", "Kwabana", "Kwaku", "Yaw", "Koffi", "Kwame"];
    var femaleName = ["Akusu", "Adwaa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
  
    var dayOfBirth = ( ( (century/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
    var dayOfBirth = Math.floor(dayOfBirth);
  
    if (gender === "Male") {
         document.getElementById("result").innerHTML = "You were born on a " + dayOfWeek[dayOfBirth - 1]+ " and you are " +  maleName[dayOfBirth -1];
         }
         else if (gender === "Female") {
             document.getElementById("result").innerHTML = "You were born on a " + dayOfWeek[dayOfBirth - 1]+ " and you are " +  femaleName[dayOfBirth -1];
         }
      
  }