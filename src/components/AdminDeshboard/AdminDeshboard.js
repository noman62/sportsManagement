import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice/userSlice'

import AllNotice from '../AllNotice/AllNotice'
import AllRequest from '../AllRequest/AllRequest'

import Navbar from '../Navbar/Navbar'
import Test from '../Test/Test'
import UserDonation from '../Participant/Participant'
import UserRequest from '../UserRequest/UserRequest'
import './AdminDeshboard.css'
import AllParticipant from '../AllParticipant/AllParticipant'
import Participant from '../Participant/Participant'
import UploadNotice from '../UploadNotice/UploadNotice'
import AllEvent from '../AllEvent/AllEvent'
import AllProduct from '../AllProduct/AllProduct'
import { NavDropdown } from 'react-bootstrap'
const AdminDeshboard = () => {
  const user = useSelector(selectUser)
  console.log(user)

  return (
    <div>
      <Navbar />
      <div class='w-100'>
        <div class='container pill2'>
          <div class='row'>
            <div class='col-md-12'>
              <nav>
                <div class='nav nav-tabs' id='nav-tab' role='tablist'>
                  {user !== null && user.user && user.user.role === 'user' && (
                    <a
                      class='nav-item nav-link active'
                      id='nav-admin-profile-tab'
                      data-toggle='tab'
                      href='#nav-admin-profile'
                      role='tab'
                      aria-controls='nav-admin-profile'
                      aria-selected='true'
                    >
                      Profile
                    </a>
                  )}
                    {user !== null && user.user && user.user.role === 'teacher' && (
                    <a
                      class='nav-item nav-link active'
                      id='nav-admin-profile-tab'
                      data-toggle='tab'
                      href='#nav-admin-profile'
                      role='tab'
                      aria-controls='nav-admin-profile'
                      aria-selected='true'
                    >
                      Profile
                    </a>
                  )}

                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                      <a
                        class='nav-item nav-link'
                        id='nav-donate-list-tab'
                        data-toggle='tab'
                        href='#nav-donate-list'
                        role='tab'
                        aria-controls='nav-donate-list'
                        aria-selected='false'
                      >
                        Participant List
                      </a>
                      <a
                        class='nav-item nav-link'
                        id='nav-request-list-tab'
                        data-toggle='tab'
                        href='#nav-request-list'
                        role='tab'
                        aria-controls='nav-request-list'
                        aria-selected='false'
                      >
                        All Student
                      </a>
                      <a
                        class='nav-item nav-link'
                        id='nav-user-list-tab'
                        data-toggle='tab'
                        href='#nav-user-list'
                        role='tab'
                        aria-controls='nav-user-list'
                        aria-selected='false'
                      >
                        All Request List
                      </a>
                      <a
                        class='nav-item nav-link'
                        id='nav-notice-list-tab'
                        data-toggle='tab'
                        href='#nav-notice-list'
                        role='tab'
                        aria-controls='nav-notice-list'
                        aria-selected='false'
                      >
                        All Notice
                      </a>
                      <a
                        class='nav-item nav-link'
                        id='nav-product-list-tab'
                        data-toggle='tab'
                        href='#nav-product-list'
                        role='tab'
                        aria-controls='nav-product-list'
                        aria-selected='false'
                      >
                        All Sports Item
                      </a>
                      <a
                        class='nav-item nav-link'
                        id='nav-event-list-tab'
                        data-toggle='tab'
                        href='#nav-event-list'
                        role='tab'
                        aria-controls='nav-event-list'
                        aria-selected='false'
                      >
                        All Event
                      </a>

                      <a class='nav-item nav-link' href='/uploadnotice'>
                        Add Notice
                      </a>
                      <a class='nav-item nav-link' href='/product'>
                        Items
                      </a>
                      <a class='nav-item nav-link' href='/uploadEvent'>
                        Events
                      </a>
                      {/* <a class='nav-item nav-link' href='/fixture'>
                        Fixture
                      </a> */}
                      {/* <li class='nav-item px-2'> */}
                      <NavDropdown title="Fixture" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/footballfixture">Football</NavDropdown.Item>
                        <NavDropdown.Item href="/volleyballfixture">
                          Volleyball
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/tabbletennisfixture">Badminton</NavDropdown.Item>
                        <NavDropdown.Item href="/badmintonfixture">Tabble Tennis</NavDropdown.Item>
                      </NavDropdown>
                      {/* </li> */}
                    </>
                  )}


                  {user !== null && user.user && user.user.role === 'teacher' && (
                    <>
                      <a
                        class='nav-item nav-link'
                        id='nav-donate-list-tab'
                        data-toggle='tab'
                        href='#nav-donate-list'
                        role='tab'
                        aria-controls='nav-donate-list'
                        aria-selected='false'
                      >
                        Participant List
                      </a>
                      <a
                        class='nav-item nav-link'
                        id='nav-user-list-tab'
                        data-toggle='tab'
                        href='#nav-user-list'
                        role='tab'
                        aria-controls='nav-user-list'
                        aria-selected='false'
                      >
                        All Request List
                      </a>
                      <a
                        class='nav-item nav-link'
                        id='nav-notice-list-tab'
                        data-toggle='tab'
                        href='#nav-notice-list'
                        role='tab'
                        aria-controls='nav-notice-list'
                        aria-selected='false'
                      >
                        All Notice
                      </a>
                      <a
                        class='nav-item nav-link'
                        id='nav-product-list-tab'
                        data-toggle='tab'
                        href='#nav-product-list'
                        role='tab'
                        aria-controls='nav-product-list'
                        aria-selected='false'
                      >
                        All Sports Item
                      </a>
                      <a
                        class='nav-item nav-link'
                        id='nav-event-list-tab'
                        data-toggle='tab'
                        href='#nav-event-list'
                        role='tab'
                        aria-controls='nav-event-list'
                        aria-selected='false'
                      >
                        All Event
                      </a>

                      <a class='nav-item nav-link' href='/uploadnotice'>
                        Add Notice
                      </a>
                      <a class='nav-item nav-link' href='/product'>
                        Items
                      </a>
                      <a class='nav-item nav-link' href='/uploadEvent'>
                        Events
                      </a>
                      <NavDropdown title="Fixture" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/footballfixture">Football</NavDropdown.Item>
                        <NavDropdown.Item href="/volleyballfixture">
                          Volleyball
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/tabbletennisfixture">Badminton</NavDropdown.Item>
                        <NavDropdown.Item href="/badmintonfixture">Tabble Tennis</NavDropdown.Item>
                      </NavDropdown>
                      {/* </li> */}
                    </>
                  )}
                  {user !== null && user.user && user.user.role === 'user' && (
                    <>
                      <a
                        class='nav-item nav-link'
                        id='nav-donate-list-tab'
                        data-toggle='tab'
                        href='#nav-donate-list'
                        role='tab'
                        aria-controls='nav-donate-list'
                        aria-selected='false'
                      >
                        Participant List
                      </a>

                      <a
                        class='nav-item nav-link'
                        id='nav-user-list-tab'
                        data-toggle='tab'
                        href='#nav-user-list'
                        role='tab'
                        aria-controls='nav-user-list'
                        aria-selected='false'
                      >
                        Request List
                      </a>
                    </>
                  )}
                </div>
              </nav>
              <div class='tab-content text-center m-4' id='nav-tabContent'>
                <div
                  class='tab-pane fade show active'
                  id='nav-admin-profile'
                  role='tabpanel'
                  aria-labelledby='nav-admin-profile-tab'
                >
                  <img
                    class='user-deshboard-image'
                    src={user?.user?.imageURL}
                    alt=''
                    srcset=''
                  />
                  <table class='table'>
                    <tbody>
                      {user !== null &&
                        user.user &&
                        user.user.role === 'admin' && (
                          <>
                            <tr>
                              <th>Name</th>
                              <td>{user?.user?.name}</td>
                            </tr>
                            <tr>
                              <th>Email</th>
                              <td>{user?.user?.email}</td>
                            </tr>
                          </>
                        )}
                      {user !== null &&
                        user.user &&
                        user.user.role === 'teacher' && (
                          <>
                            <tr>
                              <th>Name</th>
                              <td>{user?.user?.name}</td>
                            </tr>
                            <tr>
                              <th>Email</th>
                              <td>{user?.user?.email}</td>
                            </tr>
                          </>
                        )}
                      {user !== null && user.user && user.user.role === 'user' && (
                        <>
                          <tr>
                            <th>Name</th>
                            <td>{user?.user?.name}</td>
                          </tr>
                          <tr>
                            <th>Email</th>
                            <td>{user?.user?.email}</td>
                          </tr>
                          <tr>
                            <th>Student ID</th>
                            <td>{user?.user?.roll}</td>
                          </tr>
                          <tr>
                            <th>Session</th>
                            <td>{user?.user?.session}</td>
                          </tr>
                          <tr>
                            <th>Department</th>
                            <td>{user?.user?.department}</td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
                <div
                  class='tab-pane fade'
                  id='nav-donate-list'
                  role='tabpanel'
                  aria-labelledby='nav-donate-list-tab'
                >
                  {/* <h3>Participant List</h3> */}

                  {user !== null && user.user && user.user.role === 'user' && (
                    <>
                      <Participant />
                    </>
                  )}

                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                      <AllParticipant />
                    </>
                  )}

                  {user !== null && user.user && user.user.role === 'teacher' && (
                    <>
                      <AllParticipant />
                    </>
                  )}
                </div>
                <div
                  class='tab-pane fade'
                  id='nav-request-list'
                  role='tabpanel'
                  aria-labelledby='nav-request-list-tab'
                >
                  {/* <h3>User List</h3> */}
                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                      <Test />
                    </>
                  )}
                </div>
                <div
                  class='tab-pane fade'
                  id='nav-user-list'
                  role='tabpanel'
                  aria-labelledby='nav-user-list-tab'
                >
                  {/* <h3>Request List</h3> */}

                  {user !== null && user.user && user.user.role === 'user' && (
                    <>
                      <UserRequest />
                    </>
                  )}

                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                      <AllRequest />
                    </>
                  )}
                     {user !== null && user.user && user.user.role === 'teacher' && (
                    <>
                      <AllRequest />
                    </>
                  )}
                </div>
                <div
                  class='tab-pane fade'
                  id='nav-notice-list'
                  role='tabpanel'
                  aria-labelledby='nav-notice-list-tab'
                >
                  {/* <h3>Participant List</h3> */}

                  {user !== null && user.user && user.user.role === 'user' && (
                    <>
                      <UserDonation />
                    </>
                  )}

                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                      <AllNotice />
                    </>
                  )}
                  
                  {user !== null && user.user && user.user.role === 'teacher' && (
                    <>
                      <AllNotice />
                    </>
                  )}
                </div>
                <div
                  class='tab-pane fade'
                  id='nav-product-list'
                  role='tabpanel'
                  aria-labelledby='nav-product-list-tab'
                >
                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                      <AllProduct />
                    </>
                  )}
                    {user !== null && user.user && user.user.role === 'teacher' && (
                    <>
                      <AllProduct />
                    </>
                  )}
                </div>
                <div
                  class='tab-pane fade'
                  id='nav-event-list'
                  role='tabpanel'
                  aria-labelledby='nav-event-list-tab'
                >
                  {user !== null && user.user && user.user.role === 'admin' && (
                    <>
                      <AllEvent />
                    </>
                  )}
                    {user !== null && user.user && user.user.role === 'teacher' && (
                    <>
                      <AllEvent />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDeshboard
