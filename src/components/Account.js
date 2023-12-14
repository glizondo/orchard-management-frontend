import DataAccount from "./data/DataAccount";
import AccountForm from "./forms/AccountForm";

function Account() {

    const accountData = DataAccount.map((data) => ({
        ...data,
      }));

    return (
        <AccountForm account={accountData} />
    )
}

export default Account;