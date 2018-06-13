import * as React from 'react';
import './Root.css';

interface IState {
  value: string;
  messages: string[];
}

class Root extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
      messages: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    event.preventDefault();
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='chat-box'>
        <div className='chat-header'>
          <h1 className='chat-title'>RxJS Eduzz</h1><a className='chat-close'>×</a>
        </div>
        <div className='chat-body'>
          <div className='chat-content'>
            <div className='chat-item'>
                <p className='chat-message'>
                  Teste
                </p>
            </div>
            <form className='chat-form' onSubmit={this.handleSubmit}>
              <input className='chat-form-input' type='text' placeholder='Digite sua mensagem'
                value={this.state.value} onChange={this.handleChange} />
              <input type='submit' value='enviar' className='button' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
