'use client'
import { useState, useEffect } from 'react';
import './page.css';
import { useRouter } from 'next/navigation';
export default function profilesetting() {
    const router = useRouter();
       const[user, setuser] = useState({});
       const[loading, setloading] = useState(true);
      const[name, setname] = useState('');
      const[email, setemail] = useState('');
      const[phone, setphone] = useState('');
      const[address, setaddress] = useState('');
        useEffect(() => {
            const fetchUserData = async () => {
                try {
                    const userId = JSON.parse(localStorage.getItem('user'));
                    const res = await fetch(`/api/users/mee?userId=${userId._id}`); 
                    const data = await res.json();  
                    if(res.ok){
                        setuser(data);
                        setname(data.name || '');
                        setemail(data.email || '');
                        setphone(data.phone || '');
                        setaddress(data.address || '');
                    }
                }
                catch (error) {
                    console.error("Error fetching user data:", error);
                }
                finally {
                    setloading(false);
                }
            }
            fetchUserData();
        }, []);
        if (loading) {
            return <div className="text-center">Loading profile...</div>;
        }
        const handleSave = async (e) => {
            e.preventDefault();
            if(!phone || !address){
                alert("please fill the both phone and address");
                return;
            }
            try {
                const res = await fetch('/api/users/profile', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: user._id,
                        name,
                        email,
                        phone,
                        address,
                    })
                });
                const data = await res.json();
                if (res.ok) {
                    localStorage.setItem('user', JSON.stringify(data));
                    localStorage.setItem('userName',data.name);
                    localStorage.setItem('userphone',data.phone);
                    localStorage.setItem('userAddress',data.address);
                    router.push('/');
                } else {
                    alert("Failed to update profile.");
                }
            } catch (error) {
                console.error("Error updating profile:", error);
            }
        };
    return (
        <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
            <h1>Setting/profile</h1>
            <input type="text" placeholder='full-Name' className='form-control w-50' value={name} onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder='Email' className='form-control w-50' value={email} onChange={(e) => setemail(e.target.value)} />
            <input type="text" placeholder='Phone' className='form-control w-50' value={phone }  onChange={(e) => setphone(e.target.value)} />
            <input type="text" placeholder='Address' className='form-control w-50' value={address} onChange={(e) => setaddress(e.target.value)} />
            <button className='btn btn-success w-25' onClick={handleSave}>Save</button>
        </div>
    );
}