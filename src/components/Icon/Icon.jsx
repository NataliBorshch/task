import React from 'react';
import IcoMoon from 'react-icomoon';
const iconSet = require('./selection.json');

//done

export default function Icon({ ...props }) {
  return <IcoMoon iconSet={iconSet} {...props} />;
}
