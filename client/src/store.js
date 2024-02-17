import { configureStore } from '@reduxjs/toolkit';
import { reducer as rootReducer } from './utils/reducer'; // * eventually adapt to one reducer?

const store = configureStore({
  reducer: rootReducer,
});

export default store;