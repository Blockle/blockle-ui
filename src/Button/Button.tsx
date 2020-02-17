import React from 'react';
import { cx } from 'cx';

import './button.css';
import { Ripple } from '../Ripple';
import { Icon, IconNames } from '../Icon';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  flat?: boolean;
  icon?: IconNames;
  inline?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  secondary?: boolean;
  type?: 'button' | 'submit';
};

const Button = ({
  children,
  disabled,
  flat,
  icon,
  inline,
  onClick,
  secondary,
  type = 'button',
}: Props) => (
  <Ripple
    renderAs="button"
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={cx(
      flat ? 'FlatButton' : 'Button',
      inline && 'is-inline',
      secondary && 'is-secondary',
      disabled && 'is-disabled',
      icon && 'has-icon',
    )}
  >
    {icon && <Icon name={icon} label="" size="small" />}

    {children}
  </Ripple>
);

export default Button;
