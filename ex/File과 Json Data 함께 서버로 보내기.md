## File 전송 시 Json Data와 함께 전송하기

```js
//Form 생성
const formData = new FormData();

formData.append('file', file); //파일 폼에 추가


let obj = {
  param1 : "param1",
  param2 : "param2"
};

//form에 담을때 json문자열로 변환 후 blob으로 변환 그리고 타입 지정
formData.append(objectKey,new Blob([JSON.stringify(obj)], { type: 'application/json' }));


//다른 기술블로그에서는 axios로 request 요청할 때 header의 type에 `mulitpart/form-data` 추가하는데 없어도 요청 감
const response = axios.post(`/api/`, formData);
response.then(e=>console.log(e))



```
