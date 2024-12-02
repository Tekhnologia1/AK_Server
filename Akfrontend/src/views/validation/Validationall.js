
export const validateRegisterData = (data) => {
  console.log(data);
  const errors = {};

  if (!data.name) {
    errors.name = "Name is required";
  }

  if (!data.username) {
    errors.username = "Username is required";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = "Invalid email address";
  }

  if (!data.mobile) {
    errors.mobile = "Mobile number is required";
  } else if (!/^[0-9]{10}$/.test(data.mobile)) {
    errors.mobile = "Invalid mobile number";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else {
    if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else
      if (!/[A-Z]/.test(data.password)) {
        errors.password = "Password must contains uppercase letter"
      } else
        if (!/[a-z]/.test(data.password)) {
          errors.password = "Password must contains lowercase letter"
        } else
          if (!/[0-9]/.test(data.password)) {
            errors.password = "Password must contains number"
          } else
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
              errors.password = "Password must contains special character"
            }
  }

  return errors;
};

export const validateLoginData = (data) => {
  console.log(data);
  const errors = {};

  if (!data.email) {
    errors.email = "Email is required";
  }
  // else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
  //   errors.email = "Invalid email address";
  // }

  if (!data.password) {
    errors.password = "Password is required";
  }
  return errors;
};

export const validateProductData = (productData) => {
  const errors = {};

  if (!productData.name) {
    errors.name = "Product name is required.";
  }

  if (!productData.details) {
    errors.details = "Product details are required.";
  }

  if (!productData.items) {
    errors.items = "Number of items is required.";
  }

  if (!productData.weight || isNaN(productData.weight)) {
    errors.weight = "Weight must be a valid number.";
  }

  if (!productData.basePrice || isNaN(productData.basePrice)) {
    errors.basePrice = "Base price must be a valid number.";
  }

  if (!productData.makingPrice || isNaN(productData.makingPrice)) {
    errors.makingPrice = "Making price must be a valid number.";
  }

  if (!productData.price_scale) {
    errors.price_scale = " price scale must be a select.";
  }
  return errors;
};

// validation.js

export const validateAreaForm = (formData) => {
  const errors = {};

  if (!formData.areaName.trim()) {
    errors.areaName = "Area Name is required";
  }

  if (!formData.areaDetails.trim()) {
    errors.areaDetails = "Area Details are required";
  }

  if (!formData.selectedCity) {
    errors.selectedCity = "Please select a city";
  }

  return errors;
};

// src/validation.js
// src/components/validation/Validationall.js

export const validateCafeForm = (values) => {
  const errors = {};

  // Validation for selectedCity
  if (!values.selectedCity) {
    errors.selectedCity = "City is required.";
  }

  // Validation for cafeName
  if (!values.cafeName) {
    errors.cafeName = "Cafe Name is required.";
  } 
  // else if (values.cafeName.trim().length < 3) {
  //   errors.cafeName = "Cafe Name must be at least 3 characters long.";
  // }

  // Validation for address
  if (!values.address) {
    errors.address = "Address is required.";
  }
  //  else if (values.address.trim().length < 10) {
  //   errors.address = "Address must be at least 10 characters long.";
  // }

  // Validation for area
  if (!values.area) {
    errors.area = "Area is required.";
  }

  // Validation for selectedRoute
  if (!values.selectedRoute) {
    errors.selectedRoute = "Route is required.";
  }

  // Validation for selectedDeal
  if (values.selectedDeal === "") {
    errors.selectedDeal = "Special Deal is required.";
  }

  // // Validation for cafedeal
  // if (values.cafedeal === "") {
  //   errors.cafedeal = "Cafe Deal selection is required.";
  // }

  // Validation for selectedPaymentTerm
  if (!values.selectedPaymentTerm) {
    errors.selectedPaymentTerm = "Payment Term is required.";
  }

  // Validation for contactPerson
  if (!values.contactPerson) {
    errors.contactPerson = "Contact Person is required.";
  } 
  // else if (values.contactPerson.trim().length < 3) {
  //   errors.contactPerson = "Contact Person must be at least 3 characters long.";
  // }

  return errors;
};

export const validateCafeDealForm = (data) => {
  const errors = {};

  if (!data.cafe) {
    errors.cafe = "Cafe is required";
  }

  if (!data.products) {
    errors.products = "Products are required";
  }

  if (!data.dealprice) {
    errors.dealprice = "Deal price is required";
  } else if (isNaN(data.dealprice) || data.dealprice <= 0) {
    errors.dealprice = "Deal price must be a positive number";
  }

  return errors;
};

export const validateCafeUserForm = (data) => {
  const errors = {};

  if (!data.cafe) {
    errors.cafe = "Cafe is required";
  }

  if (!data.name) {
    errors.name = "Name is required";
  }

  if (!data.userName) {
    errors.userName = "Username is required";
  }
  // else if (!/^[A-Za-z]\w{5,24}$/.test(data.userName)) {
  //   errors.userName = "Username must start with a letter and be 6-30 characters long.";
  // }
  

  if (!data.password) {
    errors.password = "Password is required";
  }
  // else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(data.password)) {
  //   errors.password = "Password must be 8+ chars with uppercase, lowercase, number & special char.";
  // }

  if (!data.userType) {
    errors.userType = "User type is required";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!data.contactNo) {
    errors.contactNo = "Contact number is required";
  } else if (!/^\d{10}$/.test(data.contactNo)) {
    errors.contactNo = "Contact number must be a 10-digit number";
  }

  return errors;
};

