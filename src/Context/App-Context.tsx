import React, { createContext, useState } from "react";
import { AppModule } from "../model/AppModule";
import { User } from "../model/User";
import findDegree from "../utils/searchDFS";

const AppContext = createContext<AppModule>({
  users: [],
  graph: [],
  output: [],
  hasOutput: false,
  searchedUsers: [],
  onNewUserEntry: (user: User) => {},
  onNewRelationshipEntry: (user1: string, user2: string) => {},
  onSearch: (user1: string, user2: string) => {},
});

export const AppProvider: React.FC = (props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [graph, setGraph] = useState<number[][]>([]);
  const [output, setOutput] = useState<number[][]>([]);
  const [hasOutput, setHasOutput] = useState<boolean>(false);
  const [searchedUsers, setSearchedUsers] = useState<string[]>([]);

  const newUserEntryHandler = (user: User) => {
    const findUser = users.find((u) => u.name === user.name);
    if (!findUser) {
      setUsers((prev) => [...prev, user]);
      setGraph((prev) => [...prev, []]);
    }
  };

  const newRelationshipEntryHandler = (user1: string, user2: string) => {
    const user1Index = users.findIndex((user) => user.name === user1);
    const user2Index = users.findIndex((user) => user.name === user2);
    //  check if relationship is already set
    const findRelation = graph[user1Index].find(
      (uindex) => uindex === user2Index
    );
    console.log(findRelation);
    // if (findRelation) {
    //   setAlert({
    //     hasAlert: true,
    //     variant: 'danger',
    //     description: `'${user1}' is already a Friend of '${user2}'!`,
    //   });
    //   return;
    //   }
    //   relationship to the graph
    setGraph((prev) => {
      const prevGraph = [...prev];
      prevGraph[user1Index].push(user2Index);
      return prevGraph;
    });
    // setAlert({
    //   hasAlert: true,
    //   variant: 'success',
    //   description: `'${user1}' is now a Friend of '${user2}'!`,
    // });
  };

  const onSearchHandler = (user1: string, user2: string) => {
    const user1Index = users.findIndex((user) => user.name === user1);
    const user2Index = users.findIndex((user) => user.name === user2);
    const res = findDegree(user1Index, user2Index, graph);
    setHasOutput(true);
    setOutput(res);
    setSearchedUsers([user1, user2]);
  };

  return (
    <AppContext.Provider
      value={{
        users: users,
        graph: graph,
        hasOutput: hasOutput,
        output: output,
        // alert: alert,
        searchedUsers: searchedUsers,
        onNewUserEntry: newUserEntryHandler,
        onNewRelationshipEntry: newRelationshipEntryHandler,
        onSearch: onSearchHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
