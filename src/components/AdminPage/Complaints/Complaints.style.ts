import styled from 'styled-components';

export const ComplaintsContainer = styled.div`
  padding: 41px 0;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b3b3b3;
    border-radius: 100px;
  }
`

export const ComplaintsUlTittles = styled.ul`
  font-weight:700 ;
  font-size: 16px;
  line-height: 27.6px;
  color: #444;
  padding: 26px 24px;
  width: 100%;
  min-width: 1000px;
  background: #E0E0E0;
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: row;
  .id {
    width: 5%;
  }

  .name {
    width: 25%;
    padding-right: 15px;
  }

  .plaint {
    width: 25%;
    padding-right: 15px;
  }

  .send {
    width: 15%;
  }

  .button {
    width: 15%;
    justify-content: center;
  }
  
`

export const ComplaintsItem = styled.li`
  display: flex;
  align-items: center;
  .icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  
`

export const ComplaintsBtnBox = styled.div`
  .paginateButtons {
    display: flex;
    column-gap: 8px;
  }
`

export const ComplaintsBtn = styled.button`
  background: none;
  svg{
    path{
      fill: #2A2349;
      transition: .2s;
      &:hover{
        fill: #00CCDB;
      }
    }
  }
  &:hover{
    svg {
      path {
        fill: #00CCDB;
      }
    }
  }
`


export const ComplaintsUlInfo = styled.ul`
  font-weight:700 ;
  font-size: 16px;
  line-height: 27.6px;
  color: #444;
  background:  #fff;
  width: 100%;
  min-width: 1000px;
  padding: 30px 24px;
  border: 1px solid  #E0E0E0;
  border-top: none;
  display: flex;
  flex-direction: row;
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
  .id {
    width: 5%;
  }

  .name {
    width: 25%;
    padding-right: 15px;
  }

  .plaint {
    width: 25%;
    padding-right: 15px;
  }

  .send {
    width: 15%;
  }

  .button {
    width: 15%;
    justify-content: center;
  }
`




