import React from 'react';
import { css as EmotionCSS } from 'react-emotion';

export const Box = ({
  component = 'div',
  className,
  css,
  props,
  children,
  ...rest
}) => {
  return React.createElement(
    component,
    {
      className: EmotionCSS([{ ...css, ...rest }, className]),
      ...props,
    },
    children
  );
};

export const Block = p => <Box display="block" {...p} />;

Block.displayName = 'Block';

export const Inline = p => <Box display="Inline" {...p} />;

Inline.displayName = 'Inline';

export const InlineBlock = p => <Box display="inline-block" {...p} />;

InlineBlock.displayName = 'InlineBlock';

export const Flex = p => <Box display="flex" {...p} />;

Flex.displayName = 'Flex';

export const InlineFlex = p => <Box display="inline-flex" {...p} />;

InlineFlex.displayName = 'InlineFlex';

export const Grid = p => <Box display="grid" {...p} />;

Grid.displayName = 'Grid';

export const Row = p => <Flex flexDirection="row" {...p} />;

Row.displayName = 'Row';

export const Col = p => <Flex flexDirection="column" {...p} />;

Col.displayName = 'Col';
