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
const Invoice = require('../controllers/InvoiceController');
const MarketingEnquiries = require('../controllers/marketingEnquiriesController')

const { verifyToken } = require('../middleware/authMiddleware');

Router.get('/protected', verifyToken, (req, res) => {
    res.json({
         message: 'This is a protected route',
         employeesId: req.employees_id,
          employeeTypeId: req.employee_type_id,
          cafeId: req.cafe_id,
          userTypeId: req.user_type_id,
          cafeUserId: req.cafe_users_id
        });
});

// tbl_employee_types 
Router.post('/AddEmploytype',verifyToken, EmployeeTypeController.create); // Create a new Employee Type
Router.get('/GetAllEmployeeTypes',verifyToken, EmployeeTypeController.getAll); // Retrieve all Employee Types
Router.get('/employee-types/:id',verifyToken, EmployeeTypeController.findEmployeeTypeById); // Retrieve a single Employee Type by id
Router.put('/employee-types/:id',verifyToken, EmployeeTypeController.updateEmployeeTypeById); // Update an Employee Type by id
Router.delete('/employee-types/:id',verifyToken, EmployeeTypeController.deleteById); // Delete an Employee Type by id

// tbl_employees routes
Router.post('/AddEmployee', EmployeesController.createEmployee); // Create a new Employee Type
Router.get('/getAllEmployee',verifyToken, EmployeesController.getAllEmployees); // Retrieve all Employee Types
Router.get('/employee/:id',verifyToken, EmployeesController.findEmployeeById); //rerieve single id wise employee data
Router.delete('/employee/:id',verifyToken, EmployeesController.deleteEmployeeById); //delete an employee by id
Router.put('/employee/:id',verifyToken, EmployeesController.updateEmployeeById); //update employee by id
Router.post('/login', EmployeesController.loginUser); //login AK Employees 

// tbl_cities routes 
Router.post('/AddCity',verifyToken, CitiesController.createCity);
Router.get('/AllCities',verifyToken, CitiesController.getAllCities);

// tbl_areas routes
Router.post('/CreateAreas',verifyToken, AreasController.createArea);
Router.get('/GetAllAreas', verifyToken, AreasController.getAllAreas);
Router.get('/findAreaById/:id',verifyToken, AreasController.findAreaById);
Router.delete('/deleteAreaById/:id',verifyToken, AreasController.deleteAreaById);
Router.put('/updateAreaById/:id',verifyToken, AreasController.updateAreaById);

// tbl_routes routes
Router.post('/CreateRoutes',verifyToken, RoutesController.createRoute);
Router.get('/GetAllRoutes',verifyToken, RoutesController.getAllRoutes);
Router.get('/GetSingleRoute/:id',verifyToken, RoutesController.findRouteById);
Router.delete('/deleteRoute/:id',verifyToken, RoutesController.deleteRouteById);
Router.put('/UpdateRoutes/:id',verifyToken, RoutesController.updateRoute)

// product_master routes
Router.post('/createProductMaster',verifyToken, ProductMaster.createProductMaster);
Router.get('/getAllProductMaster',verifyToken, ProductMaster.getAllProductMaster);
Router.get('/GetProductmasterById/:id',verifyToken, ProductMaster.findProductMasterById);
Router.delete('/DeleteProductMaster/:id',verifyToken, ProductMaster.deleteProductMasterById);
Router.put('/updateProductMaster/:id',verifyToken, ProductMaster.updateProductMaster);

// filling Types routes
Router.post('/createFillingType',verifyToken, FillingTypes.createFillingType);
Router.get('/getAllFillingTypes',verifyToken, FillingTypes.getAllFillingTypes);
Router.get('/findFillingTypeById/:id',verifyToken, FillingTypes.findFillingTypeById);
Router.delete('/deleteFillingTypeById/:id',verifyToken, FillingTypes.deleteFillingTypeById)   

