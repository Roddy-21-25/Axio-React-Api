import { useState, useEffect } from "react";
import { usersApi } from "../Api/usersApi";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await usersApi.get("https://reqres.in/api/users?page=2");
    setUsers(resp.data.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users
  }
}