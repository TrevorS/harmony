import { combineReducers } from 'redux';

import websocket from './websocket';
import presence from './presence';
import messaging from './messaging';

const HarmonyReducer = combineReducers({
  websocket,
  presence,
  messaging,
});

export default HarmonyReducer;
