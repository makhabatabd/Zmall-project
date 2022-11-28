import styled from "styled-components"

export const DetailInformation = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 656px;
  width: 100%;
  @media (max-width: 1200px) {
    max-width: none;
  }
}
`

export const DetailStatistic = styled.div`
 color: #706d7a;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    margin-bottom: 24px;
    margin-top: 32px;
    border-bottom: 1px solid #d2cccc;
`

export const DetailStatisticList = styled.div`
display: flex;
      gap: 10px;
      flex-direction: row;

       @media (max-width: 576px){
     flex-direction: column;
      gap: 10px;
    }
`

export const DetailGeolocation = styled.div`
      color: #2a2349;
      padding-left: 20px;
      background: url(/details/geolocation.svg) no-repeat;
`

export const DetailWarningText = styled.div`
 color: #444444;
    font-size: 16px;
    max-width: 656px;
    position: relative;
    line-height: 140%;

    div{
      position: absolute;
      right: -70%;
      top: -100px
    }

@media (max-width: 1440px) {
    display: none;
}
`

export const DetailShare = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 576px){
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-left: 60px;
    }
`

export const DetailLinks = styled.div`

`

export const DetailShareWith = styled.div`
 color: #2a2349;
        font-size: 16px;
        display: flex;
        gap: 10px;
        margin: 12px 0px;
`

export const DetailNetworks = styled.div`
 display: flex;
        gap: 16px;
        margin-bottom: 39px;
    div{
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #edf1fd;
          border-radius: 8px;
          width: 36px;
          height: 36px;

          a{
             display: flex;
            align-items: center;
            justify-content: center;
          }
    }      
`

export const DetailReport = styled.div`
      cursor: pointer;
      display: flex;
      padding-left: 24px;

      p{
         font-size: 16px;
        color: #d62c54;
        margin-left: 15px;
      }

      @media (max-width: 576px) {
         margin-bottom: 30px;
      }
`

export const DetailReportWindow = styled.div`
  max-width: 442px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background: white;
   position: absolute;
      right: -50%;
      z-index: 20000;
`

export const Form = styled.form`
    padding: 21px 29px 14px 28px;
    gap: 18px;
    display: flex;
    flex-direction: column;
`

export const ReportTitle = styled.div`
  color: #444444;
    font-size: 16px;
    font-weight: 700;
    padding: 16px 0px 18px 28px;
    background: #f2f2f2;
`

export const ReportClose = styled.div`
      position: absolute;
      right: 10px;
      top: 5px;
`
export const ReportItem = styled.div`
input{
   appearance: none;
}
input:checked + label::after {
        background: #2a2349;
      }

      input:checked + label::before {
        content: '';
        display: block;
        width: 13px;
        height: 9px;
        position: absolute;
        top: 20%;
        left: 1px;
        // background: url(@/assets/images/detail/checked.svg) no-repeat;
        z-index: 1;
      }

      label {
        padding-left: 24px;
        position: relative;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &::after {
          content: '';
          width: 16px;
          height: 16px;
          display: block;
          position: absolute;
          top: 2px;
          background: #ffffff;
          border: 1px solid #bdbdbd;
          border-radius: 4px;
          z-index: 0;
        }
      }
`

export const TextArea = styled.textarea`
width: 100%;
        max-width: 384px;
        height: auto;
        border: 1px solid #e5e6e6;
        border-radius: 4px;
        font-size: 16px;
        padding-top: 11px;
        padding-left: 11px;
 ::placeholder {
          color: #706d7a;
        }
`

export const SubmitButton = styled.button`
 padding: 14px 48px;
      background: #2a2349;
      border-radius: 8px;
      font-size: 14px;
      color: #ffffff;
      margin-bottom: 6px;
`

export const ErrorText = styled.p`
      color: red;
      font-size: 14px;
      position: absolute;
      bottom: 0;
`
