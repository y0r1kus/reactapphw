import React, {useState} from "react";
import './App.css';
import Menu from "./components/Menu/Menu";
import {Footer} from "./components/Footer/Footer";
import {Routes, Route} from 'react-router-dom';
import {About} from './pages/About'
import {Auth} from './pages/Auth'
import {Adv} from './pages/Advcourse'
import {Base} from './pages/Basecourse'
import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";

    const App = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value:"Главная", href: '/about', icon: 'home'},
        {value:"Основной курс", href: '/base', icon: 'task_alt'},
        {value:"Продвинутый курс", href: '/adv', icon: 'add_task'},
        {value:"Авторизация", href: '/auth', icon: 'login'},
    ]

    return (
    <div className="App">
          <nav>
              <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                  <span/>
              </div>
          </nav>

          <header>
              <Menu active={menuActive} setActive={setMenuActive} header={"Меню "} items={items}/>
              <h1 className='header'>Шахматная школа</h1>
          </header>

          <AuthProvider>
          <Routes>
              <Route path="/about" element={<About />}/>
              <Route path="/base" element={<Base />}/>
              <Route path="/" element={<About />}/>
              <Route path="/adv" element={
                  <RequireAuth>
                      <Adv />
                  </RequireAuth>
              }/>
              <Route path="/auth" element={<Auth />}/>
            </Routes>
          </AuthProvider>

          <Footer/>

    </div>
    );
};

export default App;

