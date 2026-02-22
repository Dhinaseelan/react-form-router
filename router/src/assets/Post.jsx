import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Post = () => {
  const { is } = useParams();
  const [dataa, setdata] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/post/" + is)
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [is]);

  console.log(dataa);

  return (
    <>
    <h3>Post:{is}</h3>
    {dataa && <div className='container text-center'>
        <h3>{dataa.title}</h3>
        <h4>{dataa.content}</h4>
    </div>}
      
    </>
  );
};

export default Post;