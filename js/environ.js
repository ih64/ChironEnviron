$(document).ready(function () {
    $('.btn-tps').click(function() {

        $(this).toggleClass('btn-plotted');

    });
    $('#pastWeek').click(function() {

    });
    $('#pastMonth').click(function() {
    	
    });
    $('#pastCustom').click(function() {
    	
    });
});

//The default is to plot the past month:
var endDate = moment();
var begDate = moment();
begDate = endDate.month(-1);

console.log('beginning date: '+begDate.format('YYYY-MM-DD HH:mm:ss'));
//returns: beginning date: 2014-12-01 21:03:08
console.log('end date: '+endDate.format('YYYY-MM-DD HH:mm:ss'));
//returns end date: 2014-12-01 21:03:08
