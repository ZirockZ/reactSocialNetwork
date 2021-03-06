import React from 'react';
import './profile-new-post.css'


const ProfileNewPost = (props) => {
    let newPostText = React.createRef();

    let postAdd = () => {        
        let postMessage = newPostText.current.value;
        props.postAdd("Даня Кондратьев", postMessage);
    }

    return (
        <div className="block profile-new-post">
            <div className="profile-new-post_header">Что у вас нового?</div>
            <textarea className="profile-new-post_text" ref={newPostText}></textarea>
            <button className="profile-new-post_button" onClick={postAdd}>Опубликовать</button>
        </div>
    );
}

export default ProfileNewPost;