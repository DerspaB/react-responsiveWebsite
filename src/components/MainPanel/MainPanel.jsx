import React from 'react'
import { Card } from '../Card/Card'
import './style.css'

export const MainPanel = () => {

  const cardsInfo = [
    {
      img: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/eren-jaeger-shingeki-no-kyojin-temporada-final.jpg?fit=1280%2C720&quality=80&ssl=1',
      title: 'Attack of titans',
      description: 'Anime de titanes y guerras entre naciones'
    },
    {
      img: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/eren-jaeger-shingeki-no-kyojin-temporada-final.jpg?fit=1280%2C720&quality=80&ssl=1',
      title: 'Attack of titans',
      description: 'Anime de titanes y guerras entre naciones'
    },
    {
      img: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/eren-jaeger-shingeki-no-kyojin-temporada-final.jpg?fit=1280%2C720&quality=80&ssl=1',
      title: 'Attack of titans',
      description: 'Anime de titanes y guerras entre naciones'
    },
    {
      img: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/eren-jaeger-shingeki-no-kyojin-temporada-final.jpg?fit=1280%2C720&quality=80&ssl=1',
      title: 'Attack of titans',
      description: 'Anime de titanes y guerras entre naciones'
    },
    {
      img: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/eren-jaeger-shingeki-no-kyojin-temporada-final.jpg?fit=1280%2C720&quality=80&ssl=1',
      title: 'Attack of titans',
      description: 'Anime de titanes y guerras entre naciones'
    },
    {
      img: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/eren-jaeger-shingeki-no-kyojin-temporada-final.jpg?fit=1280%2C720&quality=80&ssl=1',
      title: 'Attack of titans',
      description: 'Anime de titanes y guerras entre naciones'
    },
    {
      img: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/eren-jaeger-shingeki-no-kyojin-temporada-final.jpg?fit=1280%2C720&quality=80&ssl=1',
      title: 'Attack of titans',
      description: 'Anime de titanes y guerras entre naciones'
    },
    {
      img: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/eren-jaeger-shingeki-no-kyojin-temporada-final.jpg?fit=1280%2C720&quality=80&ssl=1',
      title: 'Attack of titans',
      description: 'Anime de titanes y guerras entre naciones'
    },
    {
      img: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/eren-jaeger-shingeki-no-kyojin-temporada-final.jpg?fit=1280%2C720&quality=80&ssl=1',
      title: 'Attack of titans',
      description: 'Anime de titanes y guerras entre naciones'
    },
    {
      img: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/eren-jaeger-shingeki-no-kyojin-temporada-final.jpg?fit=1280%2C720&quality=80&ssl=1',
      title: 'Attack of titans',
      description: 'Anime de titanes y guerras entre naciones'
    },
    {
      img: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/eren-jaeger-shingeki-no-kyojin-temporada-final.jpg?fit=1280%2C720&quality=80&ssl=1',
      title: 'Attack of titans',
      description: 'Anime de titanes y guerras entre naciones'
    },
    {
      img: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/eren-jaeger-shingeki-no-kyojin-temporada-final.jpg?fit=1280%2C720&quality=80&ssl=1',
      title: 'Attack of titans',
      description: 'Anime de titanes y guerras entre naciones'
    },
  ]
  return (
    <div className='main-wrapper'>

      <div className='cards-container'>
        {
          cardsInfo.map( (card, index) => (
            <Card
              key={index}
              img={card.img}
              title={card.title}
              description={card.description}
            />
          ))
        }
      </div>
     
    </div>
  )
}
