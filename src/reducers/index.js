import { combineReducers } from 'redux';

import presence from './presence';
import messaging from './messaging';

const HarmonyReducer = combineReducers({
  presence,
  messaging,
});

export default HarmonyReducer;
