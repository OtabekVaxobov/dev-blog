"use client"
import { useAuth } from "@/providers/AuthContext"
import { Button } from "@nextui-org/react"
import { getAuth } from "firebase/auth"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Cabinet() {
    const [click, setClick] = useState(false)
    const user = useAuth()
    const user1 = getAuth()

    console.log(user1.currentUser)
    const currentUser = user.currentUser
    let router = useRouter();
    const logout = () => {
        user.logout
        setClick(true)
    }

    if (currentUser) {
        router.push('/login');
    }


    return (
        <>
            <div className="flex justify-center items-center flex-col max-w-full">
                Cabinet
                <Button onClick={logout}>Logout</Button>
            </div>

        </>
    )
}