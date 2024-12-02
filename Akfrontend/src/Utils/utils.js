const gst = 0;

export const formatDate = (orderDate) => {
  const date = new Date(orderDate);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}
export const formatDateShortName = (inputDate) => {
    // Parse the input date
    const date = new Date(inputDate);
  
    // Define an array for month names
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    // Extract the day, month, and year
    const day = String(date.getDate()).padStart(2, "0"); // Ensure 2 digits for day
    const month = months[date.getMonth()]; // Get the month name
    const year = String(date.getFullYear()).slice(-2); // Get last 2 digits of the year
  
    // Return the formatted date
    return `${day}-${month}-${year}`;
  }
  
  export const tableDateFormat = (orderDate) => {
    const date = new Date(orderDate);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}

export const calculateTotal = (products) => {
  return products ?  products.reduce(
    (total, item) => total + item.rate * item.quantity,
    0
  ) : 0;
};

export const calculateGST = (price) => {
  return (price * gst) / 100
}

export const getGrandTotal = (price, delivery_charges, packaging_charges) => {
  return price + calculateGST(price) + delivery_charges + packaging_charges
}

export const countItems = (products) => {
  return products ?  products.reduce(
    (total, item) => total + item.quantity,
    0
  ) : 0;
};

export const isMobileView = () => window.innerWidth <= 768;
