import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Fab } from "@mui/material"
import { Zoom } from '@mui/material'

function CreateArea({ formData, onChange, onSubmit }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <form className="create-note" onSubmit={onSubmit}>
        {isExpanded && (
          <input 
            name="title"
            placeholder="Title"
            value={formData.title} 
            onChange={e => onChange(e.target.name, e.target.value)}
          />
        )}
        <textarea 
            name="content"
            placeholder="Take a note..."
            value={formData.content}
            onChange={e => onChange(e.target.name, e.target.value)}
            rows={isExpanded ? 3 : 1}
            onClick={() => setIsExpanded(true)}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea
