import React, { useState } from "react";
import ContactsCard from "../../components/ContactsCard/ContactsCard";
import "./Home.css";
import showToast from 'crunchy-toast';

function Home(){
    const [contacts,setContacts] = useState([
    {
        Name: 'Alfesh ABDUL',
        Mobile: '9834896944',
        Email:'alfeshabdul2002@gmail.com'
    },
    {
        Name: 'Ayesh ABDUL',
        Mobile: '9834234785',
        Email:'ayesha2@gmail.com'
    }
]);
    const[Name,setName] = useState('');   
    const[Mobile,setMobile] = useState(''); 
    const[Email,setEmail] = useState(''); 

    const addContact = () => {
        const obj = {
            Name: Name,
            Mobile: Mobile,
            Email: Email
        }
        
      setContacts([...contacts, obj]);

      showToast('Contact Saved Succesfully','success',3000);

      setName('');
      setMobile('');
      setEmail('');


    };

    return(
        <div className="app-title">
            <h1>📞 Contact Application </h1>

            <div className="app-body">
               
               <div className="contact-container">
                <h1> SHOW CONTACT</h1>
                {
                    contacts.map((contacts,index)=>{
                        const {Name,Mobile,Email} = contacts;
                        return (<ContactsCard key={index} 
                            Name={contacts.Name} 
                            Mobile={contacts.Mobile} 
                            Email={contacts.Email} />)
                    })
                }
               </div>

               <div className="add-contact-container">
                <h1>Add New Contact</h1>
                <form>
                    <input 
                    type="text" 
                    placeholder="Name" 
                    className="user-input"
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    value={Name}
                    />

                    <input 
                    type="text" 
                    placeholder="Mobile" 
                    className="user-input"
                    onChange={(e)=>{
                        setMobile(e.target.value)
                    }}
                    value={Mobile}
                    />

                    <input 
                    type="email" 
                    placeholder="Email" 
                    className="user-input"
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    value={Email}
                    />

                    <button type="button" 
                    className="btn-add-contact" onClick={addContact}>
                        Add New Contact
                        </button>
                </form>
               </div>
            </div>
      </div>
    )
}

export default Home