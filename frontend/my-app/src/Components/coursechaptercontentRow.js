//import { url } from '../common/constants'
//import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const CourseChapterContentRow = (props) => {
  const { coursechaptercontent } = props;
  const navigate = useNavigate();

  return (
    <tr>
      <td class="table-success">{coursechaptercontent.contentid}</td>

      <td class="table-danger">
        {coursechaptercontent.timeRequiredToCompleteTheCourse}
      </td>

      <td class="table-Secondary">{coursechaptercontent.chapterContent}</td>
      <td class="table-info">{coursechaptercontent.courseChapterid}</td>
      {/* <td class="table-info">{coursechaptercontent.contentLink}</td> */}
      <td>
        {/* <a href={coursechaptercontent.contentLink}>Link</a>; */}
        <a href={coursechaptercontent.contentLink} target="_blank">
          {" "}
          More Info{" "}
        </a>
      </td>
      <td>
        {/* <button
          onClick={() => {
            // /add-songs-to-album -> path of the component
            // {album: album}      -> data needed to be passed to the component
            //navigate('/add-songs-to-artist', { artist: artist })
          }}
          className="btn btn-success btn-sm">
          Add Content 
        </button> */}

        <button
          onClick={() => {
            navigate("/delete-content", {
              state: { id: coursechaptercontent.contentid },
            });
          }}
          className="btn btn-danger float-end"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default CourseChapterContentRow;
