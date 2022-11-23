import styled from 'styled-components';


export const AdminPageSection = styled.section`
  width: 100%;
`

export const AdminPageHeader = styled.div`
  padding-top: 34px;
  height: 140px;
  background: #f2f2f2;
  
`

export const AdminPageTitle = styled.h3 `
  font-weight: 700;
  font-size: 24px;
  line-height: 27.6px;
  color: #2A2349;
  letter-spacing: 0.5px;
  margin-bottom: 32px;
  text-align: center;
`

export const AdminPageTab = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 0 20px;
 
  li{
    display: flex;
    flex-direction: column;
  }
  .link{
    font-weight: 400;
    font-size: 16px;
    line-height: 20.6px;
    color:#706D7A ;
    padding: 8px 10px 14px 10px;
    border-top: 4px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .active {
    padding: 8px 10px 14px 10px;
    border-top: 4px solid #00CCDB;
    border-left: 1px solid #E0E0E0;
    border-right: 1px solid #E0E0E0;
    border-bottom: 1px solid #FAFAFA;
    border-radius: 8px 8px 0 0;
    color: #444;
    background: #FAFAFA;
    margin-bottom: -1px;
    
  }
`
