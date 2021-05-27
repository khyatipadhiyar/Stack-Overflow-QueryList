import React, { Component } from 'react'
import './App.css';
import QueryList from './components/QueryList/queryList.component';
import Modal from './components/Modal/modal.component';

class App extends Component {

  constructor(){
    super();
    this.state ={
      queryList:[],
      showModal:false,
      modelContent:{title:'hghf',link:'hfghgfh'}
    };
  }

  componentDidMount(){
    fetch('https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=20&o rder=desc&sort=activity&site=stackoverflow')
    .then(response =>response.json())
    .then(queryList=>this.setState({queryList:queryList.items}));
  }

  onQueryClick = (title,link)=>{
    this.setState({...this.state,showModal:true,modelContent:{title:title,link:link}})
    //console.log(title,link)

  }
  onCloseClick = () =>{
    this.setState({...this.state,showModal:false});
  }

  render() {
    const {queryList,showModal,modelContent} = this.state;
    return (
      <div className='container'>
        <h2 className='heading'>Stack Overflow QueryList</h2>
        <QueryList 
          queryList={queryList} 
          onQueryClick={this.onQueryClick}/>

        <Modal 
          showModal={showModal} 
          modelContent={modelContent}  
          onCloseClick={ this.onCloseClick}/>
      </div>
    )
  }
}

export default App;