// Product Routes
Router.post('/createProduct',verifyToken, ProductController.createProduct);
Router.get('/GetAllProduct',verifyToken, ProductController.getAllProducts);
Router.get('/GetAllDealsProducts/:id',ProductController.GetAllDealsProducts);
Router.get('/findProductById/:id',verifyToken, ProductController.findProductById);
Router.delete('/deleteProductById/:id',verifyToken, ProductController.deleteProductById);
Router.put('/UpdateProduct/:id',verifyToken, ProductController.updateProductById);

// cafes routes
Router.post('/createCafe',verifyToken, CafeController.createCafe)
Router.get('/GetAllCafes',verifyToken, CafeController.getAllCafes)
Router.get('/findCafeById/:id',verifyToken, CafeController.findCafeById)
Router.delete('/deleteCafeById/:id',verifyToken, CafeController.deleteCafeById)
Router.put('/UpdateCafe/:id',verifyToken, CafeController.updateCafe);

// Franchises routes
Router.post('/AddFranchises',verifyToken, FranchisesController.createFranchise);
Router.get('/GetAllFranchises',verifyToken, FranchisesController.getAllFranchises);
Router.get('/GetFranchisesById/:id',verifyToken, FranchisesController.findFranchiseById)
Router.delete('/DeleteFranchisesById/:id',verifyToken, FranchisesController.deleteFranchiseById)
Router.put('/UpdateFranchises/:id',verifyToken, FranchisesController.updateFranchiseById)

// Cafe Deals routes
Router.post('/createCafeDeal',verifyToken, CafeDeals.createCafeDeal);
Router.get('/GetAllCafeDeals',verifyToken, CafeDeals.getAllCafeDeals)
Router.get('/GetCafeDealsById/:id',verifyToken, CafeDeals.findCafeDealsById)
Router.delete('/DeleteCafeDeals/:id',verifyToken, CafeDeals.deleteCafeDeals)
Router.put('/UpdateCafeDeals/:id',verifyToken, CafeDeals.updateCafeDeals)

// Cafe Deals Details routes
Router.post('/CreateCafeDealsDetails',verifyToken, CafeDealsDetails.createCafeDealDetails);
Router.get('/GetAllCafeDealsDetails',verifyToken, CafeDealsDetails.getAllCafeDealsDetails);
Router.get('/GetCafeDealsDetailsById/:id',verifyToken, CafeDealsDetails.getCafeDealsDetailsById);
Router.delete('/DeleteCafeDealsDetails/:id',verifyToken, CafeDealsDetails.deleteCafeDealDetail);
Router.put('/UpdateCafeDealsDetails/:id',verifyToken, CafeDealsDetails.updateCafeDealDetail);

// Payment Terms routes
Router.post('/CreatePaymentTerms',verifyToken, PaymentTerms.createPaymentTerm);
Router.get('/GetAllPaymentTerms',verifyToken, PaymentTerms.getAllPaymentTerms);

// User Types routes
Router.post('/CreateUserType',verifyToken, UserTypes.createUserType);
Router.get('/GetAllUserTypes',verifyToken, UserTypes.getAllUserTypes);
Router.get('/GetUserTypeById/:id',verifyToken, UserTypes.findUserTypeById);
Router.delete('/DeleteUserType/:id',verifyToken, UserTypes.deleteUserType);
Router.put('/UpdateUserType/:id',verifyToken, UserTypes.updateUserType)

// Cafe User routes
Router.post('/CreateCafeUser',verifyToken, CafeUser.createCafeUser);
Router.get('/GetAllCafeUsers',verifyToken, CafeUser.getAllCafeUsers);
Router.get('/GetCafeUserById/:id',verifyToken, CafeUser.findCafeUserById)
Router.delete('/DeleteCafeUser/:id',verifyToken, CafeUser.deleteCafeUser);
Router.put('/UpdateCafeUser/:id',verifyToken, CafeUser.updateCafeUser)
Router.post('/loginCafeUser', CafeUser.loginCafeUser);

