import React from 'react';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const defaultInline = (type, node) => (
  <span>
    type: {type} id: {node.data.target.sys.id}
  </span>
);

const defaultNodeRenderers = {
  [BLOCKS.PARAGRAPH]: (node, next) => <p>{next(node.content)}</p>,
  [BLOCKS.HEADING_1]: (node, next) => <h1>{next(node.content)}</h1>,
  [BLOCKS.HEADING_2]: (node, next) => <h2>{next(node.content)}</h2>,
  [BLOCKS.HEADING_3]: (node, next) => <h3>{next(node.content)}</h3>,
  [BLOCKS.HEADING_4]: (node, next) => <h4>{next(node.content)}</h4>,
  [BLOCKS.HEADING_5]: (node, next) => <h5>{next(node.content)}</h5>,
  [BLOCKS.HEADING_6]: (node, next) => <h6>{next(node.content)}</h6>,
  [BLOCKS.EMBEDDED_ENTRY]: (node, next) => <div>{next(node.content)}</div>,
  [BLOCKS.UL_LIST]: (node, next) => <ul>{next(node.content)}</ul>,
  [BLOCKS.OL_LIST]: (node, next) => <ol>{next(node.content)}</ol>,
  [BLOCKS.LIST_ITEM]: (node, next) => <li>{next(node.content)}</li>,
  [BLOCKS.QUOTE]: (node, next) => <blockquote>{next(node.content)}</blockquote>,
  [BLOCKS.HR]: () => <hr />,
  [INLINES.ASSET_HYPERLINK]: (node) =>
    defaultInline(INLINES.ASSET_HYPERLINK, node),
  [INLINES.ENTRY_HYPERLINK]: (node) =>
    defaultInline(INLINES.ENTRY_HYPERLINK, node),
  [INLINES.EMBEDDED_ENTRY]: (node) =>
    defaultInline(INLINES.EMBEDDED_ENTRY, node),
  [INLINES.HYPERLINK]: (node, next) => (
    <a href={node.data.uri}>{next(node.content)}</a>
  ),
};

const defaultMarkRenderers = {
  [MARKS.BOLD]: (text) => <b>{text}</b>,
  [MARKS.ITALIC]: (text) => <i>{text}</i>,
  [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
  [MARKS.CODE]: (text) => <code>{text}</code>,
};

const options = {
  renderMark: {
    ...defaultMarkRenderers,
  },
  renderNode: {
    ...defaultNodeRenderers,
  },
};

const Renderer = ({ json }) => documentToReactComponents(json);

export default Renderer;
