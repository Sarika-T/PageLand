const initialState = { layout: [], history: [], future: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COMPONENT':
      return {
        layout: [...state.layout, action.payload],
        history: [...state.history, state.layout],
        future: []
      };
    case 'REORDER_COMPONENTS':
      return {
        layout: action.payload,
        history: [...state.history, state.layout],
        future: []
      };
    case 'UNDO': {
      const prev = state.history[state.history.length - 1] || [];
      return {
        layout: prev,
        history: state.history.slice(0, -1),
        future: [state.layout, ...state.future]
      };
    }
    case 'REDO': {
      const [next, ...rest] = state.future;
      return {
        layout: next || state.layout,
        history: [...state.history, state.layout],
        future: rest
      };
    }
    case 'RESET_LAYOUT':
      return initialState;
    default:
      return state;
  }
}
