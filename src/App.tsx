import React, {useState} from 'react';
import './fonts.css';
import styled from 'styled-components';
import {
  Header, 
  ItemHeader, 
  TextHeader, 
  OptionsProductsApple, 
  ItemOptionsProductApple, 
  ImageOptionsProductAplle, 
  TextOptionsProductAplle, 
  SpanNewOptionProductApple, 
  AppleBuyBlock,
  BannerArea,
  BannerAreaButtons,
  PurchaseButton,
  BannerMacBookPro,
  SelectMac,
  OptionsType,
  OptionType,
  OptionMac,
  OptionsMac,
  OptionMacImage,
  ColorOptionsMac,
  ColorOptionMac,
  PurchaseButton2,
  IconM1Image,
  DivM1M2,
  ColumnM1M1,
  DivTextM1,
  DivTextM1Nucleos 
} from './AppStyled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faApple} from '@fortawesome/free-brands-svg-icons';
import {faMagnifyingGlass, faBagShopping, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import iMac from './assets/images/iMac.svg';
import macAcessories from './assets/images/macAcessories.svg';
import macbookAir from './assets/images/macbookAir.svg';
import macbookPro from './assets/images/macbookPro.svg';
import macCompare from './assets/images/macCompare.svg';
import macDisplays from './assets/images/macDisplays.svg';
import macMini from './assets/images/macMini.svg';
import macOs from './assets/images/macOs.svg';
import macShop from './assets/images/macShop.svg';
import macStudio from './assets/images/macStudio.svg';
import macPro from './assets/images/macPro.svg';

import macbook from './assets/images/macbook.jpeg';
import macbookpro from './assets/images/macpro.jpeg';

import MacBookAirImage from './assets/images/macBookImage.png';
import iconMacM1Image from './assets/images/icon-mac-m1.png';
import iconMacM2Image from './assets/images/icon-mac-m2.png';



function App() {

const [optionMac, setOptionMac]  = useState(true); 

  return (

    <div>

      <Header>
        <ItemHeader>
        <FontAwesomeIcon style={{color: '#f5f5f7', fontSize: '15px', opacity: '.8'}}icon={faApple} />      
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Loja</TextHeader>
          </ItemHeader>

          <ItemHeader>
          <TextHeader>Mac</TextHeader>
          </ItemHeader>

          <ItemHeader>
          <TextHeader>iPad</TextHeader>
          </ItemHeader>

          <ItemHeader>
          <TextHeader>iPhone</TextHeader>
          </ItemHeader>

          <ItemHeader>
          <TextHeader>Watch</TextHeader>
          </ItemHeader>

          <ItemHeader>
          <TextHeader>AirPods</TextHeader>
          </ItemHeader>

          <ItemHeader>
          <TextHeader>TV e Casa </TextHeader>
          </ItemHeader>

          <ItemHeader>
          <TextHeader>Só na Apple</TextHeader>
          </ItemHeader>

          <ItemHeader>
          <TextHeader>Acessórios</TextHeader>
          </ItemHeader>

          <ItemHeader>
          <TextHeader>Suporte</TextHeader>
          </ItemHeader>

          <ItemHeader>
          <TextHeader> <FontAwesomeIcon style={{color: '#f5f5f7', fontSize: '14px', opacity: '.8'}}icon={faMagnifyingGlass} /></TextHeader>
          </ItemHeader>


          <ItemHeader>
          <TextHeader> <FontAwesomeIcon style={{color: '#f5f5f7', fontSize: '14px', opacity: '.8'}}icon={faBagShopping} /></TextHeader>
          </ItemHeader>
      
      </Header>

      <OptionsProductsApple>

          <ItemOptionsProductApple>
          <ImageOptionsProductAplle widthImage='90px' src={macbookAir} alt="macbookAir"/>
          <TextOptionsProductAplle>MacBook Air</TextOptionsProductAplle>
          <SpanNewOptionProductApple marginTop="80px" fontSize='10px' type='span-new-option'>Novo</SpanNewOptionProductApple>
          </ItemOptionsProductApple>

          <ItemOptionsProductApple>
          <ImageOptionsProductAplle widthImage='90px'  marginTop= '4px' src={macbookPro} alt="macbookPro"/>
          <TextOptionsProductAplle>MacBook Pro</TextOptionsProductAplle>
          <SpanNewOptionProductApple marginTop="80px" fontSize='10px' type='span-new-option'>Novo</SpanNewOptionProductApple>
          </ItemOptionsProductApple>      

          <ItemOptionsProductApple>
          <ImageOptionsProductAplle widthImage='45px' marginTop= '4px' src={iMac} alt="iMac"/>
          <TextOptionsProductAplle>iMac</TextOptionsProductAplle>
          </ItemOptionsProductApple>

          <ItemOptionsProductApple>
          <ImageOptionsProductAplle src={macMini} marginTop= '-7px' alt="macMini"/>
          <TextOptionsProductAplle>MacMini</TextOptionsProductAplle>
          </ItemOptionsProductApple>

          <ItemOptionsProductApple>
          <ImageOptionsProductAplle src={macStudio} marginTop= '-7px' alt="macStudio"/>
          <TextOptionsProductAplle>MacStudio</TextOptionsProductAplle>
          </ItemOptionsProductApple>

          <ItemOptionsProductApple>
          <ImageOptionsProductAplle src={macPro} marginTop= '7px' alt="macPro"/>
          <TextOptionsProductAplle>MacPro</TextOptionsProductAplle>
          </ItemOptionsProductApple>

          <ItemOptionsProductApple>
          <ImageOptionsProductAplle widthImage='50px' marginTop= '3px' src={macCompare} alt="macCompare"/>
          <TextOptionsProductAplle>MacCompare</TextOptionsProductAplle>
          </ItemOptionsProductApple>

          <ItemOptionsProductApple>
          <ImageOptionsProductAplle widthImage='75px' marginTop= '8px' src={macDisplays} alt="macDisplays"/>
          <TextOptionsProductAplle>MacDisplays</TextOptionsProductAplle>
          </ItemOptionsProductApple>

          <ItemOptionsProductApple>
          <ImageOptionsProductAplle widthImage='38px' marginTop= '3px' src={macAcessories} alt="macAcessories"/>
          <TextOptionsProductAplle>MacAcessories</TextOptionsProductAplle>
          </ItemOptionsProductApple>

          <ItemOptionsProductApple>
          <ImageOptionsProductAplle src={macOs} marginTop= '12px' alt="macOs"/>
          <TextOptionsProductAplle>MacOs</TextOptionsProductAplle>
          </ItemOptionsProductApple>

          <ItemOptionsProductApple>
          <ImageOptionsProductAplle widthImage='90px' marginTop= '19px' src={macShop} alt="macShop"/>
          <TextOptionsProductAplle>MacShop</TextOptionsProductAplle>
          </ItemOptionsProductApple>

      </OptionsProductsApple>

      <AppleBuyBlock>
        <p>Economize na compra do Macbook Air e do Macbook Pro de 13 polegadas na Apple Store Educacional*. <a href= 'https://apple.com.br'>Comprar <FontAwesomeIcon style= {{fontSize: 9}} icon={faChevronRight}/></a></p></AppleBuyBlock>

        <BannerArea> 
          <SpanNewOptionProductApple>Novo</SpanNewOptionProductApple> 
          <h1>Macbook Air</h1>
          <h2>Livre, leve e voa.</h2>
          <p> A partir de: R$ 13.999 </p>

          <BannerAreaButtons> 

          <PurchaseButton background='#0071e3' color='white'>Comprar</PurchaseButton>
          <PurchaseButton background='transparent' underline={true} color='#0071e3'> Saiba Mais <FontAwesomeIcon style= {{fontSize: 12}} icon={faChevronRight}/></PurchaseButton>

          </BannerAreaButtons>

         <ImageOptionsProductAplle src={macbook} widthImage='450px' marginTop='55px' /> 

          </BannerArea>

            <BannerMacBookPro> 
           <SpanNewOptionProductApple >Novo</SpanNewOptionProductApple> 
              <h1>Macbook Pro de 13 pol</h1>
              <h2>Pro em qualquer lugar.</h2>
            < p> A partir de: R$ 15.299 </p>

            <BannerAreaButtons> 

            <PurchaseButton background='#0071e3' color='white'>Comprar</PurchaseButton>
            <PurchaseButton background='transparent' underline={true} color='#0071e3'> Saiba Mais <FontAwesomeIcon style= {{fontSize: 12}} icon={faChevronRight}/></PurchaseButton>
            </BannerAreaButtons>

            <ImageOptionsProductAplle src={macbookpro} widthImage='900px' marginTop='25px' /> 

          </BannerMacBookPro>

        <SelectMac>
          <h1>Qual o Mac ideal para você?</h1>
          
          <OptionsType>

            <OptionType onClick={() => {setOptionMac(!optionMac)}} selected={optionMac} width='75px'>
            Notebook
            </OptionType>

            <OptionType onClick={() => {setOptionMac(!optionMac)}} selected={!optionMac} width='60px'>
            Desktop
            </OptionType>

          </OptionsType>

          <OptionsMac> 

          <OptionMac>
            <OptionMacImage src={MacBookAirImage} alt='macbook-air-imagem' />
            <ColorOptionsMac>
            <ColorOptionMac background="#7D7E80"></ColorOptionMac>
            <ColorOptionMac background="#D2D3D4"></ColorOptionMac>
            <ColorOptionMac background="#F0E5D3"></ColorOptionMac>
            </ColorOptionsMac>
            <SpanNewOptionProductApple fontSize='12px' marginTop='24px'></SpanNewOptionProductApple>
            <h1> Macbook Air <br/><br/> </h1>
            <h2>Chip M2 </h2>
            <p>A partir de R$ 11.599</p>
            <PurchaseButton2  background='#0071e3' color='white'>Comprar</PurchaseButton2 >
            <PurchaseButton2  marginRight='-10px' marginTop='10px' background='transparent' underline={true} color='#0071e3'> Saiba Mais <FontAwesomeIcon style= {{fontSize: 12}} icon={faChevronRight}/>
            </PurchaseButton2 ><br/>
            <hr/>
            <p> Tela de Retina de</p>
            <h1> 13,3 pol.¹</h1> 
         
          </OptionMac>


          <OptionMac> 
            <OptionMacImage src={MacBookAirImage} alt='macbook-air-imagem' /> 
            <ColorOptionsMac>
              <ColorOptionMac background="#2E3641"></ColorOptionMac>
              <ColorOptionMac background="#F0E5D3" ></ColorOptionMac>
              <ColorOptionMac background="#7D7E80" ></ColorOptionMac> 
              <ColorOptionMac background="#a7aaac"></ColorOptionMac>   
            </ColorOptionsMac> 
            <SpanNewOptionProductApple fontSize='12px' marginTop='12px'>Novo</SpanNewOptionProductApple>
            <h1> Macbook Air <br/><br/> </h1> 
            <h2>Chip M2 </h2>
            <p>A partir de R$ 13.999</p>
            <PurchaseButton2  background='#0071e3' color='white'>Comprar</PurchaseButton2 >
            <PurchaseButton2 marginRight='-10px' marginTop='10px' background='transparent' underline={true} color='#0071e3'> Saiba Mais <FontAwesomeIcon style= {{fontSize: 12}} icon={faChevronRight}/>
            </PurchaseButton2 ><br/>
            <hr/>
            <p> Tela Liquid Retina de</p>
            <h1> 13,6 pol.¹</h1>

          </OptionMac> 

          <OptionMac> 
            <OptionMacImage src={MacBookAirImage} alt='macbook-air-imagem' /> 
            <ColorOptionsMac>
              <ColorOptionMac background="#7D7E80" ></ColorOptionMac>
              <ColorOptionMac background="#a7aaac" ></ColorOptionMac>
            </ColorOptionsMac>
            <SpanNewOptionProductApple fontSize='12px' marginTop='12px'>Novo</SpanNewOptionProductApple>
            <h1> Macbook Pro <br/> de 13 pol. </h1>
            <h3></h3>
            <p>A partir de R$ 15.299</p>
            <PurchaseButton2  background='#0071e3' color='white'>Comprar</PurchaseButton2 >
            <PurchaseButton2  marginRight='-10px' marginTop='11px' background='transparent' underline={true} color='#0071e3'> Saiba Mais <FontAwesomeIcon style= {{fontSize: 12}} icon={faChevronRight}/>
            </PurchaseButton2><br/>
            <hr/>
            <p> Tela de Retina de</p>
            <h1> 13,3 pol.¹</h1>

          </OptionMac>

          <OptionMac> 
            <OptionMacImage src={MacBookAirImage} alt='macbook-air-imagem' />  
            <ColorOptionsMac>
              <ColorOptionMac background="#7D7E80"></ColorOptionMac>
              <ColorOptionMac background="#a7aaac"></ColorOptionMac>
            </ColorOptionsMac>
            <SpanNewOptionProductApple fontSize='12px' marginTop='23.8px'></SpanNewOptionProductApple>
            <h1> Macbook Pro <br/> de 14 e 16 pol.</h1>
            <h3></h3>
            <p>A partir de R$ 23.699</p>
            <PurchaseButton2  background='#0071e3' color='white'>Comprar</PurchaseButton2 >
            <PurchaseButton2  marginRight='-10px' marginTop='11px' background='transparent' underline={true} color='#0071e3'> Saiba Mais <FontAwesomeIcon style= {{fontSize: 12}} icon={faChevronRight}/>
            </PurchaseButton2 ><br/>
            <hr/>
            <p> Tela Liquid Retina XDR de</p>
            <h1> 14,2 ou 16,2 pol.¹</h1>
            
            
          </OptionMac>
          </OptionsMac> <br/>


          <ColumnM1M1> 
          <DivM1M2> 
            <IconM1Image src={iconMacM1Image} alt='m1-imagem' />
            <IconM1Image src={iconMacM2Image} alt= 'm2-imagem' />
            <IconM1Image src={iconMacM1Image} alt='m1-imagem' />
            <IconM1Image src={iconMacM2Image} alt= 'm2-imagem' />
            </DivM1M2> 

            <DivTextM1> 
              <p> Chip M1 da Apple <br/><br/><br/> CPU de </p>
              <p> Chip M2 da Apple <br/><br/><br/> CPU de</p>
              <p> Chip M2 da Apple <br/><br/><br/> CPU de </p>
              <p> Chip M2 da Apple <br/><br/><br/> CPU de</p>
            </DivTextM1>

            <DivTextM1Nucleos>
              <h2>8 Núcleos</h2>
              <h2>8 Núcleos</h2>
              <h2>8 Núcleos</h2>
              <h2>8 Núcleos</h2>
            </DivTextM1Nucleos>

          </ColumnM1M1>

        </SelectMac>

    </div> 

    //tive que criar BAnnerAreaButtons porquê meu alinhamento do BannerArea está em column e preciso usar row.

  );
}

export default App;


