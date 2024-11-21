const express = require('express');
const Router = express.Router();

const EmployeeTypeController = require('../controllers/employeeTypesControllers');
const EmployeesController = require('../controllers/employeesController');
const CitiesController = require('../controllers/citiesController');
const AreasController = require('../controllers/areasController');
const RoutesController = require('../controllers/routesController');
const ProductMaster = require('../controllers/productMasterController');
const FillingTypes = require('../controllers/fillingTypedController');
const ProductController = require('../controllers/ProductController');
const CafeController = require('../controllers/cafesController');
const FranchisesController = require('../controllers/franchisesController');
const CafeDeals = require('../controllers/cafeDealsController');
const CafeDealsDetails = require('../controllers/CafeDealDetailsController');
const PaymentTerms = require('../controllers/paymentTermsController');
const UserTypes = require('../controllers/userType');
const CafeUser = require('../controllers/cafeUsersController');
const CafeOrderDetails = require('../controllers/cafeOrderDetailsController')
const CafeOrder = require('../controllers/cafeOrderController')
const CafeOrderDeliveries = require('../controllers/CafeOrderDeliveriesController');
const DeliveryVendors = require('../controllers/DeliveryVendorsController');
const CafePayment = require('../controllers/CafePaymentController');
const InvoiceDetails = require('../controllers/InvoiceDetailsController');

const { verifyToken } = require('../middleware/authMiddleware');

Router.get('/protected', verifyToken, (req, res) => {
    res.json({
         message: 'This is a protected route',
         employeesId: req.employees_id,
          employeeTypeId: req.employee_type_id 
        });
});

// tbl_employee_types 
Router.post('/AddEmploytype', EmployeeTypeController.create); // Create a new Employee Type
Router.get('/GetAllEmployeeTypes', EmployeeTypeController.getAll); // Retrieve all Employee Types
Router.get('/employee-types/:id', EmployeeTypeController.findEmployeeTypeById); // Retrieve a single Employee Type by id
Router.put('/employee-types/:id', EmployeeTypeController.updateEmployeeTypeById); // Update an Employee Type by id
Router.delete('/employee-types/:id', EmployeeTypeController.deleteById); // Delete an Employee Type by id

// tbl_employees routes
Router.post('/AddEmployee', EmployeesController.createEmployee); // Create a new Employee Type
Router.get('/getAllEmployee', EmployeesController.getAllEmployees); // Retrieve all Employee Types
Router.get('/employee/:id', EmployeesController.findEmployeeById); //rerieve single id wise employee data
Router.delete('/employee/:id', EmployeesController.deleteEmployeeById); //delete an employee by id
Router.put('/employee/:id', EmployeesController.updateEmployeeById); //update employee by id
Router.post('/login', EmployeesController.loginUser); //login AK Employees 

// tbl_cities routes 
Router.post('/AddCity', CitiesController.createCity);
Router.get('/AllCities', CitiesController.getAllCities);

// tbl_areas routes
Router.post('/CreateAreas', AreasController.createArea);
Router.get('/GetAllAreas',AreasController.getAllAreas);
Router.get('/findAreaById/:id', AreasController.findAreaById);
Router.delete('/deleteAreaById/:id', AreasController.deleteAreaById);
Router.put('/updateAreaById/:id', AreasController.updateAreaById);

// tbl_routes routes
Router.post('/CreateRoutes', RoutesController.createRoute);
Router.get('/GetAllRoutes', RoutesController.getAllRoutes);
Router.get('/GetSingleRoute/:id', RoutesController.findRouteById);
Router.delete('/deleteRoute/:id', RoutesController.deleteRouteById);
Router.put('/UpdateRoutes/:id',RoutesController.updateRoute)

// product_master routes
Router.post('/createProductMaster', ProductMaster.createProductMaster);
Router.get('/getAllProductMaster', ProductMaster.getAllProductMaster);
Router.get('/GetProductmasterById/:id', ProductMaster.findProductMasterById);
Router.delete('/DeleteProductMaster/:id', ProductMaster.deleteProductMasterById);
Router.put('/updateProductMaster/:id', ProductMaster.updateProductMaster);

// filling Types routes
Router.post('/createFillingType', FillingTypes.createFillingType);
Router.get('/getAllFillingTypes', FillingTypes.getAllFillingTypes);
Router.get('/findFillingTypeById/:id', FillingTypes.findFillingTypeById);
Router.delete('/deleteFillingTypeById/:id', FillingTypes.deleteFillingTypeById)   

// Product Routes
Router.post('/createProduct', ProductController.createProduct);
Router.get('/GetAllProduct', ProductController.getAllProducts);
Router.get('/findProductById/:id', ProductController.findProductById);
Router.delete('/deleteProductById/:id', ProductController.deleteProductById);
Router.put('/UpdateProduct/:id', ProductController.updateProductById);

// cafes routes
Router.post('/createCafe', CafeController.createCafe)
Router.get('/GetAllCafes', CafeController.getAllCafes)
Router.get('/findCafeById/:id', CafeController.findCafeById)
Router.delete('/deleteCafeById/:id', CafeController.deleteCafeById)
Router.put('/UpdateCafe/:id', CafeController.updateCafe);

