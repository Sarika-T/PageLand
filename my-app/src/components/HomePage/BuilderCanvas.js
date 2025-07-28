import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComponent, reorderComponents, undo, redo } from '../Redux/Action';
import ComponentLibrary from './ComponentLibrary';


export default function BuilderCanvas() {
  const layout = useSelector((s) => s.layout);
  const dispatch = useDispatch();

  const handleAdd = (type) => {
    dispatch(addComponent({ id: Date.now(), type, data: {} }));
  };

  const onDragStart = (e, idx) => e.dataTransfer.setData('dragIdx', idx);
  const onDrop = (e, newIdx) => {
    const dragIdx = e.dataTransfer.getData('dragIdx');
    const newLayout = [...layout];
    const [item] = newLayout.splice(dragIdx, 1);
    newLayout.splice(newIdx, 0, item);
    dispatch(reorderComponents(newLayout));
  };

  return (
    <div className="builder">
      <ComponentLibrary onAdd={handleAdd} />
      <div className="canvas">
        {layout.map((blk, idx) => (
          <div
            key={blk.id}
            className="canvas-item"
            draggable
            onDragStart={(e) => onDragStart(e, idx)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, idx)}
          >
            {blk.type}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={() => dispatch(undo())}>Undo</button>
        <button onClick={() => dispatch(redo())}>Redo</button>
      </div>
    </div>
  );
};
