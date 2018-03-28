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
    .state('edit', {
      url: '/admin/edit/:id',
      component: 'edit',
      resolve: {
        blog: function(BlogService, $stateParams) {
            return BlogService.getBlogById($stateParams.id);
        }
      }
    })
  $locationProvider.html5Mode(true);

  routing.$inject = ['$urlRouterProvider, $stateProvider', '$locationProvider'];
}

export default routing;