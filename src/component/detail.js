import React, { Component } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import '../asset/css/marked.css'

class Detail extends Component {

    constructor(props){
        super(props);
            this.state = [{
                articleTitle:"TestCM",
                articleDetail:{content:"愿得一人心，白首不相离"}
            }];
      }

    render(){
        return (
            <div className="content">
            <div
                id="content"
                className="article-detail"
                dangerouslySetInnerHTML={{
                      __html: this.state.articleDetail.content ? marked(this.state.articleDetail.content) : null,
                    }}
                />
            </div>
            
        )
    }

    componentWillMount() {  
        //marked相关配置
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            }
        })
    
    }
 
}
export default Detail;