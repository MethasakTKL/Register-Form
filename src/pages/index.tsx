import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/material";
import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  return (
    <Box>
      <RegisterForm/>
    </Box>
  );
}
