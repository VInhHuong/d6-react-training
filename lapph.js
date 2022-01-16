const initData = [
    {
      name: 'anhnd2@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'huybv@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'datnt5@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'hoanghq@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'hieunt5@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'hoinv2@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'huongnv@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'lienltm@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'namdhh@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'namlh2@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'lapph@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'phongvv@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'haitv@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'tungld@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'tuyennv3@rikkeisoft.com',
      age: 25,
    },
    {
      name: 'doanvd@rikkeisoft.com',
      age: 25,
    },
  ]
  
  const TRANSFER_TYPE = {
    TRANSFER1 : 'TRANSFER1',
    TRANSFER2 : 'TRANSFER2'
  }
  
  
  // const Card = (props) => {
  //   const {name, src, desc} = props
  
  //   return (
  //     <div> 
  //       <div className="trReContainer">
  //           <div className="trReLeft">
  //               <img src={src} className="trReImage"></img>
  //           </div>
  //           <div className="trReRight">
  //               <div className="trReName">{name}</div>
  //               <div className="trReDesc">{desc}</div>
  //           </div>
  //       </div>
  //       <TransferData />
  //     </div>
  //   )
  // }
  
  // class TransferData extends ReactDOM.Component{
  //   constructor(props) {
  //     super(props);
  //     this.state = {date: new Date()};
  //   }
  class TransferData extends React.Component {
    constructor(props) {
      super(props)
      this.state = {dataTable1: initData, dataTable2: []}
    }
  
    handleClick(index, item, type, e){
      const newArr1 = this.state.dataTable1.filter((item, idx) => idx !== index)
      const newArr2 = this.state.dataTable2.filter((item, idx) => idx !== index)
  
      this.setState({
        dataTable2: type === TRANSFER_TYPE.TRANSFER1 
        ? [...this.state.dataTable2, item] 
        : newArr2
      })
      this.setState({
        dataTable1: type === TRANSFER_TYPE.TRANSFER1 
        ? newArr1 
        : [...this.state.dataTable1, item]
      })
    }
  
    render() {
      const dataTable1 = this.state.dataTable1
      const dataTable2 = this.state.dataTable2
  
      return (
        <div className="transferContainer">
            <div className="tableLeft">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
                {dataTable1 && dataTable1.map((item,index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td><button onClick={(e) => this.handleClick(index, item, TRANSFER_TYPE.TRANSFER1, e)}>transferData1</button></td>
                    </tr>
                  )
                })}
              </table>
            </div>
            <div className="tableRight">
              <table>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                  </tr>
                  {dataTable2 && dataTable2.map((item,index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td><button onClick={(e) => this.handleClick(index, item, TRANSFER_TYPE.TRANSFER2, e)}>transferData2</button></td>
                    </tr>
                  )
                })}
              </table>
            </div> 
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <TransferData />,
    document.getElementById('lapph')
  );