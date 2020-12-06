import React, { useState, useEffect } from "react";
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [github_username, setGithubUsername] = useState(''); 
  const [techs, setTechs] = useState(''); 


  const [latitude, setLatitude] = useState(''); 
  const [longitude, setLongitude] = useState(''); 

  useEffect (() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
          console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e){
    e.preventDefault();
  }
  return (
    <>
      <div id="app">
         <aside>
            <strong>Cadastrar</strong>
            <form>
              <div className="input-block">
                <label htmlFor="github_username">Usuário do GitHub</label>
                <input 
                 name="github_username" 
                 id="github_username" 
                 required
                 value={github_username}
                 onChange={e => setGithubUsername(e.target.value)}

                />
              </div>

              <div className="input-block">
                <label htmlFor="techs">Tecnologia</label>
                <input name="techs" id="techs" required />
              </div>

              <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                  type="number" 
                  name="latitude" 
                  id="latitude" 
                  required 
                  value={latitude} 
                  onChange={e => setLatitude(e.target.value)}
                />
              </div>
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                  type="number" 
                  name="longitude" 
                  id="longitude" 
                  required value={longitude} 
                  onChange={e => setLongitude(e.target.value)}
                />
              </div>
             
              </div>
              
              <button type="submit">Salvar</button>
            </form>

         </aside>
         <main>
          <ul>
          <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/23109016?s=460&u=b5763a358c40bed34665b52cdd08f7ec0f71db67&v=4"></img>
                <div className="user-info">
                  <strong>Jesiel Faria</strong>
                  <span>ReactJS, React Native e Node.js</span>
                </div>
              </header>
              <p> testdsadasda sdasdasdasdasd asdasdasdasd asdasdasdsa </p>
              <a href="https://github.com/Jesiel15">Acessar perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/23109016?s=460&u=b5763a358c40bed34665b52cdd08f7ec0f71db67&v=4"></img>
                <div className="user-info">
                  <strong>Jesiel Faria</strong>
                  <span>ReactJS, React Native e Node.js</span>
                </div>
              </header>
              <p> testdsadasd asdasdasdasdas dasdasdasdas dasdasdasdsa </p>
              <a href="https://github.com/Jesiel15">Acessar perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/23109016?s=460&u=b5763a358c40bed34665b52cdd08f7ec0f71db67&v=4"></img>
                <div className="user-info">
                  <strong>Jesiel Faria</strong>
                  <span>ReactJS, React Native e Node.js</span>
                </div>
              </header>
              <p> testdsadasdasd asdasdasdasd asdasdasdasda sdasdasdsa </p>
              <a href="https://github.com/Jesiel15">Acessar perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/23109016?s=460&u=b5763a358c40bed34665b52cdd08f7ec0f71db67&v=4"></img>
                <div className="user-info">
                  <strong>Jesiel Faria</strong>
                  <span>ReactJS, React Native e Node.js</span>
                </div>
              </header>
              <p> testdsadasdas dasdasdasdasd sdasdasdasd asdasdasdsa </p>
              <a href="https://github.com/Jesiel15">Acessar perfil no Github</a>
            </li>

          </ul>
         </main>
      </div>
    </>
  );
}

export default App;
