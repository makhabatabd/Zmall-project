import { Container, SuccessPageBtn, SuccessPageSection, SuccessPageText, Wrapper } from './SuccessPage.style';


export const SuccessPage = () => {

  const navigateHandler = () => {
    window.location.pathname = '/';
  };

  return (
    <SuccessPageSection>
      <Container>
        <Wrapper>
          <svg width='200' height='200' viewBox='0 0 61 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M31.2332 37.3375L57.4784 8.53064L60.9431 11.6874L31.4738 44.0333L15.4084 28.7612L18.6384 25.3639L31.2332 37.3375ZM59.123 20.5687L55.4679 24.5934C55.9985 26.631 56.2812 28.7675 56.2812 30.9688C56.2812 44.9258 44.9258 56.2812 30.9688 56.2812C17.0117 56.2812 5.65625 44.9258 5.65625 30.9688C5.65625 17.0117 17.0117 5.65625 30.9688 5.65625C37.4346 5.65625 43.3408 8.09448 47.8199 12.0979L50.98 8.61853C45.4711 3.67432 38.4281 0.96875 30.9688 0.96875C22.9557 0.96875 15.4216 4.08923 9.75562 9.75562C4.08923 15.4216 0.96875 22.9557 0.96875 30.9688C0.96875 38.9818 4.08923 46.5159 9.75562 52.1819C15.4216 57.8483 22.9557 60.9688 30.9688 60.9688C38.9818 60.9688 46.5159 57.8483 52.1819 52.1819C57.8483 46.5159 60.9688 38.9818 60.9688 30.9688C60.9688 27.3623 60.3348 23.854 59.123 20.5687Z'
              fill='#00CCDB' />
          </svg>
          <h3>{'Success'}</h3>
          <SuccessPageText onClick={navigateHandler}>
            <SuccessPageBtn type='submit'>
              <p>Go home</p>
            </SuccessPageBtn>
          </SuccessPageText>
        </Wrapper>
      </Container>
    </SuccessPageSection>
  );
};
