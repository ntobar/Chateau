import { createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import { RootState } from "../../store";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    rooms: [],
  },
  reducers: {
    addRoom: (state, action) => {
      console.log("addRoom executed");
      const room = action;
      state.rooms = [...state.rooms, room];
    },
    setRoomsDis: (state, action) => {
      return {
        ...state,
        value: action,
      };
    },

    // state.rooms = action;
    // console.log(`setRoomDis: ${state.chat.rooms.length}`);

    // setRouteEXAMPLE: (state, action) => {
    //   const pathname = action.payload;
    //   const arr = pathname.match(/\/terminal\/(.*)/);
    //   if (arr != null || pathname === "aa") {
    //     const copyTabs = [...state.tabs];
    //     if (arr != null) {
    //       const [p, name] = arr;
    //       copyTabs[state.activeTab].name = name;
    //     } else {
    //       copyTabs[state.activeTab].name = "home";
    //     }
    //     copyTabs[state.activeTab].pathname = pathname;
    //   }
    // },
  },
});

export const { addRoom, setRoomsDis } = chatSlice.actions;
export const selectRooms = (state: RootState) => state.chat.rooms;
// console.log({ chatSlice });
export default chatSlice.reducer;
// const five = 4;
// export default five;

//
// export const selectData = (state: RootState) =>
//   state.terminal.tabs[state.terminal.activeTab].data;
// export const activeTab = (state: RootState) => state.terminal.activeTab;
// export const displayTabs = (state: RootState) =>
//   state.terminal.tabs.map((d) => ({ name: d.name, pathname: d.pathname }));
