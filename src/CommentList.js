import React, { Component } from 'react';
import './App.css';
import Comment from'./Comment';

class CommentList extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
        <div>
            <ul>
                {this.props.comList.map(item => (
                  <li><Comment comText={item.text}/> </li>
                ))}
            </ul>
        </div>
    );
  }
}

export default CommentList;