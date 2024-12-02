import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image, Font, PDFDownloadLink } from "@react-pdf/renderer";
import { Modal } from "react-bootstrap";
import "./history.css"
import logo from "../../../assets/images/ai-01 1.png"
import { formatDateShortName } from "../../../Utils/utils";

Font.register({
    family: 'Times New Roman',  // Define font family name
    fonts: [
        {
            src: '/fonts/Times New Roman.ttf',  // Path to the regular font file
            fontWeight: 'normal',  // Regular weight
        },
        {
            src: '/fonts/Times New Roman Bold.ttf',  // Path to the bold font file
            fontWeight: 'bold',  // Bold weight
        },
    ],
});

// Define styles for the PDF document
const styles = StyleSheet.create({
    page: {
        fontFamily: 'Times New Roman',
        padding: 30,
        fontSize: 12,
    },
    section: {
        margin: 20,
    },
    header: {
        fontFamily: 'Times New Roman',
        fontSize: 12,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    margin_t: {
        marginTop: 10
    },
    custom_header: {
        // fontWeight:"bold",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 15
    },
    table: {
        display: "table",
        width: "auto",
        margin: 20,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        padding: 5,
    },
    tableHeader: {
        // fontWeight: "bold",
    },
});

// Create the PDF document component
const InvoicePDF = ({ order }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.custom_header}>
                <View>
                    <Text style={styles.header}>PURCHASE ORDER</Text>
                    <Text style={styles.margin_t}><Text style={styles.header}>Date :</Text>{formatDateShortName(order?.order_date)}</Text>
                    <Text style={styles.margin_t}><Text style={styles.header}>Order No :</Text> {order?.order_number}</Text>
                    <Text style={styles.margin_t}><Text style={styles.header}>Order To :</Text> {order?.address}</Text>

                </View>
                <View>
                    <Image
                        src={logo}
                        style={{ width: 70, height: 50, marginBottom: 5 }}
                    />
                    <Text style={{ fontWeight: 700 }}>AK GOLDEN CRUST FOODS</Text>
                    <Text style={{ marginTop: 10, marginBottom: 5 }}>Pimple Gurav, Pune-61</Text>
                    <Text style={{ marginBottom: 5 }}>Phone: 8484957106</Text>
                    <Text>Email: akgoldencrustfoods@gmail.com</Text>
                </View>
            </View>
            <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={{ width: '25%', border: '1px solid black', padding: 5, fontWeight: 'bold' }}>Items</Text>
                    <Text style={{ width: '30%', border: '1px solid black', borderLeft: 'none', padding: 5, fontWeight: 'bold' }}>Description</Text>
                    <Text style={{ width: '15%', border: '1px solid black', borderLeft: 'none', padding: 5, fontWeight: 'bold' }}>Quantity</Text>
                    <Text style={{ width: '15%', border: '1px solid black', borderLeft: 'none', padding: 5, fontWeight: 'bold' }}>Rate</Text>
                    <Text style={{ width: '15%', border: '1px solid black', borderLeft: 'none', padding: 5, fontWeight: 'bold' }}>Amount</Text>
                </View>
                {
                    order?.products.map((product) => (
                        <View style={[styles.tableRow, styles.tableHeader]} key={product.product_id}>
                            <Text style={{ width: '25%', border: '1px solid black', borderTop: 'none', padding: 5 }}>{product.name}</Text>
                            <Text style={{ width: '30%', border: '1px solid black', borderTop: 'none', borderLeft: 'none', padding: 5 }}>{product.description}</Text>
                            <Text style={{ width: '15%', border: '1px solid black', borderTop: 'none', borderLeft: 'none', padding: 5 }}>{product.quantity}</Text>
                            <Text style={{ width: '15%', border: '1px solid black', borderTop: 'none', borderLeft: 'none', padding: 5 }}>{product.rate}</Text>
                            <Text style={{ width: '15%', border: '1px solid black', borderTop: 'none', borderLeft: 'none', padding: 5 }}>{product.sub_total_amount}</Text>
                        </View>
                    ))
                }
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={{ width: '70%', border: '1px solid black', borderTop: 'none', borderBottom: 'none', padding: 5 }}></Text>
                    <Text style={{ width: '15%', border: '1px solid black', borderTop: 'none', borderLeft: 'none', padding: 5 }}>Sub Total :</Text>
                    <Text style={{ width: '15%', border: '1px solid black', borderTop: 'none', borderLeft: 'none', padding: 5 }}>{order.products.reduce((total, item) => total + item.sub_total_amount, 0)}</Text>
                </View>
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={{ width: '70%', border: '1px solid black', borderTop: 'none', borderBottom: 'none', padding: 5 }}></Text>
                    <Text style={{ width: '15%', border: '1px solid black', borderTop: 'none', borderLeft: 'none', padding: 5 }}>Sales Tax :</Text>
                    <Text style={{ width: '15%', border: '1px solid black', borderTop: 'none', borderLeft: 'none', padding: 5 }}>{order.tax}</Text>
                </View>
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={{ width: '70%', border: '1px solid black', borderTop: 'none', padding: 5 }}></Text>
                    <Text style={{ width: '15%', border: '1px solid black', borderTop: 'none', borderLeft: 'none', padding: 5 }}>Total :</Text>
                    <Text style={{ width: '15%', border: '1px solid black', borderTop: 'none', borderLeft: 'none', padding: 5 }}>{order.total_amount}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text>Pay here:</Text>

            </View>
        </Page>
    </Document>
);

// Main component to display and download the PDF
const PurchaseGenerator = ({ show, setShow, data }) => {
    // Define the custom file name dynamically
    console.log(data?.order_date);
    const customFileName = data
      ? `Purchase_${data.order_number}_${data.order_date.replace(/-/g, "")}.pdf`
      : "Purchase_Order.pdf";
  
    return (
      <Modal show={show} onHide={() => setShow(false)} size="lg" fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>Purchase Order Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body className="overflow-hidden">
          {/* Display the PDF using PDFViewer */}
          <PDFViewer width="100%" height="100%" showToolbar={true}>
            <InvoicePDF order={data} />
          </PDFViewer>
        </Modal.Body>
        {/* <Modal.Footer>
          <PDFDownloadLink
            document={<InvoicePDF order={data} />}
            fileName={customFileName}
            style={{
              textDecoration: "none",
              padding: "10px 20px",
              color: "#fff",
              backgroundColor: "#007BFF",
              borderRadius: 5,
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            {({ loading }) =>
              loading ? "Preparing Document..." : "Download PDF"
            }
          </PDFDownloadLink>
        </Modal.Footer> */}
      </Modal>
    );
  };
  
export default PurchaseGenerator;
