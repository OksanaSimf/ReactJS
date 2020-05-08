import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
         <div>My posts
  <div>
    <textarea></textarea>
<button>Add post</button>
</div>
<div className={s.post}>
<Post message='Hi, how are you?'count='34' />

<Post message='its my first post' count='15'/>
<Post />
 </div>
</div>

    )
}
export default MyPosts;