import styled from 'styled-components';

export const StatisticsSection = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0px;
  z-index: 7;
  display: flex;
  align-items: center;
`

export const StatisticsOpacity = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0px;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0.3;
  cursor: pointer;
`

export const StatisticsInner = styled.div`
  position: relative;
  z-index: 8;
  max-width: 1002px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  @media(max-width: 1280px){
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
  }
`

export const StatisticsHead = styled.div`
  padding: 40px 27px 40px 40px;
  background: #F2F2F2;
  svg {
    position: absolute;
    top: 13px;
    right: 13px;
    cursor: pointer;
  }
  @media(max-width: 1280px){
    padding: 40px 27px 40px 16px;
  }
`

export const StatisticsTitle = styled.h4`
  font: 700 24px/100% "Inter";
  color: #000000;
`

export const StatisticsBlocks = styled.div`
  display: flex;
  gap: 24px;
  background-color: #FFF;
  padding: 54px 27px 60px 0px;
  @media(max-width: 1280px){
    display: flex;
    flex-direction: column;
    gap: 24px;
  
  }
`

export const StatisticsLeft = styled.div`
  width: 617px;
  height: 398px;
  overflow-x: hidden;
  overflow-y: hidden;
  @media(max-width: 1280px){
    width: 100%;
    //.recharts-responsive-container{
    //  width: 100%;
    //  .recharts-surface{
    //    width: 100%;
    //  }
    //}
  }
`

export const StatisticsCount = styled.div`
  font: 400 10px/120% "Inter";
`

export const StatisticsRight = styled.div`
  @media(max-width: 1280px){
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export const StatisticsDate = styled.div`
  font: 700 16px/120% "Inter";
  color: #000000;
  width: 287px;
  margin-bottom: 20px;
  @media(max-width: 1280px){
    width: 90%;
  }
`

export const StatisticsView = styled.div`
  font: 400 16px/120% "Inter";
  color: #000000;
`

export const StatisticsBurn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  @media(max-width: 1280px){
    align-items: flex-start;
    margin-top: 10px;
    svg{
      margin: 0 auto;
    }
  }
  
  
`
export const StatisticsBurnTitle = styled.h4`
  font: 700 24px/100% "Inter";
  color: var(--dark-blue-color);
  text-align: center;
  width: 214px;
  margin-top: 13px;
  
  @media (max-width: 1200px) {
    display: none;
  }
  
`

export const StatisticsBurnSubtitle = styled.p`
  font: 400 16px/110% "Inter";
  color: var(--dark-blue-color);
  text-align: center;
  width: 200px;
  margin-top: 5px;
  @media (max-width: 1200px) {
    display: none;
  }
`

export const StatisticsBtn = styled.button`
  width: 200px;
  height: 40px;
  color: #FFF;
  text-transform: uppercase;
  background: #00CCDB;
  color: #FFF;
  border-radius: 8px;
  font: 700 14px/17px "Inter";
  margin-top: 25px;
  @media (max-width: 1200px) {
    margin-right: 0;
  }
`
