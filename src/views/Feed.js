import React, { useState } from 'react';
import { PostDetailsCard } from '../components/instasham-design-system';
import POSTJSON from '../sample_json/posts.json';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <h2>PostDetailsCard</h2>
      <PostDetailsCard
        postInfo={Object.values(POSTJSON)[0]} />
      {posts.map}
    </div>
  );
}
