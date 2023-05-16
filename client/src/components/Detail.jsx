import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import renderHTML from "react-render-html";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { getUser } from "../services/authorize";

function Detail({ fetchShelt }) {
  const [shelt, setShelts] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/shelt/${slug}`)
      .then((response) => {
        setShelts(response.data);
      })
      .catch((err) => alert(err));
    // eslint-disable-next-line
  }, []);
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

  return (
    <>
      <Navbar />
      <div className="container border border-light bg-light mt-2">
        <h1 className="text-secondary">
          Report งานประจำวันที่ : {shelt.cusid}
        </h1>
        <div className="border border-secondary border-top"></div>
        <p className="text-center">รายละเอียดเวลางาน</p>
        {shelt.destination ? (
          <div className="text-start">{renderHTML(shelt.destination)}</div>
        ) : null}
        <div className="text-muted text-center mt-3">
          {shelt.launchdate} <br />
          <div className="container">{shelt.updatedAt}</div>

          {getUser() &&(<>
            <Link
            className="btn btn-success"
            to={`/shelt/taskupdate/${shelt.slug}`}
          >EDIT
          </Link>
          <button
            className="btn btn-danger m-2"
            onClick={() => confirmDelete(shelt.slug)}
          >
            DELETE
          </button>
        </>)}

        {/* {JSON.stringify({shelt})} */}
      </div>
      </div>
      <Footer />
    </>
  );
}
export default Detail;
