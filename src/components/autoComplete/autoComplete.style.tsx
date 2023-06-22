import styled from 'styled-components';

export const AutoCompleteWrapper = styled.div({
  width: '100%',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});
export const AutoCompleteInput = styled.input({
  height: 40,

  border: '1px solid #00b4d8',
  boxShadow: '0px 0px 2px #00b4d8',
  borderRadius: 4,
  width: '100%',
  padding: '0px 30px 0 10px',
  fontSize: 14,

  ['&:focus']: {
    outline: 'none',
    border: '1px solid #0077b6',
  },
});
export const AutoCompleteSearchButton = styled.button({
  all: 'unset',
  position: 'absolute',
  right: 8,

  display: 'flex',
  cursor: 'pointer',
  ['& svg']: {
    color: '#5d5d5d',
  },
});
export const AutoCompleteLabel = styled.label({
  fontSize: 20,
  marginRight: 8,
});
export const AutoCompleteDatalistOption = styled.li({
  fontSize: 20,
  marginRight: 8,
  marginBottom: 12,
  cursor: 'pointer',
});
export const AutoCompleteDatalist = styled.ul({
  width: '95%',
  backgroundColor: '#fff',
  boxShadow: '0px 0px 2px #0077b6',

  position: 'absolute',
  top: 42,
  borderRadius: 4,
  padding: 8,
  marginTop: 0,
  overflow: 'hidden',

  maxHeight: 200,
  overflowY: 'scroll',
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
