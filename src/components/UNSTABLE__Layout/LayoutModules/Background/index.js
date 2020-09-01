/**
 * @file Background.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import React from 'react';

import { layoutModuleNamespace } from '../LayoutModule';

export default WrappedComponent => {
  const WithBackground = ({ className, ...other }) => (
    <WrappedComponent
      className={classnames(`${layoutModuleNamespace}--background`, className)}
      {...other}
    />
  );

  const { displayName, name } = WrappedComponent;

  WithBackground.displayName = `WithBackground(${displayName ||
    name ||
    'Component'})`;

  return WithBackground;
};