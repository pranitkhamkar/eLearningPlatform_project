//import { url } from '../common/constants'
//import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"




const UserContenttRow = (props) => {
  const { content } = props
  const navigate = useNavigate()

  return (
    <tr>
      <td>{content.contentid}</td>

      <td>{content.timeRequiredToCompleteTheCourse}</td>

      <td>{content.chapterContent}</td>
      <td>{content.courseChapterid}</td>
      <td><a href={content.contentLink}>{content.contentLink}</a></td>


      <td>
        <button
          onClick={() => {
            // /add-songs-to-album -> path of the component
            // {album: album}      -> data needed to be passed to the component
            //navigate('/add-songs-to-artist', { artist: artist })
          }}
          className="btn btn-success btn-sm">
          Content
        </button>

        {/* <button   onClick={() => {
            
            navigate('/delete-chapter',{ state: {id: chapter.courseChapterid } })
          }}
        
        className="btn btn-danger float-end">
            delete
          </button> */}

      </td>
    </tr>
  )
}

export default UserContenttRow
