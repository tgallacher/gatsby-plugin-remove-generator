const { onPreRenderHTML } = require('../src/gatsby-ssr');

it('keeps all non <meta> components', () => {
  let result;
  // mock component objects
  const initialHeadComponents = [
    { type: 'link', props: { href: '/#' } },
    { type: 'script', props: { src: '/#' } },
    { type: 'style', props: { id: 'emotional-styling' } },
  ];
  const getHeadComponents = jest.fn(() => initialHeadComponents);
  const replaceHeadComponents = jest.fn(newComponents => {
    result = newComponents;
  });

  onPreRenderHTML({ getHeadComponents, replaceHeadComponents });
  expect(getHeadComponents).toHaveBeenCalled();
  expect(replaceHeadComponents).toHaveBeenCalled();
  expect(result).toEqual(initialHeadComponents);
});

it('keeps all non generator <meta> tags', () => {
  let result;
  // mock component objects
  const initialHeadComponents = [
    { type: 'meta', props: { charset: 'utf-8' } },
    {
      type: 'meta',
      props: { name: 'viewport', content: 'width=device-width' },
    },
  ];
  const getHeadComponents = jest.fn(() => initialHeadComponents);
  const replaceHeadComponents = jest.fn(newComponents => {
    result = newComponents;
  });

  onPreRenderHTML({ getHeadComponents, replaceHeadComponents });
  expect(getHeadComponents).toHaveBeenCalled();
  expect(replaceHeadComponents).toHaveBeenCalled();
  expect(result).toEqual(initialHeadComponents);
});

it('removes the generator <meta> tag', () => {
  let result;
  // mock component objects
  const initialHeadComponents = [
    { type: 'link', props: { href: '/#' } },
    {
      type: 'meta',
      props: { name: 'viewport', content: 'width=device-width' },
    },
  ];
  const getHeadComponents = jest.fn(() =>
    initialHeadComponents.concat({
      type: 'meta',
      props: { name: 'generator', content: 'Gatsby 1.2.3' },
    }),
  );
  const replaceHeadComponents = jest.fn(newComponents => {
    result = newComponents;
  });

  onPreRenderHTML({ getHeadComponents, replaceHeadComponents });
  expect(getHeadComponents).toHaveBeenCalled();
  expect(replaceHeadComponents).toHaveBeenCalled();
  expect(result).toEqual(initialHeadComponents);
});

it('removes the version string from the generator <meta> tag', () => {
  let result;
  const pluginOpts = {
    removeVersionOnly: true,
  };
  // mock component objects
  const initialHeadComponents = [
    { type: 'link', props: { href: '/#' } },
    {
      type: 'meta',
      props: { name: 'viewport', content: 'width=device-width' },
    },
  ];
  const getHeadComponents = jest.fn(() =>
    initialHeadComponents.concat({
      type: 'meta',
      props: { name: 'generator', content: 'Gatsby 1.2.3' },
    }),
  );
  const replaceHeadComponents = jest.fn(newComponents => {
    result = newComponents;
  });

  onPreRenderHTML({ getHeadComponents, replaceHeadComponents }, pluginOpts);
  expect(getHeadComponents).toHaveBeenCalled();
  expect(replaceHeadComponents).toHaveBeenCalled();
  expect(result).toEqual(
    initialHeadComponents.concat({
      type: 'meta',
      props: { name: 'generator', content: 'Gatsby' },
    }),
  );
});

it('supports customising the generator content value', () => {
  let result;
  const pluginOpts = {
    content: 'My custom generator',
  };
  // mock component objects
  const initialHeadComponents = [
    { type: 'link', props: { href: '/#' } },
    {
      type: 'meta',
      props: { name: 'viewport', content: 'width=device-width' },
    },
  ];
  const getHeadComponents = jest.fn(() =>
    initialHeadComponents.concat({
      type: 'meta',
      props: { name: 'generator', content: 'Gatsby 1.2.3' },
    }),
  );
  const replaceHeadComponents = jest.fn(newComponents => {
    result = newComponents;
  });

  onPreRenderHTML({ getHeadComponents, replaceHeadComponents }, pluginOpts);
  expect(getHeadComponents).toHaveBeenCalled();
  expect(replaceHeadComponents).toHaveBeenCalled();
  expect(result).toEqual(
    initialHeadComponents.concat({
      type: 'meta',
      props: { name: 'generator', content: pluginOpts.content },
    }),
  );
});

it('gives higher precedence to the content option', () => {
  let result;
  const pluginOpts = {
    removeVersionOnly: true,
    content: 'My custom generator',
  };
  // mock component objects
  const initialHeadComponents = [
    { type: 'link', props: { href: '/#' } },
    {
      type: 'meta',
      props: { name: 'viewport', content: 'width=device-width' },
    },
  ];
  const getHeadComponents = jest.fn(() =>
    initialHeadComponents.concat({
      type: 'meta',
      props: { name: 'generator', content: 'Gatsby 1.2.3' },
    }),
  );
  const replaceHeadComponents = jest.fn(newComponents => {
    result = newComponents;
  });

  onPreRenderHTML({ getHeadComponents, replaceHeadComponents }, pluginOpts);
  expect(getHeadComponents).toHaveBeenCalled();
  expect(replaceHeadComponents).toHaveBeenCalled();
  expect(result).toEqual(
    initialHeadComponents.concat({
      type: 'meta',
      props: { name: 'generator', content: pluginOpts.content },
    }),
  );
});
