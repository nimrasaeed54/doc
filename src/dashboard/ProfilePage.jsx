
// import React, { useState, useEffect } from 'react';
// import './ProfilePage.css';

// const ProfilePage = () => {
//     const [userData, setUserData] = useState({
//         firstName: '',
//         lastName: '',
//         dob: '',
//         email: '',
//         phone: '',
//         address: '',
//         city: '',
//         state: '',
//         zipCode: '',
//         profilePicture: '',
//     });
//     const [activeTab, setActiveTab] = useState('settings'); // Track the active tab
//     const [imagePreview, setImagePreview] = useState(''); // Preview the profile picture

//     useEffect(() => {
//         const storedData = JSON.parse(localStorage.getItem('userData'));
//         if (storedData) {
//             setUserData(storedData);
//             setImagePreview(storedData.profilePicture);
//         }
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUserData({ ...userData, [name]: value });
//     };

//     const handleSave = () => {
//         localStorage.setItem('userData', JSON.stringify(userData));
//         alert('Profile updated successfully!');
//     };

//     const handleTabChange = (tab) => {
//         setActiveTab(tab); // Switch active tab
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setImagePreview(reader.result);
//                 setUserData({ ...userData, profilePicture: reader.result });
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleRemovePicture = () => {
//         setImagePreview('');
//         setUserData({ ...userData, profilePicture: '' });
//     };

//     return (
//         <div className="profile-container">
//             <div className="profile-header">
//                 <h1 className="profile-title">Profile Settings</h1>
//                 <div className="profile-tabs">
//                     <button
//                         className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
//                         onClick={() => handleTabChange('settings')}
//                     >
//                         Settings
//                     </button>
//                     <button
//                         className={`tab-button ${activeTab === 'password' ? 'active' : ''}`}
//                         onClick={() => handleTabChange('password')}
//                     >
//                         Password
//                     </button>
//                 </div>
//             </div>

//             {activeTab === 'settings' && (
//                 <form className="profile-form">
//                     <div className="form-header">
//                         <div className="profile-picture-container">
//                             <img
//                                 src={imagePreview || 'https://via.placeholder.com/100'}
//                                 alt="Profile"
//                                 className="form-profile-picture"
//                             />
//                             <div className="profile-picture-buttons">
//                                 <button
//                                     type="button"
//                                     className="change-picture-button"
//                                     onClick={() => document.getElementById('fileInput').click()}
//                                 >
//                                     Change Picture
//                                 </button>
//                                 {imagePreview && (
//                                     <button
//                                         type="button"
//                                         className="remove-picture-button"
//                                         onClick={handleRemovePicture}
//                                     >
//                                         Remove Picture
//                                     </button>
//                                 )}
//                             </div>
//                             <input
//                                 type="file"
//                                 id="fileInput"
//                                 style={{ display: 'none' }}
//                                 accept="image/*"
//                                 onChange={handleFileChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="form-content">
//                         <div className="form-row">
//                             <div>
//                                 <label>First Name</label>
//                                 <input
//                                     type="text"
//                                     name="firstName"
//                                     value={userData.firstName}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Last Name</label>
//                                 <input
//                                     type="text"
//                                     name="lastName"
//                                     value={userData.lastName}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div>
//                                 <label>Date of Birth</label>
//                                 <input
//                                     type="date"
//                                     name="dob"
//                                     value={userData.dob}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Email</label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={userData.email}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div>
//                                 <label>Phone</label>
//                                 <input
//                                     type="text"
//                                     name="phone"
//                                     value={userData.phone}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Address</label>
//                                 <input
//                                     type="text"
//                                     name="address"
//                                     value={userData.address}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div>
//                                 <label>City</label>
//                                 <input
//                                     type="text"
//                                     name="city"
//                                     value={userData.city}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>State</label>
//                                 <input
//                                     type="text"
//                                     name="state"
//                                     value={userData.state}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div>
//                                 <label>Zip Code</label>
//                                 <input
//                                     type="text"
//                                     name="zipCode"
//                                     value={userData.zipCode}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         </div>
//                         <button type="button" className="save-button" onClick={handleSave}>
//                             Save Changes
//                         </button>
//                     </div>
//                 </form>
//             )}

//             {activeTab === 'password' && (
//                 <div className="password-section">
//                     <h3>Change Password</h3>
//                     <form>
//                         <div>
//                             <label>Current Password</label>
//                             <input type="password" placeholder="Enter current password" />
//                         </div>
//                         <div>
//                             <label>New Password</label>
//                             <input type="password" placeholder="Enter new password" />
//                         </div>
//                         <div>
//                             <label>Confirm New Password</label>
//                             <input type="password" placeholder="Confirm new password" />
//                         </div>
//                         <button type="submit">Save New Password</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProfilePage;
import React, { useState, useEffect } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        profilePicture: '',
    });
    const [activeTab, setActiveTab] = useState('settings');
    const [imagePreview, setImagePreview] = useState('');
    const [insuranceFiles, setInsuranceFiles] = useState({
        frontImage: '',
        backImage: '',
        docFile: ''
    });

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData) {
            setUserData(storedData);
            setImagePreview(storedData.profilePicture);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSave = () => {
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Profile updated successfully!');
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setUserData({ ...userData, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemovePicture = () => {
        setImagePreview('');
        setUserData({ ...userData, profilePicture: '' });
    };

    const handleInsuranceFileChange = (e) => {
        const { name, files } = e.target;
        setInsuranceFiles({ ...insuranceFiles, [name]: files[0] });
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1 className="profile-title">Profile Settings</h1>
                <div className="profile-tabs">
                    <button
                        className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => handleTabChange('settings')}
                    >
                        Settings
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'password' ? 'active' : ''}`}
                        onClick={() => handleTabChange('password')}
                    >
                        Password
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'document' ? 'active' : ''}`}
                        onClick={() => handleTabChange('document')}
                    >
                        Document
                    </button>
                </div>
            </div>

            {activeTab === 'settings' && (
                <form className="profile-form">
                    <div className="form-header">
                        <div className="profile-picture-container">
                            <img
                                src={imagePreview || 'https://via.placeholder.com/100'}
                                alt="Profile"
                                className="form-profile-picture"
                            />
                            <div className="profile-picture-buttons">
                                <button
                                    type="button"
                                    className="change-picture-button"
                                    onClick={() => document.getElementById('fileInput').click()}
                                >
                                    Change Picture
                                </button>
                                {imagePreview && (
                                    <button
                                        type="button"
                                        className="remove-picture-button"
                                        onClick={handleRemovePicture}
                                    >
                                        Remove Picture
                                    </button>
                                )}
                            </div>
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    <div className="form-content">
                        <div className="form-row">
                            <div>
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={userData.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={userData.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div>
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={userData.dob}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div>
                                <label>Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={userData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={userData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div>
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={userData.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label>State</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={userData.state}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div>
                                <label>Zip Code</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={userData.zipCode}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <button type="button" className="save-button" onClick={handleSave}>
                            Save Changes
                        </button>
                    </div>
                </form>
            )}

            {activeTab === 'password' && (
                <div className="password-section">
                    <h3>Change Password</h3>
                    <form>
                        <div>
                            <label>Current Password</label>
                            <input type="password" placeholder="Enter current password" />
                        </div>
                        <div>
                            <label>New Password</label>
                            <input type="password" placeholder="Enter new password" />
                        </div>
                        <div>
                            <label>Confirm New Password</label>
                            <input type="password" placeholder="Confirm new password" />
                        </div>
                        <button type="submit">Save New Password</button>
                    </form>
                </div>
            )}

            {activeTab === 'document' && (
                <div className="document-section">
                    <h3>Health Insurance Information</h3>
                    <div className="file-upload">
                        <label>Choose image front</label>
                        <input
                            type="file"
                            name="frontImage"
                            accept=".png, .jpeg, .jpg"
                            onChange={handleInsuranceFileChange}
                        />
                        <p>{insuranceFiles.frontImage ? insuranceFiles.frontImage.name : 'No file chosen'}</p>
                    </div>
                    <div className="file-upload">
                        <label>Choose image back</label>
                        <input
                            type="file"
                            name="backImage"
                            accept=".png, .jpeg, .jpg"
                            onChange={handleInsuranceFileChange}
                        />
                        <p>{insuranceFiles.backImage ? insuranceFiles.backImage.name : 'No file chosen'}</p>
                    </div>
                    <div className="file-upload">
                        <label>Choose doc file</label>
                        <input
                            type="file"
                            name="docFile"
                            accept=".doc, .docx"
                            onChange={handleInsuranceFileChange}
                        />
                        <p>{insuranceFiles.docFile ? insuranceFiles.docFile.name : 'No file chosen'}</p>
                    </div>
                    <p>You can download uploaded insurance documents here:</p>
                    <ul>
                        {insuranceFiles.frontImage && <li>Insurance Front: {insuranceFiles.frontImage.name}</li>}
                        {insuranceFiles.backImage && <li>Insurance Back: {insuranceFiles.backImage.name}</li>}
                        {insuranceFiles.docFile && <li>Insurance Document: {insuranceFiles.docFile.name}</li>}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
