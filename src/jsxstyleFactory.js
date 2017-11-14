import React from 'react';
import cx from 'classcat';

export const jsxstyleFactory = fn => {
  const Box = ({
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
        className: cx([fn([css, rest]), className]),
        ...props,
      },
      children
    );
  };

  Box.displayName = 'Box';

  const Block = p => <Box display="block" {...p} />;

  Block.displayName = 'Block';

  const Inline = p => <Box display="Inline" {...p} />;

  Inline.displayName = 'Inline';

  const InlineBlock = p => <Box display="inline-block" {...p} />;

  InlineBlock.displayName = 'InlineBlock';

  const Flex = p => <Box display="flex" {...p} />;

  Flex.displayName = 'Flex';

  const InlineFlex = p => <Box display="inline-flex" {...p} />;

  InlineFlex.displayName = 'InlineFlex';

  const Grid = p => <Box display="grid" {...p} />;

  Grid.displayName = 'Grid';

  const Row = p => <Flex flexDirection="row" {...p} />;

  Row.displayName = 'Row';

  const Col = p => <Flex flexDirection="column" {...p} />;

  Col.displayName = 'Col';

  return {
    Box,
    Flex,
    InlineFlex,
    Inline,
    InlineBlock,
    Block,
    Grid,
    Col,
    Row,
  };
};
