import React from 'react';
import '../../../block.css';
import '../../content.css';
import './profile-new-post.css'

const ProfileNewPost = (props) => {
    let newPostText = React.createRef();

    let addPost = () => {

        let postMessage = newPostText.current.value;
        debugger
        props.state.postAdd({postSenderName: "Даня Кондратьев", postMessage});
    }

    return (
        <div className="block profile-new-post">
            <div className="profile-new-post_header">Что у вас нового?</div>
            <textarea className="profile-new-post_text" ref={newPostText}></textarea>
            <button className="profile-new-post_button" onClick={addPost}>Опубликовать</button>
        </div>
    );
}

export default ProfileNewPost;