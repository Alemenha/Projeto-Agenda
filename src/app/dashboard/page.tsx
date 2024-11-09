import LogoutButton from "@/components/Logoutbutton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await getServerSession();

    if (!session) {
        redirect("/login");
    }

    return (
        <div 
            className="min-h-screen flex justify-center items-center" 
            style={{
                backgroundImage: 'linear-gradient(to bottom, indigo 20%, black 80%)', 
            }}
        >
            <div className="bg-white p-12 rounded-lg w-96 max-w-full flex flex-col items-center gap-4"> {}
                <div className="text-center text-black text-2xl mb-4"> {}
                    Olá, {session?.user?.name}. Obrigado pelo login.
                </div>
                <div className="btn btn-primary border border-black bg-indigo-700 text-black text-base px-12">
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
}
