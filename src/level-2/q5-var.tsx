import styled from "styled-components";


function -sc-__a__() {
  return (
      <Styled-sc-__b__>
        <Styled-sc-__c__/>
        <Styled-sc-__c__/>
        <Styled-sc-__c__/>
      </Styled-sc-__b__>
        
    )
}

export default -sc-__a__;

const Styled-sc-__b__ = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #6aade1;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 20px
`

const Styled-sc-__c__ = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;

  &:XXX {
    YYY
  }
`

// Посмотрите внимательно на код. В родительском элементе есть 3 дочерних элемента определенной ширины. Что должно быть вместо XXX и YYY, чтобы последний дочерний элемент занял все свободное пространство по горизонтали?

/* Ответ: */
    /* flex-grow: 1 */
    /* flex: 1 */
    /* flex-grow: 1; */
    /* flex: 1; */

     /* flex-grow:1 */
    /* flex:1 */
     /* flex-grow:1; */
    /* flex:1; */