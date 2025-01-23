import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [createServerDialoge, setCreateServerDialoge] = useState(false);
  const [servers, setServers] = useState([]);
  const [section, setSection] = useState('HOME');

  useEffect(() => {
      const fetchData = async () => {
        try {
          // Retrieve the token from localStorage
          const token = localStorage.getItem("token");
          if (!token) {
            console.error("No token found");
            return;
          }
  
          // Decode the token
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.id;
  
          // Make the API request
          const servers = await fetch("http://localhost:5000/server/user", {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(servers)
  
          const serversJson = await servers.json();
          setServers(serversJson.servers);
          console.log(serversJson);
        } catch (error) {
          console.error("Error fetching server data:", error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <AppContext.Provider value={{ servers, setServers,createServerDialoge, setCreateServerDialoge,section, setSection }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
