import angular from 'angular';
import ngMessages from 'angular-messages';

import BlogFormComponent from './form.component';
import lengthValidator from './form.validator';

const BlogFormModule = angular
  .module('app.blogForm', [ngMessages])
  .component('blogForm', BlogFormComponent)
  .directive('lengthValidator', lengthValidator)
  .name;

export default BlogFormModule;