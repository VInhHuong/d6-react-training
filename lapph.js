const Title = (props) => {
    const {name, src, desc} = props
    return (
    <div className="container">
        <div className="left">
            <img src={src} className="image"></img>
        </div>
        <div className="right">
            <div className="name">{name}</div>
            <div className="desc">{desc}</div>
        </div>
    </div>
    )
}

ReactDOM.render(
  <Title name="Phạm Hữu Lập" src="./image/vinhhuong.png" desc="i am React developer" />,
  document.getElementById('lapph')
);
