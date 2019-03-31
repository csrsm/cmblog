import React from 'react';
import { Link } from  'react-router-dom';
import { Card } from 'antd';
import { Icon } from 'antd';
import '../App.css';


function BlogList (props) {

    let blog = props.blogList.map((blogList) => 
    <Card hoverable 
          className="card"      
    >
        <div key={blogList.id}>
            <h2 className="item-title">
                { blogList.title}
            </h2>
             <span > 
                <Icon type="calendar"/>    
                <time title="创建时间：2019-02-28 17:46:57" itemProp="dateCreated datePublished" dateTime="2019-02-28T17:46:57+00:00">2019-02-28</time>
            </span> 
        </div>
        <p>
            {/* { blogList.content } */}
            <Link to="/home/detail">阅读全文</Link>
        </p>
    </Card>
  );
  
  return (<div>{ blog }</div>);
}

export default BlogList;