import styled from 'styled-components'

export default {
  components: {
    TagList,
    Heading,
    Cross
  },
  styles: theme
}


export const TagList = styled('ul')`
  list-style: none;
  line-height: 1;
  font-size: 44px;

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
    content: "${props => props.text || '✗'}";
  }
`

export const theme = {
  h2: {
    fontWeight: 300,
  },
  h3: {
    fontWeight: 300,
  },
}
