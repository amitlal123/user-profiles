angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
		friendService.getFriends()
		.then(function(response){
			console.log(response);
			if(response.data.currentUser) {
			$scope.currentUser = response.data.currentUser;
			$scope.friends = response.data.friends;
			} else {
				$scope.errorMessage = response.data;
			}
		});
});
