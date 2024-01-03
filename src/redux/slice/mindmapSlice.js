import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nodes: [
      {
        id: "0",
        position: {
          x: 51,
          y: 45.5
        },
        data: {
          label: "My Mindmap"
        },
        origin: [
          0.5,
          0
        ],
        type: "textUpdater",
        width: 150,
        height: 40,
        selected: false,
        positionAbsolute: {
          x: 51,
          y: 45.5
        },
        dragging: false
      },
      {
        id: "1",
        position: {
          x: -23.25,
          y: 116
        },
        data: {
          label: "Text 1"
        },
        origin: [
          0.5,
          0
        ],
        type: "textUpdater",
        width: 150,
        height: 40
      }
    ],
    edges: [
      {
        id: "1",
        source: "0",
        target: "1"
      }
    ]
};

export const mindmapSlice = createSlice({
  name: "mindmap",
  initialState,
  reducers: {
    // increment: (state, action) => {
    //   state.count += action.payload;
    // },
    // decrement: (state, action) => {
    //   state.count -= action.payload;
    // },
  },
});
