import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import './App.css';


function App() {
  const urlRoot = 'https://quickchart.io/chart?c='
  const [code, setCode] = useState(
    `{
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            data: [-31, -70, -30, -33, -9, 14, -41],
          },
          {
            label: 'Dataset 2',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
            data: [73, 41, 29, 61, -65, 59, 38],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Bar Chart',
        },
        plugins: {
          datalabels: {
            anchor: 'center',
            align: 'center',
            color: '#666',
            font: {
              weight: 'normal',
            },
          },
        },
      },
    }
    `
  );
  return (
    <div className="wrapper">
      <div className="flex-1">
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => highlight(code, languages.js)}
          padding={30}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
          }}
        />
      </div>
      <div className="flex-2">
        <img width="550px" src={urlRoot + encodeURIComponent(code.replace(/\s+/g, ''))} />
      </div>
    </div>
  );
}

export default App;
