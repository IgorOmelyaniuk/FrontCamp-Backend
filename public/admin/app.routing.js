function routing($urlRouterProvider, $stateProvider, $locationProvider) {
  $stateProvider
    .state('blogs', {
      url: '/admin',
      component: 'blogs',
      resolve: {
        blogs: function(BlogService) {
          return BlogService.getBlogs();
        }
      }
    })
    .state('add', {
      url: '/admin/add',
      component: 'add'
    })
  $locationProvider.html5Mode(true);

  routing.$inject = ['$urlRouterProvider, $stateProvider', '$locationProvider'];
}

export default routing;