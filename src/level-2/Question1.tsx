import React from 'react';
import styled, {css} from "styled-components";
import arrowImg from './../images/arrow.svg'

type -sc-__a__PropsType = {
    __a__Type?: 'primary' | 'secondary',
    arrow?: boolean,
    disabled?: boolean,
    children: any,
}

function -sc-__a__(props:XXX) {
    const {children, __a__Type, disabled, arrow} = props;
    return (
        <Styled-sc-__a__ __a__Type={__a__Type} disabled={disabled} >
            {children}
            {arrow && <img src={arrowImg} alt={'arrow image'}/>}
        </Styled-sc-__a__>
    );
}

export default -sc-__a__;

const Styled-sc-__a__ = styled.button<XXX>`
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  
  
  ${props => props.YYY === 'primary' && css`
    color: #ffffff;
    background-color: #2182d9;
  `}
  
  ${props => props.YYY === 'secondary' && css`
    background-color: transparent;
    color: #2182d9;
    border: 2px solid #2182d9;
    &:hover {
      background-color: #2182d9;
      color: #ffffff;
    }
  `}
  
  &:disabled {
    background: #998C00; 
    color: var(--neutralDark100);

    &:hover {
      cursor: default;
    }
  }
  
`
// Посмотрите внимательно на код. Что должно быть вместо XXX и YYY, чтобы код работал корректно? В ответе укажите значения через пробел: XXX YYY