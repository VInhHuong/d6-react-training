const Title = (props) => <h1>{props.text}</h1>;
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

ReactDOM.render(
  <>
    <Title text="React Trainning D6" />,
    <Card
      img={
        'https://lh3.googleusercontent.com/a-/AOh14Gi-PvqSK4dsW5K5vwhhNL_HTn2Dh1Xv5YU1HakP=s96-c'
      }
      name="Nguyen Vinh Huong"
      desc="i am React developer"
    />
  </>,
  document.getElementById('huongnv')
);
