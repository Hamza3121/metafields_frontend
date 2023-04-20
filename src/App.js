import React from 'react';
import './App.css';
import PrivateRoutes from './Routes';
import queryString from 'query-string';
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";


export const history = createBrowserHistory();
history.listen((location, action) => {
  if (["PUSH"].includes(action)) {
    window.scroll({
      behavior: "smooth",
      top: 0
    });
  }
});

function App() {
  const [shop, setShop] = React.useState("");
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    const value = queryString.parse(window.location.href);
    setToken(value.API_TOKEN)
    setShop(value.shop)
  }, []);

  return (
    <div className="App">
      <BrowserRouter history={history}>
        <PrivateRoutes token={token} shop={shop} />
      </BrowserRouter>
    </div>
  );
}

export default App;
