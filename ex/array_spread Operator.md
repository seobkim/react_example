
#### (... Spread Operator)
Const 상수로 선언한 배열을 변경하기 위해서는
```
let arr = constArr;
```
위처럼 선언 시 얕은 복사(주소 값을 저장)

```
let arr = [...constArr]
```

위와 같이 선언하여야 깊은복사(실제 주소값의 밸류값 저장)


