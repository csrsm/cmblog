import React from 'react';
import { Card } from 'antd';

function BlogList (props) {

    let blog = props.blogList.map((blogList) => 
    <Card>
        <div key={blogList.id}>
            <h2 class="item-title">
                { blogList.title}
            </h2>
            {/* <span> 
                <Icon type="calendar"></Icon>
                { blogList.date }
            </span> */}
        </div>
        <p>
            { blogList.content }
        </p>
    </Card>
  );
  
  return (<div>{ blog } </div>);
}

export default BlogList;