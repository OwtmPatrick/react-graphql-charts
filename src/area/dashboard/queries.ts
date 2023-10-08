import { gql } from '@apollo/client';

export const GET_CHARTS = gql`
  query getChart {
    dashboard {
      scenarios {
        active
        inactive
        completed
      }

      lists {
        active
        inactive
        completed
      }

      dialogs {
        active
        inactive
        completed
      }
    }
  }
`;
