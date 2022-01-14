function CountElement(props) {
  const [count, setCount] = React.useState(props.count);
  return (
    <div>
      <h1>useState1: {count}</h1>
      <h1>props: {props.count}</h1>

      {/* <button onClick={() => setCount(count + 1)}>increase by useState</button>
      <button onClick={() => setCount2(count2 + 1)}>
        increase by useState 2
      </button> */}
    </div>
  );
}
const Card = (props) => (
  <div className="huongnv-card">
    <img src={props.img}></img>
    <div className="huongnv-card_info">
      <b>{props.name}</b>
      <br />
      <small>{props.desc}</small>
    </div>
  </div>
);

// ReactDOM.render(
//   <>
//     <Title text="React Trainning D6" name="fff">
//       <div>haha</div>
//       <div>hoho</div>
//     </Title>
//     ,
//     <Card
//       img={
//         'https://lh3.googleusercontent.com/a-/AOh14Gi-PvqSK4dsW5K5vwhhNL_HTn2Dh1Xv5YU1HakP=s96-c'
//       }
//       title={<Title title={'hello'} />}
//       name="Nguyen Vinh Huong"
//       desc="i am React developer"
//     />
//   </>,
//   document.getElementById('huongnv')
// );

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, title: 'hay day', array: [1, 2, 3] };
    // this.handleInCrease = this.handleInCrease.bind(this);
  }
  handle = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    console.log('haha');
  }
  shouldComponentUpdate(newProps, newState) {
    console.log(this.state, newState);
    return true;
  }
  componentDidCatch(error) {
    console.log({ error });
  }
  componentDidUpdate() {
    console.log('did update: ', this.state.count);
  }
  handleInCrease() {
    this.setState({
      count: this.state.count + 1,
      array: [...this.state.array.reverse()],
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={() => this.handleInCrease()}>increase</button>
        {this.state.array.map((el, index) => (
          <CountElement count={el} key={new Date().getSeconds() + index} />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<Count />, document.getElementById('huongnv'));
