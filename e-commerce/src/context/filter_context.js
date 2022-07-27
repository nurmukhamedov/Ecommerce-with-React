import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
    LOAD_PRODUCTS,
    SET_GRIDVIEW,
    SET_LISTVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
  } from '../actions';
  import { useProductsContext } from './products_context';
  
  const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
      text: '',
      company: 'all',
      category: 'all',
      color: 'all',
      min_price: 0,
      max_price: 0,
      price: 0,
      shipping: false,
    },
  } 
  
  const FilterContext = React.createContext()
  
export const FilterProvider = ({children}) => {
    const {products} = useProductsContext();
    const [state, dispatch] = useReducer(reducer,  initialState) 
    
    
    return (
        <FilterContext.Provider value = { {}}>
           {children}
        </FilterContext.Provider>
    )
} 

export const useFilterContext = () => {
    return useContext(FilterContext)
}