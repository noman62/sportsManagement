import React from 'react'
import Navbar from '../Navbar/Navbar'

import file1 from '../../files/file1.pdf'
import file2 from '../../files/file2.pdf'
import FileSaver from 'file-saver';

const Rules = () => {
  function downloadPdf() {
    FileSaver.saveAs(file1, 'my-pdf-file.pdf');
  }
  function downloadPdf1() {
    FileSaver.saveAs(file2, 'my-pdf-file.pdf');
  }
  return (
    <div>
 
      <div>
        <Navbar />
      </div>

      <div class='event-main-page'>
        <div class='container dept text-center'>
          <div class='row'>
            <div class='col-sm-12'>
              <h1>Rules and Regulations</h1>
            </div>
          </div>
        </div>
      </div>
      <div class='container'>
        <div class='row'>
          <div class='col-sm-12 text-center px-3 py-4'>
            <table class='table table-sm table-light table-hover'>
              <thead>
                <tr>
                  <th scope='col'>SL</th>
                  <th scope='col'>Rules of the Events</th>
                  <th scope='col'>Links</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>Football</td>
                  <td>
                    <button class='btn btn-sm btn-outline-primary' onClick={downloadPdf}>
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Cricket</td>
                  <td>
                    <button class='btn btn-sm btn-outline-primary' onClick={downloadPdf1}>
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>Volleyball</td>
                  <td>
                    <button class='btn btn-sm btn-outline-primary' onClick={downloadPdf}>
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>4</th>
                  <td>Badminton</td>
                  <td>
                    <button class='btn btn-sm btn-outline-primary' onClick={downloadPdf1}>
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>5</th>
                  <td>Chess</td>
                  <td>
                    <button class='btn btn-sm btn-outline-primary' onClick={downloadPdf}>
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>6</th>
                  <td>Table tennis</td>
                  <td>
                    <button class='btn btn-sm btn-outline-primary' onClick={downloadPdf1}>
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
{/* 
      <div class='footer bg-dark text-light'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-12'>
              <h1>Lorem, ipsum dolor.</h1>
              <p>
                <b>Phone :</b> 7r8374823
              </p>
              <p>
                <b>Mobile :</b> 7r8374823
              </p>
              <p>
                <b>Email :</b> 7r8374823
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Rules
