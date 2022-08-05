import {Navbar, Nav} from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import './css/Header.css';
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";


function Header(){  

    const navigate = useNavigate();

    const clickEvent =(eventKey) =>{

        console.log(eventKey);

        navigate(eventKey);
    }
    

    return(
    <Navbar appearance="inverse">
      <Nav>
        <Nav.Item icon={<HomeIcon />} eventKey="/main" onSelect={clickEvent}>대시보드</Nav.Item>
  
        <Nav.Menu title="일감관리">
          <Nav.Item>일감이력</Nav.Item>
          <Nav.Item>일감관리</Nav.Item>
        </Nav.Menu>
  
        <Nav.Menu title="상담/수임">
          <Nav.Menu title="상담받기 관리">
            <Nav.Item>전체 상담</Nav.Item>
            <Nav.Item>세무 상담</Nav.Item>
            <Nav.Item>부동산 상담</Nav.Item>
          </Nav.Menu>
          <Nav.Item>수임동의 관리</Nav.Item>
          <Nav.Item>채팅채널 관리</Nav.Item>
          <Nav.Item>카카오 채널 관리</Nav.Item>
          <Nav.Item>종소세 감면 조회결과</Nav.Item>
          <Nav.Item>카카오채널/대표전화 상담 관리</Nav.Item>
        </Nav.Menu>
  
        <Nav.Menu title="고객관리">
          <Nav.Item eventKey="/customer/manage" onSelect={clickEvent}>고객관리</Nav.Item>
          <Nav.Item>인건비 현황 관리</Nav.Item>
          <Nav.Item>4대보험</Nav.Item>
          <Nav.Item>원천세 관리</Nav.Item>
          <Nav.Item>자동 매출 집계</Nav.Item>
          <Nav.Item>연말정산 관리(~2020)</Nav.Item>
          <Nav.Item>연말정산 관리(2021~)</Nav.Item>
          <Nav.Item>민원증명 발급 조회</Nav.Item>
          <Nav.Item>엑셀카드</Nav.Item>
        </Nav.Menu>
  
        <Nav.Menu title="전자신고">
          <Nav.Item>사업자 등록 상태 조회</Nav.Item>
          <Nav.Menu title="신고결과조회">
            <Nav.Item>원천세 신고 결과 조회</Nav.Item>
            <Nav.Item>법인세 신고 결과 조회</Nav.Item>
            <Nav.Item>홈택스 전자신고 결과 조회</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="부가가치세">
            <Nav.Item>부가가치세 신고 도움 서비스</Nav.Item>
            <Nav.Item>부가가치세 신고 촐광표</Nav.Item>
            <Nav.Item>부가가치세 신고 결과 조회</Nav.Item>
            <Nav.Item>부가가치세 신고 진도관리</Nav.Item>
            <Nav.Item>월별 전표 관리</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="종소세">
            <Nav.Item>종소세 신고 도움 서비스</Nav.Item>
            <Nav.Item>종소세 중간보고서 조회</Nav.Item>
            <Nav.Item>종소세 신고 결과 조회</Nav.Item>
            <Nav.Item>종소세 신고 총괄표</Nav.Item>
            <Nav.Item>종소세 신고 진도관리</Nav.Item>
            <Nav.Item>종소세 연말정산 수집자료</Nav.Item>
            <Nav.Item>종소세 간편장부 계산기</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="전표처리">
            <Nav.Item>사업용 신용카드 매입</Nav.Item>
            <Nav.Item>매입 전자세금계산서 현황</Nav.Item>
          </Nav.Menu>
        </Nav.Menu>
  
        <Nav.Menu title="App 회원정보">
          <Nav.Item>App 회원관리</Nav.Item>
          <Nav.Item>App 회원관리-프리</Nav.Item>
          <Nav.Item>알림 관리</Nav.Item>
          <Nav.Item>알림 관리(블로그)</Nav.Item>
          <Nav.Item>App 사용자 정보 변경</Nav.Item>
        </Nav.Menu>
  
        <Nav.Menu title="DB Viewer">
          <Nav.Menu title="요기요">
            <Nav.Item>정산관리 메인</Nav.Item>
            <Nav.Item>비즈머니</Nav.Item>
            <Nav.Item>주문</Nav.Item>
            <Nav.Item>VAT 매입</Nav.Item>
            <Nav.Item>VAT 매출</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="배달통">
            <Nav.Item>정산관리 메인</Nav.Item>
            <Nav.Item>비즈머니</Nav.Item>
            <Nav.Item>주문</Nav.Item>
            <Nav.Item>VAT 매입</Nav.Item>
            <Nav.Item>VAT 매출</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="배민">
            <Nav.Item>정산관리 메인</Nav.Item>
            <Nav.Item>비즈머니</Nav.Item>
            <Nav.Item>주문</Nav.Item>
            <Nav.Item>VAT 매입</Nav.Item>
            <Nav.Item>VAT 매출</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="쿠팡이츠">
            <Nav.Item>정산관리</Nav.Item>
            <Nav.Item>매출관리</Nav.Item>
            <Nav.Item>VAT_SALES</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="페이코오더">
            <Nav.Item>페이코 - 정산</Nav.Item>
            <Nav.Item>페이코 - 매출</Nav.Item>
            <Nav.Item>페이코 - VAT</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="먹깨비">
            <Nav.Item>먹깨비 - 정산</Nav.Item>
            <Nav.Item>먹깨비 - 매출</Nav.Item>
            <Nav.Item>먹깨비 - VAT</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="홈택스">
            <Nav.Item>홈택스에 등록된 사업자 정보(인포텍 쿼리 : Z0010)</Nav.Item>
            <Nav.Menu title="신용카드">
              <Nav.Item>Z4010 : 사업용신용카드 매입세액 공제 확인</Nav.Item>
              <Nav.Item>홈택스 신용카드 매출자료 조회(Z4050)</Nav.Item>
            </Nav.Menu>
            <Nav.Menu title="현금영수증">
              <Nav.Item>홈택스 현금영수증 매입</Nav.Item>
              <Nav.Item>Z4004 : 현금영수증 매입세액 공제</Nav.Item>
              <Nav.Item>홈택스 현금영수증 매출</Nav.Item>
              <Nav.Item>
                홈택스 현금영수증 매출 내역 누계조회-발행세액공제 대상분(Z4061)
              </Nav.Item>
            </Nav.Menu>
            <Nav.Menu title="전자세금계산서">
              <Nav.Item>홈택스 전자세금계산서</Nav.Item>
              <Nav.Item>홈택스 전자세금계산서 품목</Nav.Item>
              <Nav.Item>홈택스 전자세금계산서 합계표</Nav.Item>
            </Nav.Menu>
            <Nav.Item>사업자별 과세유형 정보(인포텍 쿼리 : Z0001)</Nav.Item>
            <Nav.Item>홈택스 세금신고결과조회(Z5003)</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="여신">
            <Nav.Item>여신카드 입금</Nav.Item>
            <Nav.Item>여신금융 카드 매출</Nav.Item>
            <Nav.Item>여신금융 매입</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="은행">
            <Nav.Item>은행거래내역</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="카드">
            <Nav.Item>신용카드 매입</Nav.Item>
            <Nav.Item>신용카드 매입내역(C1005)</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="네이버">
            <Nav.Item>정산관리 - 입금</Nav.Item>
            <Nav.Item>정산관리 - 매출</Nav.Item>
            <Nav.Item>매출 정산관리 부가세 신고내역</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="옥션">
            <Nav.Menu title="정산">
              <Nav.Item>주문건별 내역(송금일)</Nav.Item>
              <Nav.Item>송금건별 내역</Nav.Item>
            </Nav.Menu>
            <Nav.Menu title="매출">
              <Nav.Item>상품판매 상세내역</Nav.Item>
              <Nav.Item>취소위약금 및 환불금차감 배송비 상세내역</Nav.Item>
            </Nav.Menu>
            <Nav.Item>판매예치금</Nav.Item>
            <Nav.Item>매출 정산관리 부가세 신고내역</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="G마켓">
            <Nav.Item>입금(정산)</Nav.Item>
            <Nav.Menu title="매출">
              <Nav.Item>환불 내역</Nav.Item>
              <Nav.Item>배송비 내역</Nav.Item>
              <Nav.Item>주문 내역</Nav.Item>
            </Nav.Menu>
            <Nav.Item>판매예치금</Nav.Item>
            <Nav.Item>매출 정산관리 부가세 신고내역</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="11번가">
            <Nav.Item>판매/정산현황</Nav.Item>
            <Nav.Item>송금완료</Nav.Item>
            <Nav.Item>VAT</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="제로페이">
            <Nav.Item>제로페이 - 결제내역</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="에이블리">
            <Nav.Item>에이블리 - 정산</Nav.Item>
            <Nav.Item>에이블리 - 매출</Nav.Item>
            <Nav.Item>에이블리 - VAT</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="위메프오">
            <Nav.Item>위메프오 - 정산</Nav.Item>
            <Nav.Item>위메프오 - 매출</Nav.Item>
            <Nav.Item>위메프오 - 부가세(매출)</Nav.Item>
            <Nav.Item>위메프오 - 부가세(매입)</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="도매꾹">
            <Nav.Item>도매꾹 - 매출</Nav.Item>
            <Nav.Item>도매꾹 - VAT</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="지그재그">
            <Nav.Item>지그재그 - 정산</Nav.Item>
            <Nav.Item>지그재그 - 매출</Nav.Item>
            <Nav.Item>지그재그 - VAT</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="인터파크">
            <Nav.Item>인터파크 - 정산</Nav.Item>
            <Nav.Item>인터파크 - 정산(합계)</Nav.Item>
            <Nav.Item>인터파크 - 매출</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="브랜디">
            <Nav.Item>브랜디 - 정산</Nav.Item>
            <Nav.Item>브랜디 - 매출</Nav.Item>
            <Nav.Item>브랜디 - VAT</Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="티몬">
            <Nav.Item>티몬 - 정산(딜)</Nav.Item>
            <Nav.Item>티몬 - 정산(배달)</Nav.Item>
            <Nav.Item>티몬 - 매출</Nav.Item>
            <Nav.Item>티몬 - 매출(취소)</Nav.Item>
            <Nav.Item>티몬 - VAT</Nav.Item>
          </Nav.Menu>
        </Nav.Menu>
      </Nav>
      <Nav pullRight>
        <Nav.Menu icon={<CogIcon />} title="설정">
          <Nav.Item>로그아웃</Nav.Item>
          <Nav.Item>내정보 관리</Nav.Item>
          <Nav.Item>멤버 관리</Nav.Item>
          <Nav.Item>scroll log</Nav.Item>
        </Nav.Menu>
      </Nav>
    </Navbar>
    )
  };
  

export default Header