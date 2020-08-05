

// Define Variables
let currentDate = moment().format("dddd, MMMM Do YYYY");
let globalHour = moment().format("HH");

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
 inputDiv.val(localStorage.getItem("taskHour" + hour));
     // Add classes based on current time
   if (hour === globalHour) {
       inputDiv.addClass('present');
   }
   if (hour < globalHour) {
    inputDiv.addClass('past');
}
if (hour > globalHour) {
    inputDiv.addClass('future');
}
 
 
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
        var inputText = $(event.target).siblings("input")
        console.log(inputText.val());
        localStorage.setItem(inputText.attr("id"),inputText.val())
    
        })