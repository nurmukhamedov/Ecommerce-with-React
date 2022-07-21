import React, {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url } from '../utils/constant'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  PageHero
} from '../components'
const SingleProductPage = () => {
  return (
    <div>SingleProductPage</div>
  )
}

export default SingleProductPage