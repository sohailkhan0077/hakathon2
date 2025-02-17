"use client"
import React from 'react'
import { useState } from 'react'
import HeroShop from './HeroShop'
import FilterBar from './Filterbar'
import Toppics from './TopPics1'
import TopPics1 from './TopPics1'
import TopPics2 from './TopPics2'
import TopPics3 from './TopPics3'
import TopPics4 from './TopPics4'
import PaginationButtons from './paginationbutt'
import InfoFeatures from './infofeatures'

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }
  return (
    <div>
      <HeroShop/>
      <FilterBar/>
      <TopPics1/>
      <TopPics2/>
      <TopPics3/>
      <TopPics4/>
      <PaginationButtons 
        currentPage={currentPage}
        totalPages={3}
        onPageChange={handlePageChange}
      />
      <InfoFeatures/>
    </div>
  )
}

export default Shop
