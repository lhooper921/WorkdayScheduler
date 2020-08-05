

// Define Variables
let currentDate = moment().format("dddd, MMMM Do YYYY");
let hour = moment().format("hh");

const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const container = $('#planner-body');



// Sets current date at the header
$("#currentDay").text(currentDate);





hours.forEach(function (hour) {
    // Build the row
    const rowDiv = $('<form>');
    
    rowDiv.addClass('row');
    rowDiv.addClass('time-block');
    // build the hour div
    const hourDiv = $('<div>');
   
    hourDiv.attr('id', 'hour-' + hour);
    const currentHour = hour === 12 ? 12 : hour % 12;
    const amOrPm = (hour > 11) ? 'PM' : 'AM';
    hourDiv.text(currentHour + ' ' + amOrPm);
    hourDiv.addClass('col-3');
    hourDiv.addClass('hour');

// append to row div
    rowDiv.append(hourDiv);

    // build the input
 const inputDiv = $('<input>', {
 type: 'Text',})
 inputDiv.addClass('col-6');
 inputDiv.attr('id', 'taskHour' + hour);
 const userInput = $('input').val();
 inputDiv.text(userInput);
 
 
 // append to row div
 rowDiv.append(inputDiv);
        
    //build the save
    const saveDiv = $('<button>',{
        type: 'submit'
    });
    saveDiv.addClass('col-3');
    saveDiv.addClass('saveBtn');
    saveDiv.addClass("fa fa-save fa-3x");
    
 // append to row div  
    rowDiv.append(saveDiv);

// append to container div
    container.append(rowDiv);
 
})



//  click event for save button
    $(".saveBtn").on('click',function(event){
         event.preventDefault();
        
         localStorage.setItem("9am",(taskHour9.value));
         localStorage.setItem("10am",taskHour10.value);
         localStorage.setItem("11am",taskHour11.value);
         localStorage.setItem("12am",taskHour12.value);
         localStorage.setItem("1pm",taskHour13.value);
         localStorage.setItem("2pm",taskHour14.value);
         localStorage.setItem("3pm",taskHour15.value);
         localStorage.setItem("4pm",taskHour16.value);
         localStorage.setItem("5pm",taskHour17.value);
        })

  function init() {
      
    document.getElementById("taskHour9").innerHTML =localStorage.getItem("9am");
           
            // localStorage.getItem("10am");
            // localStorage.getItem("11am");
            // localStorage.getItem("12am");
            // localStorage.getItem("1pm");
            // localStorage.getItem("2pm");
            // localStorage.getItem("3pm");
            // localStorage.getItem("4pm");
            // localStorage.getItem("5pm");
            
        };

        init();