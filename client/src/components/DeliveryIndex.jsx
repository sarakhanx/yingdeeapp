import "../App.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import renderHTML from "react-render-html";
import { getUser } from "../services/authorize";
import Footer from "./Footer";

export default function DeliveryIndex() {
  const [searchTask, setSearchTask] = useState("");
  const [shelts, setShelts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const fetchShelt = () => {
    axios
      .get(`${process.env.REACT_APP_API}/shelt`)
      .then((response) => {
        setShelts(response.data.reverse());
        setFilter(response.data);
      })
      .catch((err) => {
        Swal.fire("beep beep", err.response.data.error, "error");
        console.log(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchShelt();
  }, []);


//* เกี่ยวกับ Search input || ถ้า TUREให้ SearchTask มีค่าว่าง ใน input
  useEffect(() => {
    if (searchTask === "") {
      setFilter(shelts);
    } else {
      const filtered = shelts.filter((shelt) =>
        shelt.cusid.toLowerCase().includes(searchTask.toLowerCase())
      );
      setFilter(filtered);
    }
  }, [searchTask, shelts]);

  const confirmDelete = (slug) => {
    Swal.fire({
      title: "Confirm Delete",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(slug);
      }
    });
  };

  const deleteTask = (slug) => {
    axios
      .delete(`${process.env.REACT_APP_API}/shelt/${slug}`)
      .then((response) => {
        Swal.fire("DELETED!!", response.data.message, "success");
        fetchShelt();
      })
      .catch((err) => console.log(err));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filter.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="">
      <Navbar />
      <h1 className="text-center bg-warning p-2 text-secondary">
        DELIVERY QUEUE
      </h1>
      <div className="container align-items-center">
        <div className="container text-center mt-2">
          <form action="">
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text bg-warning" id="inputGroup-sizing-md">
                Search|ค้นหา
              </span>

              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={searchTask}
                onChange={(e) => {
                  setSearchTask(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <div className=" container text-center"></div>

        <div className="row board-column">
          {currentItems.map((shelt, index) => (
            <div
              key={index}
              className="task-item border border-light text-start col-md-4"
            >
              <Link to={`/shelt/${shelt.slug}`} >
                <h3 className="text-dark fw-bold p-2">{shelt.cusid}</h3>
                <h5 className="text-secondary">
                  รายละเอียดตารางงานประจำวันที่
                </h5>
                <div className="container">
                  {renderHTML(shelt.destination.substring(0, 20))}
                </div>
                <br />
              </Link>
              {getUser() && (
                <div>
                  {/* <Link
                    className="btn btn-success"
                    to={`/shelt/taskupdate/${shelt.slug}`}
                  >
                    EDIT
                  </Link> */}
                  <button
                    className="btn btn-danger m-1 mb-2 mt-2"
                    onClick={() => confirmDelete(shelt.slug)}
                  >
                    DELETE
                  </button>
                </div>
              )}
              <p className="text-muted">{shelt.launchdate}</p>
            </div>
          ))}
          <div className="pagination-container text-center mt-4">
            <ul className="pagination justify-content-center">
              {Array.from(
                { length: Math.ceil(filter.length / itemsPerPage) },
                (_, index) => (
                  <li
                    key={index}
                    className={`page-item  ${
                      currentPage === index + 1 ? "active " : ""
                    }`}
                  >
                    <button
                      className="page-link btn-success"
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