// Cafe order Details routes
Router.post('/CreateCafeOrderDetails',verifyToken, CafeOrderDetails.createCafeOrderDetails);
Router.get('/GetAllCafeOrderDetails',verifyToken, CafeOrderDetails.GetAllCafeOrderDetails);
Router.get('/GetCafeOrderDetailsById/:id',verifyToken, CafeOrderDetails.findCafeOrderDetailsById)
Router.delete('/DeleteCafeOrderDetailsById/:id',verifyToken, CafeOrderDetails.deleteCafeOrderDetailsById);
Router.put('/UpdateCafeOrderDetailsById/:id',verifyToken, CafeOrderDetails.updateCafeOrderDetailsById);

// cafe order routes
Router.post('/CreateCafeOrder',verifyToken, CafeOrder.createCafeOrder);
Router.get('/GetAllCafeOrders',verifyToken, CafeOrder.getAllCafeOrders);
Router.get('/findCafeOrderByCafeId/:id',verifyToken, CafeOrder.findCafeOrderByCafeId);
Router.delete('/DeleteCafeOrder/:id',verifyToken, CafeOrder.deleteCafeOrder);
Router.put('/UpdateCafeOrder/:id',verifyToken, CafeOrder.updateCafeOrderById);
Router.put('/UpdatePaymentAndDeliveryStatus/:id',verifyToken, CafeOrder.updatePaymentAndDeliveryStatus);

// cafe order deliveries
Router.post('/CafeOrderDeliveries',verifyToken, CafeOrderDeliveries.createCafeOrderDelivery);
Router.get('/GetAllCafeOrdersDeliveries',verifyToken, CafeOrderDeliveries.getAllCafeOrderDeliveries);

// Delivery Vendors
Router.post('/CreateDilevaryVendor',verifyToken, DeliveryVendors.createDeliveryVendor);
Router.get('/GetAllVendorsList',verifyToken, DeliveryVendors.getAllDeliveryVendors);
Router.delete('/deleteDelivaryVendor/:dv_id',verifyToken, DeliveryVendors.deleteVendor);
Router.put('/UpdateDelivaryVendor/:dv_id',verifyToken, DeliveryVendors.updateDeliveryVendor);

// cafe Payment 
Router.post('/CreateCafePayment',verifyToken, CafePayment.createCafePayment);
Router.get('/GetAllCafePayments',verifyToken, CafePayment.getAllCafePayments);
Router.delete('/DeleteCafePayment/:id',verifyToken, CafePayment.deleteCafePayment);
Router.put('/UpdateCafePayment/:id',verifyToken, CafePayment.updateCafePayment);

// Invoice Details
Router.post('/CreateInvoiceDetails',verifyToken, InvoiceDetails.createInvoiceDetails);
Router.get('/GetAllInvoiceDetails',verifyToken, InvoiceDetails.getAllInvoiceDetails);
Router.delete('/DeleteInvoiceDetails/:id',verifyToken, InvoiceDetails.deleteInvoiceDetails);
Router.put('/UpdateInvoiceDetails/:id',verifyToken, InvoiceDetails.updateInvoiceDetails);

// Cafe Invoice 
Router.post('/CreateInvoice',verifyToken, Invoice.createInvoice);
Router.get('/GetAllInvoices',verifyToken, Invoice.getAllInvoices);
Router.delete('/DeleteInvoice/:id',verifyToken, Invoice.deleteInvoice);
Router.put('/UpdateInvoice/:id',verifyToken, Invoice.UpdateInvoice);

// marketing enquiries 
Router.post("/CreateMarketingEnquiries",verifyToken, MarketingEnquiries.createMarketingEnquiry);
Router.get("/GetAllMarketingEnquiries",verifyToken, MarketingEnquiries.getAllMarketingEnquiries);
Router.delete("/DeleteEnquiryRecord/:id",verifyToken, MarketingEnquiries.deleteMarketingEnquiries);
Router.put("/UpdateMarketingEnquiry/:id",verifyToken, MarketingEnquiries.updateMarketingEnquiry);

module.exports = Router;
