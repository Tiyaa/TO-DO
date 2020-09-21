import React, { Component } from 'react';
import './App.css';
import { black, yellow } from 'color-name';
class App extends Component{
 constructor(props){
   super(props);
   this.state = {
     newItem:"",
     list:[]
   };
 }
 componentDidUpdate(){
   window.localStorage.setItem('list',this.state.list);
 }
 updateInput(value){
   this.setState({
     newItem:value 
   })
 }
 addItem(){
   const newItem={
     id:1+Math.random(),
     value: this.state.newItem
   }
   const list=[...this.state.list]
   list.push(newItem);
   this.setState({
     list:list,
     newItem:''
   })
 }
 deleteItem(id){
   const list = [...this.state.list]
   const newlist = list.filter(i => i.id !== id)
   this.setState({
     list:newlist
   })
 }
  render(){
  return (
    <div className="App">
    <h1 className="hbg">TO-DO LIST</h1>
    <div className="aaa">
      <br/>
      <input type="text" placeholder="Type new task here"  value={this.state.newItem}
      onChange={(e) => this.updateInput(e.target.value)}
        style={{'border':'1px solid black','height':'30px','font-size':'25px'}}
      />
       <span style={{'padding-left':'10px'}}></span>
      <button onClick={()=>this.addItem()} 
      style={{'height':'40px','width':'100px','backgroundColor':'black','color':'white','font-size':'15px'}}
      > ADD ITEM</button>
      <br/>
      <br/>
      <ul>
        {this.state.list.map(l =>{
          return(
          
            <ul key={l.id}><span style={{color:'white'}}>{l.value}</span>
            <span style={{'padding-left':'50px'}}></span>
            <button onClick={()=>this.deleteItem(l.id)} >
             X
            </button>
            <br/>
            </ul>
          );
        })
        }
      </ul>
    </div>
    
    </div>
  );
  }
}

export default App;
