import React, { Component } from 'react';
import './App.css';
import Comment from'./Comment';
import CommentList from'./CommentList';

class CommentFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {comments : [], text:'' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }
    
  handleSubmit(e) {
    console.log(this.state.text)
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: 1
    };
    this.setState(prevState => ({
      comments: prevState.comments.concat(newItem),
      text: ''
    }));
    console.log(this.state)
  }  
    
  inputChanged(e) {
    this.setState({ text: e.target.value });
  }
    
  render() {
    return (
        <div>
            <img src={this.props.logo} className="instaLogo"/>
            <CommentList comList={this.state.comments} />
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.inputChanged}
                value={this.state.text}
              />
              <button>
                Add comment
              </button>
            </form>
        </div>
    );
  }
}

export default CommentFeed;
