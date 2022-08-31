// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import {Container, Nav,Navbar,NavDropdown,Form,Button,Carousel,Row,Col,Accordion} from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate, Route, Router, Link, Routes, Outlet } from 'react-router-dom';
import data from './data';
import {FiPackage} from 'react-icons/fi';
import {AiOutlineUnlock , AiOutlineReload, AiOutlineTwitter, AiOutlineBehance} from 'react-icons/ai'
import {FaFacebookF, FaGlobe} from 'react-icons/fa';
import Detail from './Detail';
import Cart from './Cart.js'
import recpro from "./recpro0";
import axios from 'axios'



function App1() {
    let navigate = useNavigate();
    let [product,setProduct] = useState(data);
    let [res1,setRes1] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
    let [count, setCount] = useState(1);
    let [recpro10, setRecpro10] = useState(recpro);

  return (    
    <>
        {/* 헤드바1 */}
        <Navbar bg='black' expand='lg' variant='dark'>
        <Container>
                <Navbar.Brand onClick={()=>{navigate('/')}}>
                    <img src='/shop/img/top_bar_img.webp'/>
                </Navbar.Brand>
                <Navbar aria-controls="top-navbar-nav" />
                
                    <Nav className="me-auto">
                        <NavDropdown title="USA" id="top-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">USA</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                SPN
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">CDA</NavDropdown.Item>                    
                            <NavDropdown.Item href="#action/3.4">
                                USD
                            </NavDropdown.Item>
                        </NavDropdown>                                             
                    </Nav>                
            </Container>                        
        </Navbar>

        {/* 헤드바2 */}
        <Navbar bg="light" expand="lg">
            <Container>
                <Row>
                    <Col >
                        <Navbar.Brand onClick={()=>{navigate('/')}}>
                          <img src='/shop/img/logo.webp'/>
                        </Navbar.Brand>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/detail/0')}}>Product</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={()=>{navigate('/about')}}>About</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{navigate('/about/member')}}>
                                Member
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{navigate('/about/location')}}>Location</NavDropdown.Item>
                        </NavDropdown>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-dark">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   

        <Routes>
          <Route path='/' element={<div>
            {/* 슬라이드 */}
            <Slide/>

            {/* 타이틀1 */}
            <Title1/>

            {/* 배너1 */}
            <Banner1/>

            {/* 타이틀2 */}
            <Title2/>

            {/* 타이틀2 밑 버튼 */}
            <Container style={{textAlign:"center"}}>
            <Button variant="outline-primary"  onClick={()=>{
                let copy3 = [...product].sort((a, b) =>
                  a.title > b.title ? 1 : -1,
                );
         
                setProduct(copy3);
                product = copy3;
       
                var res=[];
                for(let i in product) {
                  res.push(product[i].id);
                }
                setRes1(res1=res);

              }}>이름순 정렬</Button>{' '}
                <Button variant="outline-secondary" onClick={()=>{
                  let copy4 = [...product].sort((a, b) =>
                    a.price > b.price ? 1 : -1,
                  );
           
                  setProduct(copy4);
                  product = copy4;
                  var res=[];
                  for(let i in product) {
                    res.push(product[i].id);
                  }
                  setRes1(res1=res);
 
              }}>낮은가격순 정렬</Button>{' '}
              
              <Button variant="outline-success" onClick={()=>{
                let copy5 = [...product].sort((a, b) =>
                b.price > a.price ? 1 : -1,
              );
              setProduct(copy5);

              var res=[];
              for(let i in product) {
                res.push(product[i].id);
              }
              setRes1(res1=res);
                

              }}>높은가격순 정렬</Button>{' '}
  
            </Container>    

            {/* 상품 */}  
            <div className='container'>
              <div className='row'>
                {
                  product.map((ele,i)=>{
                    return(
                      <Product product={product[i]} res1={res1} i={i} />
                    );
                  })
                }
              </div>
            </div>

            {/* 배너2 */}
            <Banner2/>

            {/* 타이틀3 */}
            <Title3/>

            {/*타이틀3 밑 상품*/}
            <div className="container">
            <div className="row">
                      {
                        recpro10.map((ele, i) => {
                          return (
                            <Recpro recpro10={recpro10[i]}  />
                          
                          )
                        })
                      }
                    </div>
            </div>            
            <div className="col-md-12" style={{display:"flex",flexFlow:"row",justifyContent:"center"}}>
              <Button variant="dark" count = {count} onClick={() => {
                 if(count==1){
                    axios.get('https://huiiii0.github.io/react_data/recpro1.json').then((result)=>{
                      let copy10 =[...recpro10, ...result.data];
                      setRecpro10(copy10);
                      setCount(2);
                    })}else if(count==2){
                        axios.get('https://huiiii0.github.io/react_data/recpro2.json').then((result)=>{
                          let copy11 =[...recpro10, ...result.data];
                          setRecpro10(copy11);
                          setCount(3);
                        })   
                      }
      
                      if(count===3){
                        alert("더이상 상품이 없습니다.");  
                      }
                    }}> + 3개 상품 더 보기 </Button>{' '}
                    </div>

            {/* 배너3 */}
            <Banner3/>

            {/* 아이콘 */}
            <Icon/>

            
          </div>}></Route>

          {/* 상세페이지 라우터 */}
          <Route path='/detail/:id' element={<Detail product={product}/>}></Route>
          <Route path="/cart" element={<Cart/>}/>

          {/* 회사정보 라우터 */}
          <Route path='about' element={<About/>}>
            <Route path='about/member' element={<div>Member</div>}/>
            <Route path='about/location' element={<div>Location</div>}/>
          </Route>

          {/* 404페이지 */}
          <Route path='*' element={<div className='container' style={{display:"flex",flexFlow:"row",justifyContent:"center",marginTop:"100px"}}>
            <h3>없는 페이지입니다.</h3>
            </div>}/>
          </Routes>

        {/* 슬라이드 배너 */}
        <Slide2/>

        {/* 푸터 */}
        <Footer/>
    
    </>    
  );
}

