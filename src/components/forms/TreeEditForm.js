import { useState } from "react";
import Delete from '../images/delete.png';

function TreeEditForm({ props, onAction }) {

    const initialData = {
        id: props.id,
        type: props.type,
        size: props.size,
        bloomTime: props.bloomTime,
        harvestTime: props.harvestTime,
        plantation: props.plantation,
        img: props.img,
        pollinators: props.pollinators,
        notes: props.notes
    };

    const [treeData, setTreeData] = useState(initialData);
    const handleChange = (e) => {
        setTreeData({ ...treeData, [e.target.name]: e.target.value });
    };
    const [isModalSaveOpen, setIsModalSaveOpen] = useState(false);
    const [isModalNoUpdatesOpen, setIsModalNoUpdatesOpen] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        console.log("saved")
        initialData === treeData ? setIsModalNoUpdatesOpen(true) : setIsModalSaveOpen(true)
    };

    const handleCloseModal = () => {
        setIsModalSaveOpen(false);
        setIsModalNoUpdatesOpen(false);
        setIsModalDeleteOpen(false);
    };

    const handleDelete = (id) => {
        setIsModalDeleteOpen(true);
        console.log(id + " Deleted");
    };

    return (
        <div className="details-overlay">
            <div className="details-popup">
                <h2>{treeData.type}</h2>

                <div className="centered-form">
                    <form className="form" onSubmit={handleSave}>
                        <div className="left-field">
                            <div className="form-group">
                                <label>Size</label>
                                <select className='select-size-dropdown' value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                                    <option value="">{treeData.size}</option>
                                    <option value="row1">Semi-Dwarf</option>
                                    <option value="row2">Standard</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Bloom Time</label>
                                <input
                                    type="text"
                                    id="bloomTime"
                                    name="bloomTime"
                                    defaultValue={treeData.bloomTime}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Harvest Time</label>
                                <input
                                    type="text"
                                    id="harvestTime"
                                    name="harvestTime"
                                    defaultValue={treeData.harvestTime}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Plantation</label>
                                <input
                                    type="text"
                                    id="plantation"
                                    name="plantation"
                                    value={treeData.plantation}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="right-field">
                            <div className="form-group-textarea">
                                <label>Pollinators</label>
                                <textarea
                                    className="hobbies-input"
                                    type="text"
                                    id="pollinators"
                                    name="pollinators"
                                    defaultValue={treeData.pollinators}
                                    onChange={handleChange}
                                />
                                <img className="image-icon-delete" src={Delete} onClick={() => handleDelete(treeData.id)} />
                            </div>
                            <div className="form-group-textarea">
                                <label>Notes</label>
                                <textarea
                                    className="outline-input"
                                    type="text"
                                    id="notes"
                                    name="notes"
                                    defaultValue={treeData.notes}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="button-container">
                    <button className='no-button' onClick={onAction}>Cancel</button>
                    <button className='yes-button' onClick={handleSave} >Save</button>
                </div>
            </div>

            {isModalSaveOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Are you sure you want to save the updates about the {props.type} tree?</h3>
                        <button className='no-button' onClick={handleCloseModal}>No</button>
                        <button className='yes-button' onClick={onAction}>Yes</button>
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

            {isModalDeleteOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Are you sure you want to delete the {props.type} tree?</h3>
                        <button className='no-button' onClick={handleCloseModal}>No</button>
                        <button className='yes-button' onClick={onAction}>Yes</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default TreeEditForm;