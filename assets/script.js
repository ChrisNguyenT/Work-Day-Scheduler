// Displays and updates the current date and time every minute
function updateTime () {
    var currentDate = moment().format('dddd, MMM Do');
    $('#currentDay').html(currentDate);
    var currentTime = moment().format('h:mm a');
    $('#currentTime').html(currentTime);
};                                                                
updateTime();
setInterval(function(){
   updateTime();
},60000);

// Function to save user input to local storage on click
$(function() {
    $('.saveBtn').click(function () {
        var hour = $(this).parent().attr('id');
        var text = $(this).siblings('.description').val();
        localStorage.setItem(hour, text);
    });

    // Returns any user input from local storage 
    $('#h8 .description').val(localStorage.getItem('h8'));
    $('#h9 .description').val(localStorage.getItem('h9'));
    $('#h10 .description').val(localStorage.getItem('h10'));
    $('#h11 .description').val(localStorage.getItem('h11'));
    $('#h12 .description').val(localStorage.getItem('h12'));
    $('#h13 .description').val(localStorage.getItem('h13'));
    $('#h14 .description').val(localStorage.getItem('h14'));
    $('#h15 .description').val(localStorage.getItem('h15'));
    $('#h16 .description').val(localStorage.getItem('h16'));
    $('#h17 .description').val(localStorage.getItem('h17'));

    // Function to add color styling to appropriate time blocks
    function timeTense() {
        var now = moment().hour();

        // This function loops over every time block and compares it with the current hour
        $('.time-block').each(function () {
            // Converts id to an integer and creates an array of the hours separated by 'h'
            var timeBlock = parseInt($(this).attr('id').split('h')[1]);

            // Compares time block and current time to add/remove appropriate class for each time block
            if (timeBlock === now) {
                $(this).removeClass('past');
                $(this).addClass('present');
                $(this).removeClass('future');
            }
            else if (timeBlock < now) {
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            }
            else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        })
    }
    timeTense();
})

// Clear function to remove all saved text
$(function() {
    $('.clearBtn').click(function () {
        localStorage.clear();
        location.reload();
    })});