import React, {useEffect, useState} from 'react'

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react'

import '../../../styles/base/custom.scss'

const MyCKEditor = (props) => {
  
  //Is the editor currently being used?
  const [ editorFocus, setEditorFocus ] = useState(false)

  const handleEditorFocus = (event, editor) => {
    if(!editorFocus){
      setEditorFocus(true)
    }
  }
  
  const handleEditorBlur = (event, editor) => {
    setEditorFocus(false)
    const data = editor.getData()
    props.setEditorData(data)
  }
  
  return (
    <div className='ck-content'>
      <CKEditor
        data={ props.editorData }
        editor={ ClassicEditor }
        onFocus={handleEditorFocus}
        onBlur={handleEditorBlur}
      />
    </div>
  )
}
export default MyCKEditor