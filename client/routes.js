import BlogList from './components/BlogList';
import AddBlogForm from './components/AddBlogForm';
import EditBlogForm from './components/EditBlogForm';

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