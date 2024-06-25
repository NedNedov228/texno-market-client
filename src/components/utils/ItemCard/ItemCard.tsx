import React from 'react';
import './ItemCard.scss';
import MyBtn from '../MyBtn/MyBtn'; // Adjust the path if necessary

interface ItemCardProps {
  photo?: string;
  price: string;
  name: string;
  onButtonClick?: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ photo, price, name, onButtonClick }) => {
    if (!photo) {
        photo = 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=No+Image';
    }
    
  return (
    <div className="item-card">
      <img src={photo} alt={name} className="item-card__photo" />
      <div className="item-card__details">
        <br />
        <h2 className="item-card__name">{name}</h2>
        <p className="item-card__price">{price}</p>
        <MyBtn onClick={onButtonClick}>Buy Now!</MyBtn>
      </div>
    </div>
  );
};

export default ItemCard;
