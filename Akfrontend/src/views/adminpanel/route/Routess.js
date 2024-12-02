import React, { useEffect, useState, useCallback, useMemo } from "react";
import Table from "react-bootstrap/Table";
import { Button, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import SearchBox from "../../../commancomponet/Searchbox";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { HiOutlineEye, HiOutlinePencilSquare } from "react-icons/hi2"
import { useDispatch, useSelector } from "react-redux";
import {
  createRoute,
  deleteRoute,
  fetchRoutes,
  updateRoute,
} from "../../store/routeSlice";
import RouteForm from "./RouteForm";
import CommonModal from "../../../commancomponet/CommanModale";
import Pagination1 from "../../../commancomponet/Pagination1";
import BackdropAlert from "../../../commancomponet/Alert/backdropAlert";
import Backpage from "../../../commancomponet/Backpage";
import ShowModal from "../../../commancomponet/ShowModal";
import { isMobileView } from "../../../Utils/utils";
import { IoEyeOutline } from "react-icons/io5";
import { PiEyeBold, PiNotePencilBold, PiTrashBold, PiTrashLight, PiTrashThin } from "react-icons/pi"
import "./route.css";

const MemoizedSearchBox = React.memo(SearchBox);
const MemoizedPagination1 = React.memo(Pagination1);
const MemoizedRouteForm = React.memo(RouteForm);
const MemoizedBackdropAlert = React.memo(BackdropAlert);
const MemoizedBackpage = React.memo(Backpage);

function Routess() {
  const [showModal1, setShowModal1] = useState(false);

  const dispatch = useDispatch();
  const routes = useSelector((state) => state.routes.routes);
  const [searchTerm, setSearchTerm] = useState("");
  const [showUpdate, setShowUpdate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modaledata, seModaledata] = useState({});
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    varient: "success",
  });
  const pageSize = 5;

  // Memoized filtered routes
  const filteredRoutes = useMemo(() => {
    return routes.filter((r) =>
      r.route_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [routes, searchTerm]);

  // Memoized paginated routes
  const paginatedRoutes = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return filteredRoutes.slice(start, end);
  }, [filteredRoutes, currentPage, pageSize]);

  const totalPages = useMemo(
    () => Math.ceil(filteredRoutes.length / pageSize),
    [filteredRoutes.length, pageSize]
  );

  useEffect(() => {
    dispatch(fetchRoutes());
  }, [dispatch]);

  const handleAdd = useCallback(
    async (values) => {
      const newRoute = {
        name: values.name,
        route_details: values.details,
        route_start_point: values.startPoint,
        route_end_point: values.endPoint,
        cities_id: values.city,
        areas_id: JSON.stringify(values.area.map((item) => item.option)),
      };

      const response = await dispatch(createRoute(newRoute));

      if (response.meta.requestStatus === "fulfilled") {
        setAlert({ show: true, message: "Route Created!", varient: "success" });
        dispatch(fetchRoutes());
      } else {
        setAlert({
          show: true,
          message: "Failed to create route.",
          varient: "danger",
        });
      }
    },
    [dispatch]
  );

  const handleUpdate = useCallback(
    async (values) => {
      const id = selectedRoute.routes_id;
      const updatedData = {
        name: values.name,
        route_details: values.details,
        route_start_point: values.startPoint,
        route_end_point: values.endPoint,
        cities_id: values.city,
        areas_id: JSON.stringify(values.area.map((item) => item.option)),
      };

      const response = await dispatch(updateRoute({ id, updatedData }));

      if (response.meta.requestStatus === "fulfilled") {
        setAlert({ show: true, message: "Route Updated!", varient: "success" });
        dispatch(fetchRoutes());
        setShowUpdate(false);
      } else {
        setAlert({
          show: true,
          message: "Failed to update route.",
          varient: "danger",
        });
      }
    },
    [dispatch, selectedRoute]
  );

  const handleDelete = useCallback(async () => {
    if (selectedRoute) {
      const response = await dispatch(deleteRoute(selectedRoute.routes_id));

      if (response.meta.requestStatus === "fulfilled") {
        setAlert({ show: true, message: "Route Deleted!", varient: "success" });
        dispatch(fetchRoutes());
        if (paginatedRoutes.length === 1 && currentPage > 1) {
          setCurrentPage((prevPage) => prevPage - 1);
        }
      } else {
        setAlert({
          show: true,
          message: "Route not deleted. Try again later.",
          varient: "danger",
        });
      }

      setShowModal(false);
    }
  }, [dispatch, selectedRoute, paginatedRoutes.length, currentPage]);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const columns = ["SR.NO.", "Route Name", "City Name", "Action"];

  const modalContent = (
    <Row className="m-0">
      <Col className="gy-2" lg={6}><span className="fw-bold">Route Name :</span> {modaledata?.cities_name}</Col>
      <Col className="gy-2" lg={6}> <span className="fw-bold">City Name :</span> {modaledata?.route_name} </Col>
      <Col className="gy-2" lg={6}><span className="fw-bold">start point :</span> {modaledata?.route_start_point}</Col>
      <Col className="gy-2" lg={6}><span className="fw-bold">End point :</span> {modaledata?.route_name}</Col>
    </Row>
  );

  return (
    <div className="p-lg-5 route_view p-3">
      <MemoizedBackpage
        mainPage="Admin Panel"
        mainPagePath="/adminpanel"
        currentPage="Route"
      />

      <MemoizedRouteForm
        handleSubmit={handleAdd}
        isEditMode={false}
        className="row m-0 form_container p-4"
      />

      <div className="pt-5">
        <div className="row justify-content-end m-0">
          <div className="col-lg-4">
            <MemoizedSearchBox
              placeholder="Search route name"
              value={searchTerm}
              onChange={handleSearchChange}
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
            {paginatedRoutes.length > 0 ? (
              paginatedRoutes.map((item, rowIndex) => (
                <tr key={item.routes_id} className="text-center">
                  <td>{rowIndex + 1 + (currentPage - 1) * pageSize}</td>
                  <td>{item.route_name}</td>
                  <td>{item.cities_name}</td>
                  <td className="d-flex justify-content-center gap-2">
                    {isMobileView() ?
                      <button className="icon_blue"
                        onClick={(e) => {
                          e.stopPropagation();
                          seModaledata(item);
                          setShowModal1(true);
                        }}
                      >
                        <PiEyeBold
                          style={{ cursor: 'pointer' }}
                        />
                      </button>
                      :
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="tooltip-bottom">View</Tooltip>
                        }
                      >
                        <button className="icon_blue"
                          onClick={(e) => {
                            e.stopPropagation();
                            seModaledata(item);
                            setShowModal1(true);
                          }}
                        >
                          <PiEyeBold />
                        </button>
                      </OverlayTrigger>}
                    {isMobileView() ?
                      <button className="icon_green"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedRoute(item) || setShowUpdate(true)
                        }}
                      >
                        <PiNotePencilBold />
                      </button>
                      :
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="tooltip-bottom">Edit</Tooltip>
                        }
                      >
                        <button className="icon_green"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedRoute(item) || setShowUpdate(true)
                          }}>
                          <PiNotePencilBold />
                        </button>
                      </OverlayTrigger>}

                    {isMobileView() ?
                      <button className="icon_red"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedRoute(item) || setShowModal(true)
                        }}
                      >
                        <PiTrashBold />
                      </button>
                      :
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="tooltip-bottom">Delete</Tooltip>
                        }
                      >
                        <button className="icon_red"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedRoute(item) || setShowModal(true)
                          }}>
                          <PiTrashBold />
                        </button>
                      </OverlayTrigger>}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  Data not found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      {totalPages > 1 && (
        <div className="pt-4">
          <MemoizedPagination1
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
      <CommonModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        title="Delete Route"
        message="Are you sure you want to delete this route?"
        handleConfirm={handleDelete}
      />

      <ShowModal
        show={showModal1}
        setShow={setShowModal1}
        title="Route Detail"
        bodyContent={modalContent}

        data={modaledata}
      />
      <CommonModal
        show={showUpdate}
        handleClose={() => setShowUpdate(false)}
        title="Update Route"
        handleConfirm={handleUpdate}
        isUpdate={true}
        component={
          <MemoizedRouteForm
            data={selectedRoute}
            handleSubmit={handleUpdate}
            isEditMode={true}
          />
        }
      />
      <MemoizedBackdropAlert
        closeAlert={() => setAlert({ ...alert, show: false })}
        show={alert.show}
        setShow={setAlert}
        varient={alert.varient}
        message={alert.message}
      />
    </div>
  );
}

export default Routess;
