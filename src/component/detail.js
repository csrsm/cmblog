import React from 'react';
import '../App.css';



function BlogDetail (props) {

    let blog = props.blogId.map((blogId) => 
        <div></div>
    );
  
  return (<div>{ blog }</div>);
}

export default BlogDetail;