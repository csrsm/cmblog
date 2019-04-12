
import React, { Component } from 'react';
import getWord from '../util/getWord.js';
import BlogList from './blogList.js';
import Particles from 'reactparticles.js';
import '../App.css';
import Axios from 'axios';

//博客列表
// const blogList = [
//     {id: 1, title: '标题1', content: 'Welcome to learning React!',date:'2019-03-27'},
//     {id: 2, title: '标题2', content: 'You can install React from npm.',date:'2019-03-27'},
//     {id: 3, title: '标题3', content: 'You can install React from npm.',date:'2019-03-27'},
//     {id: 4, title: '标题4', content: 'You can install React from npm.',date:'2019-03-27'},
//     {id: 5, title: '标题5', content: 'You can install React from npm.',date:'2019-03-27'}
//   ];

class Home extends Component {

    constructor(props){
        super(props);
            this.state = {
              menuText:"",
              textFrom:"",  
              name:"小二 上酒",
              blogList:[]
            };
      }
    

    render() {
        return (
            <div className="App">
          <header className="App-header">
          </header>         
          <div className="App-background">   
             <Particles id="particles" config="test-particles.json"/>
          </div>
          <div className="App-left"> 
              <div className="App-circle">               
              </div>
              <div className="App-left-name">
                <span className="App-font">{this.state.name}</span>
              </div>
              <div className="App-left-github">
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>  
              </div>
              <div className="App-left-oneword">
                <p className="App-font">{this.state.menuText}</p>
                <p className="App-font">————{this.state.textFrom}</p>
              </div>
          </div>

          <div className="App-right">
            <div className="App-blog">
                  <BlogList blogList={this.state.blogList}/>
                  {/* {this.props.children} */}
            </div>   
          </div>       
      </div>
        )
    }
    
  async componentDidMount(){ 
    const _this = this;
    const { text, from } = await getWord();
    this.setState({
      menuText: text,
      textFrom: from,
    });

    Axios.get("/api/getBlogList")
    .then(function(res){
      debugger
      console.log(res.data.msg)
      console.log(res.data.data)
      _this.setState({
        blogList:res.data.data
      })
    })
  }
    
}
 
export default Home;