import React from 'react';
import './style/Content.css';

const Content = () =>
    (
        <div className="content">
            <div className="profile-background">
                <img src="http://crosti.ru/patterns/00/0f/35/34f48e5e46/picture.jpg" alt="" />
            </div>
            <div className="profile-info">
                <div className="profile-pic">
                    <img src="https://sun9-42.userapi.com/c857020/v857020712/ea335/tiEFiNjeAqw.jpg" alt="" />
                </div>
                <div className="profile-text">
                    <div className="name-birth">
                        <div id="name">Даня Кондратьев</div>
                        <div id="birthdate">13 июня 2001</div>
                    </div>
                    <div id="city">Тагай</div>
                    <div id="education">Не учился, хуи пинал</div>
                    <div id="web-site">http://localhost:3000/</div>
                </div>
            </div>
            <div className="profile-new-post">
                <div className="new-post-header">Что у вас нового?</div>
                <textarea className="new-post-text"></textarea>
                <button className="new-post-button">Опубликовать</button>
            </div>

            <div id="1" className="profile-post">
                <div className="post-info">
                    <div className="post-autor-icon"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0c46c80-c2ae-47cb-ad20-f26e554f36e7/dabu9ht-46ab6873-48c5-4643-8de6-62d3d7eb17f6.jpg/v1/fill/w_1024,h_640,q_75,strp/i_think__by_samanta340_dabu9ht-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYjBjNDZjODAtYzJhZS00N2NiLWFkMjAtZjI2ZTU1NGYzNmU3XC9kYWJ1OWh0LTQ2YWI2ODczLTQ4YzUtNDY0My04ZGU2LTYyZDNkN2ViMTdmNi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Exa2cPkIIuaWhn3LZVCxdTuJxuk_uRxYa74XpN-ju90" alt="" /></div>
                    <div className="post-autor-name">Карев Андрей</div>
                    <div className="post-date">28.03.2020</div>
                </div>
                <textarea className="new-post-text" readOnly>Ты пидарас</textarea>
            </div>
            <div id="2" className="profile-post">
                <div className="post-info">
                    <div className="post-autor-icon"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0c46c80-c2ae-47cb-ad20-f26e554f36e7/dabu9ht-46ab6873-48c5-4643-8de6-62d3d7eb17f6.jpg/v1/fill/w_1024,h_640,q_75,strp/i_think__by_samanta340_dabu9ht-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYjBjNDZjODAtYzJhZS00N2NiLWFkMjAtZjI2ZTU1NGYzNmU3XC9kYWJ1OWh0LTQ2YWI2ODczLTQ4YzUtNDY0My04ZGU2LTYyZDNkN2ViMTdmNi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Exa2cPkIIuaWhn3LZVCxdTuJxuk_uRxYa74XpN-ju90" alt="" /></div>
                    <div className="post-autor-name">Карев Андрей</div>
                    <div className="post-date">29.03.2020</div>
                </div>
                <textarea className="new-post-text" readOnly>Мне тебя жалко</textarea>
            </div>
        </div>
    );


export default Content;
