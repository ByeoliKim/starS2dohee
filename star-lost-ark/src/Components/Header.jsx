import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="bg-[#656565] p-5">
                <h1 className="text-3xl font-thin tracking-tighterfont-Cafe24Shiningstar">
                    <Link to="/">
                    ⭐별로와 ⭐
                    </Link>
                </h1>
            </header>
        </>
    )
}