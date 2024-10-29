import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import SearchBox from "../../../commancomponet/Searchbox";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaEdit, FaEllipsisV, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../store/areaSlice";
import { createRoute, deleteRoute, fetchRoutes, updateRoute } from "../../store/routeSlice";
// import CustomPagination from "../../../commancomponet/CustomPagination";
import RouteForm from "./RouteForm";
import CommonModal from "../../../commancomponet/CommanModale";

function Routess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const route = useSelector((state) => state.routes.routes);
  const cities = useSelector((state) => state.areas.cities);
  const [searchTerm, setSearchTerm] = useState("");

  // Collect all form data in one state
  const [formData, setFormData] = useState({
    routeName: "",
    routeDetails: "",
    routeStartPoint: "",
    routeEndPoint: "",
    city: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    dispatch(fetchRoutes());
    dispatch(fetchCities());
  }, [dispatch]);

  const transformedCities = cities.map((city) => ({
    label: city.name,
    option: city.cities_id,
  }));

  const columns = ["SR.NO.", "Route Name", "City Name", "Status"];

  const handleAdd = async (values) => {

  
    // const data = JSON.stringify(values.area.map(item => item.option));
    
    
    const newRoute = {
      name: values.name,
      route_details: values.details,
      route_start_point: values.startPoint,
      route_end_point: values.endPoint,
      cities_id: values.city,
      areas_id: JSON.stringify(values.area),
    };


    // const newRoute = {
    //   name: values.name,
    //   route_details: values.details,
    //   route_start_point: values.startPoint,
    //   route_end_point: values.endPoin,
    //   cities_id: values.city,
    //   areas_id: values.area,
    // };

    await dispatch(createRoute(newRoute));
    dispatch(fetchRoutes());
  };

  const handleUpdateModalOpen = (route) => {
    setSelectedRoute(route);
    setShowUpdate(true);
  };

  // const filteredRoutes = route.filter((route) =>
  //   route.route_name.toLowerCase().includes(searchTerm.toLowerCase())
  // );


  // const filteredRoutes = route.filter(
  //   (route) => route.route_name && searchTerm && route.route_name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  

//   const handleUpdate = async (values) => {
//     console.log("Form Data Submitted:", values);

//  const id =setSelectedRoute.routes_id
 	
//     const data={
   
//       name:values.name,
//       route_details:values.details,
//       route_start_point:values.startPoint,
//       route_end_point:values.endPoint,
//       cities_id: values.city,
//       areas_id: values.area,
// }

//     await dispatch(updateRoute({data, id: id}));
//     dispatch(fetchRoutes());
//     setShowUpdate(false);
//   };

const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
};
const handleUpdate = async (values) => {

  const id = selectedRoute.routes_id;

  const data = {
    name: values.name,
    route_details: values.details,
    route_start_point: values.startPoint,
    route_end_point: values.endPoint,
    cities_id: values.city,
    areas_id: JSON.stringify(values.area),
  };
  await dispatch(updateRoute({ id, updatedData: data }));
  dispatch(fetchRoutes());
  setShowUpdate(false);
};




  const handleDeleteModal = (item) => {
    setSelectedRoute(item);
    setShowModal(true);
  };
  const handleDelete = async () => {
    if (selectedRoute) {

      await dispatch(deleteRoute(selectedRoute.routes_id));
      dispatch(fetchRoutes());
      setShowModal(false);
    }
  };

  return (
    <div className="p-lg-5">
      <div className="pb-2">
        <span
          onClick={() => navigate("/dashboard/adminpanel")}
          style={{ color: "#7B3F00", cursor: "pointer" }}
          className="fs-5 fw-bold"
        >
          Adminpanel
        </span>
        <span style={{ color: "#7B3F00" }}>
          {" "}
          <FaArrowRight />
        </span>
        <span className="fs-5 fw-bold " style={{ color: "#7B3F00" }}>
          {" "}
          Route{" "}
        </span>
      </div>

      <RouteForm
        handleSubmit={handleAdd}
        isEditMode={false}
        className="row m-0 border rounded p-4"
      />

      <div className="pt-5">
        <div className="row justify-content-end m-0">
          <div className="col-lg-4">
            <SearchBox
              placeholder="Search route name"
              value={searchTerm}
              // onChange={handleSearchChange}
              // onSearch={handleSearchClick}
            />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Table responsive="sm">
          <thead>
            <tr className="text-center">
              {columns.map((column, index) => (
                <th
                  key={index}
                  style={{ backgroundColor: "#F2ECE6", color: "#7B3F00" }}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {route.map((item, rowIndex) => (
              <tr key={item.id} className="text-center">
                <td>{rowIndex + 1}</td>
                <td>{item.route_name}</td>
                <td>{item.cities_name}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handleUpdateModalOpen(item)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="me-2"
                      onClick={() => {
                        handleDeleteModal(item);
                      }}
                    >
                      <FaTrash />
                    </Button>
                    <Button
                      size="sm"
                      style={{
                        background: "white",
                        border: "none",
                        color: "black",
                      }}
                    >
                      <FaEllipsisV />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>




      <div className="pt-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                <FaChevronLeft /> {/* Left arrow icon */}
              </a>
            </li>
            <li className="page-item ">
              <a
                className="page-link text-white"
                style={{ backgroundColor: "#7B3F00" }}
                href="#"
              >
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <FaChevronRight /> {/* Right arrow icon */}
              </a>
            </li>
          </ul>
        </nav>
      </div>


      {/* <div className="pt-4 float-end">
        <CustomPagination totalPages={5} currentPage={currentPage} onPageChange={(page) => { setCurrentPage(page) }} />
      </div> */}

      <CommonModal
        show={showModal}
        handleClose={() => {
          setShowModal(false);
        }}
        title={"Delete Route"}
        message={"Are you sure you want to delete this route?"}
        handleConfirm={handleDelete}
      />

      <CommonModal
        show={showUpdate}
        handleClose={() => {
          setShowUpdate(false);
        }}
        title={"Update Route"}
        handleConfirm={handleUpdate}
        isUpdate={true}
        modalForm={
          <RouteForm
            data={selectedRoute}
            handleSubmit={handleUpdate}
            isEditMode={true}
          />
        }
      />
    </div>
  );
}

export default Routess;
