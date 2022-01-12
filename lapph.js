const Title = (props) => {
    const {name, src, desc} = props

    return (
    <div className="trReContainer">
        <div className="trReLeft">
            <img src={src} className="trReImage"></img>
        </div>
        <div className="trReRight">
            <div className="trReName">{name}</div>
            <div className="trReDesc">{desc}</div>
        </div>
    </div>
    )
}

ReactDOM.render(
  <Title 
    name="Phạm Hữu Lập" 
    src="https://i.postimg.cc/xd3T94BV/vinhhuong.png" 
    desc="i am React developer" />,
  document.getElementById('lapph')
);
