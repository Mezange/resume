import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from "react";
import Landing from '../Landing/Landing';

function App() {
    // Desactiver clic droit sur l'app
    useEffect(() => {
        const handleContextMenu = (event) => {
          event.preventDefault();
        };
        window.addEventListener("contextmenu", handleContextMenu);
        return () => {
          window.removeEventListener("contextmenu", handleContextMenu);
        };
      }, []);

    return (
            <Routes>
                {/* HOME */}
                <Route path='/resume' element={
                        <Landing />
                      }
                />
            </Routes>
  );
}

export default App;