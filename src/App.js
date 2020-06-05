import React, { useState, useEffect } from 'react';
import {
  VictoryLabel, VictoryLine,
} from 'victory';
import './App.css';
import data from './jaildata';

// useEffect(() => fetch('https://swapi.co/api/planets/4/')
//   .then((res) => res.json())
//   .then((res) => this.setState({ planets: res }))
//   .catch(() => this.setState({ hasErrors: true })));

function App() {
  const [jailData, setJailData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://mult-co-jail-data.herokuapp.com/api/v1/dailyCounts') //eslint-disable-line
      .then((res) => res.json())
      .then((res) => setJailData(res.counts.slice(5)));
    setIsLoading(false);
  }, []);

  if (!isLoading) {
    return (
      <div className="App">
        <div className="Container">
          <h1>blah blah</h1>
          <div className="Chart">


            <VictoryLine
            // labelComponent={<VictoryTooltip />}
              data={jailData}
              // labels={({ datum }) => datum.count}
              labelComponent={<VictoryLabel renderInPortal dy={-10} />}
              x="date"
              y="count"
            />

          </div>
        </div>
      </div>
    );
  }
  return (
    <h1>loading</h1>
  );
}
export default App;
