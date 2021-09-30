class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
  
    // Add handleChange() and submitMessage() methods here
    handleChange(event) {
      this.setState(
        {input: event.target.value}
      );
    }
  
    submitMessage() {
      this.setState(
        state => ({
          messages: state.messages.concat(state.input),
          input: ''
      }));
    }
  
    render() {
      const messageList = this.state.messages.map(
        message => <li key={Math.random()}>{message}</li>
      );
  
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
          <input value={this.state.input} onChange={this.handleChange} />
          <button onClick={this.submitMessage}>Submit</button>
          <ul>
            {messageList}
          </ul>
          
        </div>
      );
    }
  };