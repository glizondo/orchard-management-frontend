import { useState } from "react";
import TreeEditForm from "./forms/TreeEditForm";
import TreeAddForm from "./forms/TreeAddForm";


function TreeCard(props) {

    const [isShowCardOpen, setShowCardOpen] = useState(false);


    const handleShowCard = () => {
        setShowCardOpen(isShowCardOpen => !isShowCardOpen);
    }

    return (
        <div>
            <div>
                <div onClick={handleShowCard} className="card">
                    <img src={props.img} className="icon"></img>
                    <span className="text">{props.type}</span>
                </div>
                {isShowCardOpen && props.type === "" && <TreeAddForm onAction={handleShowCard} props={props} />}
                {isShowCardOpen && props.type !== "" && <TreeEditForm onAction={handleShowCard} props={props} />}            </div>
            <div>

            </div>
        </div>

    )
}

export default TreeCard;