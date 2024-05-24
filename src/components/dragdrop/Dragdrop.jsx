import React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';

const initialElements = [
  { id: '1', type: 'input', data: { label: 'Start Node' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
];

const Dragdrop = () => {
  const [elements, setElements] = React.useState(initialElements);
  
  const onDragEnd = (result) => {
    // Handle drag and drop logic
  };

  const onElementsRemove = (elementsToRemove) => 
    setElements((els) => removeElements(elementsToRemove, els));

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <CssBaseline />
      <Container>
        <Box mt={2}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <Draggable draggableId="draggable-1" index={0}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      Draggable Item 1
                    </div>
                  )}
                </Draggable>
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Box mt={4}>
            <ReactFlow 
              elements={elements} 
              onElementsRemove={onElementsRemove}
              onConnect={onConnect}
              style={{ width: '100%', height: 500 }}
            >
              <MiniMap />
              <Controls />
              <Background />
            </ReactFlow>
          </Box>
        </Box>
      </Container>
    </DragDropContext>
  );
}

export default Dragdrop