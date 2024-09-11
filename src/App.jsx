
import './App.css';
import React from "react";

const App = (props) => {
  return (<BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path='/profile' element={<ProfileContainer/>}>
              <Route path=':userId' element={<ProfileContainer/>}/>
            </Route>
            <Route path='/dialogs' element={<DialogsContainer/>}/>
            <Route path='/news' element={<NewsContainer/>}/>
            <Route path='/settings' element={<SettingsContainer/>}/>
            <Route path='/users' element={<UsersContainer/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </MainLayout>
      </BrowserRouter>
  );
}

export default App;
