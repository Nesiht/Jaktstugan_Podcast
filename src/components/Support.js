import React from 'react'
import { SupportSection, SectionTitleContainer, HorizontalLine, StyledText, SupportCard, SupUpperContainer, SupLowerContainer, SupImage } from './style'
import { StyledH2, StyledH3, Paragraph } from './style'
import { Button } from './Button'

// 1. Patreon
// 2. Webshop
// 3. Swish
// 4. Crypto
// 5. Ramsele

export const Support = () => {
  return (
    <SupportSection>

      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>Stöd Podden.</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>

      <SupportCard>
        <SupUpperContainer>
          <SupImage></SupImage>
        </SupUpperContainer>
        <SupLowerContainer>
          <StyledH2>Patreon</StyledH2>
          <StyledH3>Stöd oss gärna via Patreon så har vi fortsatta möjligheter att leverara avsnitt av hög kvallité</StyledH3>
          <StyledH3>Betalande medlemmar får tillgång till</StyledH3>
            <ul>
              <li><Paragraph>Specialavsnitt</Paragraph></li>
              <li><Paragraph>En snygg kaffemugg</Paragraph></li>
              <li><Paragraph>Personligt tack i ett avsnitt</Paragraph></li>
              <li><Paragraph>Vinstchans i kommande tävlingar</Paragraph></li>
            </ul>
          <Button title='Patreon' bg='#343E3D' type="submit"></Button>
        </SupLowerContainer>
      </SupportCard>

      <SupportCard>
        <SupUpperContainer>
          <SupImage></SupImage>
        </SupUpperContainer>
        <SupLowerContainer>
          <StyledH2>Webshop</StyledH2>
          <StyledH3>Köp merch i vår webshop</StyledH3>
          <StyledH3>Limited edition prylar!</StyledH3>
            <ul>
              <li><Paragraph>Kläder</Paragraph></li>
              <li><Paragraph>kaffemuggar</Paragraph></li>
              <li><Paragraph>Presentkort</Paragraph></li>
              <li><Paragraph>Köp personligt meddelande</Paragraph></li>
            </ul>
          <Button title='Webshop' bg='#343E3D' type="submit"></Button>
        </SupLowerContainer>
      </SupportCard>

      <SupportCard>
        <SupUpperContainer>
          <SupImage></SupImage>
        </SupUpperContainer>
        <SupLowerContainer>
          <StyledH2>Swish</StyledH2>
          <StyledH3>Skicka en slant, inga konstigheter</StyledH3>
          <StyledH3>Smidigt & enkelt</StyledH3>
            <ul>
              <li><Paragraph>För den bekväma</Paragraph></li>
            </ul>
          <Button title='Swish' bg='#343E3D' type="submit"></Button>
        </SupLowerContainer>
      </SupportCard>

      <SupportCard>
        <SupUpperContainer>
          <SupImage></SupImage>
        </SupUpperContainer>
        <SupLowerContainer>
          <StyledH2>Cryptovaluta</StyledH2>
          <StyledH3>Skicka en slant, inga konstigheter</StyledH3>
          <StyledH3>Smidigt & enkelt</StyledH3>
            <ul>
              <li><Paragraph>Anonymt</Paragraph></li>
              <li><Paragraph>Bitcoin / BTC</Paragraph></li>
              <li><Paragraph>Cardano / ADA</Paragraph></li>
            </ul>
          <Button title='BTC' bg='#343E3D' type="submit"></Button>
          <Button title='ADA' bg='#343E3D' type="submit"></Button>
        </SupLowerContainer>
      </SupportCard>
      

    </SupportSection>
  )
}