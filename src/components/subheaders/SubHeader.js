import AccountSubHeader from "./AccountSubHeader";
import DashboardSubHeader from "./DashboardSubHeader";
import TreesSubHeader from "./TreesSubHeader";


function SubHeader({ bodyName }) {
    return (
        <div>
            {bodyName === "Dashboard" && <DashboardSubHeader />}
            {bodyName === "Account" && <AccountSubHeader />}
            {bodyName === "Trees" && <TreesSubHeader />}
        </div>
    )
}

export default SubHeader;