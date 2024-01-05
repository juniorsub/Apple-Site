import styled from "styled-components";
interface ImageOptionsProductAplleType {
    widthImage?: string;
    marginTop?: string;
}

interface SpanNewOptionProductAppleType{
    marginTop?: string;
    type?: string;
    fontSize?: string;
}

interface PurchaseButtonType {
    background: string;
    color: string;
    underline?: boolean;
    marginRight?: string;
    marginTop?: string;
}

interface OptionTypeInterface{
    selected: boolean;
    right?: boolean;
    width: string;

}

interface ColorOptionMacType{
    background: string; 
}

export const Header = styled.div`
    height: 48px;
    max-height: 44px;
    width: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 9999;
    top: 0;
    right: 0;
    left: 0; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 35px; //coloca uma distancia só entre os itens
`;

export const ItemHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center; 
`;

export const TextHeader = styled.div`
    font-size: 13px;
    color: #f5f5f7;
    opacity: .8;
    font-family: 'MyriadProLight';
    cursor: pointer; 
    //letter-spacing: -0.1em; espaçamento das letras
`;

export const OptionsProductsApple = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: white;
    gap: 30px;
`;

export const ItemOptionsProductApple = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

export const ImageOptionsProductAplle = styled.img<ImageOptionsProductAplleType>`
    width: ${(props) => props.widthImage ? props.widthImage : '35px'};
    margin-top: ${(props) => props.marginTop ? props.marginTop : '0px'};

`;

export const TextOptionsProductAplle = styled.a`
    font-family: 'MyriadProRegular';
    color: rgba(0,0,0,0.8);
    font-size: 12px;
    justify-content: center;
`;

export const SpanNewOptionProductApple = styled.span<SpanNewOptionProductAppleType>`
    font-family: 'MyriadProRegular';
    color: #f56300;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.type === 'span-new-option' ? '400' : 'bold'};
    position: ${(props) => props.type === 'span-new-option' ? 'absolute' : 'relative'}; // vamos receber as props deste componente, e a gente vai fazer uma verificação: se props.type  for igual a span-new-option eu vou deicar como absolute, caso contrário será relative.
    margin-top: ${(props) => props.marginTop}; //rever minuto 15:25 aula 04.

`;

export const AppleBuyBlock = styled.div`
    height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #f5f6f7;
    margin-top: 20px;
    color: rgba(0,0,0,0.8);
    letter-spacing: -.016em; //espaçamento das letras

p {
    font-family: 'MyriadProRegular';
    font-size: 14px;
    font-weight: 400;

a {
    color: #06c;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}
}
`;

export const BannerArea = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;

  h1 {
    font-size: 56px;
    color: #1d1d1f;
    font-family: 'MyriadProRegular';
    font-weight: bold;
    margin-top: 2px;
  }

  h2 {
    font-size: 28px;
    color: #1d1d1f;
    font-family: 'MyriadProRegular';
    font-weight: bold;
    margin-top: -40px;
  }

  p{

    font-size: 17px;
    color: #1d1d1f;
    font-family: 'MyriadProLight';
    margin-top: -2px;
    font-weight: 600;
  }
`;

export const BannerAreaButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 5px;
`;

export const PurchaseButton = styled.button<PurchaseButtonType>`
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    margin-right: ${(props) => props.marginRight};
    cursor: pointer;
    height: 36px;
    width: 90px;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    font-size: 17px;
    line-height: 1.17648;
    font-weight: 300;
    font-family: 'MyriadProLight';
    border-radius: 980px;
    padding-left: 16px;
    padding-right: 20px;
    padding-top: 8px; 
    padding-bottom: 8px; 
    border: none;

    &:hover {
        text-decoration: ${(props) => props.underline ? 'underline' : 'none'} 
}
    `;

