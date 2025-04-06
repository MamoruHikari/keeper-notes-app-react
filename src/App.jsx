import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import CreateArea from "./CreateArea"
import Note from "./Note"

function App() {
  const [formData, setFormData] = useState({ title: "", content: "" })
  const [array, setArray] = useState([])

  function handleInput(name, value) {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!formData.title.trim() || !formData.content.trim()) return

    const newEntry = {
      ...formData,
      id: Date.now()
    }

    setArray(prevState => [...prevState, newEntry])

    setFormData({ title: "", content: "" })
  }

  function deleteNote(id) {
    setArray(prevState =>
      prevState.filter(note => note.id !== id)
    )
  }

  return (
    <div>
      <Header />
      <CreateArea 
        formData={formData}
        onChange={handleInput}
        onSubmit={handleSubmit}
      />
      {array.map(note =>
        <Note 
          key={note.id}
          title={note.title}
          content={note.content}
          onClick={() => deleteNote(note.id)}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
