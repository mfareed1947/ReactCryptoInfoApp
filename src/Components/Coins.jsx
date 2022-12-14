import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import Loader from './Loader'
import CoinsCard from './CoinsCard'


const Coins = () => {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState('pkr')


  const currencySymbol = currency === 'pkr' ? 'Rs ' : currency === 'eur' ? '€' : '$';

  const changepage = (page) => {
    setPage(page)
    setLoading(true)
  }

  const btns = new Array(132).fill(1)


  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)

        setCoins(data)
        setLoading(false)
        console.log(data)

      } catch (error) {
        setError(true)
        setLoading(false)
        alert(error + 'Fetching issue')
      }
    }
    fetchCoins()

  }, [currency, page])



  return (
    <Container maxWidth={'container.xl'}>
      {loading ? <Loader /> :
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value={'pkr'}>INR</Radio>
              <Radio value={'usd'}>USD</Radio>
              <Radio value={'eur'}>EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'} >
            {
              coins.map((i) => (
                <CoinsCard key={i.id} id={i.id} name={i.name} img={i.image} price={i.current_price} symbol={i.symbol} currencySymbol={currencySymbol} />
              ))
            }
          </HStack>

          <HStack overflowX={'auto'} p={'8'} w={'full'}  >

            {
              btns.map((items, index) => (
            <Button key={index} onClick={() => changepage(index + 1)} bgColor={'blackAlpha.900'} color={'white'}>
              {index + 1}
            </Button>
          ))
            }

          </HStack>

        </>}

    </Container >
  )
}

export default Coins