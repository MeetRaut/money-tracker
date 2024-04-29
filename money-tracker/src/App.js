import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className='basic'>
          <input type='text' placeholder='Product / Service'/>
          <input type='datetime-local'/>
        </div>
        <div className='description'>
        <input type='text' placeholder={'description'} />
        </div>
        <button type='submit'>Add New Transaction</button>
      </form>

      
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>It was time for new tv</div>
          </div>

          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>2022-12-18 15:45</div>
          </div>
        </div>


        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>It was time for new tv</div>
          </div>

          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>2022-12-18 15:45</div>
          </div>
        </div>


        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>It was time for new tv</div>
          </div>

          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>2022-12-18 15:45</div>
          </div>
        </div>


        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>It was time for new tv</div>
          </div>

          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>2022-12-18 15:45</div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
