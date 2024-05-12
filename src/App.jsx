import 'bulma/css/bulma.css';
import './App.scss';

import React, { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleGoodSelection = good => {
    setSelectedGood(good);
  };

  const clearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSelection}
          >
            Clear
          </button>
        )}
      </h1>

      <div className="goods-list">
        {goods.map(good => (
          <div
            key={good}
            data-cy="Good"
            className={
              good === selectedGood ? 'has-background-success-light' : ''
            }
          >
            <div className="good-info">
              {!selectedGood && (
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => handleGoodSelection(good)}
                >
                  Select
                </button>
              )}
              {good === selectedGood && (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={clearSelection}
                >
                  Deselect
                </button>
              )}
              <span data-cy="GoodTitle">{good}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
