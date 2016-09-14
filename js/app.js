// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebaseObject, $timeout) {

	var daysRef = firebase.database().ref();
	var daysObj = $firebaseObject(daysRef);

	daysRef.on('value', function (data) {
      $scope.days = data.val().days;
    }, function (errorObject) {
      console.log("Error getting the properties: " + errorObject.code);
    });

	$scope.bookSlot = function() {
		var ref = firebase.database().ref();
		var obj = $firebaseObject(ref);

		obj.days = $scope.days;

		obj.$save().then(function(ref) {
			console.log('Saved');
		}, function(error) {
			console.log("Error:", error);
		});
	}
  
    // function to set the default data
	$scope.reset = function() {   

		var ref = firebase.database().ref();
		var obj = $firebaseObject(ref); 

		obj.days = {
			0: {
				name: 'Sunday',
				slots: {
					900: {
				    	time: '9:00am',
				    	booked: false
					},
					1000: {
				    	time: '10:00am',
				    	booked: false
					},
					1100: {
				    	time: '11:00am',
				    	booked: false
					},
					1200: {
				    	time: '12:00pm',
				    	booked: false
					},
					1300: {
				    	time: '1:00pm',
				    	booked: false
					},
				}
			},
			1: {
				name: 'Monday',
				slots: {
					900: {
				    	time: '9:00am',
				    	booked: false
					},
					1000: {
				    	time: '10:00am',
				    	booked: false
					},
					1100: {
				    	time: '11:00am',
				    	booked: false
					},
					1200: {
				    	time: '12:00pm',
				    	booked: false
					},
					1300: {
				    	time: '1:00pm',
				    	booked: false
					},
				}
			},
			2: {
				name: 'Tuesday',
				slots: {
					900: {
				    	time: '9:00am',
				    	booked: false
					},
					1000: {
				    	time: '10:00am',
				    	booked: false
					},
					1100: {
				    	time: '11:00am',
				    	booked: false
					},
					1200: {
				    	time: '12:00pm',
				    	booked: false
					},
					1300: {
				    	time: '1:00pm',
				    	booked: false
					},
				}
			},
			3: {
				name: 'Wednesday',
				slots: {
					900: {
				    	time: '9:00am',
				    	booked: false
					},
					1000: {
				    	time: '10:00am',
				    	booked: false
					},
					1100: {
				    	time: '11:00am',
				    	booked: false
					},
					1200: {
				    	time: '12:00pm',
				    	booked: false
					},
					1300: {
				    	time: '1:00pm',
				    	booked: false
					},
				}
			},
			4: {
				name: 'Thursday',
				slots: {
					900: {
				    	time: '9:00am',
				    	booked: false
					},
					1000: {
				    	time: '10:00am',
				    	booked: false
					},
					1100: {
				    	time: '11:00am',
				    	booked: false
					},
					1200: {
				    	time: '12:00pm',
				    	booked: false
					},
					1300: {
				    	time: '1:00pm',
				    	booked: false
					},
				}
			},
			5: {
				name: 'Friday',
				slots: {
					900: {
				    	time: '9:00am',
				    	booked: false
					},
					1000: {
				    	time: '10:00am',
				    	booked: false
					},
					1100: {
				    	time: '11:00am',
				    	booked: false
					},
					1200: {
				    	time: '12:00pm',
				    	booked: false
					},
					1300: {
				    	time: '1:00pm',
				    	booked: false
					},
				}
			},
			6: {
				name: 'Saturday',
				slots: {
					900: {
				    	time: '9:00am',
				    	booked: false
					},
					1000: {
				    	time: '10:00am',
				    	booked: false
					},
					1100: {
				    	time: '11:00am',
				    	booked: false
					},
					1200: {
				    	time: '12:00pm',
				    	booked: false
					},
					1300: {
				    	time: '1:00pm',
				    	booked: false
					},
				}
			},
		};

		obj.$save().then(function(ref) {
			console.log('Reset');
		}, function(error) {
			console.log("Error:", error);
		});    

	};
  
});