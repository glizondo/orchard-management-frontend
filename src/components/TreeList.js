
import DataTrees from "./data/DataTrees";
import TreeCard from "./TreeCard";

function TreeList() {

    const trees = DataTrees.map((tree) => {
        return (
            <TreeCard
                key={tree.id}
                {...tree}
            />
        );
    });


    return (
        <div className="trees-shade">
            <div className="card-grid">
                {trees}
            </div>
        </div>
    )
}

export default TreeList;