import * as S from './LoginStyle'

export const Login = () => {
    return (
        <S.Container>
            <S.CloseBtn 
                src='/assets/btn_close.png'
            />
            <S.LoginContainer>
                <S.Logo src="" alt="Logo" />
                <S.Desc>{'서비스 설명입니다.'}</S.Desc>
                <S.LoginBtn>
                    <S.Icon src="/assets/kakao_logo.png" alt="Login Icon" />
                    {'카카오로 시작하기'}
                </S.LoginBtn>
                <S.LoginDesc>{'로그인하시면 개인정보처리방침과 서비스이용약관에 동의하게 됩니다.'}</S.LoginDesc>
            </S.LoginContainer>
        </S.Container>
    );
};
