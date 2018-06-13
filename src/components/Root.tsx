import * as React from 'react';
import './Root.css';

class Root extends React.Component {
  public render() {
    return (
      <div className='chat-box'>
        <div className='chat-header'>
          <h1 className='chat-title'>RxJS Eduzz</h1><a className='chat-close'>×</a>
        </div>
        <div className='chat-body'>
          <div className='chat-content'>
            <div className='chat-item is-me'>
              <p className='chat-message'>Teste</p>
            </div>
            <div className='chat-form'>
              <input className='chat-form-input' type='text' placeholder='Enter your message'/>
              <a className='button'>Send</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
