import { useAppStore } from "../stores/useAppStore"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import Modal from "../components/Modal"

export const Layout = () => {

    const loadFromStorage = useAppStore(state => state.loadFromStorage)

    useEffect(() => {
        loadFromStorage()
    }, [])

    return (
        <>
            <Header />
            <main className="container mx-auto p-16">
                <Outlet />
            </main>

            <Modal />
        </>

    )
}
