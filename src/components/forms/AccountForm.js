import { useState } from "react";


function AccountForm(props) {

    const initialData = {
        name: props.account[0].name,
        lastname: props.account[0].lastname,
        address: props.account[0].address,
        accountType: props.account[0].accountType,
        hobbies: props.account[0].hobbies,
        outline: props.account[0].outline
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalNoUpdatesOpen, setIsModalNoUpdatesOpen] = useState(false);
    const [formData, setFormData] = useState(initialData);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        //API call to update information here
        e.preventDefault();
        initialData === formData ? setIsModalNoUpdatesOpen(true) : setIsModalOpen(true)
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsModalNoUpdatesOpen(false);
    };


    return (
        <div className="account-shade">
            <div className="centered-form">
                <form className="form" onSubmit={handleSave}>
                    <div className="left-field">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                defaultValue={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                defaultValue={formData.lastname}
                                onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                defaultValue={formData.address}
                                onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Account Type</label>
                            <input
                                type="text"
                                id="accountType"
                                name="accountType"
                                readOnly
                                value={formData.accountType}
                            />
                        </div>
                    </div>
                    <div className="right-field">
                        <div className="form-group-textarea">
                            <label>Hobbies</label>
                            <textarea
                                className="hobbies-input"
                                type="text"
                                id="hobbies"
                                name="hobbies"
                                defaultValue={formData.hobbies}
                                onChange={handleChange} />
                        </div>
                        <div className="form-group-textarea">
                            <label>Outline</label>
                            <textarea
                                className="outline-input"
                                type="text"
                                id="outline"
                                name="outline"
                                defaultValue={formData.outline}
                                onChange={handleChange} />
                        </div>
                    </div>
                </form>
                <div className="form-buttons">
                    <button type='submit' onClick={handleSave} className='save-button'>Save</button>

                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Are you sure you want to save the information?</h3>
                        <button className='no-button' onClick={handleCloseModal}>No</button>
                        <button className='yes-button' onClick={handleCloseModal}>Yes</button>
                    </div>
                </div>
            )}

            {isModalNoUpdatesOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>There are no updates to be saved</h3>
                        <button className='no-button' onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default AccountForm;