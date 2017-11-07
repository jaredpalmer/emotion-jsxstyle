import React from 'react';
import { css as EmotionCSS } from 'react-emotion';

import { jsxstyleFactory } from './jsxstyleFactory';

const cx = (css, styles, className) =>
  EmotionCSS([{ ...css, ...styles }, className]);

const jsxstyle = jsxstyleFactory(cx);
export const Box = jsxstyle.Box;
export const Flex = jsxstyle.Flex;
export const InlineFlex = jsxstyle.InlineFlex;
export const Inline = jsxstyle.Inline;
export const InlineBlock = jsxstyle.nlineBlock;
export const Block = jsxstyle.Block;
export const Grid = jsxstyle.Grid;
export const Col = jsxstyle.Col;
export const Row = jsxstyle.Row;
