import React, {useContext} from 'react';
import ReactFlow, {EdgeLabelRenderer} from 'reactflow';
import {MinitabContext} from '../../Context/MinitabContext';

import 'reactflow/dist/style.css';


function BaseSGraph() {
    const { minitabData} = useContext(MinitabContext);

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
        position: { x: 10, y: 24 + 80*(i-1) }, 
        data: {
          label: lettre,
        },
        style: {
            boxSizing: 'border-box',
            color: '#005162',
            fontSize: '14px',
            borderRadius: '24px',
            width: '48px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // background: '#E5EEF5',
            // border: '1px solid #00BCA9',
            background: '#ffffff',
            border: 'none',
            fontFamily: 'Orbitron',
            fontWeight: '600', 
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 10px 0 rgba(0, 0, 0, 0.08)'
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
        position: { x: 260, y: 24 + 80*(i-1)}, 
        data: { 
          label: i
        },
        style: {
            boxSizing: 'border-box',
            color: '#005162',
            fontSize: '14px',
            borderRadius: '24px',
            width: '48px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // background: '#E5EEF5',
            // border: '1px solid #00BCA9',
            background: '#ffffff',
            border: 'none',
            fontFamily: 'Orbitron',
            fontWeight: '600',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 10px 0 rgba(0, 0, 0, 0.08)',
        }
      },
    )
  }

  const initialEdges = [];
  const nodes = Object.keys(minitabData.baseSolution);
  for(let i = 0; i < nodes.length; i++){
    initialEdges.push(
      { 
        id: nodes[i],
        source: nodes[i].slice(0,2), 
        target: nodes[i].slice(2,4), 
        // label: minitabData.baseSolution[nodes[i]],
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
    <div className="graph" style={{width: '360px', height:'540px'}}>
      <ReactFlow nodes={initialNodes} edges = {initialEdges}>
      {/* <Background color="grey" variant='dots' /> */}
        <EdgeLabelRenderer/>
      </ReactFlow>
    </div>
  );
}

export default BaseSGraph;

