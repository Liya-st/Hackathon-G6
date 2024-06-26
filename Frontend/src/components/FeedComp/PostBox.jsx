import  { useState } from 'react'
import { Modal, Tag } from 'antd';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import CommentBox from './CommentBox';

export default function IdeaBox({person}) {
    const[liked, setLiked] = useState(false);
    const [openReport, setOpenReport] = useState(false);
    const [report, setReport] = useState('');
    const [opened, { open, close }] = useDisclosure(false);

   function toggleFav(){
    setLiked( (prev) => !prev);
   }
   const show = () => {
    setOpenReport(true);
   }
   function handleReport(event) {
    event.preventDefault();
    console.log("You clicked the button");
    setReport(event.target.value)
    console.log("com", comment);
    setOpenReport(false);
   }
   const [opens, setOpen] = useState(false);
   const showModal = () => {
     setOpen(true);
   };
   function handleComment(event) {
    event.preventDefault();
    console.log("You clicked the button");
    setComment(event.target.value)
    console.log("com", comment);
    setOpen(false);
   }
   const handleCancel = () => {
     console.log('Clicked cancel button');
     setOpen(false);
     setOpenReport(false);
   };
   const [comment,setComment] = useState('');
  function change(event){
    setComment(event.target.value);
    setReport(event.target.value);

   }
  return (
    <div className="flex flex-col m-5 md:shrink-0 pt-2.5 bg-white rounded w-[280px] md:w-[450px] sm:w-[400px] lg:w-[850px] overflow-x-hidden">
        <div className='flex items-center gap-2'>
            <div className="avatar mx-2 mb-2">
                <div className="w-12 rounded">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div>
            <div className='flex flex-col gap-0'>
                <div className='text-black text-center font-semibold' style={{fontFamily :"Adamina"}}>
                    {person.name}
                </div>
                <div className='text-xs text-gray-500' style={{fontFamily :"Adamina"}}>
                    position
                </div>
            </div>
        </div>
        <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
        <div className="p-5" style={{fontFamily :"Adamina"}}>{person.description}</div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 m-2">
{person.colors.map((color, index) => (
  <Tag key={index} style={{
    background: '#f0f2f5',
    borderStyle: 'dashed',
  }}>
    {color}
  </Tag>
))}
</div>
        {person.image != null ? (
   <div className='border border-solid border-zinc-100'>
   <img src={person.image} alt="" className='h-[350px] rounded object-cover w-full m-auto' />
 </div>
) : (
  " "
)}
      <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
      <div className='flex justify-between'>
        <div className=' flex gap-16 m-5'>
        {liked ? <FavoriteOutlinedIcon sx={{ color: 'red' }} onClick ={toggleFav} className='cursor-pointer'  /> : <FavoriteBorderOutlinedIcon onClick ={toggleFav} className='cursor-pointer'  />}
        <AddCommentOutlinedIcon onClick={ showModal} className='cursor-pointer' />
    
     <Modal
        title="Comment"
        style={{display: 'flex', alignItems: 'center' ,width: '100%'}}
        open={opens}
        onOk={handleComment}
        onCancel={handleCancel}
      >
 <textarea type='text' className="py-4 w-[250px] md:w-[500px] border rounded resize-none bg-slate-100 p-2 " 
                rows="2"
                placeholder='comment...'
                value={comment}
                onChange ={change}/>       </Modal>
                <Drawer opened={opened} onClose={close} title="Comments">
      <CommentBox />
      </Drawer>
      <TextsmsOutlinedIcon  onClick={open} className='cursor-pointer'/>

                   </div>
                   <FlagOutlinedIcon  onClick={show} className='m-4 cursor-pointer'/>  

      <Modal
        title="Report"
        style={{display: 'flex', alignItems: 'center' ,width: '100%'}}
        open={openReport}
        onOk={handleReport}
        onCancel={handleCancel}
      >
 <textarea type='text' className="py-4 w-[250px] md:w-[500px] border rounded resize-none bg-slate-100 p-2 " 
                rows="2"
                placeholder='Reasons for report...'
                value={report}
                onChange ={change}/>   
                   </Modal>
        </div>
    </div>
    
  )
}
