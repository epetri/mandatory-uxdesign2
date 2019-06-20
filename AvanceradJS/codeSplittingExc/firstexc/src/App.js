import React, {lazy, Suspense} from 'react';
import './App.css';

const MyLazyComponent = React.lazy(() =>
import('./lazyComponent'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>Loading...</h2>}>
        <MyLazyComponent/>
      </Suspense>
    </div>
  );
}

export default App;
