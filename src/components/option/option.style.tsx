import styled from 'styled-components';

export const AutoCompleteDatalistOption = styled.li({
  fontSize: 20,
  marginRight: 8,
  marginBottom: 12,
  cursor: 'pointer',
});

export const AutoCompleteOptionImage = styled.img({
  width: 30,
  height: 30,
  borderRadius: '50%',
});
export const AutoCompleteOptionWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 12,

  ['& > div']: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const AutoCompleteOptionTitle = styled.span({
  fontSize: 16,
  color: '#494949',
});
