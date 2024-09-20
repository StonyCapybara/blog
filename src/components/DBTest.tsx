"use client";
import { useState } from "react";

export default function DBTest() {
  const [test, setTest] = useState(0);

  async function check() {
    fetch("/api/test").then(async data => setTest((await data.json()).num));
  }

  return <button onClick={check}>Check: {test}</button>
}