import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Form, FormGroup, Label, Input, FormText, Button
} from 'reactstrap';
import { getCurrentDate } from '../helpers/dateHelper';
import { createPost } from '../helpers/postHelper';
import { getCurrentUsersUid } from '../helpers/userHelper';

export default function InstaForm() {
  const [post, setPost] = useState({
    firebaseKey: '',
    caption: '',
    datePublished: getCurrentDate(),
    photoUrl: '',
    userId: getCurrentUsersUid()
  });

  console.warn(post);
  const handleInputChange = (e) => {
    setPost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(post).then((postArray) => console.warn(postArray));
    history.push('/');
  };
  return (
    <Form id='addPost'
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <Label for="caption">Caption</Label>
        <Input
          type="textarea"
          name="caption"
          id="caption"
          value={post.caption}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="photoUrl">Photo URL</Label>
        <Input
          type="url"
          name="photoUrl"
          id="photoUrl"
          placeholder="photoUrl"
          value={post.photoUrl}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          File MAX 10gb
      </FormText>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
