import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinsCard = ({ name, img, id, price, symbol, currencySymbol='Rs ' }) => {
    return (
        <Link to={`/coin/${id}`}>
            <VStack w={'52'} p={'8'} shadow={'lg'} borderRadius={'lg'} transition={'all 0.3s'} m={'4'} css={{
                "&:hover": {
                    transform: 'scale(1.1)'
                }
            }} >
                <Image
                    w={'10'}
                    h={'10'}
                    objectFit={'contain'}
                    alt='Exchanges'
                    src={img} />

                <Heading size={'md'} noOfLines={1}>{symbol} </Heading>
                <Text noOfLines={1}>{name}</Text>
                <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
            </VStack>
        </Link>
    )
}

export default CoinsCard