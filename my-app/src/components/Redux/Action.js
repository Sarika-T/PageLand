export const addComponent = (component) => ({ type: 'ADD_COMPONENT', payload: component });
export const reorderComponents = (layout) => ({ type: 'REORDER_COMPONENTS', payload: layout });
export const undo = () => ({ type: 'UNDO' });
export const redo = () => ({ type: 'REDO' });
