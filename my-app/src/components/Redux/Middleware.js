let timer;
const autosave = (store) => (next) => (action) => {
  const result = next(action);
  if (['ADD_COMPONENT','REORDER_COMPONENTS','UNDO','REDO'].includes(action.type)) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('Auto‑saving layout:', JSON.stringify(store.getState().layout));
    }, 2000);
  }
  return result;
};
export default autosave;
