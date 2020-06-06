import React, { useState, useEffect } from 'react';
import {
  VictoryLine, VictoryTooltip, VictoryChart,
} from 'victory';
import './App.css';

function App() {
  const [jailData, setJailData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://mult-co-jail-data.herokuapp.com/api/v1/dailyCounts') //eslint-disable-line
      .then((res) => res.json())
      .then((res) => setJailData(res.counts.slice(-7)));

    setIsLoading(false);
  }, []);

  if (!isLoading) {
    return (
      <div className="App">
        <div className="Container">
          <h1>Multnomah County Detentions This Week</h1>
          <div className="Chart">

            <VictoryChart>
              <VictoryLine
                labelComponent={<VictoryTooltip />}
                data={jailData}
                x="date"
                y="count"
                tickFormat={(x) => `${x.getDay()}`}
              />
            </VictoryChart>
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
