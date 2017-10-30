import React, { Component } from 'react';

import './App.css';

class Comment extends Component {
  render() {
    return (
        <div className="comm">
                <div className="avatar">
					<img src="https://im0-tub-ru.yandex.net/i?id=030512777c2e325c94c726757702db53&n=13" />
				</div>
				<div className="bubble-container">
					<div className="bubble">
						<h3>@ilon_musk</h3><br/>
					       {this.props.comText}
						<div className="over-bubble">
							<div className="icon-mail-reply action"></div>
							<div className="icon-star"></div>
						</div>
					</div>
					<div className="arrow"></div>
				</div>
        </div>
    );
  }
}

export default Comment;				