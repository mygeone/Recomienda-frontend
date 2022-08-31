import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'	

import { Wrapper } from "@googlemaps/react-wrapper";

export default function Home() {

  return (
    <>
      <Wrapper apiKey={"AIzaSyCy9Ou1TmA8jOoEkof3vTxe-qlnmFnxxDM"}>
        <Navbar />;
      </Wrapper>
    </>
  );
 
}
