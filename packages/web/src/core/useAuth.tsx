import { useEffect } from 'react';
import { graphql, readInlineData } from 'react-relay';

import { useHistory } from '@world/route';

import { useAuth_user } from './__generated__/useAuth_user.graphql';

const useAuthFragment = graphql`
  fragment useAuth_user on User @inline {
    id
    name
  }
`;

export const useAuth = (userRef: useAuth_user) => {
  const history = useHistory();

  const user = readInlineData<useAuth_user>(useAuthFragment, userRef);

  const isAuthenticated = !!user;

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/auth/login');
    }
  });

  return isAuthenticated;
};
