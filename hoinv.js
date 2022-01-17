const ListUser = (props) => {
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
    ];

    const [list1, setList1] = React.useState(initData);
    const [list2, setList2] = React.useState([]);

    const handleClickList1 = function (ele) {
        var newList1 = list1.filter(item => item !== ele);
        setList1(newList1);
        setList2([...list2, ele]);
    }

    const handleClickList2 = function (ele) {
        var newList2 = list2.filter(item => item !== ele);
        setList2(newList2);
        setList1([...list1, ele]);
    }

    return (
        <div className="container">
            <table id="table1">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
                {list1.map(function (ele, index) {
                    return (
                        <tr key={index}>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td><button onClick={() => handleClickList1(ele)}>transfer to list 2</button></td>
                        </tr>
                    )
                })}
            </table>

            <table id="table2">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
                {list2.map(function (ele, index) {
                    return (
                        <tr key={index}>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td><button onClick={() => handleClickList2(ele)}>transfer to list 1</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

ReactDOM.render(
    <ListUser />,
    document.getElementById('hoinv')
);
