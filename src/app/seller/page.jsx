'use client';
import {useSession,signOut} from "next-auth/react"
import {useRouter} from "next/navigation"

const page = () => {
    const session = useSession();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/becomeSeller', {
            method: 'POST',
            body: JSON.stringify({
                usuario: session.data.user[0].Correo
            })
        })

        const data = await response.json();
        if(data){
            signOut();
            router.push('/signIn');
        }
    }

    return (<div className="w-1/4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex justify-center">
                <input type="submit" value={'Volverse vendedor'} className="w-16" />
            </div>
        </form>
    </div>)
}

export default page;