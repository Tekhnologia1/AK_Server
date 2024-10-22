// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import product from "../../assets/images/Vector (18).png";

// function Adminpanel() {
//   return (
//     <div className="p-lg-5">
//       <div className="p-4 border" style={{ backgroundColor: "#F2ECE6" }}>
//         <Row className="m-0  justify-content-between ">
//         <Col lg={3} className=" d-flex justify-content-center gy-3">
//             <Card style={{ width: "20rem" }} className="pb-3">
//               <Card.Body>
//                 <div className=" d-flex justify-content-center pt-3">
//                   <img src={product} alt="j" height={"32px"} width={"32px"} />
//                 </div>
//                 <div className=" d-flex justify-content-center pt-3  pb-2 fs-5" style={{color:' #7B3F00' ,fontWeight:600}}>Product</div>
//               </Card.Body>
//             </Card>
//           </Col>



//           <Col lg={3} className=" d-flex justify-content-center gy-3">
//             <Card style={{ width: "20rem" }} className="pb-3">
//               <Card.Body>
//                 <div className=" d-flex justify-content-center pt-3">
//                   <img src={product} alt="j" height={"32px"} width={"32px"} />
//                 </div>
//                 <div className=" d-flex justify-content-center pt-3  pb-2 fs-5" style={{color:' #7B3F00' ,fontWeight:600}}>Product</div>
//               </Card.Body>
//             </Card>
//           </Col>


//           <Col lg={3} className=" d-flex justify-content-center gy-3">
//             <Card style={{ width: "20rem" ,boxShadow: '#7B3F00'}} className="pb-3">
//               <Card.Body>
//                 <div className=" d-flex justify-content-center pt-3">
//                   <img src={product} alt="j" height={"32px"} width={"32px"} />
//                 </div>
//                 <div className=" d-flex justify-content-center pt-3  pb-2 fs-5" style={{color:' #7B3F00' ,fontWeight:600}}>Product</div>
//               </Card.Body>
//             </Card>
//           </Col>


    

//           <Col lg={3} className=" d-flex justify-content-center gy-3">
//             <Card style={{ width: "20rem" }} className="pb-3">
//               <Card.Body>
//                 <div className=" d-flex justify-content-center pt-3">
//                   <img src={product} alt="j" height={"32px"} width={"32px"} />
//                 </div>
//                 <div className=" d-flex justify-content-center pt-3  pb-2 fs-5" style={{color:' #7B3F00' ,fontWeight:600}}>Product</div>
//               </Card.Body>
//             </Card>
//           </Col>

//         </Row>
//       </div>
//     </div>
//   );
// }

// export default Adminpanel;



import React from "react";
import { Row, Col, Card } from "react-bootstrap";
// import cardData from "./cardData.json"; // Import the JSON data
import Adminpaneldata from "../jsondata/Adminpaneldata";
import { useNavigate } from "react-router-dom";


function Adminpanel() {
  const navigate=useNavigate()
  return (
    <div className="p-lg-5">



      <div className="ps-lg-4 pe-lg-4 pb-5  border" style={{ backgroundColor: "#F2ECE6" }} >
        <Row className="m-0 justify-content-between pb-5">
          {Adminpaneldata.map((card) => (
            <Col lg={3} key={card.id} className="d-flex justify-content-center gy-5 " >
              <Card
                style={{
                  width: "20rem",
                  boxShadow: card.boxShadow ? "#7B3F00 0px 4px 8px" : "none",
                }}
                className="pb-3"
                onClick={()=>{
                  navigate(card.path)
                }}
              >
                <Card.Body>
                  <div className="d-flex justify-content-center pt-3">
                    <img
                      src={card.imageSrc}
                      alt={card.altText}
                      height={card.imageHeight}
                      width={card.imageWidth}
                    />
                  </div>
                  <div
                    className="d-flex justify-content-center pt-3 pb-2 fs-5"
                    style={{ color: card.color, fontWeight: 600 }}
                  >
                    {card.title}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Adminpanel;
