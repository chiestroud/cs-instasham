import React from 'react';
import { useParams } from 'react-router-dom';
import InstaForm from './InstaForm';

export default function Edit() {
  const { id } = useParams();
  console.warn(id);
  return (
    <div>
      <h2>Edit Post</h2>
      <InstaForm />
    </div>
  );
}
