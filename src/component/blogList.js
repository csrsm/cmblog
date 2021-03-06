import React from 'react';
import { Link } from  'react-router-dom';
import { Card } from 'antd';
import { Icon } from 'antd';
import '../App.css';


function BlogList (props) {

    
    //博客列表
    const blogList = [
        {id: 1, title: '标题1', content: 'Welcome to learning React!',date:'2019-03-27'},
        {id: 2, title: '标题2', content: 'You can install React from npm.',date:'2019-03-27'},
        {id: 3, title: '标题3', content: 'You can install React from npm.',date:'2019-03-27'},
        {id: 4, title: '标题4', content: 'You can install React from npm.',date:'2019-03-27'},
        {id: 5, title: '标题5', content: 'You can install React from npm.',date:'2019-03-27'}
    ];
    // const [blogList, setBlogList] = useState(null);

    let blog = blogList.map((blogList) => 
    <Card hoverable 
        key={blogList.id}
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