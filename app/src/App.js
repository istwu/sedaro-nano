import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Sidebar from './components/Sidebar';
// import './App.css';

const App = () => {
  // Store plot data in state.
  const [plotData, setPlotData] = useState([]);

  useEffect(() => {
    // fetch plot data when the component mounts

    async function fetchData() {
      console.log('calling fetchdata...');

      try {
        // 'data.json' should be populated from a run of sim.py
        const response = await fetch('data.json');
        const data = await response.json();
        const updatedPlotData = {};

        data.forEach(([t0, t1, frame]) => {
          for (let [agentId, { x, y }] of Object.entries(frame)) {
            updatedPlotData[agentId] = updatedPlotData[agentId] || { x: [], y: [] };
            updatedPlotData[agentId].x.push(x);
            updatedPlotData[agentId].y.push(y);
          }
        });

        setPlotData(Object.values(updatedPlotData));
        console.log('plotData:', Object.values(updatedPlotData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Plot className="Plot"
        // style={{ position: 'fixed', width: '80%', height: '100%', float: 'right'}}
        data={plotData}
        layout={{
          title: 'Satellite Movement Visualization',
          yaxis: { scaleanchor: 'x' },
          autosize: true,
          showlegend: false,
        }}
      />

      <div className="Card">
        <h2>Info</h2>
        <p>A description of the graph and what it depicts.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  
          mollit anim id est laborum.</p>
      </div>

      <Sidebar/>
      
      </div>
  );
};

export default App;
