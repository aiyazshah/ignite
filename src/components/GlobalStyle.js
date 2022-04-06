import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Abril Fatface', cursive;
    width :100%;
   }
   h1{
       color: #696969;
   }
   h3{
       color: #696969;
   }
   html{
       &::-webkit-scrollbar{
           width: .5rem;
         
       }
       &::-webkit-scrollbar-thumb{
          background-color: gray;
          height: 12rem;    
       }
   }
`
export default GlobalStyles;