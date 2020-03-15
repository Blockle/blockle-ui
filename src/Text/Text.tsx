import { Box } from 'Box';
import React from 'react';
import { BlockleBlocks } from '../useStyles';
import './text.css';

interface Props extends Pick<BlockleBlocks, 'textAlign' | 'fontSize' | 'fontWeight' | 'color'> {
  component?: 'span' | 'p' | 'strong';
  children: React.ReactNode;
}

const Text = ({
  component = 'span',
  children,
  textAlign,
  fontSize = 'medium',
  fontWeight,
  color = 'light',
}: Props) => {
  return (
    <Box
      component={component}
      textAlign={textAlign}
      fontSize={fontSize}
      fontWeight={fontWeight}
      display="block"
      className="Text"
      color={color}
    >
      {children}
    </Box>
  );
};

export default Text;
