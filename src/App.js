import React, { useState } from "react";
import './global.css';
import './App.css';
import './Sidebar.css';

function App() {
  
  return (
    <>
      <div id="app">
         <aside>
            <strong>Cadastrar</strong>
            <form>
              <div className="input_block">
                <label htmlFor="github_username">Usuário do GitHub</label>
                <input name="github_username" id="github_username" required />
              </div>

              <div className="input_block">
                <label htmlFor="techs">Tecnologia</label>
                <input name="techs" id="techs" required />
              </div>

              <div className="input-group">
              <div className="input_block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required />
              </div>
              <div className="input_block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required />
              </div>
             
              </div>
              
              <button type="submit">Salvar</button>
            </form>

         </aside>
         <main>

         </main>
      </div>
    </>
  );
}

export default App;