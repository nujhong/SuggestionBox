app.controller('HomeContorller', ['$scope', 'suggestions', function($scope, suggestions) {
  $scope.posts = suggestions.posts;
  $scope.addSuggestion = function() {
    // leave empty input
    if (!$scope.title || $scope.title === '') {
      return;
    }

    $scope.posts.push({
      title: $scope.title,
      upvotes: 0
    });

    // clear input
    $scope.title = '';
  };

  $scope.upVote = function(post) {
    console.log(post);
    post.upvotes += 1;
  }
}]);
