# javascript-lotto-precourse

## 기능 목록

### 사용자 입력

- [x] 로또 구입 금액 입력 받기
- [x] 당첨 번호 입력 받기
- [x] 보너스 번호 입력 받기

### 로또 구입

- [x] 로또 구입 금액을 통해서 구매 수량 계산하기
- [x] 중복되지 않는 6개 숫자를 구매 수량만큼 만들어서 저장
- [x] 로또 번호 오름차순 정렬

### 로또 당첨 번호

- [ ] 당첨 번호 저장
- [ ] 보너스 번호 저장

### 당첨 통계

- [ ] 저장된 당첨 번호와 구입한 로또 번호를 비교해서 당첨 내역 저장
- [ ] 총 당첨 금액 계산하기
- [ ] 구입 금액 대비 당첨금액으로 수익률 계산
- [ ] 소수점 둘째 자리 반올림 처리하기

### 출력

- [x] "구입 금액을 입력해주세요" 문구 출력
- [x] 구매 수량만큼 출력
- [x] 발행한 로또 번호 출력
- [x] "당첨 번호를 입력해 주세요." 문구 출력
- [x] “보너스 번호를 입력해 주세요." 문구 출력
- [ ] 당첨 내역 출력
- [ ] 수익률 출력
- [ ] 에러 출력

&nbsp;

## 예외 상황

### 로또 구입 금액 유효성

- [x] 빈 입력값이면 예외 처리
- [x] 숫자로만 이루어져있지 않으면 예외 처리
- [x] 입력 받을 수 있는 금액 제한하기(실제 우리나라 한 가게에서 10만원 제한) 제한 금액 넘어가면 예외 처리
- [x] 1000원 단위로 나누어 떨어지지 않으면 예외 처리

### 당첨 번호 유효성

- [x] 빈 입력값이면 예외 처리
- [x] 숫자와 컴마로만 이루어져있지 않으면 예외 처리
- [x] 입력된 숫자의 개수가 6개가 아니면 예외 처리
- [x] 1부터 45 범위 내에 숫자로만 이루어져 있지 않으면 예외 처리
- [x] 중복된 숫자가 있으면 예외 처리

### 보너스 번호 유효성

- [x] 빈 입력값이면 예외 처리
- [x] 숫자로만 이루어져있지 않으면 예외 처리
- [x] 1부터 45 범위 내에 숫자로만 이루어져 있지 않으면 예외 처리
- [x] 앞의 숫자와 비교해서 중복된 숫자가 있으면 예외 처리
