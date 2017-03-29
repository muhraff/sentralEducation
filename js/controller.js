mainApp.controller('studentController', function($scope) {
			 $scope.achievementGradeSelect = ["A", "B", "C","D","E"];
			 $scope.effortGradeSelect = ["C","U","R"];
	$scope.overAll = $scope.selectedAchievementGrade;
	
	console.log($scope.selectedAchievementGrade);
			 
            $scope.student = {
               firstName: "Mahesh",
               lastName: "Parashar",
               subjects:[
                  {name:'English',aGrade:'C', eGrade:'U'},
                  {name:'Maths',aGrade:'C', eGrade:'U'},
                  {name:'Science',aGrade:'C', eGrade:'U'},
                  {name:'Arts',aGrade:'C', eGrade:'U'}
                  
               ],
               
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
				
            };
         });// JavaScript Document