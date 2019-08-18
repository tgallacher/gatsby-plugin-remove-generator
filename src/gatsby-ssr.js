exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents().filter(
    ({ type, props: { name } }) => !(type === 'meta' && name === 'generator'),
  );

  replaceHeadComponents(headComponents);
};
