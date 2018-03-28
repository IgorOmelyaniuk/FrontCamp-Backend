import angular from 'angular';
import BlogsComponent from './blogs.component';
import ButtonComponent from '../button/button.component';

const BlogsModule = angular
  .module('app.blogs', [])
  .component('blogs', BlogsComponent)
  .component('btn', ButtonComponent)
  .name;

export default BlogsModule;