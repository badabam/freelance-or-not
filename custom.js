import styled from 'styled-components/macro'

export const TagList = styled.ul`
  list-style: none;
  line-height: 1;

  li {
    display: inline-block;
    background: black;
    color: white;
    margin: 12px;
    padding: 4px 12px;
    border-radius: 8px;
  }
`

export const Heading = styled.h1`
  color: hotpink;
`

export const Cross = styled.span`
  color: crimson;
  &:after {
    content: "${(props) => props.text || '✗'}";
  }
`

export const Marked = styled.code`
  background: black;
  color: #fd0;
  padding: 0 12px;
`

export default {
  styles: {
    Slide: {
      fontSize: '2.5em',
    },
    h3: {
      fontWeight: 300,
    },
    inlineCode: {
      background: 'black',
      color: '#fd0',
    },
  },
}
