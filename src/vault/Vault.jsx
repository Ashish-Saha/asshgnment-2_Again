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
    password: "123456",
    isMasking: false,
  };

  const [formList, setFormList] = useState([initialValue]);

  return (
    <>
      <BookMarkForm />
      <BookmarkList />
    </>
  );
}
