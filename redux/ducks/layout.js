const TOGGLE_SIDEBAR = 'LAYOUT//TOGGLE_SIDEBAR';
const TOGGLE_NOTIFICATIONS = 'LAYOUT//TOGGLE_NOTIFICATIONS';
const TOGGLE_BURGER = 'LAYOUT//TOGGLE_BURGER';

const WINDOW_WIDTH = 'SIZE//WINDOW_WIDTH';

const initialState = {
  sidebar: false,
  notifications: false,
  burger: false,
  windowWidth: 1920
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: !state.sidebar
      };
    case TOGGLE_NOTIFICATIONS:
      return {
        ...state,
        notifications: !state.notifications
      };
    case TOGGLE_BURGER:
      return {
        ...state,
        burger: !state.burger
      };
    case WINDOW_WIDTH:
      return {
        ...state,
        windowWidth: payload.width
      };
    default:
      return state;
  }
}

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});

export const toggleNotifications = () => ({
  type: TOGGLE_NOTIFICATIONS
});

export const toggleBurgerMenu = () => ({
  type: TOGGLE_BURGER
});

export const setWindowSize = width => {
  return {
    type: WINDOW_WIDTH,
    payload: {
      width
    }
  };
};

export const getSidebar = state => state.layout && state.layout.sidebar;

export const getNotifications = state =>
  state.layout && state.layout.notifications;

export const getWindowSize = state => state.layout && state.layout.windowWidth;

export const getBurgerMenu = state => state.layout && state.layout.burger;

export const hasOverlay = state => getBurgerMenu(state);
