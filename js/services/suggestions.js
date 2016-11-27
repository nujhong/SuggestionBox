app.factory('suggestions', [function() {
  var demoSuggestions = {
    posts: [
      {
      title: 'Gather requirements',
      upvotes: 15,
      comments: [],
      },
      {
      title: 'Design the application',
      upvotes: 9,
      comments: [],
      },
      {
      title: 'Retrofit water fountain with Gatorade',
      upvotes: 7,
      comments: [],
      },
      {
      title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
      upvotes: 3,
      comments: [],
      }]
    };
  return demoSuggestions;
}]);
