export const initialState = {
  rooms: [],
};

//This is a selector
// export const getRoomsTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);

export const getRoomsTotal = (state) => state.rooms.length;

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_ROOM":
      console.log(`Rooms in reduce: ${state.rooms.length}`);
      return {
        ...state,
        rooms: [...state.rooms, action.item],
      };

    case "REMOVE_ROOM":
      const index = state.rooms.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newRooms = [...state.basket];
      if (index >= 0) {
        newRooms.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove rome (id: ${action.id}) because it's not in the cart`
        );
      }

      return {
        ...state,
        basket: newRooms,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
        username: action.username,
      };

    default:
      return state;
  }
};

export default reducer;
