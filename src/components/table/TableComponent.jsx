import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableComponent = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://static-ecapac.acer.com/media/catalog/product/cache/6523387fa80e14e7b37310b4db9abc2c/n/i/nitro5_an515-45_primary_image_1_3.png",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://assets-prd.ignimgs.com/2020/06/12/playstation-5-button-02-1591933908407.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._SL1500_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash On Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 234255,
      product: "ASUS Rog Strix",
      img: "https://m.media-amazon.com/images/I/81gQrZ2AOYL._SL1500_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table /* sx={{ minWidth: 650 }} */ aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell" /* align="right" */>
              Product
            </TableCell>
            <TableCell className="tableCell" /* align="right" */>
              Customer
            </TableCell>
            <TableCell className="tableCell" /* align="right" */>
              Date
            </TableCell>
            <TableCell className="tableCell" /* align="right" */>
              Amount
            </TableCell>
            <TableCell className="tableCell" /* align="right" */>
              Payment Method
            </TableCell>
            <TableCell className="tableCell" /* align="right" */>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        I
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell" /* align="right" */>
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell" /* align="right" */>
                {row.customer}
              </TableCell>
              <TableCell className="tableCell" /* align="right" */>
                {row.date}
              </TableCell>
              <TableCell className="tableCell" /* align="right" */>
                {row.amount}
              </TableCell>
              <TableCell className="tableCell" /* align="right" */>
                {row.method}
              </TableCell>
              <TableCell className="tableCell" /* align="right" */>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
