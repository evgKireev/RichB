import { useState } from 'react';
import Refresh from './assets/Refresh';
import Card from './components/Card';
import Menu from './components/Menu';
import { cards } from './data';
import './scss/app.scss';

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Find Your Course</h1>
      <div className={'inner'}>
        <Menu />
        <div className="Cards">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              images={value.images}
              subTitle={value.subTitle}
              postgraduate={value.Postgraduate}
              time={value.time}
            />
          ))}
          <div className="refreah">
            <div>More programmes</div>
            <Refresh />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
