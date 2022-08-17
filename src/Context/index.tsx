import { createContext, useContext, useEffect, useState } from "react";
import * as Services from "../Services";

const MainContext = createContext({});
interface Body {
  name: string;
  number: string;
}
const useMain = () => useContext(MainContext) as any;

const MainProvider = ({ children }: any) => {
  const [data, setData] = useState<any>();

  const getContacts = async () => {
    const response = await Services.List();
    const data = await response.json();
    setData(data);
  };
  const createContact = async (body: Body) => {
    try {
      await Services.Create(body);
    } catch (e) {
      console.log(e);
    }
    getContacts();
  };
  const editContact = async (body: Body, id: number) => {
    try {
      await Services.Edit(body, id);
    } catch (e) {
      console.log(e);
    }
    getContacts();
  };

  const deleteContact = async (id: number) => {
    try {
      await Services.Delete(id);
    } catch (e) {
      console.log(e);
    }
    getContacts();
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <MainContext.Provider
      value={{ data, createContact, editContact, deleteContact }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, useMain };
