import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo_1.jpg'
import CommentFeed from './CommentFeed';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommentFeed logo={logo} />, document.getElementById('root'));
registerServiceWorker();
