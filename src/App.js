import React from 'react';
import { Switch , Route } from 'react-router-dom';
import ProfilePage  from './components/profile-page/profile-page.component';
import Projects from './components/projects/projects.component';
import Header from './components/header/header.component';
import {Contact} from './components/contact/contact.component';
import './App.css';
import Footer from './components/footer/footer.component';

class App extends React.Component{

  render(){
  return (
    <div className="App">
        <Header className="header"/>
       <Switch className="main-page">
        <Route path= '/' component={ProfilePage}/>
        <Route path= '/projects' component={Projects}/>
        <Route path= '/contact' component={Contact}/>
        </Switch> 
        <Footer className="footer"/>   
     </div>
    );
};
}

export default App;
