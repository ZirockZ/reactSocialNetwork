import React from 'react';
import '../../block.css';
import '../content.css';
import './profile-post.css'

const ProfilePost = () =>
    (
        <div className="block profile-post">
            <div className="profile-post_info">
                <img className="profile-post_autor-icon" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0c46c80-c2ae-47cb-ad20-f26e554f36e7/dabu9ht-46ab6873-48c5-4643-8de6-62d3d7eb17f6.jpg/v1/fill/w_1024,h_640,q_75,strp/i_think__by_samanta340_dabu9ht-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYjBjNDZjODAtYzJhZS00N2NiLWFkMjAtZjI2ZTU1NGYzNmU3XC9kYWJ1OWh0LTQ2YWI2ODczLTQ4YzUtNDY0My04ZGU2LTYyZDNkN2ViMTdmNi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Exa2cPkIIuaWhn3LZVCxdTuJxuk_uRxYa74XpN-ju90" alt="" />
                <div className="profile-post_autor-name">Карев Андрей</div>
                <div className="profile-post_date">28.03.2020</div>
            </div>
            <textarea className="profile-post_text" readOnly>Ты пидарас</textarea>
        </div>
    );

export default ProfilePost;




