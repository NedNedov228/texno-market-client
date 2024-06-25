import React, { useState , useEffect} from 'react';
import ItemCard from '../utils/ItemCard/ItemCard';
import './CardList.scss';
import MyBtn from '../utils/MyBtn/MyBtn';


interface CardListProps {
  items: {
    photo: string;
    price: string;
    name: string;
  }[];
  onButtonClick: (itemName: string) => void;
}

const ITEMS_PER_PAGE = 6;

const CardList: React.FC<CardListProps> = ({ items, onButtonClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animate, setAnimate] = useState(false);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 500); // Duration of animation
    return () => clearTimeout(timeout);
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="card-list-wrapper">
      <div className={`card-list ${animate ? 'animate' : ''}`}>
        {currentItems.map((item, index) => (
          <ItemCard
            key={index}
            photo={item.photo}
            price={item.price}
            name={item.name}
            onButtonClick={() => onButtonClick(item.name)}
          />
        ))}
      </div>
      <div className={`pagination ${animate ? 'animate' : ''}`}>
        <MyBtn onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </MyBtn>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <MyBtn onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </MyBtn>
      </div>
    </div>
  );
};

export default CardList;
