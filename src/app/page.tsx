'use client'
import { useState } from "react";
import Container from "./components/Body/Container";
import Header from "./components/Header/Header";

export default function Home() {

    const [currLanguage, setCurrLanguage] = useState("ptbr");

    return (
        <>
            <Header currLanguage={currLanguage} setCurrLanguage={setCurrLanguage} />
            <Container language={currLanguage} />
        </>
    );
}
