import styled, { css } from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.size('42px')};
  ${mixins.flexCenter()};
  border-radius: 50%;
  background: ${colors.B1};
  position: fixed;
  right: 32px;
  bottom: 32px;

  svg {
    ${mixins.size('26px')};
  }
`;

export const PopoverContainer = styled.div`
  max-width: 160px;

  .anticon {
    color: ${colors.AntD.warning};
    margin-right: 0.2rem;
  }

  ul {
    ${mixins.resetList()};

    li {
      margin-bottom: 0.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ${(props) =>
      props.isDisabled &&
      css`
        h3,
        p {
          color: ${colors.C4};
        }

        a {
          display: block;
          cursor: not-allowed;
        }
      `}
  }

  h3,
  p {
    ${mixins.reset()};
  }

  h3 {
    ${mixins.typography('p2')};
    color: ${colors.F1};
  }

  p {
    ${mixins.typography('p3')};
    color: ${colors.C4};
  }
`;

export const PopoverDesc = styled.div`
  ${mixins.typography('p3')};
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${colors.T2};

  a,
  span {
    &,
    &:hover {
      cursor: pointer;
      color: ${colors.B1};
    }
  }
`;