import styled from 'styled-components';

export const FeedBackContainer = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 41px 0;
`

export const FeedBackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const FeedBackMessage = styled.div`
  width: calc(100% / 3 - 12px);
  padding: 24px 16px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  height: auto;
  @media screen and (max-width: 1200px){
    width: calc(100% / 2 - 16px);
  }
  @media screen and (max-width: 768px){
    width: 100%;
  }
  
`
export const FeedBackMessageWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 10px 0;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const FeedBackMessageTitle = styled.h5`
  font-weight:700 ;
  font-size: 16px;
  line-height: 20px;
  color: #444;
  text-align: left;
  font-style: italic;
`
export const FeedBackMessageValue = styled.span`
  font-weight:700 ;
  font-size: 16px;
  line-height: 20px;
  color: #444;
  text-align: right;
  font-style: italic;
`

export const FeedBackMessageText = styled.p`
  padding: 10px 0;
  text-shadow: 1px 0 0 #000;
  width: 90%;
  margin: 0 auto;
  opacity: .9;
  font-style: italic;
`