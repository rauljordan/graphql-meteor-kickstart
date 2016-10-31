import { useDeps, composeAll } from 'mantra-core';
import Layout from '../components/layout';

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  useDeps(depsMapper)
)(Layout);
