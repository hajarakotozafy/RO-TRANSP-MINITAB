import React, {useContext} from 'react';
import ReactFlow, {EdgeLabelRenderer, Background} from 'reactflow';
import {MinitabContext} from '../../Context/MinitabContext';

import 'reactflow/dist/style.css';


function FinalSGraph() {
    const { minitabData, dispatch} = useContext(MinitabContext);

  let initialNodes = [];
  let lettre = 'A';
  let y = 10
//   let i = 1;
  for(let i = 1; i <= parseInt(minitabData.nbLigne); i++){
    initialNodes.push(
      { 
        id: 'a'+i, 
        type: 'input',
        sourcePosition: 'right',
        targetPosition: 'left', 
        position: { x: 10, y: 10 + 60*(i-1) }, 
        data: {
          label: lettre,
        },
        style: {
            boxSizing: 'border-box',
            color: '#005162',
            fontSize: '14px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#E5EEF5',
            border: '2px solid #00BCA9',
        }
      }
    )
    lettre = String.fromCharCode(lettre.charCodeAt(0) + 1);
  }

  for(let i = 1; i <= parseInt(minitabData.nbColonne); i++){
    initialNodes.push(
      { 
        id: 'b'+i, 
        sourcePosition: 'right', 
        type: 'output', 
        targetPosition: 'left', 
        position: { x: 260, y: 10 + 60*(i-1)}, 
        data: { 
          label: i
        },
        style: {
            boxSizing: 'border-box',
            color: '#005162',
            fontSize: '14px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#E5EEF5',
            border: '2px solid #00BCA9',
        }
      },
    )
  }

  const initialEdges = [];
  const nodes = Object.keys(minitabData.finalSolution);
  for(let i = 0; i < nodes.length; i++){
    initialEdges.push(
      { 
        id: nodes[i],
        source: nodes[i].slice(0,2), 
        target: nodes[i].slice(2,4), 
        label: minitabData.finalSolution[nodes[i]],
        type: 'straight',
        labelBgRadius: '50%',
        labelBgColor: 'red',
        color: 'white',
        markerEnd: {type: 'arrowclosed'},
        style: {
          background: '#ffffff',
        }
      }
    )
  }
  return (
    <div className="graph" style={{width: '310px', height:'440px'}}>
      <ReactFlow nodes={initialNodes} edges = {initialEdges}>
      {/* <Background color="grey" variant='dots' /> */}
        <EdgeLabelRenderer/>
      </ReactFlow>
    </div>
  );
}

export default FinalSGraph;

