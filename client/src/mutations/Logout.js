import { useMutation, gql } from '@apollo/client';

export default gql`
  mutation {
    logout {
      id
      email
    }
  }
`;
