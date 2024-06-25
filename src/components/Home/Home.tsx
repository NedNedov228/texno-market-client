import React from 'react';
import Carousel from './Carousel/Carousel';
import './Home.scss';
import CardList from '../CardsList/CardList';

const images = [
  'https://via.placeholder.com/800x400/FF9BD2/ffffff?text=Slide+1',
  'https://via.placeholder.com/800x400/D63484/ffffff?text=Slide+2',
  'https://via.placeholder.com/800x400/402B3A/ffffff?text=Slide+3',
  'https://via.placeholder.com/800x400/404B3A/ffffff?text=Slide+4',
  

];


const items = [
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+1', price: '100$', name: 'Item 1' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+2', price: '200$', name: 'Item 2' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+3', price: '300$', name: 'Item 3' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+4', price: '400$', name: 'Item 4' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+5', price: '500$', name: 'Item 5' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+6', price: '600$', name: 'Item 6' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+6', price: '600$', name: 'Item 6' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+6', price: '600$', name: 'Item 6' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+6', price: '600$', name: 'Item 6' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+6', price: '600$', name: 'Item 6' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+6', price: '600$', name: 'Item 6' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+6', price: '600$', name: 'Item 6' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+6', price: '600$', name: 'Item 6' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+6', price: '600$', name: 'Item 6' },
  { photo: 'https://via.placeholder.com/300x200/C5C6C7/ffffff?text=Item+6', price: '600$', name: 'Item 6' },
];

//handleButtonClick function
const handleButtonClick = (itemName: string) => {
  alert(`You clicked on ${itemName}`);
};

const Home: React.FC = () => {
  return (
    <>
      
      <div className="container">
        <Carousel images={images} />

        <CardList items={items} onButtonClick={handleButtonClick}/>
        
        <h1>Welcome</h1>
        <h1>Welcome</h1>
        <h1>Welcome</h1>
        <h1>Welcome</h1>
        <h1>Welcome</h1>
        <h1>Welcome</h1>
        <h1>Welcome</h1>
        <h1>Welcome</h1>
        <h1>Welcome</h1>
        <h1>Welcome</h1>
        <h1>Welcome</h1>
        <h1>Welcome</h1>
        <h1>Welcome</h1>
    </div>
    </>
  );
};

export default Home;
