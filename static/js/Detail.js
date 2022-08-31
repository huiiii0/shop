import { useState,useEffect  } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Nav,Button,ButtonGroup,Form, Tab, Tabs, Accordion, Pagination } from 'react-bootstrap';
import { AiOutlineLock, AiTwotoneStar, AiOutlineStar } from 'react-icons/ai';
import { addItem } from './store.js'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'


let Box = styled.div`
padding : 20px;
color : gray;
`;

let YellowBtn = styled.button`
background : gold;
color : white;
width:100%;
height:300px;
border:1px solid #ccc;
background-image:url("/shop/img/detail_banner_img.jpg");
background-size:cover;
background-position:center;
`;



function Detail(props) {
    let {id} = useParams();
    let [tap, setTap] = useState(0);
    let csst1 = {
      color:"#aaa"    
    };
    let csst2 = {
      background:"#e7f5ff",
      color:"#0080e0",
      fontSize:"20px",
      fontWeight:"bold"      
    }
    let csst3 = {
      background:"#eee",
      borderRight:"1px solid #fff",
      borderLeft:"1px solid #fff",
    }    
    let [fade2, setFade2] = useState('')
    useEffect(()=>{
      setFade2('end')
      return ()=>{
        setFade2('')
      }
    },[])

    let selproduct  = props.product.find((x) => x.id == id )
    
    let dispatch = useDispatch()
    
    return (
      <div className={'container start ' + fade2}>
            <Box>
                <YellowBtn></YellowBtn>
            </Box>
            <div className="row">
                <div className="col-md-6">
                  <img src={selproduct.imgUrl} width="100%" />
                </div>
                <div className="col-md-6">
                    
                    <h4 className="pt-5">{selproduct.title}</h4>
                    <p>{selproduct.price}</p>
                    
                    {/* 구매테이블 */}
                    <table style={{width:"100%", borderTop:"1px solid #ccc"}}>
                      <tr style={{height:"50px"}}>
                        <th style={csst1}>적립금</th>
                        <td><br/><span>결제시</span><br/><span style={csst2}>1% 적립</span></td>
                      </tr>

                      <tr style={{height:"50px"}}>
                        <th style={csst1}>배송</th>
                        <td>Estore.는 <span style={{fontWeight:"bold"}}>모든 상품 무료배송!</span></td>
                      </tr>

                      <tr style={{height:"50px"}}>
                        <th style={csst1}>정품인증</th>
                        <td>
                          <Accordion flush style={{marginLeft:"-20px"}}>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>Estore. 모든 상품은 100% 정품입니다.</Accordion.Header>
                              <Accordion.Body style={{background:"#eee", fontSize:"12px"}}>
                               <p>
                                  Estore.에서 판매되는 모든 브랜드 상품은 <br/>정식제조, 정식수입원을 통해 유통되는
                                  100% 정품임을 보증합니다.
                                </p>
                              </Accordion.Body>
                            </Accordion.Item>      
                          </Accordion>
                        </td>
                      </tr>
                    </table>

                    {/* 사이즈 선택 */}
                    <Form.Select size="lg" style={{marginTop:"30px"}}>
                      <option style={{color:"#aaa"}}>[사이즈]옵션을 선택하세요</option>
                      <option>070(XS)</option>
                      <option>075(S)</option>
                      <option>080(M)</option>
                      <option>075(L)</option>
                    </Form.Select>
                    <br />        

                    <ButtonGroup size="lg" className="mb-2" style={{marginTop:"30px"}}>
                      <button className="btn btn-dark" onClick={()=>{
                      //  dispatch(addItem(  {id : 2, name : 'Grey Yordan', count : 1}))

                      dispatch(addItem({
                        id : selproduct.id, 
                        name : selproduct.title,
                        count : 1,
                      }))
                    }}>장바구니</button>
                      <button className="btn btn-danger" onClick={()=>{
                      //  dispatch(addItem(  {id : 2, name : 'Grey Yordan', count : 1}))

                      dispatch(addItem({
                        id : selproduct.id, 
                        name : selproduct.title,
                        count : 1,
                      }))
                    }}>주문하기</button>
                      <Button variant="outline-dark">♡</Button>
                    </ButtonGroup>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0" fill style={{marginTop:"70px"}}>
              <Nav.Item style={csst3}>
                <Nav.Link  onClick={()=>{ setTap(0) }} eventKey="link0" style={{color:"#000"}}>상품정보</Nav.Link>
              </Nav.Item>
              <Nav.Item style={csst3}>
                <Nav.Link onClick={()=>{ setTap(1) }} eventKey="link1" style={{color:"#000"}}>Q&A</Nav.Link>
              </Nav.Item>
              <Nav.Item style={csst3}>
                <Nav.Link  onClick={()=>{ setTap(2) }} eventKey="link2" style={{color:"#000"}}>리뷰댓글</Nav.Link>
              </Nav.Item>
              <Nav.Item style={csst3}>
                <Nav.Link  onClick={()=>{ setTap(3) }} eventKey="link3" style={{color:"#000"}}>주문정보</Nav.Link>
              </Nav.Item>
            </Nav>    

            <TabContent tap={tap}/>
        </div>
      )
}


