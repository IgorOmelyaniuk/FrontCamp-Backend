import template from './form.html';

const BlogFormComponent = {
  bindings: {
    submitType: '<',
    submitHandler: '<',
    blog: '<'
  },
  template,

  controller: class BlogFormComponentPage {
    constructor(BlogService, $state) {
      'ngInject';
      this.BlogService = BlogService;
      this.$state = $state;
    }

    showErrors(field) {
      return (field.$dirty || field.$touched);
    };

    submit(blogForm) {
      if (blogForm.$valid) {
        this.submitHandler(this.blog);
      }

    }
  }
}

export default BlogFormComponent;