export const BannerMacBookPro = styled.div`
    height: 610px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 54px 0;

  h1 {
    font-size: 56px;
    color: white;
    font-family: 'MyriadProRegular';
    font-weight: bold;
    margin-top: 2px;
  }

  h2 {
    font-size: 28px;
    color: white;
    font-family: 'MyriadProRegular';
    font-weight: bold;
    margin-top: -40px;
  }

  p{

    font-size: 17px;
    color: white;
    font-family: 'MyriadProLight';
    margin-top: -2px;
    font-weight: 600;
  }
`;

export const SelectMac = styled.div`
    padding: 80px 30px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
h1{
    font-size: 40px;
    color: black;
    font-family: 'MyriadProRegular';
    font-weight: bold;
    margin-top: 30px;    
}
`

export const OptionsType = styled.div`
    height: 40px;
    width: 250px;
    border-bottom: 2px solid #d2d2d7;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0px;
    margin: 0px;
    margin-top: 30px
`;

export const OptionType = styled.div<OptionTypeInterface>`
    color: ${(props) => props.selected ? '#1D1D1F' : '#6e6e73'};
    font-family: 'MyriadProRegular';
    font-size: 17px;
    width: ${(props) => props.width}; 
    text-align: right;
    height: 100%; 
    border-bottom: 2px solid ${(props) => props.selected ? '#1D1D1F' : '#d2d2d7'}; 
    cursor: pointer;
    text-align: ${(props) => props.right ? 'right' : 'left'};
`;

export const OptionsMac = styled.div` //tive que criar esta div para alinhar de forma row meus itens que estavam herdando da div SelectMac como column.
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: -15px
`;

export const OptionMac = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 80px;

    h1{
        font-size: 23px;
        text-align: center; //tive que dar dois <br/> no título para ele subir a margin e ficar de acordo com o macbook pro 13.
        margin-top: 1px;
        font-family: 'MyriadProRegular';
    }

h2{
    font-size: 14px;
    text-align: center;
    margin-top: -45px;
    font-family: 'MyriadProRegular';
    font-weight: 300;
    }

h3{
    margin-top: -38px;
  }

p{
    font-size: 14px;
    text-align: center;
    margin-top: 25px;
    font-family: 'MyriadProRegular';
    font-weight: 300;
}
hr{
    height: 40px;
    width: 200px;
    border-bottom: 1px solid #d2d2d7;
    border-top: none;
    border-right: none;
    border-left: none;
    display: flex;
    flex-direction: row;
    justify-content: spa5ce-around;
    margin-top: -30px;
}
`;

export const OptionMacImage = styled.img` //fiquei 30 mnts tentando entender, no caso ela vai ser .img para não dar erro de não saber o que fazer... PRESTAR ATENÇAO NO FORMATO DA AÇÃO SE É DIV OU IMG, ETC.
    width: 167px;
`;

export const ColorOptionsMac = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    gap: 2px;
    width: 230px; //espacei pela minha width <---> esticando a div.
`;

export const ColorOptionMac = styled.div<ColorOptionMacType>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.background}; //vai ser background o que eu definir lá no meu componente no app.tsx nas divs..
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PurchaseButton2 = styled.button<PurchaseButtonType>`
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 33px;
    width: 78px;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1.17648;
    font-weight: 300;
    font-family: 'MyriadProLight';
    border-radius: 980px;
    padding-left: 16px;
    padding-right: 20px;
    padding-top: 8px; 
    padding-bottom: 8px; 
    border: none;
    margin-right: ${(props) => props.marginRight};
    margin-top: ${(props) => props.marginTop};
`;

export const ColumnM1M1 = styled.div`
    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DivM1M2 = styled.div`
    display: flex;    
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 200px;
`;

export const IconM1Image = styled.img `
    margin-top: 1px;
    width: 50px;
    height: 50px;
`;

export const DivTextM1 = styled.div`
        display: flex;    
        flex-direction: center;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        text-align: center;
        font-family: 'MyriadProRegular';
        font-weight: 300;
        gap: 145px;
`;
export const DivTextM1Nucleos = styled.div`
    display: flex;    
    flex-direction: center;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    text-align: center;
    font-family: 'MyriadProRegular';
    font-weight: 200;
    gap: 160px;
    margin-top: -30px;
`
