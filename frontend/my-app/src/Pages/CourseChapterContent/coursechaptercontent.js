import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../config";
import AdminNav from "../../Components/Navbar/adminNav";
import CourseChapterContentRow from "../../Components/coursechaptercontentRow";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./coursechaptercontent.css";

const CourseChapterContent = () => {
  const navigate = useNavigate();

  const [coursechaptercontent, setContent] = useState([]);

  const getContent = () => {
    const url = `${URL}/content/all`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        setContent(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  useEffect(() => {
    getContent();
    console.log("getting called");
  }, []);

  return (
    <div className="col">
      <div>
        <AdminNav />
      </div>
      <div>
        <h2 class="title">Content</h2>

        <Link to="/addContent">
          <a className="btn btn-success">Add Content</a>
        </Link>
      </div>
      <br></br>
      <br></br>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th class="table-primary">contentid</th>
              <th class="table-primary">timeRequiredToCompleteTheCourse</th>
              <th class="table-primary">chapterContent</th>
              <th class="table-primary">courseChapterid</th>
              <th class="table-primary">Link</th>

              <th class="table-primary">Action</th>
            </tr>
          </thead>
          <tbody>
            {coursechaptercontent.map((item) => {
              return <CourseChapterContentRow coursechaptercontent={item} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseChapterContent;
