const isGeneratorTag = (type, name) => type === 'meta' && name === 'generator';

/**
 *
 * @param apiContext Context provided by Gatsby
 * @param pluginOpts User supplied plugin options
 * @see https://www.gatsbyjs.org/docs/ssr-apis/#onPreRenderHTML
 */
exports.onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  { removeVersionOnly } = {},
) => {
  const headComponents = getHeadComponents()
    .map(c =>
      isGeneratorTag(c.type, c.props.name)
        ? Object.assign({}, c, {
            props: Object.assign({}, c.props, { content: 'Gatsby' }),
          })
        : c,
    )
    .filter(({ type, props: { name, content } }) =>
      Boolean(removeVersionOnly) ? true : !isGeneratorTag(type, name),
    );

  replaceHeadComponents(headComponents);
};