// Helper function to validate date format
const isValidDate = (date) => {
  return !isNaN(Date.parse(date));
};

export const validateEmployeeData = (values) => {
  const errors = {};

  // Validate Employee Name
  if (!values.employeeName || values.employeeName.trim() === "") {
    errors.employeeName = "Employee name is required.";
  }

  // Validate Username
  if (!values.username) {
    errors.username = "Username is required.";
  }
  // else if (!/^[A-Za-z]\w{5,24}$/.test(values.username)) {
  //   errors.username = "Username must start with a letter and be 6-30 characters long.";
  // }

  // Validate Password
  if (!values.password) {
    errors.password = "Password is required.";
  }
  // else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
  //   errors.password = "Password must be 8+ chars with uppercase, lowercase, number & special char.";
  // }


  // Validate Email
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address.";
  }

  // Validate Contact Number
  if (!values.contactNo) {
    errors.contactNo = "Contact number is required.";
  } else if (!/^[0-9]{10}$/.test(values.contactNo)) {
    errors.contactNo = "Contact number must be a 10-digit number.";
  }

  // Validate Salary
  if (!values.salary) {
    errors.salary = "Salary is required.";
  } else if (isNaN(values.salary) || values.salary <= 0) {
    errors.salary = "Salary must be a positive number.";
  }

  // Validate Enrollment Date
  if (!values.enrollmentDate) {
    errors.enrollmentDate = "Enrollment date is required.";
  } else if (!isValidDate(values.enrollmentDate)) {
    errors.enrollmentDate = "Invalid enrollment date.";
  }

  // Validate Increment Date
  if (!values.incrementDate) {
    errors.incrementDate = "Increment date is required.";
  } else if (!isValidDate(values.incrementDate)) {
    errors.enrollmentDate = "Invalid increment date.";
  }

  // Validate Increment Amount
  if (
    values.incrementAmount &&
    (isNaN(values.incrementAmount) || values.incrementAmount <= 0)
  ) {
    errors.incrementAmount = "Increment amount must be a positive number.";
  }

  if (!values.incrementAmount) {
    errors.incrementAmount = "Increment amount is required.";
  } else if (isNaN(values.incrementAmount) || values.incrementAmount <= 0) {
    errors.incrementAmount = "Increment amount must be a positive number.";
  }

  // Validate Employee Type
  if (!values.employee_type) {
    errors.employee_type = "Employee type is required.";
  }

  return errors;
};

// src/components/validation/RouteValidation.js

export const validateRouteForm = (values) => {
  const errors = {};

  // Validation for name
  if (!values.name) {
    errors.name = "Name is required.";
  } 
  // else if (values.name.trim().length < 3) {
  //   errors.name = "Name must be at least 3 characters long.";
  // }

  // Validation for details
  if (!values.details) {
    errors.details = "Details are required.";
  } 
  // else if (values.details.trim().length < 10) {
  //   errors.details = "Details must be at least 10 characters long.";
  // }

  // Validation for area
  if (!values.area || values.area.length === 0) {
    errors.area = "At least one area is required.";
  }

  // Validation for startPoint
  if (!values.startPoint) {
    errors.startPoint = "Start Point is required.";
  }

  // Validation for endPoint
  if (!values.endPoint) {
    errors.endPoint = "End Point is required.";
  }

  // Validation for city
  if (!values.city) {
    errors.city = "City is required.";
  }

  return errors;
};

export const validatePlaceOrderForm = (data) => {
  const errors = {};

  if (!data.cafeId) {
    errors.cafeId = "Cafe is required";
  }

  if (!data.orderDate) {
    errors.orderDate = "Order date is required";
  }

  // if(data.paymentStatus !== 0 && !data.paymentStatus){
  //   errors.paymentStatus = "Payment status is required"
  // }

  // if(!data.paymentTerm){
  //   errors.paymentTerm = "Payment term is required"
  // }

  if(!data.note){
    errors.note = "Note is required"
  }

  return errors;
};

export const validateRepeatOrderForm = (data) => {
  const errors = {};

  if (!data.orderDate) {
    errors.orderDate = "Order date is required";
  }
  
  return errors;
};

export const validateProductForm = (data) => {
  const errors = {};

  // Product master ID validation
  if (!data.product_master_id) {
    errors.product_master_id = "Product master ID is required";
  }

  // Name validation
  if (!data.name) {
    errors.name = "Name is required";
  }

  // Details validation
  if (!data.details) {
    errors.details = "Details are required";
  }

  // Product fill validation

  if (data.product_fill !== 0 && !data.product_fill) {
    errors.product_fill = "Product filling is required";
  }

  // Weight validation
  if (!data.weight) {
    errors.weight = "Weight is required";
  } else if (isNaN(data.weight) || data.weight <= 0) {
    errors.weight = "Weight must be a positive number";
  }

  // Base price validation
  if (!data.basePrice) {
    errors.basePrice = "Base price is required";
  } else if (isNaN(data.basePrice) || data.basePrice <= 0) {
    errors.basePrice = "Base price must be a positive number";
  }

  // Making price validation
  if (!data.makingPrice) {
    errors.makingPrice = "Making price is required";
  } else if (isNaN(data.makingPrice) || data.makingPrice <= 0) {
    errors.makingPrice = "Making price must be a positive number";
  }

  // Price scale validation
  if (!data.price_scale) {
    errors.price_scale = "Price scale is required";
  }

  return errors;
};
