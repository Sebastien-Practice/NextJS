import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import CoffeeCard from '@/components/cards/coffeeCard'
import { getSavedCoffeeListSelector } from '@/store/selectors/getSavedCoffeeListSelector/getSavedCoffeeListSelector'
import { useSelector } from 'react-redux'
import RenderCoffees from '@/components/buttons/renderCoffees/RenderCoffees'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const coffeeListObject = useSelector(getSavedCoffeeListSelector);

  fetch('https://random-data-api.com/api/coffee/random_coffee?size=50')
  .then((response) => response.json())
  .then((data) => console.log(data))
  

  return (
    <>
      <Head>
        <title>Worlds Best Coffees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='getCoffeeButton'>
        <RenderCoffees />
      </main>
    </>
  )
}
