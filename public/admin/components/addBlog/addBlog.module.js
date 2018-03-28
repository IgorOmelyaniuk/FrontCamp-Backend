import angular from 'angular';

import AddBlogComponent from './addBlog.component';

const AddBlogModule = angular
  .module('app.add', [])
  .component('add', AddBlogComponent)
  .name;

export default AddBlogModule;