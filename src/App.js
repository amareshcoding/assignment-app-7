import { Route, Routes } from 'react-router-dom';
import EventList from './components/EventManagement/EventList';
import EventReg from './components/EventManagement/EventReg';
import EventConfirmation from './components/EventManagement/EventConfirmation';
import UserList from './components/UserManagement/UserList';
import SingleUser from './components/UserManagement/SingleUser';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* home page */}
        <Route path="/" element={<HomePage />} />

        {/* event register routes */}
        <Route path="/event" element={<EventList />} />
        <Route path="/event/register/:id" element={<EventReg />} />
        <Route
          path="/event/register/confirmation"
          element={<EventConfirmation />}
        />

        {/* user register routes */}
        <Route path="/user" element={<UserList />} />
        <Route path="/user/single-user/:id" element={<SingleUser />} />
      </Routes>
    </div>
  );
}

export default App;