/*슬라이드*/
function Slide (){
  let navigate=useNavigate();
    return(
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/shop/img/slide_img1.jpg"
          alt="First slide"
        />        
        <Carousel.Caption>
          <Button variant='warning' onClick={()=>{navigate('/detail/0')}}>Shop Now</Button>
          <br/><br/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/shop/img/slide_img2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <Button variant='primary' onClick={()=>{navigate('/detail/0')}}>Shop Now</Button>
          <br/><br/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/shop/img/slide_img3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Button variant='danger' onClick={()=>{navigate('/detail/0')}}>Shop Now</Button>
          <br/><br/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

/** 타이틀1  */
function Title1 (){
    let csst1 = {
      marginTop:"170px",
      marginBottom:"70px",
      textAlign:"center",
      fontSize:"40px"
    }
    return(
      <>
        <h1 style={csst1}>SHOP CATEGORY</h1>
      </>
    );
  }

  /** 배너1 */
  function Banner1 (){
    let navigate=useNavigate();
    return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 col-xl-4' style={{backgroundImage:'url(/shop/img/banner1_img1.png)',backgroundSize:'cover', textAlign:"right", height:"280px"}}>
          <h1 style={{marginTop:"50px"}}>Woman`s</h1>
          <button className='banner1_btn' onClick={()=>{navigate('/detail/0')}}>Best New Deals</button><br/>
          <p style={{marginTop:"-15px",fontSize:"20px",color:"#0071fe",fontWeight:"bold"}}><i>New Collection</i></p>
        </div>
        <div className='col-md-12 col-xl-4' style={{backgroundImage:'url(/shop/img/banner1_img2.jpg)',backgroundSize:'cover', textAlign:"right", height:"280px"}}>
          <p style={{marginTop:'50px',fontSize:"20px",color:"#0071fe",fontWeight:"bold"}}><i>Discount!</i></p>
          <h1>Winter Cloth</h1>
          <p style={{marginTop:"-15px",fontSize:"20px",color:"#0071ff",fontWeight:"bold"}}><i>New Collection</i></p>
        </div>
        <div className='col-md-12 col-xl-4' style={{backgroundImage:'url(/shop/img/banner1_img3.jpg)',backgroundSize:'cover', textAlign:"right", height:"280px"}}>
          <h1 style={{marginTop:"50px"}}>Man`s Cloth</h1>
          <button className='banner1_btn' onClick={()=>{navigate('/detail/0')}}>Best New Deals</button><br/>
          <p style={{marginTop:"-15px",fontSize:"20px",color:"#0071fe",fontWeight:"bold"}}><i>New Collection</i></p>
        </div>
      </div>
    </div>
    );
  }

  /** 타이틀2 */
  function Title2 (){
    let csst1 = {
      marginTop:"170px",
      marginBottom:"60px",
      textAlign:"center",
      fontSize:"40px"
    }
    return(
      <>
        <h3 style={csst1}>TODAY 랭킹</h3>
      </>
    );
  }

  /** 상품 */
  function Product (props){
    let csst1 = {
      textAlign:"center"
    }
    let navigate = useNavigate();
    return(
      <div className='col-md-4' style={csst1}>
        <Nav.Link onClick={() => {navigate('/detail/'+ props.res1[props.i]) }} className="c1" >
          <img src={props.product.imgUrl} width="100%" />
          <h5>{props.product.title}</h5>          
          <p>{props.product.price}</p>
        </Nav.Link>    
      </div>
    );
  }

  /** 타이틀3 */
  function Title3 (){
    let csst1 = {
      marginTop:"170px",
      marginBottom:"60px",      
      textAlign:"center",
      fontSize:"40px"
    }
    return(
      <>
        <div className='container'>
          <h3 style={csst1}>NEW 신상 모아보기</h3>
        </div>
        
      </>
    );
  }

  /** 신상모아보기 */
  function Recpro(props) {
    let navigate = useNavigate();
    return (
      <div className="col-md-4">
        <Nav.Link className="c1" >
          <img src={props.recpro10.imgUrl} width="100%" />
          <h5>{props.recpro10.title}</h5>
          <p>{props.recpro10.price}</p>
        </Nav.Link>
      </div>
    );
  }

  /** 배너2 */
  function Banner2 (){
    let csst1 = {
      marginTop:"170px"    
    }
    let navigate=useNavigate();
    return(
      <div className='container-fluid' style={csst1}> 
        <div className='row d-flex justify-content-center'>
          <div className='col-md-9 col-sm-10' style={{
            background:"lightyellow",
            backgroundImage:"url(/shop/img/banner2_img1.webp)",            
            backgroundRepeat:"no-repeat",
            height:"450px",
            backgroundPosition:"8% 0%"
          }}>
            <div className='container'>
              <div className='row'>                                          
                <div className='col-md-4'></div>
                <div className='col-md-8' style={{background:"lightyellow",height:"450px",display:"flex", flexFlow:"column wrap", justifyContent:"center"}}>
                  <h1>Find The Best Product<br/>from Our Shop</h1>
                  <p>Designers who are interesten creating state ofthe.</p>
                  <button className='banner2_btn' onClick={()=>{navigate('/detail/0')}}>Shop Now</button>
                </div>                                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /** 배너3 */
  function Banner3 (){
    let csst1 = {
      marginTop:"170px"
    }    
    return(
      <div className='container-fluid' style={csst1}>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-9' style={{
            backgroundImage:"url(/shop/img/banner4_back.webp)",
            backgroundSize:"cover",
            height:"450px"
          }}>
            <div className='row d-flex justify-content-center align-items-center' style={{height:"450px"}}>
              <div className='col-md-4'>
                <h1>Get Our<br/>Latest Offers News</h1>
              </div>
              <div className='col-md-4'>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="primary">Search</Button>
                </Form>
              </div>  
            </div>            
          </div>
        </div>
      </div>
    );
  }

  /** 아이콘 */
  function Icon (){
    let csst1 = {
      marginTop:"170px"
    }
    let csst2 = {
      fontSize:"50px"
    }
    return(
      <div className='container' style={csst1}>
        <div className='col-md-12'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <h1 style={csst2}><FiPackage/></h1>
                <h4>Free Shipping Method</h4>
                <p>aorem ixpsacdolor sit<br/>ameasecur adipisicing elitsf<br/>edasd.</p>
              </div>
              <div className='col-md-4'>
                <h1 style={csst2}><AiOutlineUnlock/></h1>
                <h4>Secure Payment System</h4>
                <p>aorem ixpsacdolor sit<br/>ameasecur adipisicing elitsf<br/>edasd.</p>
              </div>
              <div className='col-md-4'>
                <h1 style={csst2}><AiOutlineReload/></h1>
                <h4>Secure Payment System</h4>
                <p>aorem ixpsacdolor sit<br/>ameasecur adipisicing elitsf<br/>edasd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /** 푸터 위 슬라이드 */
  function Slide2 (){
    let csst1 = {
      marginTop:"170px",
      marginBottom:"170px"
    }
    return(
      <Carousel variant="dark" style={csst1}>
        <Carousel.Item> 
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-3' style={{
                backgroundImage:"url(/shop/img/banner5_img1.png)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                height:"300px"
              }}></div>
              <div className='col-md-3' style={{
                backgroundImage:"url(/shop/img/banner5_img2.png)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                height:"300px"
              }}></div>
              <div className='col-md-3' style={{
                backgroundImage:"url(/shop/img/banner5_img3.png)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                height:"300px"
              }}></div>
              <div className='col-md-3' style={{
                backgroundImage:"url(/shop/img/banner5_img4.png)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                height:"300px"
              }}></div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-3' style={{
                backgroundImage:"url(/shop/img/banner5_img5.png)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                height:"300px"
              }}></div>
              <div className='col-md-3' style={{
                backgroundImage:"url(/shop/img/banner5_img6.avif)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                height:"300px"
              }}></div>    
              <div className='col-md-3' style={{
                backgroundImage:"url(/shop/img/banner5_img7.avif)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                height:"300px"
              }}></div> 
              <div className='col-md-3' style={{
                backgroundImage:"url(/shop/img/banner5_img8.jpg)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"center",
                height:"300px"
              }}></div>     
            </div>
          </div>          
        </Carousel.Item>
      </Carousel>
    );
  }

  /** 푸터 */
  function Footer (){
    let csst1 = {
      marginTop:"170px",
      background:"#eee",      
    }

    let csst2 = {      
      background:"#aaa"
    }
    
    let csst3 = {
      marginTop:"15px"
    }

    let navigate = useNavigate();
    return(
      <>
      <div className='container-fluid' style={csst1}>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-3'>
                <h1 style={csst3}><img src='/shop/img/logo.webp'/></h1>
                <p>Lorem ipsum dolor sit amet,<br/>consectetur adipisicing elit sed<br/>do eiusmod tempor incididunt<br/>ut labore.</p>
              </div>
              <div className='col-md-3'>
                <h4 style={csst3}>Quick Links</h4>
                <ul>
                  <li onClick={()=>{navigate('/detail/0')}}>About</li>
                  <li>Offers & Discounts</li>
                  <li>Get Coupon</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className='col-md-3'>
                <h4 style={csst3}>New Products</h4>
                <ul>
                  <li>Woman Cloth</li>
                  <li>Fashion Accessories</li>
                  <li>Man Accessories</li>
                  <li>Rubber made Toys</li>
                </ul>
              </div>
              <div className='col-md-3'>
                <h4 style={csst3}>Support</h4>
                <ul>
                  <li>Frequently Asked Questions</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Report a Payment Issue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={csst2}>
        <div className='col-md-12'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10'>
                <p style={{color:"#666"}}>Copyright ©2022 All rights reserved | This template is made with</p>
              </div>
              <div className='col-md-2' style={{display:"flex", justifyContent:"space-evenly", marginTop:"5px"}}>
                <AiOutlineTwitter/>
                <FaFacebookF/>
                <AiOutlineBehance/>
                <FaGlobe/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>      
    );
  }

  /*** 자주 묻는 질문 */
  function About (){
    let csst1 = {
      background:"#eee"
    }

    let csst2 = {
      marginTop:"50px"
    } 
    return(
      <>
        <div className='container'>
          <h3 style={{marginTop:"50px",borderBottom:"1px solid #666",paddingBottom:"20px"}}>자주묻는 질문</h3>
          <Outlet></Outlet>
        </div>

        {/*취소/환불/교환 관련*/}
        <div className='container' style={csst2}>
          <h4 style={{color:"#666"}}>취소/환불/교환 관련</h4>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header>주문을 취소하고 싶어요!</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
          주문은 [MY 페이지] 메뉴에서 직접 취소 가능합니다.<br/><br/>
          - 결제대기/결제완료/상품준비중 : 고객님께서 직접 주문취소 가능한 상태<br/>
          - 배송준비중 : 스토어 배송 준비 기간으로 결제일로부터 3영업일(주말/공휴일 제외)간 즉시 주문취소 불가 상태<br/><br/>
          만약, 3영업일 이내 주문 취소를 원하실 경우 Estore.를 통해 구매한 스토어 Q&A/카카오톡/전화로 직접 주문취소 요청 또는 [Estore. 고객센터]로 가능 여부를 확인해 주셔야 합니다.<br/>
          스토어측 연락이 어려울 경우, 주문/배송조회 ▶ 상품사진클릭 ▶ 상세페이지 ▶ Q&A 게시글 작성 바랍니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>주문취소/환불 시 사용한 포인트와 쿠폰은 복원 되나요?</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            [포인트]<br/> 
            - 취소/환불 완료 즉시 환급됩니다.<br/>
            (Estore. ▶ MY페이지 ▶ 포인트)<br/>
            - 단, 부분취소/환불의 경우 <br/>
            사용한 포인트의 비율을 나누어, 취소상품 적용 후 환급됩니다. <br/><br/>
            [쿠폰]<br/>
            - 취소/환불 완료 즉시 복원됩니다. <br/>
            - 유효 기간이 지났을 경우 자동소멸됩니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>환불을 포인트로 받을 수 있나요?</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            주문취소 또는 환불 시 결제하셨던 수단으로만 환급이 가능합니다.<br/><br/>
            따라서 포인트 환불은 어렵습니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>현재 판매가 보다 비싸게 샀어요. 차액 환불 가능한가요?</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            상품 할인율은 변동될 수 있으며, 판매 가격 변동에 따른 차액을 보상해드리지 않습니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>환불된 금액이 처음 결제했던 금액과 달라요!</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            환불금액의 경우 실제 결제된 금액과 동일하게 진행 됩니다.<br/><br/>
            쿠폰 또는 포인트가 사용 되었을 경우 해당 할인 혜택은 제외 후 환불 됩니다. <br/><br/>
            [주문/배송조회 ▶ 주문상세보기] 통해 사용한 쿠폰 및 포인트를 제외한 결제금액 확인 부탁드립니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>

        {/*주문/결제/배송 관련*/}
        <div className='container' style={csst2}>
          <h4 style={{color:"#666"}}>주문/결제/배송 관련</h4>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header>구입한 상품에 대한 거래 명세서 발급 가능한가요?</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            거래 명세서의 경우 직접 발급이 불가합니다.<br/><br/>
            주문 후 Estore. 고객센터 또는 카카오채널 [@Estore.]로 문의 바랍니다.<br/><br/>
            단, 결제수단이 네이버페이/카카오페이/토스일 경우 해당 결제사로 문의 바랍니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>현금영수증 발급은 어떻게 하나요?</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            현금 영수증은 결제하기 단계에서 신청 가능합니다.<br/><br/>
            [현금 영수증 신청 방법]<br/>
            1) 결제하기 단계에서 현금 영수증 발행 가능한 결제수단 선택 ( 무통장입금 )<br/>
            2) [현금 영수증 발행 여부]에서 소득공제용, 지출증빙용 선택<br/>
            3) 번호 입력 후 주문<br/><br/><br/>
            ※ 주문 후 신청을 원할 경우 [구매자 성함/연락처/상품명/상품 금액/이메일]과 함께 Estore. 고객센터 또는 카카오채널 [@Estore.]로 문의 바랍니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>주문 취소한 가상계좌에 입금을 했어요!</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            주문 취소된 주문건에 대하여 입금 하였을 경우 자동 환불이 되지 않습니다.<br/><br/>
            번거로우시겠지만 환급 받을 은행명/예금주명/계좌번호와 함께 Estore. 고객센터 또는 카카오채널 [@Estore.]로 문의 바랍니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>무통장입금(가상계좌) 입금 시 없는 계좌로 나와요!</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            입금 불가 시, 아래 항목에서 사유를 확인 바랍니다.<br/><br/>
            - 가상 계좌번호 유효 기간 확인<br/>
            - 결제 금액과 입금 금액의 일치 여부 확인<br/>
            - 송금 어플 혹은 ATM기기 오류 ▶ 은행 방문하여 직접 입금
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>무통장입금(가상계좌) 입금했는데 입금요청 문자가 왔어요!</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            결제완료된 주문 건이지만 입금요청 문자는 다시 한번 안내 될 수 있습니다.<br/><br/><br/>
            이미 입금하였을 경우 재입금하지 않아도 되며 정상 주문되었는지 여부는<br/>
            [MY페이지 ▶ 주문/배송조회] 에서 주문상태 확인 부탁드립니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>

        {/*쿠폰/포인트/친구추천 관련*/}
        <div className='container' style={csst2}>
          <h4 style={{color:"#666"}}>쿠폰/포인트/친구추천 관련</h4>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header>추천인코드를 확인하고 싶어요!</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            내 추천인 코드는 Estore. 앱 내 MY페이지 ▶ 친구초대 에서 확인 가능합니다.<br/><br/>
            ※ 추천인 코드는 정확하게 입력해주셔야 하며 가입 후 등록 불가합니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>포인트 적립 방법과 적립금액이 궁금합니다!</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            [구매 적립]<br/>
            배송완료 이후 구매확정 시 구매금액의 1% 적립이 됩니다.<br/><br/>
            (실제 상품금액에 포인트/쿠폰이 적용 될 경우, 1% 적립금 금액은 상이할 수 있음)<br/><br/>
            [리뷰 작성]<br/>
            구매확정 후,  첫 포토리뷰/텍스트리뷰 중 먼저 남겨주신 건에 한해 1회 즉시 적립 가능합니다.<br/><br/>
            (동일 상품의 동일 옵션 구매 시 구매 횟수와 상관 없이 리뷰는 1회만 작성 가능함)<br/><br/>
            [친구초대 적립]<br/>
            추천인 코드 입력을 통한 포인트 적립이 가능합니다.<br/><br/> 
            (초대 횟수를 초과할 경우, 신규 가입 회원에게만 포인트 지급됨)<br/><br/> 
            [이벤트 참여] <br/>
            Estore.에서 진행하는 다양한 이벤트에 참여 하시면 해당 이벤트 기준 포인트 지급이 됩니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>쿠폰이 상품에 적용되지 않아요!</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            쿠폰은 결제 단계에서 직접 적용하여 사용 가능합니다.<br/><br/>
            쿠폰적용이 가능한 경우, [적용하실 쿠폰을 선택하세요]<br/><br/>
            쿠폰적용이 어려운 경우, [적용할 수 있는 쿠폰이 없습니다] 로 확인됩니다.<br/><br/>
            사용이 어려울 경우 아래 사유 확인 바랍니다.<br/><br/> 
            1) 쿠폰은 장바구니 합산 전체 금액 적용이 아닙니다.<br/>
            각 상품마다 적용되는 부분으로 금액 제한이 있는 쿠폰의 경우, 단품의 금액을 확인하신 뒤 사용 부탁 드립니다.<br/>
            2) 쿠폰 적용 카테고리 확인<br/>
            [전체/브랜드/쇼핑몰/라이프/디지털 등]<br/>
            3) 쿠폰 유효기간 확인<br/> 
            보유하고 계신 쿠폰은 MY 페이지 ▶ 쿠폰 ▶ [사용가능] 탭에서 확인 가능합니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>포인트는 어떻게 사용하나요?</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            마지막 결제 단계에서 1P = 1원으로 적용하여 차감 사용하실 수 있으며,<br/><br/>
            총 결제금액의 10%까지 포인트 적용이 가능 합니다.<br/><br/><br/>
            ※ 포인트 유효기간은 적립일로부터 6개월 내 사용 가능합니다. 기간 만료된 포인트는 자동소멸되어 재지급 불가합니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>무료배송 혜택 기준이 뭔가요?</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            Estore.는 전상품 무료배송입니다.<br/><br/>
            - 제주도 및 도서산간 지역은 별도의 배송비가 추가 될 수 있습니다.<br/><br/>
            - 구매 후 교환/반품을 진행하실 경우 사유에 따라 배송비를 부담하실 수 있습니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>

        {/*리뷰관련*/}
        <div className='container' style={csst2}>
          <h4 style={{color:"#666"}}>리뷰 관련</h4>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header>리뷰 작성 기준이 궁금해요!</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            리뷰는 텍스트/포토 리뷰 중 1회만 작성 가능하며 리뷰 작성 시, 포인트가 즉시 지급됩니다.<br/><br/>
            - 포토리뷰 : 직접 촬영한 상품 사진으로 등록해야 합니다.<br/>
            - 텍스트리뷰 : 상품에 대한 내용을 바탕으로 작성해야 합니다.<br/><br/><br/>
            ※유의사항<br/><br/>
            상품과 무관한 사진 또는 부적절한 내용 작성 시 사전 안내 없이 삭제 되는 점 참고 바랍니다.<br/><br/>
            동일 상품으로 여러 개 구매하였을 경우, 상품별 1회만 리뷰 작성이 가능합니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>리뷰는 구입 후 언제까지 작성 가능한가요?</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            리뷰 작성은 구매확정일로부터 15일 이내 작성 가능합니다.<br/><br/>
            기간 이후에는 작성이 불가하기 때문에  정해진 기간 내 작성 바랍니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>리뷰를 삭제하거나 수정할 수 있나요?</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            리뷰 작성 완료 후 텍스트는 수정이 가능하나, 포토리뷰는 수정이 불가합니다.<br/><br/>
            삭제 후 리뷰 재작성은 불가한 점 참고 부탁드립니다.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>리뷰를 작성하고 싶어요!</Accordion.Header>
        <Accordion.Body style={csst1}>
          <p style={{fontWeight:"bold"}}>
            상품 수령 후 교환/환불 의사 없을 경우 구매확정 클릭 ▶ 리뷰 작성 가능합니다.<br/><br/>
            1) APP ▶ 하단 오른쪽 사람 모양 아이콘 클릭 <br/>
            2) MY 페이지 ▶ 주문/배송조회 또는 MY 리뷰 ▶ [리뷰 쓰고 포인트 받기] 클릭
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
      </>
    );
  }




export default App1;