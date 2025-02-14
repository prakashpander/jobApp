import React from 'react'

const Card_Group = () => {
    const cards=[
        {id : 1 , Rol : "React Devloper" , jobs : 12, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ngaqIXlg16CjkDSnFEhEA2i0A3wKTpSawA&s"},
        {id : 20, Rol : "Node Js Devloper" , jobs : 32, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ngaqIXlg16CjkDSnFEhEA2i0A3wKTpSawA&s"},
        {id : 19, Rol : "Js Devloper" , jobs : 42, image : "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg"},
        {id : 18, Rol : "Digital Markating" , jobs : 52, image : "https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg"},
        {id : 17 , Rol : "Next Js Devloper" , jobs : 62, image : "https://static.vecteezy.com/system/resources/previews/002/746/042/non_2x/programmer-flat-color-icon-computer-expert-man-coding-on-laptop-freelance-software-developer-at-work-person-avatar-cartoon-style-clip-art-for-mobile-app-isolated-rgb-illustration-vector.jpg"},
        {id : 16 , Rol : "Fronted Devloper" , jobs : 32, image : "https://avatarfiles.alphacoders.com/371/thumb-1920-371697.png"},
        {id : 15 , Rol : "Backend Devloper" , jobs : 12, image : "https://img.freepik.com/free-photo/3d-portrait-people_23-2150793852.jpg?semt=ais_hybrid"},
        {id : 14 , Rol : "Web Devloper" , jobs : 20, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ngaqIXlg16CjkDSnFEhEA2i0A3wKTpSawA&s"},
        {id : 13 , Rol : "App Devloper" , jobs : 10, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUaGV0pK9JKr-1JCiD-59WyyGs8YywZ5Mlg&s"},
        {id : 12 , Rol : "Ai Devloper" , jobs : 9, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJ_W5wtg5QuQUdu4S6gnQ4cN-Id-cULs3qw&s"},
        {id : 11 , Rol : "IT And Software" , jobs : 72, image : "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg"},
        {id : 10 , Rol : "Python Devloper" , jobs : 28, image : "https://cdn.vectorstock.com/i/500p/45/61/girl-hacker-in-a-hoodie-using-laptop-abstract-vector-50654561.jpg"},
        {id : 9 , Rol : "HTML Devloper" , jobs : 62, image : "https://www.shutterstock.com/image-vector/woman-writing-code-young-girl-260nw-2125188164.jpg"},
        {id : 8 , Rol : "Anguler Devloper" , jobs : 45, image : "https://media.istockphoto.com/id/1342829261/vector/software-developer-semi-flat-color-vector-character.jpg?s=612x612&w=0&k=20&c=RRatI_ThaXwbHUde2PpXo_Fz-VThPWbkRsfAcDqDgnQ="},
        {id : 7 , Rol : "Ruby Devloper" , jobs : 55, image : "https://thumbs.dreamstime.com/b/female-programmer-managing-digital-interfaces-flat-vector-illustration-symbolizing-software-development-coding-surrounded-348668136.jpg"},
        {id : 6 , Rol : "UI/UX Devloper" , jobs : 65, image : "https://static.vecteezy.com/system/resources/thumbnails/012/201/708/small/programmer-software-developer-coding-in-computer-office-flat-purple-illustration-design-concept-vector.jpg"},
        {id : 5 , Rol : "Data Antlist" , jobs : 11, image : "https://c8.alamy.com/comp/2BP67Y4/avatar-behind-computer-with-code-in-speech-bubble-2BP67Y4.jpg"},
        {id : 4 , Rol : "Data Scientist" , jobs : 5, image : "https://www.shutterstock.com/image-vector/man-black-hoodie-using-laptop-260nw-2386426789.jpg"},
        {id : 3 , Rol : "Machine Learning" , jobs : 25, image : "https://png.pngtree.com/png-clipart/20240705/original/pngtree-web-programmer-avatar-png-image_15495273.png"},
        {id : 2 , Rol : "Contant Writer" , jobs : 30, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRevQHV38kgXiLYW3zcCrCrA2NDS9tj3TgMCQ&s"},
    ]


  return (
    <>
    
    <div className='flex justify-center flex-wrap text-center gap-7 bg-gray-100 mt-16 pl-30 pr-30 pb-8'>
        <div className='flex flex-col w-full mb-3'>
        <h1 className='text-center font-bold text-4xl pt-6'>Future Jobs</h1>
        <p className='text-center'>Your Job for a Future</p>
        </div>
        {cards.map((Show,index) => (
           <div key={Show.id} className='p-6 bg-white rounded-2xl shadow-lg w-55'>
            <p><img src={Show.image} alt={Show.Rol} className=' rounded-md h-15 w-30 text-center m-auto object-cover transform hover:scale-x-[-1] transition duration-800'/></p>
             <p className='mt-4 text-2xl font-bold'>{Show.Rol}</p>
             <p className='mt-2'> Jobs - {Show.jobs}</p>
           </div>
        ))}
    </div>
    </>
  )
}
export default Card_Group