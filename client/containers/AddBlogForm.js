import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBlog } from '../actions';

class AddBlogForm extends React.Component {
    
  renderField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.addBlog(values, () => this.props.history.push('/'));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="col-6 offset-3 form-wrap">
        <h2 className="text-center">Add Blog</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Text"
            name="text"
            component={this.renderField}
          />
          <Field
            label="author"
            name="author"
            component={this.renderField}
          />
          <button style={{marginRight: '20px'}} type="submit" className="btn btn-primary">Add Post</button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters'
  }
  
  if (!values.text) {
    errors.text = 'Enter a text'
  }
  
  if (!values.author) {
    errors.author = 'Enter a author'
  }
    
  return errors;
}

export default reduxForm({
  validate,
  form: 'AddForm'
})(
  connect(null, { addBlog })(AddBlogForm)
)