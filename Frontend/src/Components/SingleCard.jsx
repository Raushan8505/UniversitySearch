import axios from 'axios';
import Table from 'react-bootstrap/Table';

function SingleCard({data}) {
    console.log(data);
    const handleAdd = async (item) => {
        console.log(item);
        const data = await axios.post("http://localhost:8080/university", {
            country: item.country,
            name: item.name,
            state_province: item["state-province"],
            web_pages: item.web_pages
        });
      };
  return (
    <Table striped bordered hover>
    <thead>
        <tr>
            <th>Country</th>
            <th>Name</th>
            <th>State/Province</th>
            <th>Web Pages</th>
            <th>Favourite</th>
        </tr>
    </thead>
    <tbody>
        {data.map((item, index) => (
            <tr key={index}>
                <td>{item.country}</td>
                <td>{item.name}</td>
                <td>{item["state-province"]}</td>
                <td><a href={item.web_pages}>{item.web_pages}</a></td>
                <td><button onClick={() => handleAdd(item)}>Add to Fav</button></td>
            </tr>
        ))}
    </tbody>
</Table>
  );
}

export default SingleCard;