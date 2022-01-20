class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      this.textInput.current.focus();
    }
  
    render() {
      // tell React that we want to associate the <input> ref
      // with the `textInput` that we created in the constructor
      return (
        <div>
          <input
            type="text"
            ref={this.textInput} 
            />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }


  class AutoFocusTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.outerRef = React.createRef();
    }
  
    componentDidMount() {
        this.outerRef.current && this.outerRef.current.focusTextInput();
    }
  
    render() {
        console.log(this.outerRef)
      return (
        <FunctionCustomTextInput inputRef={(ref) => this.outerRef=ref} />
      );
    }
  }

  function FunctionCustomTextInput(props) {
    // textInput must be declared here so the ref can refer to it
    const textInput = React.useRef(null);
    
    function handleClick() {
      textInput.current.focus();
    }
  
    return (
      <div>
        <input
          type="text"
          ref={inputRef}
          />
        <input
          type="button"
          value="Focus the text input"
          onClick={handleClick}
        />
      </div>
    );
  }
const ForwardRefCustomTextInput = React.forwardRef((props, ref) => {
    const textInput = ref;
    
    function handleClick() {
      textInput.current.focus();
    }
  
    return (
      <div>
        <input
          type="text"
          ref={textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={handleClick}
        />
      </div>
    );
})
  ReactDOM.render(<AutoFocusTextInput />, document.getElementById('huongnv'));
