import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function Fav() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:8080/university");
                setData(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        
        fetchData();
    }, []);
  return (
    <>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Country</th>
                <th>Name</th>
                <th>State/Province</th>
                <th>Web Pages</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.country}</td>
                    <td>{item.name}</td>
                    <td>{item.state_province}</td>
                    <td><a href={item.web_pages}>{item.web_pages}</a></td>
                </tr>
            ))}
        </tbody>
    </Table>
</>
  )
}

export default Fav