// Franchises routes
Router.post('/AddFranchises', FranchisesController.createFranchise);
Router.get('/GetAllFranchises', FranchisesController.getAllFranchises);
Router.get('/GetFranchisesById/:id', FranchisesController.findFranchiseById)
Router.delete('/DeleteFranchisesById/:id', FranchisesController.deleteFranchiseById)
Router.put('/UpdateFranchises/:id', FranchisesController.updateFranchiseById)

// Cafe Deals routes
Router.post('/createCafeDeal', CafeDeals.createCafeDeal);
Router.get('/GetAllCafeDeals', CafeDeals.getAllCafeDeals)
Router.get('/GetCafeDealsById/:id', CafeDeals.findCafeDealsById)
Router.delete('/DeleteCafeDeals/:id', CafeDeals.deleteCafeDeals)
Router.put('/UpdateCafeDeals/:id', CafeDeals.updateCafeDeals)

// Cafe Deals Details routes
Router.post('/CreateCafeDealsDetails', CafeDealsDetails.createCafeDealDetails);
Router.get('/GetAllCafeDealsDetails', CafeDealsDetails.getAllCafeDealsDetails);
Router.get('/GetCafeDealsDetailsById/:id', CafeDealsDetails.getCafeDealsDetailsById);
Router.delete('/DeleteCafeDealsDetails/:id', CafeDealsDetails.deleteCafeDealDetail);
Router.put('/UpdateCafeDealsDetails/:id', CafeDealsDetails.updateCafeDealDetail);

// Payment Terms routes
Router.post('/CreatePaymentTerms', PaymentTerms.createPaymentTerm);
Router.get('/GetAllPaymentTerms', PaymentTerms.getAllPaymentTerms);

// User Types routes
Router.post('/CreateUserType', UserTypes.createUserType);
Router.get('/GetAllUserTypes', UserTypes.getAllUserTypes);
Router.get('/GetUserTypeById/:id', UserTypes.findUserTypeById);
Router.delete('/DeleteUserType/:id', UserTypes.deleteUserType);
Router.put('/UpdateUserType/:id', UserTypes.updateUserType)

// Cafe User routes
Router.post('/CreateCafeUser', CafeUser.createCafeUser);
Router.get('/GetAllCafeUsers', CafeUser.getAllCafeUsers);
Router.get('/GetCafeUserById/:id',CafeUser.findCafeUserById)
Router.delete('/DeleteCafeUser/:id', CafeUser.deleteCafeUser);
Router.put('/UpdateCafeUser/:id', CafeUser.updateCafeUser)
Router.post('/loginCafeUser', CafeUser.loginCafeUser);

// Cafe order Details routes
Router.post('/CreateCafeOrderDetails', CafeOrderDetails.createCafeOrderDetails);
Router.get('/GetAllCafeOrderDetails', CafeOrderDetails.GetAllCafeOrderDetails);
Router.get('/GetCafeOrderDetailsById/:id',CafeOrderDetails.findCafeOrderDetailsById)
Router.delete('/DeleteCafeOrderDetailsById/:id', CafeOrderDetails.deleteCafeOrderDetailsById);
Router.put('/UpdateCafeOrderDetailsById/:id', CafeOrderDetails.updateCafeOrderDetailsById);

// cafe order routes
Router.post('/CreateCafeOrder', CafeOrder.createCafeOrder);
Router.get('/GetAllCafeOrders', CafeOrder.getAllCafeOrders);
Router.get('/FindCafeOrderById/:id', CafeOrder.findCafeOrderById);
Router.delete('/DeleteCafeOrder/:id', CafeOrder.deleteCafeOrder);
Router.put('/UpdateCafeOrder/:id', CafeOrder.updateCafeOrderById);

// cafe order deliveries
Router.post('/CafeOrderDeliveries', CafeOrderDeliveries.createCafeOrderDelivery);
Router.get('/GetAllCafeOrdersDeliveries', CafeOrderDeliveries.getAllCafeOrderDeliveries);

// Delivery Vendors
Router.post('/CreateDilevaryVendor', DeliveryVendors.createDeliveryVendor);
Router.get('/GetAllVendorsList', DeliveryVendors.getAllDeliveryVendors);
Router.delete('/deleteDelivaryVendor/:dv_id', DeliveryVendors.deleteVendor);
Router.put('/UpdateDelivaryVendor/:dv_id', DeliveryVendors.updateDeliveryVendor);

// cafe Payment 
Router.post('/CreateCafePayment', CafePayment.createCafePayment);
Router.get('/GetAllCafePayments', CafePayment.getAllCafePayments);
Router.delete('/DeleteCafePayment/:id', CafePayment.deleteCafePayment);
Router.put('/UpdateCafePayment/:id', CafePayment.updateCafePayment);

// Invoice Details
Router.post('/CreateInvoiceDetails', InvoiceDetails.createInvoiceDetails);
Router.get('/GetAllInvoiceDetails', InvoiceDetails.getAllInvoiceDetails);
Router.delete('/DeleteInvoiceDetails/:id', InvoiceDetails.deleteInvoiceDetails);
Router.put('/UpdateInvoiceDetails/:id', InvoiceDetails.updateInvoiceDetails);

module.exports = Router;
