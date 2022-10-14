import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function TailwindDemo() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello <a target={"_blank"} className="text-sky-400" href="https://nextjs.org">Tailwind!</a>
    </h1>
  )
}
