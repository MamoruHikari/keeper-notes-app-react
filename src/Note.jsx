import DeleteIcon from '@mui/icons-material/Delete'

function Note({ title, content, onClick }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={onClick}>
        <DeleteIcon />
      </button>
    </div>
  )
}

export default Note
