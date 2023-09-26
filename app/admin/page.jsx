import QueryTable from "./QueryTable";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminPage= async() => {
    const session = await getServerSession()
  if(!session || !session.user){
    redirect('/auth/signIn')
  }
    return (
        <div>
                <QueryTable/>
        </div>
    );
}

export default AdminPage