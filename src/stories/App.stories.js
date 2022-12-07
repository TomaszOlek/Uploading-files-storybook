import React from "react";
import App from "../App";

export default { 
  title: 'App',
  parameters: {
    layout: 'fullscreen'
  },
};

export const app = () => {
  return <App data={{}} />;
};
app.story = {
  name: 'App prototype',
};
