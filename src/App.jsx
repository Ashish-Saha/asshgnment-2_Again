import "./App.css";

import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import Vault from "./vault/Vault";

export default function App() {
  return (
    <section className="bg-neutral-900 text-white">
      <Header/>
      <Vault/>
      <Footer/>
    </section>
  )
}
