import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import renderHTML from "react-render-html";
import { getUser } from "../services/authorize";
import Footer from "./Footer";

export default function DeliveryIndex() {
  const [shelts, setShelts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);

  const fetchShelt = () => {
    axios
      .get(`${process.env.REACT_APP_API}/shelt`)
      .then((response) => {
        setShelts(response.data.reverse());
      })
      .catch((err) => {
        Swal.fire("Error", err.response.data.error, "error");
        console.log(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchShelt();
  }, []);

  const handleDelete = (slug) => {
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = shelts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center bg-warning p-2 text-secondary">
        DELIVERY QUEUE
      </h1>
      <div className="container align-items-center">
        <div className="row board-column">
          {currentItems.map((shelt) => (
            <div
              key={shelt.slug}
              className="task-item border border-light text-start col-md-4"
            >
              <Link to={`/shelt/${shelt.slug}`} state={{ shelts }}>
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
                  <Link
                    className="btn btn-success"
                    to={`/shelt/taskupdate/${shelt.slug}`}
                  >
                    EDIT
                  </Link>
                  <button
                    className="btn btn-danger m-1 mb-2 mt-2"
                    onClick={() => handleDelete(shelt.slug)}
                  >
                    DELETE
                  </button>
                </div>
              )}
              <p className="text-muted">{shelt.launchdate}</p>
            </div>
          ))}
        </div>
        <div className="container mt-3">
          {shelts.length > itemsPerPage && (
            <ul className="pagination justify-content-center">
              {Array.from(
                { length: Math.ceil(shelts.length / itemsPerPage) },
                (_, i) => (
                  <li className="page-item" key={i}>
                    <button
                      className="page-link"
                      onClick={() => paginate(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
