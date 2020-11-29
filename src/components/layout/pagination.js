import React, { useState, useEffect } from 'react';

import MyCard from './card';
import './pagination.css';

const Pagination = ({ array, avaibility }) => {
  let [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [items, setItems] = useState(null);

  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItem = items && items.slice(indexOfFirstItem, indexOfLastItem);

  // Displaying page numbers
  let pageNumber = [];
  if (items) {
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pageNumber.push(Number(i));
    }
  }

  let currentPagee = Math.ceil(currentItem / itemsPerPage);
  let pageNeighbour = pageNumber.slice(currentPagee, currentPagee + 3);
  let totalPage = array && Math.ceil(array.length / itemsPerPage);

  const handleClick = (event) => {
    setCurrentPage(event.target.id);
  };

  const increaseNeighbour = (page) => {
    setCurrentPage(Number(page) + 1);
  };

  const decreaseNeighbour = (page) => {
    setCurrentPage(Number(page) - 1);
  };

  useEffect(() => {
    setItems(array);
  }, []);

  return (
    <div>
      {pageNumber && (
        <div className='pagination__container'>
          <div
            className='pagination__node'
            onClick={handleClick}
            id={pageNumber[0]}
          >
            {pageNumber[0]}
          </div>

          {currentPage > 1 && (
            <div
              className='pagination__node'
              onClick={() => decreaseNeighbour(currentPage)}
            >
              --
            </div>
          )}

          <div className='pagination__neighbour' onClick={handleClick}>
            {pageNumber.slice(+currentPage, +currentPage + 3).map((item, i) => (
              <div
                key={i}
                id={item}
                style={{
                  border: '1px solid black',
                  cursor: 'pointer',
                  width: '100%',
                  height: '96%',
                  textAlign: 'center',
                }}
                onClick={handleClick}
              >
                {item}
              </div>
            ))}
          </div>

          {currentPage < totalPage && (
            <div
              className='pagination__node'
              onClick={() => increaseNeighbour(currentPage)}
            >
              ++
            </div>
          )}

          {pageNumber && (
            <div
              className='pagination__node'
              onClick={handleClick}
              id={pageNumber[pageNumber.length - 1]}
            >
              {pageNumber[pageNumber.length - 1]}
            </div>
          )}
        </div>
      )}
      <h2>Current page : {currentPage}</h2>
      {currentItem &&
        currentItem.map((item) => (
          <MyCard
            props={item}
            key={item.id}
            availability={avaibility.filter(
              (res) => res.id === item.id.toUpperCase(),
            )}
          />
        ))}
    </div>
  );
};

export default Pagination;
