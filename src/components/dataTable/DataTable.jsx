import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
const userRows = [
  {
    id: 1,
    username: "Saket Sinha",
    img: "https://i.imgur.com/szWdgjz.jpg",
    email: "saketsinha@gmail.com",
    status: "active",
    age: 28,
  },
  {
    id: 2,
    username: "Sam Leonhart",
    img: "https://i.imgur.com/szWdgjz.jpg",
    email: "samleonhart@gmail.com",
    status: "passive",
    age: 26,
  },
  {
    id: 3,
    username: "William Cooper",
    img: "https://i.imgur.com/szWdgjz.jpg",
    email: "williamcooper@gmail.com",
    status: "pending",
    age: 29,
  },
  {
    id: 4,
    username: "James Cooper",
    img: "https://i.imgur.com/szWdgjz.jpg",
    email: "jamescooper@gmail.com",
    status: "pending",
    age: 24,
  },
  {
    id: 5,
    username: "Jake William",
    img: "https://i.imgur.com/szWdgjz.jpg",
    email: "jakewilliam@gmail.com",
    status: "active",
    age: 27,
  },
  {
    id: 6,
    username: "Max Snow",
    img: "https://i.imgur.com/szWdgjz.jpg",
    email: "maxsnow@gmail.com",
    status: "active",
    age: 21,
  },
  {
    id: 7,
    username: "John Snow",
    img: "https://i.imgur.com/szWdgjz.jpg",
    email: "johnsnow@gmail.com",
    status: "passive",
    age: 31,
  },
  {
    id: 8,
    username: "Jamie Lannister",
    img: "https://i.imgur.com/szWdgjz.jpg",
    email: "jamielannister@gmail.com",
    status: "pending",
    age: 32,
  },
  {
    id: 9,
    username: "Tony Stark",
    img: "https://i.imgur.com/szWdgjz.jpg",
    email: "tonystark@gmail.com",
    status: "pending",
    age: 29,
  },
  {
    id: 10,
    username: "Daenerys Targaryen",
    img: "https://i.imgur.com/szWdgjz.jpg",
    email: "daenerystargaryen@gmail.com",
    status: "active",
    age: 35,
  },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton">Delete</div>
        </div>
      );
    },
  },
];

const DataTable = () => {
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add New User
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
