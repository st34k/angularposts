var app = angular.module('PostsApp', []);

app.controller('addingPosts', function($scope){
$scope.postsArray = [];
$scope.newPos ='';

$scope.posting = function(){
 

  $scope.postsArray.push(
    {text : $scope.newPos,
     thumbs : 0 });
  };

// $scope.postsArray.thumbs = 0;

$scope.thumbsUp = function($index){
  
  $scope.postsArray[$index].thumbs += 1;

  $scope.postsArray.sort(function(a,b) {      //a and b are elements of the array, so they are already the post object, and we want the thumbs up
    return b.thumbs-a.thumbs});

  // for (var i=0; i < postsArray.length ; i++){

  // }
}


});