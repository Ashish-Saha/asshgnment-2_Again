import { useState } from "react";
import BookMarkForm from "./bookmarkForm/BookMarkForm";
import BookmarkList from "./bookmarkList/BookmarkList";

export default function Vault() {
  const initialValue = {
    id: crypto.randomUUID(),
    url: "http://www.facebook.com",
    favColor: "#3b82f6",
    catagory: "Social",
    userName: "john.doe@email.com",
    password: "12345600",
    isMasking: false,
    createdAt: new Date().toISOString()
  };

  const [valtList, setVaultList] = useState([initialValue]);
  

  //Add FormData to FormList
  const handleAddValt = (formData) => {
    setVaultList((prev) => [...prev, formData]);
    
  };

  //Toggle isMasking to Revel Password
  const handleToggleMasking = (id) => {
    const indexID = valtList.findIndex((item) => item.id === id);

    let newValtList = [...valtList];
    newValtList[indexID] = {
      ...newValtList[indexID],
      isMasking: !newValtList[indexID].isMasking,
    };
    setVaultList(newValtList);
  };

  return (
    <>
      <BookMarkForm onAddValt={handleAddValt} />
      <BookmarkList valtList={valtList} ontoggle={handleToggleMasking} />
    </>
  );
}
