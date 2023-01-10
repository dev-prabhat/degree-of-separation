import React from "react";
import { AddPeople } from "./components/AddPeople";
import { Home } from "./components/Home";
import { SetRelationShip } from "./components/SetRelationship";

function App() {
  return (
    <div>
      <Home />
      <AddPeople />
      <SetRelationShip />
    </div>
  );
}

export default App;
