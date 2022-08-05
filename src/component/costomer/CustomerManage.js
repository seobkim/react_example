import Header from "../Header";
import { Input, InputGroup, Grid, Row, Col } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { SelectPicker } from 'rsuite';
import { Table } from 'rsuite';
import { Pagination } from 'rsuite';
import {useEffect, useState} from "react"

import "./CustomerManage.css"



function CustomerManage(){

    let searchText = "";

    const [activePage, setActivePage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [offset, setOffset] = useState(1);
    const [customerData,setCustomerData] = useState([]);
    const [selectState, setSelectState] = useState("bizNm");
    const [searchState, setSearchState] = useState("");



    const { Column, HeaderCell, Cell } = Table;

    const [layout, setLayout] = useState([
      "total",
      "-",
      "limit",
      "|",
      "pager",
      "skip"
    ]);

    let divStyle = {    
        width: "90%",
        margin: "0 auto",
        marginTop: "2%",
        fontSize: "20px"
    }

    const styles = {
        marginTop: 10,
        marginBottom: 10,
        width : "150px",
        display: "inline-block"
      };

      const tableStyles = {
        width: "1200px",
        margin: "0 auto",
        marginTop: "2%",
        // fontSize: "20px"
      };

    const CustomInputGroupWidthButton = ({ placeholder, ...props }) => (
        <InputGroup inside style={styles}>
          <Input placeholder={placeholder} onChange={searchFlag} defaultValue={searchState} onKeyDown={enterKeyEvent}/>
          <InputGroup.Button onClick={searchEvent}>
            <SearchIcon/>
          </InputGroup.Button>
        </InputGroup>
      );

      const data = ['업체명', '사업자번호', '대표자명', '그룹관리', '라벨', '관리상태', '관리구분', '앱 ID' , '폐업일자'].map(
        // item => ({ label: item.split(":")[0], value: item.split(":")[1] })    
        item => ({ label: item, value: item })    
      );

        
      useEffect(() => {
        fetch("http://127.0.0.1:8080/web2/api/adm/customer",{
        method : "GET",
        headers: {
            'Content-Type': 'application/json',
          },
          credentials: "include",
    })
    .then((result) => result.json())
    .then((data) => {
      if(data.success){
        let pagenationInfo = data.resultData.page;
        setTotalPage(pagenationInfo.totalElements);
        setOffset(pagenationInfo.pageSize);


        let customerList = data.resultData.list;

        setCustomerData(customerList);
      }
    })
      
  }, [])

  useEffect(() => {
    // Data Fetching -> Side Effect
    let url = "http://127.0.0.1:8080/web2/api/adm/customer?" +"offset="+(activePage-1) +"&needle="+searchState+"&haystack="+selectState
    fetch(url,{
    method : "GET",
    headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
})
.then((result) => result.json())
.then((data) => {
  if(data.success){
    let pagenationInfo = data.resultData.page;
    setTotalPage(pagenationInfo.totalElements);
    setOffset(pagenationInfo.pageSize);

    let customerList = data.resultData.list;

    setCustomerData(customerList);
  }
})

  
}, [activePage,searchState])


const selectedFlag = (value)=>{
  setSelectState(value);
}

const searchFlag = (value)=>{

  searchText= value;
  console.log(searchText);

}

const searchEvent =()=>{
  setSearchState(searchText);
  setActivePage(1);
}

const enterKeyEvent = (e) =>{
  if(e.keyCode == 13){
    searchEvent();
  }
}

    
    return(
      <>
      <Header/>
      <div style={divStyle}>
          고객정보
          <div>
          <SelectPicker data={data} style={styles} defaultValue={'업체명'} onSelect={selectedFlag}/>
          <span> </span>
          <CustomInputGroupWidthButton size="sm" placeholder="search"/>
          </div>
      </div>
      
      <div style={tableStyles}>
      <Table
    height={800}
    data={customerData}
    onRowClick={rowData => {
      console.log(rowData);
    }}
  >
    <Column width={300} align="center" fixed>
      <HeaderCell>업체명</HeaderCell>
      <Cell dataKey="bizNm" />
    </Column>

    <Column width={150} align="center">
      <HeaderCell>사업자번호</HeaderCell>
      <Cell dataKey="bizNo" />
    </Column>

    <Column width={150} align="center">
      <HeaderCell>대표자명</HeaderCell>
      <Cell dataKey="rprsNm" />
    </Column>

    <Column width={200} align="center">
      <HeaderCell>전화번호</HeaderCell>
      <Cell dataKey="phone" />
    </Column>

    <Column width={200} align="center">
      <HeaderCell>그룹관리</HeaderCell>
      <Cell dataKey="groupNo" />
    </Column>

    <Column width={100} align="center">
      <HeaderCell>관리구분</HeaderCell>
      <Cell dataKey="division" />
    </Column>

    <Column width={100} align="center">
      <HeaderCell>상세</HeaderCell>
      <Cell dataKey="statusDetail" />
    </Column>
  
  </Table>
  <Pagination
      prev
      last
      next
      first
      size="md"
      total={totalPage-1}
      limit={offset}
      activePage={activePage}
      maxButtons={10}
      onChangePage={setActivePage}
    />
    </div>
      </>
      
  )



    
}

export default CustomerManage