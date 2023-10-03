import QueryTable from "./QueryTable";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AdminPage= async() => {
    const session = await getServerSession(authOptions)
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