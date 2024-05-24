import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
 
import 'reactflow/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Lin' } },
  { id: '2', position: { x: 100, y: 100 }, data: { label: 'Stop saying bad words' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const Dragdrop2 = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const proOptions = { hideAttribution: true };

  return (
    <div className='h-screen w-screen'>
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        proOptions={proOptions}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background 
          variant="dots" gap={12} size={1}
        />
      </ReactFlow>

    </div>
  );
};

export default Dragdrop2;
