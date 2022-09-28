import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../config";
import Navbar from "../../Components/Navbar/Navibar";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./usercontent.css";
import UserContenttRow from "../../Components/UserContentRow";
import { useLocation } from "react-router";
import AfterLogNavibar from "../../Components/Navbar/AfterLogNavibar";

const UserCourseChapterContent = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [content, setContent] = useState([]);

  const getContent = () => {
    const { id } = state;

    const url = `${URL}/allContents/${id}`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      debugger;
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
    <div className=" backgroundColour">
      <div className="col">
        <div>
          <AfterLogNavibar />
        </div>
        <div>
          <h2 class="title">Content</h2>

          {/* <Link to="/userchapter">
            <a className="btn btn-success">Add Chapter</a>
          </Link> */}
        </div>
        <br></br>
        <br></br>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th class="table table-dark table-striped">contentid</th>
                <th class="table table-dark table-striped">
                  timeRequiredToCompleteTheCourse
                </th>
                <th class="table table-dark table-striped">chapterContent</th>
                <th class="table table-dark table-striped">courseChapterid</th>
                <th class="table table-dark table-striped">Link</th>
                <th class="table table-dark table-striped">Action</th>
              </tr>
            </thead>
            <tbody>
              {content.map((item) => {
                return <UserContenttRow content={item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserCourseChapterContent;
