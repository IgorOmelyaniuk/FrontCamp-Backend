import template from './addBlog.html';

const AddBlogComponent = {
  template,
  bindings: {
    blog: '<'
  },
  controller: class AddBlogPage {
    constructor(BlogService, $scope, $state) {
      'ngInject';
      this.BlogService = BlogService;
      this.scope = $scope;
      this.$state = $state;
    }

    $onInit() {
      this.blog = {
        author: '',
        title: '',
        text: ''
      }
    }

    showError(field) {
      return (field.$dirty && field.$touched) || this.$scope.addBlog.$submitted;
    }

    submit(form) {
      // e.preventDefault();
      // if (this.$scope.addBlog.$valid) {
      //   this.BlogService.addBlog(this.blog);
      //   this.$state.go('admin');
      // }
      console.log(form)
    }
  }
}

export default AddBlogComponent;