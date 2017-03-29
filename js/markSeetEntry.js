// JavaScript Document

$(document).ready(function() {
	
	
	
	$('select.achievementSelect').change(function(){
    var sum = 0;
	//var gradeArray = [{5:"A",4:"B",3:"C",2:"D",1:"E", 0:"null"}];
	var selectedRow = $(this).closest("tr");
		
    selectedRow.find('select.achievementSelect :selected').each(function() {
		var selectedValue = $(this).val();
		sum += Number(selectedValue);
		//alert($("select.achievementSelect :selected").text());
    });
		var overall = sum/4 ;
		
     selectedRow.find(".overAllScoreCorrected").html(overall.toFixed());
});
});