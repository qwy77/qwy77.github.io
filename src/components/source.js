import React from 'react'
import styled from 'styled-components'
import CodeIcon from '../icons/code'

const ShowCode = styled.a`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  :hover .code {
    fill: #fff;
  }
  :after {
    display: none;
  }
`

const Source = () => (
  <ShowCode
    href="https://github.com/dingyi/ding.one"
    target="_blank"
    rel="noreferrer"
    aria-label="Fork it"
  >
    <CodeIcon />
  </ShowCode>
)

export default Source