import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import AdminDeshboard from './components/AdminDeshboard/AdminDeshboard'
import UserDeshboard from './components/UserDeshboard/UserDeshboard'
import Faq from './components/Faq/Faq'

import Test from './components/Test/Test'
import RequestModal from './components/RequestModal/RequestModal'
import UserRequest from './components/UserRequest/UserRequest'
import AllRequest from './components/AllRequest/AllRequest'
import UploadNotice from './components/UploadNotice/UploadNotice'
import Fixture from './components/Fixture/FootballFixture'
import UploadProduct from './components/UploadProduct/UploadProduct'
import Register from './components/Register/Register'
import Event from './components/Event/Event'
import Item from './components/Item/Item'
import Homepage from './components/Homepage/Homepage'
import ManEvent from './components/ManEvent/ManEvent'
import SingleEvent from './components/SingleEvent/SingleEvent'
import Rules from './components/Rules/Rules'
import GameDetails from './components/GameDetailes/GameDetails'
import SportsItem from './components/SportsItem/SportsItem'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Footer from './components/Footer/Footer'
import UploadEvent from './components/UploadEvent/UploadEvent'
import GirlEvent from './components/GirlEvent/GirlEvent'
import TeacherEvent from './components/TeacherEvent/TeacherEvent'
import Header from './components/Header/Header'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice/userSlice'
import Achievment from './components/Achievment/Achievment'
import Notice from './components/Homepage/Notice'
import Teacher from './components/Navbar/Teacher/Teacher'
import SportsFixture from './components/Event/SportsFixture/SportsFixture'
import BadmintonF from './components/Event/SportsFixture/BadmintonF'
import BadmintonFixture from './components/Fixture/BadmintonFixture'
import VolleyballFixture from './components/Event/SportsFixture/VolleyballFixture'
import VolleyballFixtureadd from './components/Fixture/VolleyballFixtureadd'
import Tabble_Tennis from './components/Event/SportsFixture/Table_Tennis'
import FootballFixture from './components/Fixture/FootballFixture'
import TabbletenniseFixture from './components/Fixture/TabbletenniseFixture'

function App () {
  const user = useSelector(selectUser)
  console.log(user)
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
            <Homepage />
          </Route>
          <Route path='/singleProduct/:id'>
            <SingleProduct />
          </Route>
          <Route path='/manEvent'>
            <ManEvent />
          </Route>
     
          <Route path='/achievment'>
            <Achievment/>
          </Route>
          <Route path='/teacherEvent'>
            <TeacherEvent />
          </Route>
          <Route path='/rules'>
            <Rules />
          </Route>
          <Route path='/gameDetailes'>
            <GameDetails />
          </Route>
          <Route path='/sportsItem'>
          {user ? <SportsItem /> : <Homepage />}
          </Route>
          <Route path='/singleEvent'>
          {user ?   <SingleEvent /> : <Homepage />}
          </Route>
          <Route path='/girlEvent'>
            <GirlEvent />
          </Route>
          <Route path='/admindeshboard'>
            <AdminDeshboard />
          </Route>
          <Route path='/test'>
            <Test />
          </Route>
          <Route path='/userRequest'>
            <UserRequest />
          </Route>
          <Route path='/notice'>
            <Notice/>
          </Route>
          <Route path='/teacher'>
            <Teacher/>
          </Route>

          <Route path='/item/:key'>
            <Item />
          </Route>
          <Route path='/userdeshboard'>
            <UserDeshboard />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/event'>
            <Event />
          </Route>
          <Route path='/faq'>
            <Faq />
          </Route>

          <Route path='/uploadnotice'>
            <UploadNotice />
          </Route>
          <Route path='/footballfixture'>
            <FootballFixture/>
          </Route>
          <Route path='/volleyballfixture'>
            <VolleyballFixtureadd/>
          </Route>
          <Route path='/tabbletennisfixture'>
            <BadmintonFixture/>
          </Route>
          <Route path='/badmintonfixture'>
            <TabbletenniseFixture/>
          </Route>
          <Route path='/sFixture'>
            <SportsFixture/>
          </Route>
          <Route path='/badmintonF'>
            <BadmintonF/>
          </Route>
          <Route path='/volleyballF'>
            <VolleyballFixture/>
          </Route>
          <Route path='/tabletennisF'>
            <Tabble_Tennis/>
          </Route>
          <Route path='/uploadEvent'>
            <UploadEvent />
          </Route>
          <Route path='/product'>
            <UploadProduct />
          </Route>

          <Route path='/allrequest'>
            <AllRequest />
          </Route>
          <Route path='/modal'>
            <RequestModal />
          </Route>

          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
