import React from 'react';
import { connect } from 'react-redux';
import { editPost, closeEdit } from '../../actions/actions';
import { Editor } from '@tinymce/tinymce-react';

const BlogEdit = ({ post, editPost, closeEdit }) => {

    let _imageUrl, _paragraph, _title;

    const submit = (e) => {
        e.preventDefault();
    };

    return(
        <div className="wrapper-post">
            <form className='post-edit-form' onSubmit={ submit }>
                <input defaultValue={post.imageUrl} ref={ input => _imageUrl = input }/>
                <input defaultValue={ post.title } ref={ input => _title = input }/>
                <Editor 
                    apiKey="vun8qvnc1egcfrr7v2bcu8p80l6ntskjk4upwns88c9v6p67"
                    onEditorChange={ (content, editor) => {
                        _paragraph = content;
                        console.log(content);
                    }}
                    outputFormat='html'
                    
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'
                    }}
                    initialValue={post.paragraph.__html}/>
                <button onClick={ () => 
                    editPost(
                        { 
                            id: post.id, 
                            paragraph: _paragraph, 
                            title: _title.value, 
                            imageUrl: _imageUrl.value 
                        }
                    ) }> Измеить </button>
                <button onClick={ () => closeEdit(post)} > Закрыть редактирование </button>
            </form>
        </div>
    )
    

    
}
const mapDispatchToProps = {
    editPost,
    closeEdit
}

export default connect(null, mapDispatchToProps)(BlogEdit);