import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ShowContacts from "./components/ShowContacts";
import EditContacts from "./components/EditContacts";
import Home from "./components/Home";
import pagination from "./components/pagination";
import useLocalStorage from "./components/localStorage";
import { ContactsContext } from "./components/Edit";


function App() {
  const [contacts, setContacts] = useLocalStorage('ContactAdded', []);

  return (
    <div><Router>
      <div>
      <ContactsContext.Provider value={{ contacts, setContacts }}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/EditContacts/:id" component={EditContacts} />
                <Route path="/ShowContacts/:id" component={ShowContacts} />
                <Route path="/Pagination" component={pagination} />
              </Switch>
              </ContactsContext.Provider>
      </div>
  </Router>
  
 
</div>
  );
}

export default App;
