import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editBlog } from '../actions'

class EditBlogForm extends React.Component {

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
                <div className="text-help">
                {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.editBlog(values, this.props.blog._id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="col-6 offset-3 form-wrap">
                <h2 className="text-center">Edit Blog</h2>
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
                    <button style={{marginRight: '20px'}} type="submit" className="btn btn-primary">Edit Post</button>
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

const mapStateToProps = ({ blogs }, ownProps) => {
    const blog = blogs.find(blog => blog._id === ownProps.match.params.id);

    return {
        blog: blog,
        initialValues: {
            title: blog.title,
            text: blog.text,
            author: blog.author
        } 
    }
}

export default connect(mapStateToProps, { editBlog })(reduxForm({ 
    form: 'EditForm',
    validate,
    enableReinitialize: true,
  })(EditBlogForm));
