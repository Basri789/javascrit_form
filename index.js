
        //  var ischebox    =  false;
        //  var isEmail     =  false;
        //  var isName      =  false;
        //  var isMobile    =  false;
        var selectRow   =  null;
        document.getElementById('submit').onclick=function(a)
       {
                a.preventDefault();
               
              
             
                 
                  
                   
       
            if(selectRow===null)
           {
                       var table          = document.getElementById("table");
                       var row            = table.insertRow(-1);  
                       var name           = row.insertCell(0);
                       var email          = row.insertCell(1);
                       var mobile         = row.insertCell(2);
                       var country        = row.insertCell(3);
                       var state          = row.insertCell(4);
                       var distict        = row.insertCell(5);
                       var edu            = row.insertCell(6); 
       
                     
                       name.innerHTML     = document.getElementById("fullname").value;
                       email.innerHTML    = document.getElementById("email").value;
                       mobile.innerHTML   = document.getElementById("mbno").value;
                       country.innerHTML  = document.getElementById("select1").value;
                       state.innerHTML    = document.getElementById("select2").value;
                       distict.innerHTML  = document.getElementById("select3").value;
                       edu.innerHTML      = `<button type="button" class="btn btn-info"onclick="onEdit(this)">Edit</button>
                                           <button type="button"  class="btn btn-danger"onclick="myFunction(this)" >Delete</button>`;
                      
                   
               return false;
           }
           else
           {
                onUpdate();
                    
           }
       
       }
               
                          
       
       
       //edit//
       function onEdit(td)
       {
              selectRow = td.parentElement.parentElement;
          
              document.getElementById("fullname").value = selectRow.cells[0].innerHTML;
              document.getElementById("email").value    = selectRow.cells[1].innerHTML;
              document.getElementById("mbno").value     =  selectRow.cells[2].innerHTML;
              document.getElementById("select1").value  =  selectRow.cells[3].innerHTML;
              document.getElementById("select2").value  =  selectRow.cells[4].innerHTML;
              document.getElementById("select3").value  =  selectRow.cells[5].innerHTML;
       
       }
       //update
       function onUpdate()
       {
              selectRow.cells[0].innerHTML              =     $("#fullname").val();
              selectRow.cells[1].innerHTML              =     $("#email").val();
              selectRow.cells[2].innerHTML              =     $("#mbno").val();
              selectRow.cells[3].innerHTML              =     $("#select1").val()
              selectRow.cells[4].innerHTM               =     $("#select2").val();
              selectRow.cells[5].innerHTML              =     $("#select3").val()
       }
       //Delete
       function myFunction(r)
       {
       
           if(confirm("Are You Sure That You Want To Delete The Selected Item"))
           {  
               
       
               var i = r.parentNode.parentNode.rowIndex;
               document.getElementById("table").deleteRow(i); 
           }     
           
        }
       
       
       //Name validation
       
           
       document.getElementById('fullname').addEventListener('keydown', function checkName(evt)
       {
               var textCode= evt.textCode?evt.textCode: evt.which;
       
               if(
                !(textCode<48||textCode>57))
       
                 evt.preventDefault();
        });
           
         
           //phone validation
           
       
           
       document.getElementById('mbno').addEventListener('keydown', function mobileValidation(e)
       {
                var key   = e.keyCode ? e.keyCode : e.which;
              
           
               if (key!=8&&( key<48||key>57))
                  
                    
                e.preventDefault();
        });
       
       //email
       function emailvalid(){
           
               var email1 = document.getElementById('email').value;
               var mailrex= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
           if(email1.match(mailrex))
           { 
               document.querySelector('#email').style.border='2px solid green';
               
               // return true;
               isEmail = true;
           }
           else
           {
               document.querySelector('#email').style.border='2px solid red';
              
               // return false;
               isEmail =false;
           }
       
       }
       
       //checkbox
      //  function onbox()
      //  {
      //          let chkbox = document.querySelector(".checkbox");
      //      if(!chkbox.checked)
      //      {
      //          alert("select check box");
      //          ischebox   = false;
             
              
      //      }
      //      else
      //      {
      //         ischebox   = true;
             
      //      }
      //  }
       
       
       
  /*Time And Date*/
  /*Clock*/
       
function updateTime() {
    var dateInfo = new Date();
  
    /* time */
    var hr,
      _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
      sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
      ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";
  
    // replace 0 with 12 at midnight, subtract 12 from hour if 13–23

    if (dateInfo.getHours() == 0) {
      hr = 12;
    } else if (dateInfo.getHours() > 12) {
      hr = dateInfo.getHours() - 12;
    } else {
      hr = dateInfo.getHours();
    }
  // Add to time format
  
    var currentTime = hr + ":" + _min + ":" + sec;
  
  
  
  
    // AM/ PM options 
  
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;
  
  
  
  /*  Add Date options */
   /* date */
   var dow = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  day = dateInfo.getDate();

// store date
var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;

document.getElementsByClassName("date")[0].innerHTML = currentDate;
};
  
  
  // print time and date once, then update them every second
  updateTime();
  setInterval(function() {
    updateTime()
  }, 1000);


 