function TabContent({tap}){
  let [fade, setFade] = useState('')
   useEffect( ()=>{
    setTimeout(()=>{ setFade('end')},10)
    return ()=>{
        setFade('')
    }
   } ,[tap])
   let {id} = useParams();
  let csst1 = {
    fontSize:"12px",
    fontWeight:"bold",
    color:"#666"    
  }
  let [count, setCount] = useState(1);
  let [res1,setRes1] = useState([0,1,2,3,4,5,6,7,8,9]);

  const [customerList, setCustomerList]= useState([
    {
        name: "a*****",
        message:"기장도 딱 맞아서 좋고 디자인도 이뻐서 좋아요 완전 추천",
    },
    {
      name: "b*****",
      message:"사이즈도 이쁘게 딱 맞고 좋습니다. 저렴하게 잘 구입한거 같아요"
    }
  ]);

const [customer, setCustomer]=useState({
    name:'', 
    message:''
  });

const handleName = (e)=>{
  // console.log(e.target.value);
  setCustomer((prevState)=>{
    return({...prevState, name:e.target.value});
  });
};

const handlemessage = (e)=>{
//    console.log(e.target.value);
 setCustomer((prevState)=>{
  return({...prevState, message:e.target.value});
});
};


const handleCommit = (e)=>{
 console.log(customer.name);
 console.log(customer.message);

 //추가
  setCustomerList((prevState)=>{
      // return [...prevState, customer];
      //앞으로 입력값이 들어감
      return [customer,...prevState];
  });

  //input 초기화
  setCustomer(()=>{
      return {name:'', message:''};
  });
 };

 let style1 = {
  width:"100%",
  borderTop:"1px solid #ccc",
  borderBottom:"1px solid #ccc",
  padding:"10px",
  padding:"15px",
  margin:"5px",
  display:"flex",
  flexDirection:"row",
  justfyContent:"ceter"
 }

 let style2 = {
   fontSize: "15px"
 }

 let stylebtn ={
  width:'50px',
  height:'30px',
  backgroundColor:'tomato',
  opacity:'80%',
  border:'none',
  color:'white',
  margin:'20px',
  borderRadius:"10px",
  fontSize:"15px"
 }

  return (
    <div className={'start ' + fade}>
      {
        [
          /*상품정보*/
          <div>
            <div className="container" style={{height:"auto"}}>
            <div className="row d-flex justify-content-center" style={{height:"100%"}}>
              <div className="col-md-11">
                <img src="/shop/img/product_info1.jpg" width="100%"/>
              </div>
          </div>
        </div>
        
        <div className="container" style={{height:"auto"}}>
          <div className="row d-flex justify-content-center" style={{height:"100%"}}>
            <div className="col-md-11">
              <img src="/shop/img/product_info2.jpg" width="100%"/>
            </div>
          </div>
        </div>

        <div className="container" style={{height:"auto"}}>
          <div className="row d-flex justify-content-center" style={{height:"100%"}}>
            <div className="col-md-11">
              <img src="/shop/img/product_info3.jpg" width="100%"/>
            </div>
          </div>
        </div>
          </div>,

          /*큐앤에이*/
          <div>
            <div className="container" style={{marginTop:"50px"}}>
            <div className="row">

              <div className="col-md-12" style={{display:"flex", flexFlow:"row", justifyContent:"space-between", marginBottom:"10px"}}>
                <h4>Q&A</h4>
                <Button variant="dark">문의 내용 작성하기</Button>
              </div>
              
              <table class="table" style={{borderTop:"1px solid #333"}}>                              
                <tbody>
                  <tr style={{borderBottom:"1px solid #bbb"}}>
                    <th style={{width:"10%", textAlign:"center"}}>답변상태</th>
                    <th style={{width:"70%"}}>내용</th>
                    <th style={{width:"10%", textAlign:"center"}}>작성자</th>
                    <th style={{width:"10%", textAlign:"center"}}>작성일</th>
                  </tr>

                  <tr>
                    <td style={{textAlign:"center"}}>답변완료</td>
                    <td><AiOutlineLock/>비밀글입니다.</td>
                    <td style={{textAlign:"center"}}>a*****</td>
                    <td style={{textAlign:"center"}}><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiOutlineStar/></td>
                  </tr> 

                  <tr>
                    <td style={{textAlign:"center"}}>답변완료</td>
                    <td><AiOutlineLock/>비밀글입니다</td>
                    <td style={{textAlign:"center"}}>b*****</td>
                    <td style={{textAlign:"center"}}><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiOutlineStar/><AiOutlineStar/></td>
                  </tr>

                  <tr>
                    <td style={{textAlign:"center"}}>답변완료</td>
                    <td><AiOutlineLock/>비밀글입니다</td>
                    <td style={{textAlign:"center"}}>c*****</td>
                    <td style={{textAlign:"center"}}><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiOutlineStar/></td>
                  </tr>

                  <tr>
                    <td style={{textAlign:"center"}}>답변완료</td>
                    <td>상품 언제 받을수 있을까요?</td>
                    <td style={{textAlign:"center"}}>d*****</td>
                    <td style={{textAlign:"center"}}><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Pagination style={{display:"flex", flexFlow:"row", justifyContent:"center"}}>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>                  
                  <Pagination.Item disabled>{2}</Pagination.Item>
                  <Pagination.Item disabled>{3}</Pagination.Item>
                  <Pagination.Item disabled>{4}</Pagination.Item>
                  <Pagination.Item disabled>{5}</Pagination.Item>
                  <Pagination.Item disabled>{6}</Pagination.Item>                  
                  <Pagination.Item disabled>{7}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </div>
            </div>
          </div>
          </div>,

          /*리뷰댓글*/
          <div>
            <div className="container" style={{marginTop:"50px",display:"flex",flexFlow:"column", alignItems:"center", justifyContent:"center"}}>
                <div className="container">
                  <h4>리뷰댓글</h4>
                </div>
                {customerList.map((element,idx)=> {
                 return(
                     <div key={idx}  style = {style1}>
                         <div>  
                            <img src="https://cdn3.iconfinder.com/data/icons/fairytale-2/64/prince-fairytale-monarchy-crown-character-man-king-256.png" style={{width:"50px", height:"50px", borderRadius:"50%"}} ></img>
                         </div>

                        <div style={{display:"flex", flexDirection:"column", width:"100%"}}> 
                          <span style={{ color:"block", fontSize:18, fontWeight:"bold",marginLeft:"10px"}}>{element.name}</span>
                          <span style={{ color:"block", fontSize:14, marginLeft:"10px", marginTop:"5px",}}>{element.message}</span>
                         </div>

                         <div>
                            <button style={stylebtn} onClick={()=>{
                                let copy = [...customerList];
                                copy.splice(idx, 1);
                                setCustomerList(copy);

                            }}>삭제</button>
                          </div>
                     </div>
                 );
                 })}

               </div>

                 <div className="container" style={{display:"flex",justifyContent:"center"}}>
                  <div style={{ width:'100%', backgroundColor:'#eee', padding:'15px', margin:'10px', borderRadius:"10px"}}>
                  <p>
                    <h5>리뷰댓글을 작성해주세요</h5>
                    <p>이름</p>
                    <input type="text" onChange={handleName} value={customer.name} style={{width:'95%', height:'30px'}}></input>
                    </p>


                    <p>        
                    <p>메시지</p>
                    <input name="message" type="text" onChange={handlemessage} value={customer.message} style={{width:'95%', height:'100px'}} placeholder="내용을 입력하세요"></input>
                    </p>
          

                    <button onClick={handleCommit} style={{padding:'10px', margin:'10px', backgroundColor:'black', border:'none', display:'block', borderRadius:"10px",color:"#fff" }}>댓글작성</button>
                </div>
                 </div>
                
          </div>,

          /* 스토어정보 */
          <div>
            <div className="container" style={{marginTop:"50px"}}>
            <div className="row">

              <h4>스토어정보</h4>
              <table class="table" style={{borderTop:"1px solid #333"}}>                              
                <tbody>
                  <tr>
                    <th style={{width:"10%", textAlign:"center"}}>상호명</th>
                    <td><p style={csst1}>(주)더네이쳐홀딩스</p></td>
                  </tr>

                  <tr>
                    <th style={{textAlign:"center"}}>대표자</th>
                    <td><p style={csst1}>박영준</p></td>
                  </tr> 

                  <tr>
                    <th>사업자등록번호</th>
                    <td><p style={csst1}>106-86-26388</p></td>
                  </tr>

                  <tr>
                    <th >통신판매업번호</th>
                    <td><p style={csst1}>제2015-서울금천-0414호</p></td>
                  </tr>

                  <tr style={{borderBottom:"1px solid #333"}}>
                    <th style={{textAlign:"center"}}>사업장소재지</th>
                    <td><p style={csst1}>12651 ) 경기 여주시 세종로 319 (교동)2층 더네이쳐홀딩스 여주 물류센터</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="container" style={{marginTop:"50px"}}>
            <div className="row">

              <h4>주문정보</h4>
              <table className="table" style={{borderTop:"1px solid #333"}}>
                <tbody style={{borderBottom:"1px solid #333"}}>
                  <tr>
                    <th style={{background:"#eee",textAlign:"center",verticalAlign:"middle"}}>스토어 고객센터	</th>
                    <td>
                      <p style={csst1}>주중 9:00 AM ~ 5:00 PM, 주말 및 공휴일 휴무<br/>
                      이메일 : qkrdnwns12@nglife.co.kr<br/>
                      전화번호 : 1670-2906<br/>
                      카톡문의 : NFL스타일</p>
                    </td>
                  </tr>

                  <tr>
                    <th style={{background:"#eee",textAlign:"center",verticalAlign:"middle"}}>배송 정보</th>
                    <td>
                      <p style={csst1}>상품 하자, 오배송으로 인한 교환 및 반품 시 : 판매자 부담<br/>
                      순 변심으로 인한 교환 및 반품 시 : 구매자 부담</p>
                    </td>
                  </tr> 

                  <tr>
                    <th style={{background:"#eee",textAlign:"center",verticalAlign:"middle"}}>교환/환불정보</th>
                    <td>
                      <p style={csst1}>반품 및 교환은 상품 수령 후 7일 이내에 신청하실 수 있습니다.<br/>
                        재화 등의 내용이 표시, 광고의 내용과 다르거나 계약내용과 다르게 이행된 경우에는 전자상거래법 제17조3<br/>
                        항에 따라 청약철회를 할 수 있습니다.<br/>
                        교환/환불이 발생하는 경우 그 원인을 제공한 자가 배송비를 부담합니다.<br/>
                        - 고객변심 : 최초 배송비 + 반품 배송비 + (교환의 경우) 교환 배송비는 고객이 부담<br/>
                        - 판매자귀책 : 최초 배송비 + 반품 배송비 + (교환의 경우) 교환 배송비는 판매자가 부담<br/>
                        다음의 경우는 교환 및 환불이 불가능합니다.<br/>
                        - 반품/교환 가능 기간을 초과한 경우<br/>
                        - 상품 및 구성품을 분실하였거나 취급부주의로 인한 오염/파손/고장된 경우<br/>
                        - 상품을 착용하였거나 세탁, 수선한 경우<br/>
                        - 소비자 과실로 인한 옷의 변색(예 : 착생, 화장품 오염 등)<br/>
                        - 착용으로 인한 니트류 상품의 늘어남 발생 및 가죽 제품의 주름 발생<br/>
                        - 명품은 택 제거 후 반품 불가<br/>
                        - 상품의 가치가 현저히 감소하여 재판매가 불가할 경우<br/>
                        - 구매확정된 주문의 경우<br/>
                        - 귀금속류의 경우는 소비자분쟁해결 기준에 의거 교환만 가능합니다.<br/>
                        (단, 함량미달의 경우에는 환불이 가능함)<br/>
                        상품 하자, 오배송으로 인한 교환 및 반품 시 : 판매자 부담<br/>
                        단순 변심으로 인한 교환 및 반품 시 : 구매자 부담<br/>
                        비용 및 접수 방법 해당 몰 홈페이지/고객센터에서 확인/문의 후 진행<br/>
                        ※ 배송비 동봉하여 발송 후, 배송 중 분실되는 경우 책임지지 않습니다.<br/>
                        ① 교환/반품(환불) 기간 (상품 수령일로부터 7일)이 경과된 경우<br/>
                        ② 고객님의 부주의로 인해 상품 가치가 훼손된 경우 (착용/사용 흔적, 구성품의 파손 등)<br/>
                        ③ 상품의 사용 및 TAG 제거의 경우<br/>
                        ④ 기타 상품 구매 전 상세페이지를 통한 상품 별 교환/반품 안내의 경우<br/>
                        ⑤ 온라인 구매 시 (PC, 모바일) NFL 오프라인 매장을 통한 교환/반품 불가
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <th style={{background:"#eee",textAlign:"center",verticalAlign:"middle"}}>상품정보 고시	</th>
                    <td><p style={csst1}>제조사 : (주)더네이쳐홀딩스 제조일자 : 2022-07-21 원산지 : 베트남</p></td>
                  </tr>

                  <tr>
                    <th style={{background:"#eee",textAlign:"center",verticalAlign:"middle"}}>미성년자 주문취소 안내	</th>
                    <td><p style={csst1}>미성년자가 법정대리인의 동의 없이 구매계약을 체결한 경우 미성년자와 법정대리인은 구매계약을 취소할 수 있습니다</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
        ][tap]
      }
    </div>
  )
}

  function Recpro(props) {
    let navigate = useNavigate();
    return (
      <div className="col-md-4">
        <Nav.Link onClick={() => {navigate('/detail/'+ props.res1[props.i]) }} className="c1" >
          <img src={props.recpro10.imgUrl} width="100%" />
          <h5>{props.recpro10.title}</h5>
          <p>{props.recpro10.price}</p>
        </Nav.Link>
      </div>
    );
  }

  

export default Detail;