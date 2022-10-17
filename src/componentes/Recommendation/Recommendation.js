import * as React from 'react'
import './Recommendation.css';
import RecommendationItem from './RecommendationItem';

const recommendationData =[
    {
        id: 1,
        title: 'Adaptor',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/61mZ5a73phL._AC_UL320_SR320,320_.jpg'
    },
    {
        id: 2,
        title: 'Luggage Bag',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 490,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/71tzEgzCFcL._AC_UL450_SR450,320_.jpg'
    },
    {
        id: 3,
        title: 'Sneaker',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 1090,
        img: 'https://m.media-amazon.com/images/I/81S1E1Dr-BL._AC_UL320_.jpg'
    },
    {
        id: 4,
        title: 'Airdrops',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 1099,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/51HBom8xz7L._AC_UL450_SR450,320_.jpg'
    },
    {
        id: 5,
        title: 'Wirless Controller',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 3999,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/41QwbBaOfnL._AC_UL450_SR450,320_.jpg'
    },
    {
        id: 6,
        title: 'Adaptor',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 90,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/61mZ5a73phL._AC_UL320_SR320,320_.jpg'
    },

]

function Recommendation() {
  return (
    <div className='recommendation-container'>
        <div className='recommendation-header'>
            Recommendations
        </div>
        <div className='recommendation-list'>
            {
                recommendationData.map( item => 
                    <RecommendationItem 
                    key={item.id} 
                    title={item.title}  
                    description={item.description}
                    price={item.price}
                    img={item.img}
                    /> 
                )
            }
        </div>
    </div>
  )
}

export default Recommendation