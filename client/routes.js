import BlogList from './containers/BlogList';
import AddBlogForm from './containers/AddBlogForm';
import EditBlogForm from './containers/EditBlogForm';

export default [
  {
    path: '/',
    exact: true,
    component: BlogList,
  },
  {
    path: '/blogs/add',
    component: AddBlogForm,
  },
  {
    path: '/blogs/:id/edit',
    component: EditBlogForm,
  },
];