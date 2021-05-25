import React from 'react';
import {
  Form, FormGroup, Label, Input, FormText, Button
} from 'reactstrap';

export default function InstaForm() {
  return (
    <Form>
      <FormGroup>
        <Label for="ecaption">Caption</Label>
        <Input type="textarea" name="caption" id="caption" />
      </FormGroup>
      <FormGroup>
        <Label for="photoUrl">Photo URL</Label>
        <Input type="url" name="url" id="photoUrl" placeholder="photoUrl" />
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
