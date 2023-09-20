import React from 'react';
import styled from "styled-components";

type -sc-__a__PropsType = {
    path: string
    text: string
}

function -sc-__a__(props:XXX) {
    return (
        <Styled-sc-__a__ href={props.YYY}>
            {props.ZZZ}
        </Styled-sc-__a__>
    );
}

export default -sc-__a__;

const Styled-sc-__a__ = styled.a`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  white-space: nowrap;
  color: #2182d9;
`
// Посмотрите внимательно на код. Что должно быть вместо XXX, YYY и ZZZ, чтобы код работал корректно?
// ❗ В ответе укажите значения через пробел: XXX YYY ZZZ