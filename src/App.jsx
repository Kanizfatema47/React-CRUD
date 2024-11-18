import { useEffect, useState } from 'react'
import './App.css'
import { EmployeeData } from './EmployeeData'
import Table from 'react-bootstrap/Table';


function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    setData(EmployeeData)
  },[])
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Sr. No</td>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {
            data.map((item, index)=>{
              return(
                <tr key ={index}>
                  <td>{index+1}</td>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>
                    <button  className='btn btn-primary'>Edit</button>
                    <button  className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}

export default App
