import React from 'react';
import { Table } from 'react-bootstrap';
import Navbar from '../Navbar';

const Teacher = () => {
    return (
        <div>
          <Navbar/>
          <div className='w-75 mx-auto my-5'>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Academic Qualifications</th>
          <th>Contact Address</th>
          <th>Photograph</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>To Be Allocated</td>
          <td>Director (Acting)</td>
          <td>-</td>
          <td>Department of Physical Education
             <h6>Mob: -</h6></td>
          <td><img src='' alt='image'/></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sanjib Kumar Dey</td>
          <td>Deputy Director</td>
          <td>M.S.S (Sociology ) BPED</td>
          <td>Department of Physical Education
            <h6>Mob: 01716-293672</h6></td>
          <td><img src='../assets/sanjib.jpeg' alt='image'/></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Mahmudur Rahaman Riaz</td>
          <td>Assistant Director</td>
          <td>M.Com.(Management), BPED</td>
          <td>Department of Physical Education
             <h6>Mob: 01712-183979</h6></td>
          <td><img src='../assets/riaz.jpeg' alt='image'/></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Nazmun Nahar Beauty</td>
          <td>Physical Instructor</td>
          <td>M.S.S (Sociology), BPED,MPED</td>
          <td>Department of Physical Education
            <h6> Mob: 01712-971707</h6></td>
          <td><img src='../assets/beauty.jpeg' alt='image'/></td>
        </tr>
      </tbody>
    </Table>
         </div>

         </div>
  );
};

export default Teacher;