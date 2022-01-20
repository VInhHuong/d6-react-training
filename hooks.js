function Card(props) {
    React.useEffect(() => {
        console.log('render by inCreaseCount')
    }, [props.inCreaseCount])
    React.useEffect(() => {
        console.log('render by count1x2')
    }, [props.count1x2])
    return <div>
        <h1>Card</h1>
        {props.count1x2}
        <button onClick={props.inCreaseCount}>increase count 1</button>
    </div>
}

function useOnOff() {
    const [isOpen, setIsOpen] = React.useState(false);
    function toggle () {
        setIsOpen(true)
    }
    function close() {
        setIsOpen(false)
    }
    return {
        isOpen,
        toggle,
        close,
    }
}
function Parent() {
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);
   const {
    isOpen,
    toggle,
    close,
   } = useOnOff();
    function handleSomeEvent() {
      console.log('do some thing');
    }
    const increaseCount1 =React.useCallback(() => {
        setCount1(count1+1)
    }, [count1]);

    const getCountForCard = () => {
        console.log('calculating.....')
        return count1*2;
    }
    const count1x2 = React.useMemo(()=>getCountForCard(), [count1]);
    return (
      <div>
        {isOpen && <div>
        {count1}
        <button onClick={() => setCount1(count1+1)}>increase count 1</button>
        <hr />
        {count2}
        <button onClick={() => setCount2(count2+1)}>increase count 2</button>
        <Card inCreaseCount={increaseCount1} count1x2={count1x2} />
        </div>}
        <button onClick={toggle}>toggle</button>
        <button onClick={close}>close</button>
      </div>
    );
  }
  ReactDOM.render(<Parent />, document.getElementById('huongnv'));