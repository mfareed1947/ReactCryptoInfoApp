import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack } from '@chakra-ui/react'
import Loader from './Loader'
import ExchangesCard from './ExchangesCard'


const Exchanges = () => {

  const [exhanges, setExhanges] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchExchanges = async () => {

      try {
        const { data } = await axios.get(`${server}/exchanges`)

        setExhanges(data)
        setLoading(false)
        console.log(data)

      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchExchanges()

  }, [])



  return (
    <Container maxWidth={'container.xl'}>
      {loading ? <Loader /> :
        <>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'} >
            {
              exhanges.map((i,ind) => (
                <ExchangesCard key={ind} name={i.name} img={i.image} rank={i.rank} url={i.url} />
              ))
            }
          </HStack>

        </>}

    </Container>
  )
}

export default Exchanges