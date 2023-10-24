import React,{useEffect, useState,useRef} from 'react';
import ReactQuill,{Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export function Editor(){
    const [value,setValue] = useState('');
    const modules = {
    toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
    }
    const formats =[
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
    ]
    const quillRef = useRef(null);
    useEffect(()=>{
        if(quillRef.current){
            console.log("hello")
            const quill = quillRef.current.getEditor();  
            const initialContent = `
            <html>
            <body>
            <h1 style="text-align: center;">Name : A.Linson</h1>
            <h2 style="text-align: center;">Email : linsonadrew77@gmail.com</h2>
            <h2 style="text-align: center;">Phone : 723833838</h2>
            <h3>Summary :</h3>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum owowowowowowow owowowowowowow owowowowowowow</p>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum owowowowowowow owowowowowowow owowowowowowow</p>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum owowowowowowow owowowowowowow owowowowowowow</p>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum owowowowowowow owowowowowowow owowowowowowow</p>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum  owowowowowowow owowowowowowow owowowowowowow</p>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum .</p>
            <p>Skills : [ lorem ipsum , lorem ipsum , lorem ipsum , lorem ]</p>
            <p>Projects :</p>
            <p><strong>Title 1 : skskskskskk</strong></p>
            <p>skskskskskks</p>
            <p>ksksksksk</p>
            <p>kskkskskskks</p>
            <p>kskskskskks</p>
            <p>kskskskks</p>
            <p><strong>Title 2 : skskskskskk &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Languages : thulu , smo ,sdkdk, oamsasm, o</strong></p>
            <p>skskskskskks sndiwnd,</p>
            <p>ksksksksk</p>
            <p>kskkskskskks</p>
            <p>kskskskskks</p>
            <p>kskskskks</p>
            <p><em>Extra Curriculars :</em></p>
            <p>Porn ssnnsnsns kssksks hilo - ssjsjsjsjjs</p>
            <p>sinini aasa nisnaisn in asnaisn - pspsppspp</p>
            <p>aaisnains iansaisnainsian certified snsodn - aasoaosoasoso</p>
            <p>Education :</p>
            <p><em>PES University</em></p>
            <p>ididwdjwdjdsid asaisaisnns</p>
            <p><em>NArayana</em></p>
            <p>icincincidncdncdicndinindv</p>
            </body>
            </html>
          `;
          quill.clipboard.dangerouslyPasteHTML(initialContent);
        }
        

    },[ ]);
    

    return(
        <div>
        <ReactQuill className="Editor" ref={quillRef} theme="snow" modules={modules} formats={formats} value={value} onChange={setValue}/>
        </div>
    )
}