### `create-react-app`

next.js와 고민하였으나 실제 배포단계가 아니고 페이지의 갯수가 적어 CSR으로 구성하여도 괜찮다고 판단하여 create-react-app을 사용하였습니다.
그리고 webpack, babel등 개발 환경을 따로 구축하지 않아도 되는 장점이 있습니다.

### `typescript`

type을 각 object마다 작상하여 코드에 안정성을 더했습니다.
props 활용에 있어 type을 더해 오타로 인한 시간을 줄일 수 있었습니다.

### `react-hooks`

useState, useEffect를 활용하여 componentdidmount/update에 맞춰 렌덜이 될 때마다 특정 작업을 수행할 수 있도록하였습니다.
그리고 useCallback, useMemo를 활용하여 함수형 컴포넌트 내부에서 발생하는 연산을 최적화하기 위해 노력하였습니다.
마지막으로 useContext를 활용하여 전역 객체를 관리하였습니다. Redux를 쓰지 않은 이유는 cart로 오는 데이터양이 적고 
추가 dependency 없이 사용할 수 있기 때문입니다.

### `react-media`

반응형 모듈로 query에 css 방식으로 작성하면 해당 사이즈에 맞추어 mobile <-> pc를 자유롭게 변형할 수 있어 사용하였습니다.