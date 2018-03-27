import angular from 'angular';
import BlogsComponent from './blogs.component';

const BlogsModule = angular
  .module('app.blogs', [])
  .component('blogs', BlogsComponent)
  .name;

export default BlogsModule;